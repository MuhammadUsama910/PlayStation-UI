import Button from "./Button"
import CardCarousel from "./CardCarousel"
// import CardCarousel from "./CardCarousel"
// import { imageArr } from "../constants/constants"


export const Hero = () => {

  // const [imageState, setImageState] = useState("");

  // const selectActiveImage = (index) => {
  //   let activeImageIndex = index;
  //   const image = imageArr.find((item) => item === imageArr[activeImageIndex] );
  //   // console.log(image);
  //   image ? setImageState(image) : null; 
  // }

  return (
    <>
    <section className="container w-full">
      
      <div 
        className={`w-full bg-[url('/src/assets/NBA_1.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-end 
        lg:justify-start select-none
        max-sm:pt-28 sm:pt-36 sm:pl-0 md:pt-32 lg:pl-20 lg:pt-0 xl:pl-40 xl:pt-16 2xl:pl-20`}
      >
        <div className="flex flex-col gap-5 lg:mt-12 xl:mt-0">
          <h1 className="text-5xl max-lg:text-center sm:text-7xl md:text-8xl lg:text-5xl xl:text-8xl font-bold text-white select-none"> 
            <span className="text-red-500">2K</span>25
          </h1>
          
          <p className="sm:w-11/12 md:w-full lg:w-2/5 xl:w-2/5 sm:pl-12 md:pl-0 lg:pl-0 text-lg max-lg:text-center sm:text-2xl md:text-3xl xl:text-5xl text-white leading-snug select-none">   
            Play anywhere, win 
            <span> everywhere </span> 
          </p>

          <p className="w-11/12 sm:w-3/4 lg:w-2/5 xl:w-1/2 2xl:w-2/5 text-base sm:m-auto lg:m-0 sm:text-lg xl:text-xl text-white max-lg:text-center pl-8 sm:pl-0 leading-normal">
            Stack wins, raise banners, and make history in NBA 2K25. Coming soon to PS4 & PS5
          </p>
          
          <div className="m-auto lg:m-0 mb-10 lg:mb-20">
            <Button
              text={'Find out more'}
              classes={"w-32 xl:w-36 flex mt-4 2xl:mt-2 bg-white text-black px-3 xl:px-5 py-1.5 xl:py-2"}
            />
          </div>
        </div>
        
      </div>


      <div className="w-full rounded-xl px-8 sm:px-12 md:px-16 lg:px-20">
        <CardCarousel/> {/* selectActiveImage={selectActiveImage} */}
      </div>
    
    </section>
    </>
  )
}