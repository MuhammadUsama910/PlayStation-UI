import Button from "./Button";

const ThisJuly = () => {
  return (
    <>
    <section className="container bg-[url('/src/assets/thisJuly.jpg')] h-screen bg-cover bg-center bg-no-repeat">

      <div className="flex flex-col justify-center lg:justify-center lg:items-start 
        md:px-20 xl:px-52 text-white h-full">

        <h1 className="px-8 text-4xl w-2/3 sm:mt-24 sm:w-2/6 md:w-2/4 lg:w-3/12 md:leading-tight md:text-5xl lg:text-5xl xl:text-5xl font-thin"> 
          THIS JULY ON PLAYSTATION  
        </h1>

        <p className="px-8 text-white text-sm mt-6 md:w-3/4 md:text-base lg:text-start lg:w-1/2 lg:text-lg xl:text-base
          xl:w-2/4"> 
          Check out this month's biggest releases along with dedicated features, guides and more.
        </p>

        <div className="px-8 flex justify-center md:justify-start mt-8">
          <Button
            text={'Find out more'} 
            classes={'px-3 xl:px-5 py-1.5 xl:py-2 text-black bg-white'}
          />
        </div>

      </div>
    </section>
          
  </>
  )
}

export default ThisJuly;
