import CardCarousel from "./CardCarousel"
import Button from './Button'
import { useState } from "react"


const ConsoleAccesorioes = () => {

  const [activeImage, setActiveImage] = useState('/src/assets/Accessories/PS5.jpg');

  const handleSlideChange = (image) => {
    setActiveImage(image);
  }

  return (
    <>
    <section className="container py-8 max-sm:py-0">

      <h1 className="lg:hidden px-16 md:text-4xl m-auto text-black text-2xl text-center font-normal leading-normal">
        Introducing the PS5 console and accesories
      </h1>

      <div className="px-8 md:px-10 xl:px-12 flex flex-col">

        <div className="mt-4 lg:mt-2 lg:order-2">
          <CardCarousel NumberProp={2} onSlideChange={handleSlideChange}/>
        </div>

        <div className="flex flex-col lg:flex-row-reverse lg:order-1">
          <img
            className="lg:w-3/5 lg:mb-6"
            src={activeImage}
            alt="PS5 image"
          />

          <div className="flex flex-col lg:w-2/5">

          <h1 className="max-lg:hidden lg:w-3/5 xl:text-5xl mt-2 text-4xl text-black text-start font-light leading-tight">
            Introducing the PS5 console and accesories
          </h1>
            
            <h1 className="mt-6 text-xl xl:text-2xl text-center lg:text-start font-normal text-[#0068bd] "> PlayStation 5 Console </h1>
            
            <p className="lg:w-4/5 xl:w-11/12 mt-2 text-xs md:text-sm text-center lg:text-start text-[#838383]"> 
              Experience an all-new generation of incredible PlayStation games. 
            </p>
            
            <div className="flex justify-center lg:justify-start gap-2.5 mt-6">
              <Button text={'Find out more'} classes={'px-3 xl:px-5 py-1.5 xl:py-2 text-white bg-[#0070cc]'}/>
              <Button text={'Buy now'} classes={'px-3 xl:px-5 py-1.5 xl:py-2 text-white bg-[#d53b00]'}/>
            </div>
            
            <p className="mt-2 xl:mt-4 text-black text-center lg:text-start">  Buy from  <span className="font-bold">$449,99</span>  </p>
          </div>

        </div>


      </div>

    </section>
    
    </>
  )
}

export default ConsoleAccesorioes