import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { getEmployee } from '../lib/employee';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default async function Produk() {

    const employeeData = await getEmployee();

    return (
        <div className={poppins.className} style={{ backgroundColor: '#FAF7F2', display: 'flex', flexDirection: 'column', height: '100vh', color: '#2B211A', padding: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '80rem', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', backgroundColor: '#7A4A2B', color: '#FAF7F2', width: 'fit-content', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Employee List</h1>
                <Link href={"/employee/create"}><span style={{ textDecoration: 'none', fontSize: '1.5rem', backgroundColor: '#7A4A2B', color: '#FAF7F2', width: 'fit-content', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Create</span></Link>
            </div>

            <table style={{ maxWidth: '80rem', backgroundColor: '#FFFFFF', borderCollapse: 'collapse', borderRadius: '1rem', overflow: 'hidden' }}>
                <thead>
                    <tr style={{ border: '1px solid #E7DFD3' }}>
                        <th style={{ textAlign: 'left', paddingBlock: '0.5rem', paddingInline: '1rem' }}>Name</th>
                        <th style={{ textAlign: 'left', paddingBlock: '0.5rem', paddingInline: '1rem' }}>Email</th>
                        <th style={{ textAlign: 'left', paddingBlock: '0.5rem', paddingInline: '1rem' }}>Jabatan</th>
                        <th style={{ textAlign: 'left', paddingBlock: '0.5rem', paddingInline: '1rem' }}>Departemen</th>
                        <th style={{ textAlign: 'left', paddingBlock: '0.5rem', paddingInline: '1rem' }}>Status</th>
                        <th style={{ textAlign: 'center', paddingBlock: '0.5rem', paddingInline: '1rem' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((item) => (
                        <tr key={item.id} style={{ border: '1px solid #E7DFD3' }}>
                            <td style={{ padding: '0.5rem 1rem' }}>{item.nama}</td>
                            <td style={{ padding: '0.5rem 1rem' }}>{item.email}</td>
                            <td style={{ padding: '0.5rem 1rem' }}>{item.jabatan}</td>
                            <td style={{ padding: '0.5rem 1rem' }}>{item.departemen}</td>
                            <td style={{ padding: '0.5rem 1rem' }}>{item.status}</td>
                            <td style={{ padding: '0.5rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.7rem' }}>
                                <DeleteConfirmationModal id={item.id} name={item.nama} />
                                <Link aria-label={`Edit ${item.nama}`} style={{ cursor: 'pointer', backgroundColor: '#7A4A2B', color: '#FAF7F2', padding: '0.4rem 0.4rem', maxWidth: '2rem', maxHeight: '2rem', border: 'none', borderRadius: '0.3rem' }} href={`/employee/${item.id}/edit`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" />
                                        <path d="M16 5l3 3" />
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}