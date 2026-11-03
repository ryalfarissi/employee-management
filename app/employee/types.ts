export interface Employee {
    id: number;
    nama: string;
    email: string;
    jabatan: string;
    departemen: string;
    status: string;
}

export type EmployeeInput = Omit<Employee, "id">