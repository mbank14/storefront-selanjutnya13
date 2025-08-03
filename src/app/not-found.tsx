import Link from 'next/link'
// import { headers } from 'next/headers'

export default async function NotFound() {
  //   const headersList = await headers()
  //   const domain = headersList.get('host')
  //   const data = await getSiteData(domain)
  return (
    <div
      className={`w-full h-screen flex justify-center items-center bg-stone-200`}
    >
      <div
        className="
      min-w-[250px] lg:min-w-[450px] font-semibold 
      text-center bg-slate-100 
      border border-b-[2px] rounded-lg border-slate-300/75 border-solid p-4"
      >
        <h2 className="text-lg md:text-2xl text-slate-500/70">Oppps ...</h2>
        <p className='text-slate-500/50 sm:text-sm md:text-base'>Halaman tidak ditemukan</p>
        <Link href={`/`} className='sm:text-sm md:text-base mt-4 text-stone-800 inline-block'>Kembali</Link>
      </div>
    </div>
  );
}
