import { latestNewsArray } from "../constants/constants"

export const LatestNews = () => {
  return (
    <>
    <section className="container py-16 bg-white">

      <div className="px-16 text-2xl md:text-3xl lg:text-4xl font-thin text-black text-center">
        <p> The latest news from PlayStation Blog </p>
      </div>

      
      <div className="px-2 sm:px-6 md:px-8 mt-10 grid grid-cols-3 gap-0.5 sm:gap-2 md:gap-3 lg:gap-4">

        {latestNewsArray?.map((item, index) => (
          <div 
            key={index}
            className="p-1 md:p-1.5 lg:p-3 rounded shadow hover:shadow-xl"
          >
            <img
              className="rounded-lg shadow-sm hover:shadow-lg"
              src={`/src/assets/NewsCarousel/${item.image}`}
              alt="helldivers"
            />

            <div className="flex flex-col">

              <h1 className="mt-1 ml-1 text-black text-xs text-start md:text-sm lg:text-base"> 
                {item.heading} 
              </h1>

              <p className="mt-2 ml-1 text-start text-gray-500 text-[8px] md:text-xs lg:text-sm">
                {item.paragraph}
              </p>

              <div className="mt-4 mb-2 flex gap-1.5 md:gap-2 lg:gap-4">

                <img
                  className="size-8 rounded-full"
                  src={`/src/assets/NewsCarousel/${item.icon}`}
                  alt="icon"
                />

                <div className="flex flex-col gap-1 text-[6px] md:text-[10px] lg:text-xs">
                  <p className="font-bold"> {item.name} </p>
                  <p> {item.designation} </p>
                  <p> {item.date} </p>
                </div>

              </div>

            </div>

          </div>
        ))
      }
      </div>

    </section>
    
    </>  
  )
}
