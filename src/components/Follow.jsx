import { followArray } from "../constants/constants"

const Follow = () => {
  return (
    <>
    <section className="container">
      
      <div className="px-12 py-16 bg-[#f5f7fa]">

        <h1 className="text-2xl text-center text-gray-700 sm:text-3xl lg:text-4xl"> Follow us on social media </h1>
        
        <div className="mt-4 lg:mt-20 lg:mb-20 grid grid-cols-2 gap-y-4 gap-x-2 lg:grid-cols-4 lg:gap-x-0 
          lg:px-40">    
          {  
            followArray?.map((followImage, index) => (
              <img
                key={index}
                className="lg:size-32 cursor-pointer"
                src={`/src/assets/${followImage}`}
                alt={`${followImage}`}
              />
            ))
          }
        </div>

      </div>

      <div className="px-6 md:px-20 xl:px-48 py-16">
        <p className="text-[8px] "> ©2024 MARVEL *Retailer price/availability may vary. </p>
      </div>

    </section>
    
    </>
  )
}

export default Follow