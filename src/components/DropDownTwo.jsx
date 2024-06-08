import React from "react";
import { motion } from "framer-motion";

export default function DropDownTwo({ handleExit, setShowDropDownTwo }) {
  return (
    <motion.div
      onMouseEnter={() => setShowDropDownTwo(true)}
      onMouseLeave={handleExit}
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
          <div className="flex text-left m-auto justify-around">
            <div >
              <div>
                <span className="text-[#222] text-[17px] font-semibold">
                  FrontEnd
                </span>
              </div>
              <div className="flex flex-col mt-2 space-y-7 text-[#7d828c]  text-[14.5px]">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  React
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Angular
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Next Js
                </motion.span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-[#222] text-[17px] font-semibold">
                  BackEnd
                </span>
              </div>
              <div className="flex flex-col mt-2 space-y-7 text-[#7d828c]  text-[14.5px]">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  .Net
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Node Js
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Java
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Nest Js
                </motion.span>
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
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  iOS
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Android
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  React Native
                </motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ ease: "easeInOut" }}
                  className="hover:text-sky-500 cursor-pointer"
                >
                  Flutter
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
