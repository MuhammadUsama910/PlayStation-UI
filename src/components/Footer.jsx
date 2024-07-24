import { footerArrayOfObjects } from "../constants/constants";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube, FaRegCopyright } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { PiGreaterThan } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer className="container bg-[#00439c]">
        
        <div className="px-10 py-3">
          <div className="flex gap-3">
            <FaPlaystation color="white" size={40} className="cursor-pointer" />
            <h1 className="text-3xl text-white"> PlayStation </h1>
          </div>

          <hr className="mt-2 text-[#3369b0]" />
        </div>

        <div className="px-10 py-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
          {
            footerArrayOfObjects?.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 mb-6 text-white">
                
                <h1 className="font-bold"> {item.header} </h1>
                {item.header === "Connect" && (
                  <div className="flex gap-3 mb-1 mt-1">
                    <FaFacebookSquare size={20} />
                    <FaXTwitter size={20} />
                    <IoLogoInstagram size={20} />
                    <FaYoutube size={20} />
                  </div>
                )}

                {item.detail.map((description, i) => (
                  <p key={i} className="text-sm">
                    {" "} {description} {" "}
                  </p>
                ))}
              </div>
            ))
          }
        </div>

        <div className="px-10">
          <hr className="text-[#3369b0]" />
        </div>

        <div className="px-10 py-2 mt-2 flex justify-between text-white font-semibold text-sm">
          
          <div className="flex gap-3">
            <img
              className="w-1/6"
              src="/src/assets/footer_img1.png"
              alt="footer image 1"
            />
            <p className="w-1/5 leading-tight">
              {" "}
              Sony Interactive Entertainment{" "}
            </p>
          </div>

          <img
            className="w-1/6 h-20"
            src="/src/assets/esrb.svg"
            alt="esrb image"
          />
        </div>

        <div className="px-10 py-2 text-white text-xs">
          
          <h1 className="flex items-center gap-1">
            {" "} <FaRegCopyright color="white" /> 2024 Sony Interactive Entertainment LLC{" "}
          </h1>
          
          <p className="mt-1 w-11/12">
            All content, games titles, trade names and/or trade dress,
            trademarks, artwork and associated imagery are trademarks and/ or
            copyright material of their respective owners. All rights reserved.
            More info
          </p>

          <hr className="mt-4 text-[#3369b0]" />
        </div>

        <div className="px-10 py-2 flex flex-col text-white">
          <div className="flex items-center gap-2">
            <BiWorld className="size-6 rotate-45" />
            <h1 className="text-xs"> United States </h1>
            <PiGreaterThan className="size-3 mt-0.5" />
          </div>

          <p className="text-xs mt-1.5 ml-0.5 mb-6">
            {" "}
            Legal | Privacy | policy | Website terms of use | Site map Do not
            share my personal information{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
