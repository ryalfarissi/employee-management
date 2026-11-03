import { z } from "zod";


export type EmployeeErrors = {
    nama?: string[];
    email?: string[];
    jabatan?: string[];
    departemen?: string[];
    status?: string[];
}
export const STATUS = ["Aktif", "Non-Aktif", "Cuti", "Sakit"] as const;

export const employeeSchema = z.object({
    nama: z.string().trim().min(3, { error: "Min. 3 characters for employee name" }).max(100, { error: "Maximum characters of 100 exceeded" }),
    email: z.email({ error: "Input must be an email" }),
    jabatan: z.string().trim().min(3, { error: "Min. 3 characters for employee name" }).max(100, { error: "Maximum characters of 100 exceeded" }),
    departemen: z.string().trim().min(3, { error: "Min. 3 characters for employee name" }).max(100, { error: "Maximum characters of 100 exceeded" }),
    status: z.enum(STATUS, { error: "Choosen option is not on the list" })
})