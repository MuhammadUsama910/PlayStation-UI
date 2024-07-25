import Button from "./Button"

const FeelNewReal = () => {
  return (
    <>
    <section className="container bg-[url('/src/assets/FeelNewReal.jpg')] h-screen bg-cover bg-center bg-no-repeat">

      <div className="flex flex-col justify-end lg:justify-center lg:items-start lg:px-20 xl:px-52 text-white h-full pb-10">

        <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-center font-thin"> Feel a New Real </h1>

        <p className="text-center text-lg px-2 mt-6 sm:px-8 sm:text-base md:text-lg lg:px-0 lg:text-start lg:w-1/2 lg:text-base
          xl:w-2/4 xl:text-lg"> 
          Immerse yourself in epic worlds that go beyond reality, 
          with the groundbreaking PlayStation VR2 headset and 
          PlayStation VR2 Sense controller 
        </p>

        <div className="flex justify-center mt-8 gap-2">
          <Button 
            text={'Find out more'} 
            classes={'px-3 xl:px-5 py-1.5 xl:py-2 text-black bg-white'}
          />
          <Button 
            text={'Buy now'} 
            classes={'px-3 xl:px-5 py-1.5 xl:py-2 text-white bg-[#d53b00]'}
          />
        </div>

      </div>

    </section>
    </>
  )
}

export default FeelNewReal