
import { BiRightArrowAlt } from "react-icons/bi"


export default function Login() {
  return (
    <div className="h-[260px] bg-white items-center">
        
        <div className="flex items-center my-auto px-[145px]">
        
            <div className="h-[200px] mx-auto w-[558px] bg-white flex items-center cursor-pointer">
                <p className="text-4xl font-semibold pr-[90px]"> 
                 Araç sürmek için kaydolun
                </p>
                <BiRightArrowAlt className="h-12 w-12 hover:animate-bounce"/>
                
            
            </div>
            
            <div className="h-[200px] mx-auto w-[558px] cursor-pointer bg-white flex items-center">
                <p className="text-4xl font-semibold pr-[20px]"> 
                 Yolculuk yapmak için kaydolun
                </p>
                <BiRightArrowAlt className="h-12 w-12 hover:animate-bounce"/>
            
            </div>
            <div className="h-[1px] w-[549px] bg-black mt-auto left-[173px] mt-[180px]  absolute">

            </div>

            <div className="h-[1px] w-[549px] bg-black mt-auto left-[788px] mt-[180px]  absolute">

            </div>

        </div>
    </div>

  )
}
