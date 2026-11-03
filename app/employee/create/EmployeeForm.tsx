'use client';

import { useActionState } from "react";
import { createEmployeeAction, FormState } from "../action";

const initialState: FormState = { errors: {} };

export default function EmployeeForm() {

    const [state, formAction, isPending] = useActionState(
        createEmployeeAction,
        initialState,
    );

    return (
        <form action={formAction} style={{ maxWidth: '30rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="nama" style={{ marginBottom: '0.2rem' }}>Employee Name</label>
                <input type="text" id='nama' name="nama" defaultValue={state.values?.nama} style={{ padding: '0.5rem 0.5rem', borderRadius: '0.5rem', border: '0.1rem solid #8C7B6B' }} />
                {state.errors.nama && <p style={{ color: '#bf0000' }}>{state.errors.nama}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ marginBottom: '0.2rem' }}>Email</label>
                <input type="text" id='email' name="email" defaultValue={state.values?.email} style={{ padding: '0.5rem 0.5rem', borderRadius: '0.5rem', border: '0.1rem solid #8C7B6B' }} />
                {state.errors.email && <p style={{ color: '#bf0000' }}>{state.errors.email}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="jabatan" style={{ marginBottom: '0.2rem' }}>Jabatan</label>
                <input type="text" id='jabatan' name="jabatan" defaultValue={state.values?.jabatan} style={{ padding: '0.5rem 0.5rem', borderRadius: '0.5rem', border: '0.1rem solid #8C7B6B' }} />
                {state.errors.jabatan && <p style={{ color: '#bf0000' }}>{state.errors.jabatan}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="departemen" style={{ marginBottom: '0.2rem' }}>Departemen</label>
                <input type="text" id='departemen' name="departemen" defaultValue={state.values?.departemen} style={{ padding: '0.5rem 0.5rem', borderRadius: '0.5rem', border: '0.1rem solid #8C7B6B' }} />
                {state.errors.departemen && <p style={{ color: '#bf0000' }}>{state.errors.departemen}</p>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <label htmlFor="status" style={{ marginBottom: '0.2rem' }}>Status</label>
                <select id='status' name="status" defaultValue={state.values?.status} style={{ padding: '0.5rem 0.5rem', borderRadius: '0.5rem', border: '0.1rem solid #8C7B6B' }}>
                    <option value="Aktif" >Aktif</option>
                    <option value="Non-Aktif">Non-Aktif</option>
                    <option value="Sakit">Sakit</option>
                    <option value="Cuti">Cuti</option>
                </select>
                {state.errors.status && <p style={{ color: '#bf0000' }}>{state.errors.status}</p>}
            </div>
            <button disabled={isPending} style={{ backgroundColor: '#7A4A2B', color: '#FAF7F2', padding: '0.5rem 2rem', border: '1px solid #E7DFD3', fontSize: '1.2rem', borderRadius: '0.5rem', display: 'flex', gap: '0.2rem', alignItems: 'center', cursor: 'pointer' }}>{isPending ? "Saving..." : "Create"}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" /></svg>
            </button>
        </form>
    )
}
