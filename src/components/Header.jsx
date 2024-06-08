import { useState } from "react";
import DropDown from "./DropDown";

import { AnimatePresence } from "framer-motion";
import DropDownTwo from "./DropDownTwo";

let navigations = [
  "HOME",
  "COMPANY",
  "SERVICES",
  "TECHNOLOGIES",
  "BLOGS",
  "CAREERS",
  "CONTACT",
];

let links = [
  ["Portfolio", "About Us"],
  [
    "Software Product Development",
    "Software Development",
    "Saas Development",
    "Application Development",
    "Web App Development",
    "Software Testing ",
    "UI/UX Design",
    "Cloud",
  ],
];
export default function Header() {
  const [linksArray, setLinksArray] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownTwo, setShowDropDownTwo] = useState(false);
  const [id, setId] = useState(null);
  const handleDropdown = (i) => {
    setShowDropDown(true);
    setLinksArray(links[i - 1]);
    setId(i);
  };
  const handleExit = () => {
    setShowDropDown(false);
    setLinksArray(null);
    setShowDropDownTwo(false);
  };

  let url =
    "https://senwellsys.com/static/media/finalsenwellgrouplogo.fbb0ce6431b7262166b7.png";
  return (
    <div className="sticky  top-0 bg-white shadow-2xl z-40 shadow-black flex justify-between ">
      <div
        className="flex  space-x-1 cursor-pointer  w-[60%] px-8 py-2"
        id="left"
      >
        <div>
          <img className="w-[90px]" src={url} alt="Logo" />
        </div>
        <div className="   w-full  pr-5 flex flex-col items-center justify-center ">
          <span
            className="text-[#2460A6] w-full text-left   font-bold text-xl "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            SENWELL GROUP PRIVATE LIMITED
          </span>
          <span
            className=" w-full text-end mt-2  font-semibold  text-[10px] text-[#566573]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Empowered by innovation...
          </span>
        </div>
      </div>
      <div
        className="items-center bg-purple- pr-20  w-full justify-end flex"
        id="right"
      >
        <div className="space-x-8">
          {navigations.map((link, i) => (
            <span
              onMouseEnter={() => {
                if (i === 3) {
                  setShowDropDownTwo(true);
                } else {
                  handleDropdown(i);
                }
              }}
              onMouseLeave={handleExit}
              className="font-[600] hover:text-blue-800 cursor-pointer text-[#000000DE] text-[14px]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {link}
            </span>
          ))}
          <AnimatePresence>
            {showDropDown && linksArray && (
              <DropDown
                linksArray={linksArray}
                id={id}
                setShowDropDown={setShowDropDown}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showDropDownTwo && <DropDownTwo />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
