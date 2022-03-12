

export default function App() {
  return (
    <div className="h-[440px] bg-[#F6F6F6] items-center">
        <h1 className="mx-auto text-4xl py-[64px] px-[171px] font-semibold">
            Uygulamalarda seveceğiniz daha çok şey var
        </h1>

        <div className="flex items-center my-auto px-[145px]">
        
            <div className="h-[200px] mx-auto w-[558px] bg-white flex items-center cursor-pointer border-solid border-2 border-gray-200">
                <img className="my-auto mx-[25px] h-[150px] w-[150px]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png" />
                <p className="text-3xl font-semibold"> 
                    Sürücü uygulamasını indirin
                </p>
            
            </div>
            
            <div className="h-[200px] mx-auto w-[558px] cursor-pointer bg-white flex items-center border-solid border-2 border-gray-200">
                <img className="my-auto mx-[25px] h-[150px] w-[150px]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png" />
                <p className="text-3xl font-semibold pr-[20px]"> 
                    Uber uygulamasını indirin
                </p>
            
            </div>

        </div>
    </div>
  )
}
