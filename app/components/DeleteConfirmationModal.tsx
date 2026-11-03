'use client'
import { useState } from "react"
import { deleteEmployeeAction } from "../employee/action";

interface Props {
    id: number;
    name: string;
}

export default function DeleteConfirmationModal(props: Props) {

    const { id, name } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)} style={{ cursor: 'pointer', backgroundColor: '#7A4A2B', color: '#FAF7F2', padding: '0.3rem 0.3rem', border: 'none', borderRadius: '0.3rem' }}><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg></button>
            {isOpen && (<div style={{ position: 'fixed', inset: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#41414180' }}>
                <div style={{ width: '30rem', backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '1rem' }}>
                    <h2>Are you sure you want to delete {name}</h2>
                    <form action={deleteEmployeeAction}>
                        <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
                            <button type="submit" value={id} name="id" style={{ border: 'none', borderRadius: '0.5rem', color: '#FAF7F2', backgroundColor: '#B3261E', padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', cursor: 'pointer', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>Delete</button>
                            <button type="button" onClick={() => setIsOpen(false)} style={{ border: 'none', borderRadius: '0.5rem', color: '#FAF7F2', backgroundColor: '#7A4A2B', padding: '0.5rem 1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>)}
        </div >
    )
} 