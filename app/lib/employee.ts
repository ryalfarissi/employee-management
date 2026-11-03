import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Employee, EmployeeInput } from '@/app/employee/types';
import { cacheTag, updateTag } from 'next/cache';

const DATA_FILE = path.join(process.cwd(), 'app', 'data', 'employee-data.json');
const TAG = 'employees-data';

async function readFromDisk(): Promise<Employee[]> {
    try {
        return JSON.parse(await readFile(DATA_FILE, 'utf-8'));
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
        throw error;
    }
}

async function writeToDisk(employees: Employee[]): Promise<void> {
    await mkdir(path.dirname(DATA_FILE), { recursive: true });
    const tmp = `${DATA_FILE}.tmp`;
    await writeFile(tmp, JSON.stringify(employees, null, 2));
    await rename(tmp, DATA_FILE);
}

let queue: Promise<unknown> = Promise.resolve();
function mutate(change: (employees: Employee[]) => Employee[]): Promise<void> {
    const run = queue.then(async () => {
        await writeToDisk(change(await readFromDisk()));
        updateTag(TAG); 
    });
    queue = run.catch(() => { });
    return run;
}

export async function getEmployee(): Promise<Employee[]> {
    'use cache';
    cacheTag(TAG);
    return readFromDisk();
}

export async function getEmployeeById(id: number): Promise<Employee | undefined> {
    return (await getEmployee()).find((employee) => employee.id === id);
}

export async function createEmployee(data: EmployeeInput): Promise<Employee> {
    let created!: Employee;
    await mutate((list) => {
        created = { id: Math.max(0, ...list.map((employee) => employee.id)) + 1, ...data };
        return [...list, created];
    });
    return created;
}

export async function editEmployee(id: number, data: EmployeeInput): Promise<Employee> {
    let edited!: Employee;
    await mutate((list) => {
        const selected = list.find((employee) => employee.id === id);
        if (!selected) throw new Error('Employee not found');
        edited = { ...selected, ...data };
        return list.map((employee) => (employee.id === id ? edited : employee));
    });
    return edited;
}

export async function deleteEmployee(id: number): Promise<void> {
    await mutate((list) => list.filter((employee) => employee.id !== id));
}
