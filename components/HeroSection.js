

export default function HeroSection() {
  return (
    <div className="bg-gray-600 h-[800px] relative">

        <img className="w-full object-cover h-[800px]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_944/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png" /> 
        
        <div className="container absolute top-[65px] left-[465px] -translate-x-1/2 bg-white h-[695px] w-[580px] z-20 border border-gray-100">
           <div className="bg-gray-50 h-[145px] flex items-center justify-evenly text-black border-b-2 font-semibold text-md">
             <div className="flex-col items-center text-l">
                <img className="ml-4" src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg" />
                <p className="py-2">Araç sür</p>
             </div>
              <div className="flex-col items-center text-l font-sm">
                <img className="ml-3" src="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg" />
                <p className="py-2">Yemek</p>
              </div>
              <div className="flex-col items-center text-l font-sm">
                <img className="ml-5" src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg" />
                <p className="py-2">Yolculuk</p>
              </div> 
           </div>

           <div>
           <div class="p-6 max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-8 my-5">
              <a href="#">
                  <h5 class="mb-2 text-5xl font-bold tracking-wide text-gray-900 dark:text-white">Direksiyon başına geçip para kazanmaya başlayın</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 my-8">En büyük aktif yolcu ağına sahip platformda araç sürün.</p>
              <a href="#" class="inline-flex items-center py-4 px-8 text-md font-medium text-center text-white bg-black hover:bg-gray-800 my-4 shadow-l ">
                  Araç sürmek için kaydolun
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <p className="mt-3  hover:underline cursor-pointer h-3">
              Araç sürme ve teslimat yapma hakkında daha fazla bilgi edinin
              </p>
              
            </div>
             

           </div>
        </div>
    </div>
  )
}
