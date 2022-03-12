import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black h-[64px] flex items-center justify-between text-white p-4 text-md font-medium tracking-tight">
        <div className="flex items-center ml-[109px]">
            <Link href="/"><a className="px-3 py-1 text-2xl mr-[7px] ">Uber</a></Link>
            <Link href="/"><a href="#" className="px-3 py-1 mr-[7px] hover:bg-[#333333]  duration-500 rounded-3xl">Şirket</a></Link>
            <Link href="/"><a href="#"  className="px-3 py-1 mr-[7px] hover:bg-[#333333]  duration-500 rounded-3xl">Güvenlik</a></Link>
            <Link href="/"><a href="#" className="px-3 py-1 mr-[7px] hover:bg-[#333333]  duration-500 rounded-3xl">Yardım</a></Link>
            <Link href="/"><a href="#" className="px-3 py-1 mr-[7px] hover:bg-[#333333]  duration-500 rounded-3xl">COVID-19 ile ilgili kaynaklar</a></Link>
        </div>
        
        <div className="flex items-center mr-[109px]">
            <Link href="/"><a href="#" className="px-3 py-1 hover:bg-[#333333]  duration-500 rounded-3xl">TR-TR</a></Link>
            <Link href="/"><a href="#" className="px-3 py-1 ml-[7px] hover:bg-[#333333]  duration-500 rounded-3xl">Ürünler</a></Link>
            <Link href="/"><a href="#" className="px-3 py-1 ml-[7px] hover:bg-[#333333]  duration-500 rounded-3xl">Oturum açın</a></Link>
            <button className="px-3 py-1 ml-[7px] bg-white text-black font-medium rounded-2xl hover:bg-gray-300   duration-500">Kaydolun</button>

        </div>
    </header>
  )
}
