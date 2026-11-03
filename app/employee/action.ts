'use server';

import { createEmployee, editEmployee, deleteEmployee } from "../lib/employee";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { EmployeeErrors, employeeSchema } from "../lib/employee-validation";
import { EmployeeInput } from "./types";

export type FormState = {
    errors: EmployeeErrors;
    values?: EmployeeInput;
}

export async function createEmployeeAction(PrevState: FormState, formData: FormData): Promise<FormState> {
    const nama = String(formData.get("nama"));
    const email = String(formData.get("email"));
    const jabatan = String(formData.get("jabatan"));
    const departemen = String(formData.get("departemen"));
    const status = String(formData.get("status"));

    const newEmployee = { nama, email, jabatan, departemen, status };

    const result = employeeSchema.safeParse(newEmployee);

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors, values: newEmployee };
    }

    await createEmployee(result.data);

    revalidatePath("/employee");
    redirect("/employee")
}

export async function editEmployeeAction(PrevState: FormState, formData: FormData): Promise<FormState> {
    const id = Number(formData.get("id"))
    const nama = String(formData.get("nama"));
    const email = String(formData.get("email"));
    const jabatan = String(formData.get("jabatan"));
    const departemen = String(formData.get("departemen"));
    const status = String(formData.get("status"));

    const editedEmployee = { nama, email, jabatan, departemen, status };

    const result = employeeSchema.safeParse(editedEmployee);

    if (!result.success) {
        return { errors: z.flattenError(result.error).fieldErrors, values: editedEmployee };
    }


    await editEmployee(id, result.data);

    revalidatePath("/employee")
    redirect("/employee")
}


export async function deleteEmployeeAction(formData: FormData) {
    const id = Number(formData.get("id"))

    await deleteEmployee(id);

    revalidatePath("/product")
}
