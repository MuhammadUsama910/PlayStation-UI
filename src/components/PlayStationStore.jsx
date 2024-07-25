import Button from "./Button"
import 'animate.css';

const PlayStationStore = () => {
  return (
    <>
      <section className="container bg-white px-6 lg:px-12 py-12 xl:mb-8">
        <div className="flex flex-col md:flex-row-reverse">

          <div>
            <img
              className="md:mt-28 md:w-11/12 lg:mt-12 xl:mt-8 xl:w-4/5 md:shadow-md md:shadow-gray-600 rounded-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-300"
              src="/src/assets/PlayStationStore.jpg"
              alt="store image"
            />
          </div>

          <div className="flex flex-col justify-start px-4">
            
            <h1 className="mt-12 lg:mt-20 px-0 md:px-6 text-black font-mono text-2xl md:text-lg lg:text-2xl xl:text-3xl"> <span className="font-bold">PlayStation</span> Store </h1>

            <p className="mt-4 md:px-6 lg:w-11/12 xl:w-5/6 text-3xl md:text-4xl xl:text-5xl text-start font-thin"> 
              New savings on PlayStation Store
            </p>

            <p className="mt-5 lg:w-3/4 md:px-6 text-sm xl:text-lg text-[#717171]">
              Explore the latest discounts and seasonal sales on great games and add-ons for PS5 and PS4.
            </p>

            <div className="md:px-6">
              <Button
                text={'See all deals'}
                classes={"w-1/3 sm:w-1/5 md:w-1/2 lg:w-2/5 xl:w-2/6 mt-8 bg-[#d53b00] px-1 py-2 text-white text-xs lg:text-sm xl:text-lg"}
              />
            </div>

          </div>

        </div>
      </section>
    
    </>
  )
}

export default PlayStationStore