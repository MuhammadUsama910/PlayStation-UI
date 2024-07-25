import Button from "./Button"


const ThisJulyCard = () => {
  return (
    <>
    <section className="container">

    <div className="flex flex-col p-2 bg-[#27254e] h-full">
          
      <div className="flex">
        <div className="bg-none p-2 rounded-lg hover:bg-black mt-6">
          <img
            className="rounded-lg"
            src="/src/assets/newrelease.jpg"
            alt="image"
          />
          <h1 className="text-white text-sm font-semibold mt-4"> New releases </h1>
          <p className="text-white text-xs mt-3 max-sm:leading-snug  ">
            Check out ths month's biggest new titles, including Zenless Zone Zero.
          </p>
        </div>


        <div className="bg-none p-2 rounded-lg hover:bg-black mt-6">
          <img
            className="rounded-lg"
            src="/src/assets/thisJuly2.jpg"
            alt="image"
          />
          <h1 className="text-white text-sm font-semibold mt-4"> PlayStation Indies </h1>
          <p className="text-white text-xs mt-3 max-sm:leading-snug">
            Discover this month's most innovative and unique indie releases,
            including Flintlock: Siege of Dawn.
          </p>
        </div>
    
        <div className="bg-none p-2 rounded-lg hover:bg-black mt-6">
          <img
            className="rounded-lg"
            src="/src/assets/latestupdates.jpg"
            alt="image"
          />
          <h1 className="text-white text-sm font-semibold mt-4"> Latest Updates </h1>
          <p className="text-white text-xs mt-3 max-sm:leading-snug">
            Keep up to date with the month's biggest 
            new events, including XDEFIANT Season One.
          </p>
        </div>
      </div>

      <Button
        text={'Find out more'}
        classes={'text-black bg-white px-1.5 py-2 w-1/3 m-auto mt-8 sm:mb-6'}
      />

    </div>

    </section>
    </>
  )
}

export default ThisJulyCard