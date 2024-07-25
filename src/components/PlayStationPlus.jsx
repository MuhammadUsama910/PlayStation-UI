
const PlayStationPlus = () => {
  return (
    <>
    <section className="container bg-[url('/src/assets/PlayStationPlus.jpg')] h-screen bg-cover bg-center bg-no-repeat">

      <div className="px-8 flex flex-col">
        
        <h2 className="mt-20 text-black text-2xl md:text-3xl text-center"> PlayStation Plus </h2>
        <h1 className="mt-6 text-black text-3xl md:text-4xl text-center font-light"> Discover Playstation Plus </h1>
        <p className="mt-6 text-center text-sm md:text-base md:px-4 font-medium text-[#6b6b6b]">
          Play hundreds of incredible PS5, PS4 and classic PlayStation games, and 
          discover epic adventures, unique indies, family favourites, and 
          everything in between.
        </p>

        <div className="mt-10 grid max-sm:grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

          <div className="shadow-sm hover:shadow hover:shadow-black shadow-black rounded-lg h-60 
            cursor-pointer bg-[url('/src/assets/image3.png')] bg-cover px-6 flex flex-col justify-end pb-6">
            
            <h1 className="bg-yellow-300 text-black text-xs font-semibold w-3/5 text-center"> EXTRA </h1>
            <h1 className="mt-2 text-white text-lg"> PlayStation Plus Extra </h1>
            <p className="mt-2 text-white text-xs">
              Enjoy all the PlayStation Plus benefits from the Extra and 
              Essential plans, plus exclusive benefits like game trials, 
              cloud streaming, and the Classics Catalogue.
            </p>

          </div>

          <div className="max-sm:hidden shadow-sm hover:shadow hover:shadow-black shadow-black rounded-lg h-60 
            cursor-pointer bg-[url('/src/assets/image5.png')] bg-cover px-6 flex flex-col justify-end pb-6">
            
            <h1 className="bg-yellow-300 text-black text-xs font-semibold w-3/5 text-center"> EXTRA </h1>
            <h1 className="mt-2 text-white text-lg"> PlayStation Plus Extra </h1>
            <p className="mt-2 text-white text-xs">
              Enjoy all the PlayStation Plus benefits from the Extra and 
              Essential plans, plus exclusive benefits like game trials, 
              cloud streaming, and the Classics Catalogue.
            </p>

          </div>

          <div className="max-lg:hidden shadow-sm hover:shadow hover:shadow-black shadow-black rounded-lg h-60 
            cursor-pointer bg-[url('/src/assets/image8.png')] bg-cover px-6 flex flex-col justify-end pb-6">
            
            <h1 className="bg-yellow-300 text-black text-xs font-semibold w-3/5 text-center"> EXTRA </h1>
            <h1 className="mt-2 text-white text-lg"> PlayStation Plus Extra </h1>
            <p className="mt-2 text-white text-xs">
              Enjoy all the PlayStation Plus benefits from the Extra and 
              Essential plans, plus exclusive benefits like game trials, 
              cloud streaming, and the Classics Catalogue.
            </p>

          </div>

        </div>
      </div>

    </section>
    
    </>
  )
}

export default PlayStationPlus