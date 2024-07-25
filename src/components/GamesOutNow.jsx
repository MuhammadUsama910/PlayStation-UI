import { useState } from "react"
import Button from "./Button"
import { comingSoonArr, newReleasesArr } from "../constants/constants";

const GamesOutNow = () => {

  const [value, setValue] = useState(1);

  return (
    <>
    <section className="container bg-black py-12 max-sm:mt-8">

    <div className="px-8 text-white text-3xl md:text-4xl text-center font-light">
      Great PS4 & PS5 games out now or coming soon
    </div>

    <div className="mt-6 ml-6 md:mt-8 md:m-auto lg:mt-10 w-3/5 sm:w-1/3 lg:w-1/4 xl:w-1/5 px-0.5 flex justify-between items-center rounded-full bg-gray-900">
      <Button text={'New releases'} 
        classes={`text-white text-xs md:text-sm ${value === 1 ? 'bg-white text-black' : 'bg-none text-white'} px-2.5 py-2.5`} 
        click={() => setValue(1)}
      />
      <Button text={'Coming soon'} 
        classes={`text-white text-xs md:text-sm ${value === 2 ? 'bg-white text-black' : 'bg-none text-white'} px-2.5 py-2.5`} 
        click={() => setValue(2)}
      />
    </div>

    <div className="px-5 mt-10 grid grid-cols-3 gap-4 md:grid-cols-6">
    
      { value === 1 &&
        newReleasesArr?.map((item, index) => (
        <div key={index} className="text-white text-sm text-center">
          <img
            className="mt-2 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-white"
            src={`/src/assets/Upcoming/${item.game}`}
            alt={item.text}
          />
          <p className="mt-1"> {item.text} </p>
        </div>
        ))
      }

      { value === 2 &&
        comingSoonArr?.map((item, index) => (
        <div key={index} className="text-white text-sm text-center">
          <img
            className="mt-2 rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-white"
            src={`/src/assets/Upcoming/${item.game}`}
            alt={item.text}
          />
          <p className="mt-1"> {item.text} </p>
        </div>
        ))
      }  
  
    </div>
    
    </section>
    </>
  )
}

export default GamesOutNow