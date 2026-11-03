import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fefefe' }} className="flex flex-col font-sans bg-amber-100 min-h-screen text-gray-800 p-12">
      <div style={{}} className="text-4xl font-semibold mb-5">
        Employee Management System
      </div>
      <Link href={"/employee"} className="px-4 bg-amber-200 w-[10rem] textcenter flex justify-center py-1 rounded-lg font-semibold">Employee Table</Link>
    </div>
  );
}
