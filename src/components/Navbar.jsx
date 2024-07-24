
import { useState } from "react";
import { FaPlaystation } from "react-icons/fa";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch, IoIosMenu } from "react-icons/io";

import Button from "./Button";
import { navLinks } from "../constants/constants";

export const Navbar = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>
   
    <div className="container">

      <div className="max-md:hidden w-full p-1 bg-black text-white text-xl text-end font-semibold"> SONY </div>
      
      <header className="relative w-full px-6 py-4 sm:px-4 md:px-8 md:py-3 flex justify-between">

      {
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform transform 
          ${ mobileSearch ? 'translate-y-0' : '-translate-y-full'} md:hidden`}
        >
          <div className="relative w-full flex items-start justify-start sm:gap-8 max-sm:gap-4 bg-white shadow-lg top-0 p-4">
          
            <button 
              className="text-3xl ml-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileSearch(!mobileSearch)}>
              &#8592;
            </button>
          
            <div className="w-3/4 flex items-center">
              <input
                type="text"
                placeholder="Search Playstation.com"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-none"
              />
            </div>
          </div>
        
        </div>
      }

        <div className="md:hidden flex gap-6 items-center justify-center">
          <IoIosMenu size={40} onClick={() => setOpenMenu(!openMenu)}/>
          <IoIosSearch className="text-3xl" onClick={() => setMobileSearch(!mobileSearch)}/>
        </div>
        
        <div className="flex items-center text-sm">
          
          <FaPlaystation size={40} color="#0070D1" className="cursor-pointer"/>
          {/* max-sm:hidden */}
          <ul className={`${openMenu ? "left-0" : "-left-full"} absolute top-20 w-11/12 sm:w-3/4 h-5/6 flex flex-col 
            gap-6 items-start px-12 py-6 bg-white shadow-lg rounded transition-all duration-300 ease-linear select-none
            md:static md:flex md:flex-row md:shadow-none md:rounded-none md:items-center md:py-0 md:gap-3 md:font-medium md:text-black md:cursor-pointer`}>
            {
              navLinks?.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-[#0070D1]"
                  onClick={() => setOpenMenu(!openMenu)}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Button text={"Sign In"} classes={`w-20 px-3 py-1
              text-white bg-[#0070D1]`}/>
          </div>
      
          <div className="max-sm:hidden sm:hidden md:block">
            <IoIosSearch
              color="black"
              className="flex justify-center items-center text-2xl cursor-pointer"
              onClick={() => setOpenSearch(true)}
            />
          </div>
        </div>


        { openSearch &&
          <div className="md:w-[50%] lg:w-[45%] bg-white shadow-md flex justify-between absolute z-10 right-8 top-4">
      
            <div className="md:w-5/12 border-r-2 md:py-3 md:px-1 lg:py-4 flex items-start justify-center cursor-pointer text-black hover:text-[#0070D1]">
              <select className="md:text-sm lg:text-lg bg-none border-none outline-none">
                <option value="PlayStation.com" label="PlayStation.com"/>
                <option value="Playstation Store" label="Playstation Store"/>
              </select>
            </div>
      
            <div className="md:w-3/5 lg:w-5/6 md:py-2.5 lg:py-4">
              <input
                className="w-4/5 ml-5 md:text-sm lg:text-lg border-none outline-none focus:border-none focus:outline-none"
                type="text"
                id="search"
                name="search"
                placeholder="Search Playstation.com"
              />
            </div>
            <button className="md:w-[15%] lg:w-[20%] md:py-3 lg:py-4 flex items-center justify-center bg-[#0070D1]">
              <IoIosSearch color="white" className="text-2xl"/>
            </button>
          </div>
        }
      </header>
    </div>
    </>
  )
}
