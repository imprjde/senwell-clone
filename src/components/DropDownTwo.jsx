import React from "react";
import { motion } from "framer-motion";

export default function DropDownTwo({ setShowDropDown, id, linksArray }) {
  return (
    <motion.div
      initial={{ translateZ: -100, opacity: 0, height: "0" }}
      animate={{ translateZ: 0, opacity: 1, height: "100%" }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="absolute 
         mt-2 w-[580px] right-[110px]  rounded-md shadow-lg z-50"
    >
      <div className=" shadow-2xl  shadow-black  py-5 bg-white text-left  shadow-xs">
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="flex bg- text-left m-auto justify-around">
            <div className="">
              <div>
                <span className="text-[#222] text-[17px] font-semibold">
                  FrontEnd
                </span>
              </div>
              <div className="flex flex-col mt-2 space-y-7 text-[#7d828c]  text-[14.5px]">
                <span className="hover:text-sky-500 cursor-pointer">React</span>
                <span className="hover:text-sky-500 cursor-pointer">
                  Angular
                </span>
                <span className="hover:text-sky-500 cursor-pointer">
                  Next Js
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-[#222] text-[17px] font-semibold">
                  BackEnd
                </span>
              </div>
              <div className="flex flex-col mt-2 space-y-7 text-[#7d828c]  text-[14.5px]">
                <span className="hover:text-sky-500 cursor-pointer">.Net</span>
                <span className="hover:text-sky-500 cursor-pointer">
                  Node Js
                </span>
                <span className="hover:text-sky-500 cursor-pointer">Java</span>
                <span className="hover:text-sky-500 cursor-pointer">
                  Nest Js
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-[#222] text-[17px] font-semibold">
                  {" "}
                  Mobile
                </span>
              </div>
              <div className="flex flex-col mt-2 space-y-7 text-[#7d828c]  text-[14.5px]">
                <span className="hover:text-sky-500 cursor-pointer">iOS</span>
                <span className="hover:text-sky-500 cursor-pointer">
                  Android
                </span>
                <span className="hover:text-sky-500 cursor-pointer">
                  React Native
                </span>
                <span className="hover:text-sky-500 cursor-pointer">
                  Flutter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
