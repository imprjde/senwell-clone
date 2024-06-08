
import React from "react";
import { motion } from "framer-motion";

export default function DropDown({ linksArray, id, setShowDropDown }) {
  return (
    <motion.div
      onMouseEnter={() => setShowDropDown(true)}
      initial={{ translateZ: -100, opacity: 0, height: "0" }}
      animate={{ translateZ: 0, opacity: 1, height: "100%" }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className={`absolute ${
        id === 1 ? "right-[400px]" : "right-[300px]"
      } mt-2 w-72 rounded-md shadow-lg z-50`}
    >
      <div className="  shadow-2xl shadow-black  py-5 bg-white text-left pl-4 shadow-xs">
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <>
            {linksArray &&
              linksArray.map((link, i) => (
                <span
                  key={i}
                  href="#portfolio"
                  className="block px-4 py-2 hover:ml-2 cursor-pointer hover:text-sky-500 text-[14.5px] tracking-wide text-[#7d828c] font-normal "
                  role="menuitem"
                >
                  {link}
                </span>
              ))}
          </>
        </div>
      </div>
    </motion.div>
  );
}
