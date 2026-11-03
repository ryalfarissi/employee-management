import { Poppins } from 'next/font/google';
import Link from "next/link";
import EmployeeForm from './EmployeeForm';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});


export default function CreateEmployeePage() {
    return (
        <div className={poppins.className} style={{ marginBottom: '2rem', border: '0.1rem solid #E7DFD3', width: '50%', padding: '0.5rem 2rem', borderRadius: '1rem' }}>
            <p style={{ fontSize: '1.5rem', backgroundColor: '#7A4A2B', color: '#FAF7F2', width: 'fit-content', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Create Product Form</p>
            <EmployeeForm />
            <Link href={"/employee"} style={{ display: 'flex', justifyContent: 'end' }}>
                <button style={{ backgroundColor: '#7A4A2B', color: '#FAF7F2', padding: '0.5rem 2rem', border: '1px solid #E7DFD3', fontSize: '1.2rem', borderRadius: '0.5rem', display: 'flex', gap: '0.2rem', alignItems: 'center', cursor: 'pointer' }}>Cancel
                </button>
            </Link >
        </div>
    )
}