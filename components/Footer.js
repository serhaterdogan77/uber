import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"



export default function Footer() {
  return (
    <footer className="bg-black h-[863px] text-white">
      <div className="px-[120px] pt-[80px]">
        <img src="https://donanimgunlugu.com/wp-content/upload/2018/09/uber-yeni-logo-1.jpg" className="h-14 w-[95px] ml-[-14px] object-cover" />
        <p className="my-[35px] hover:underline underline-offset-[50px] w-[300px] cursor-pointer">Yardım Merkezini Ziyaret Edin</p>
      </div>

      <div className="grid grid-cols-4 gap-8 py-12 px-[120px]">
        <div className="grid grid-cols-1 mt-1">
          <h1 className="font-medium text-xl mb-4">Şirket</h1>
          <p href="#" className="mb-3 hover:text-gray-300 cursor-pointer">Hakkımızda</p>
          <p href="#"className="mb-3 hover:text-gray-300 cursor-pointer">Sunduklarımız</p>
          <p href="#" className="mb-3 hover:text-gray-300 cursor-pointer">Güncel Haberler</p>
          <p href="#"className="mb-3 hover:text-gray-300 cursor-pointer">Yatırımcılar</p>
          <p href="#" className="mb-3 hover:text-gray-300 cursor-pointer">Blog</p>
          <p href="#" className="mb-3 hover:text-gray-300 cursor-pointer">Kariyer fırsatları</p>
          <p href="#" className="mb-3 hover:text-gray-300 cursor-pointer">AI</p>
          <p href="#" className="mb-3 hover:text-gray-300 cursor-pointer">Hediye kartları</p>

        </div>

        <div className="grid grid-cols-1 mt-1 mx-4">
          <h1 className="font-medium text-xl">Ürünler</h1>
          <p href="#" className="hover:text-gray-300 mt-[-44px] cursor-pointer">
          Yolculuk</p>
          <p href="#"className="hover:text-gray-300 mt-[-69px] cursor-pointer">Yemek
          </p>
          <p href="#" className="hover:text-gray-300 mt-[-96px] cursor-pointer">Güncel Haberler</p>
          <p href="#"className="hover:text-gray-300 mt-[-120px] cursor-pointer">Uber for Business</p>
        </div>

        <div className="grid grid-cols-1 mt-1 mx-4">
          <h1 className="font-medium text-xl">
          Küresel vatandaşlıkr</h1>
          <p href="#" className="hover:text-gray-300 mt-[-85px] cursor-pointer">
          Güvenlik</p>
          <p href="#"className="hover:text-gray-300 mt-[-149px] cursor-pointer">Çeşitlilik ve Kapsayıcılık
          </p>
        </div>

        <div className="grid grid-cols-1 mt-1 mx-4">
          <h1 className="font-medium text-xl">Yolculuk</h1>
          <p href="#" className="hover:text-gray-300 mt-[-130px] cursor-pointer">
          Havalimanları</p>   
        </div>

        <div className=" my-5 ml-[-25px] h-12 flex items-center">
          <div className="hover:bg-[#333333] h-[48px] w-[140px] flex items-center duration-300 mx-1 cursor-pointer">
            <AiFillFacebook className="mx-auto" />
          </div>
          <div className="hover:bg-[#333333] h-[48px] w-[140px] flex items-center duration-300 mx-1 cursor-pointer">
            <AiOutlineTwitter className="mx-auto" />
          </div>
          <div className="hover:bg-[#333333] h-[48px] w-[140px] flex items-center duration-300 mx-1 cursor-pointer">
            <AiOutlineYoutube className="mx-auto" />
          </div>
          <div className="hover:bg-[#333333] h-[48px] w-[140px] flex items-center duration-300 mx-1 cursor-pointer">
            <AiFillLinkedin  className="mx-auto" />
          </div>
          <div className="hover:bg-[#333333] h-[48px] w-[140px] flex items-center duration-300 mx-1 cursor-pointer">
            <AiFillInstagram  className="mx-auto" />
          </div>
          
          <div className="hover:bg-[#333333] h-[35px] w-[100px] flex items-center duration-300 mx-1 cursor-pointer absolute ml-[340px]">
            <p className="mx-auto">Türkçe</p>
          </div>

          <div className="hover:bg-[#333333] h-[35px] w-[100px] flex items-center duration-300 mx-1 cursor-pointer absolute ml-[450px]">
            <p className="mx-auto">İstanbul</p>
          </div>

          
        </div>


      </div>

    </footer>
  )
}
