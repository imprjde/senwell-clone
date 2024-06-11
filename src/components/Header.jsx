// import { useState } from "react";
// import DropDown from "./DropDown";

// import { AnimatePresence } from "framer-motion";
// import DropDownTwo from "./DropDownTwo";

// let navigations = [
//   "HOME",
//   "COMPANY",
//   "SERVICES",
//   "TECHNOLOGIES",
//   "BLOGS",
//   "CAREERS",
//   "CONTACT",
// ];

// let links = [
//   ["Portfolio", "About Us"],
//   [
//     "Software Product Development",
//     "Software Development",
//     "Saas Development",
//     "Application Development",
//     "Web App Development",
//     "Software Testing ",
//     "UI/UX Design",
//     "Cloud",
//   ],
// ];
// export default function Header() {
//   const [linksArray, setLinksArray] = useState(null);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [showDropDownTwo, setShowDropDownTwo] = useState(false);
//   const [id, setId] = useState(null);
//   const handleDropdown = (i) => {
//     setShowDropDown(true);
//     setLinksArray(links[i - 1]);
//     setId(i);
//   };
//   const handleExit = () => {
//     setShowDropDown(false);
//     setLinksArray(null);
//     setShowDropDownTwo(false);
//   };

//   let url =
//     "https://senwellsys.com/static/media/finalsenwellgrouplogo.fbb0ce6431b7262166b7.png";
//   return (
//     <div className="sticky top-0 bg-white shadow-2xl z-40 shadow-black flex justify-between ">
//       <div className="flex  space-x-1 cursor-pointer  w-[60%] px-8 py-2">
//         <div>
//           <img className="w-[90px]" src={url} alt="Logo" />
//         </div>
//         <div className="   w-full  pr-5 flex flex-col items-center justify-center ">
//           <span
//             className="text-[#2460A6] w-full text-left   font-bold text-xl "
//             style={{ fontFamily: "Manrope, sans-serif" }}
//           >
//             SENWELL GROUP PRIVATE LIMITED
//           </span>
//           <span
//             className=" w-full text-end mt-2  font-semibold  text-[10px] text-[#566573]"
//             style={{ fontFamily: "Manrope, sans-serif" }}
//           >
//             Empowered by innovation...
//           </span>
//         </div>
//       </div>
//       <div className="items-center pr-20  w-full justify-end flex">
//         <div className="space-x-8 ">
//           {navigations.map((link, i) => (
//             <span
//               onMouseEnter={() => {
//                 if (i === 3) {
//                   setShowDropDownTwo(true);
//                 } else {
//                   handleDropdown(i);
//                 }
//               }}
//               className="font-[600]  h-full  m-auto hover:text-blue-800 cursor-pointer text-[#000000DE] text-[14px]"
//               style={{ fontFamily: "Manrope, sans-serif" }}
//             >
//               {link}
//             </span>
//           ))}
//           <AnimatePresence>
//             {showDropDown && linksArray && (
//               <DropDown
//                 linksArray={linksArray}
//                 id={id}
//                 setShowDropDown={setShowDropDown}
//                 handleExit={handleExit}
//               />
//             )}
//           </AnimatePresence>
//           <AnimatePresence>
//             {showDropDownTwo && (
//               <DropDownTwo
//                 handleExit={handleExit}
//                 setShowDropDownTwo={setShowDropDownTwo}
//               />
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

///////////////////////RESP///////////////////////////////

import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { AnimatePresence, motion } from "framer-motion";
import DropDownTwo from "./DropDownTwo";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

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

const company = ["Portfolio", "About Us"];
const services = [
  "Software Product Development",
  "Software Development",
  "Saas Development",
  "Application Development",
  "Web App Development",
  "Software Testing ",
  "UI/UX Design",
  "Cloud",
];

export default function Header() {
  const [linksArray, setLinksArray] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCompany, setShowCompnay] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showDropDownTwo, setShowDropDownTwo] = useState(false);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let url =
    "https://senwellsys.com/static/media/finalsenwellgrouplogo.fbb0ce6431b7262166b7.png";
  return (
    // <div className="sticky overflow-x-hidden md:overflow-x-visible top-0 bg-white shadow-2xl z-40 shadow-black flex justify-between ">
    <div className="fixed w-full overflow-x-hidden md:overflow-x-visible top-0 bg-white shadow-2xl z-40 shadow-black flex justify-between ">
      <div className="flex  space-x-1 cursor-pointer  md:w-[60%] px-1 md:px-8 py-2">
        <div>
          <img className="w-[100px] md:w-[90px]" src={url} alt="Logo" />
        </div>
        <div className=" w-full  pr-5 flex flex-col items-center justify-center ">
          <span
            className="text-[#2460A6] hidden md:flex w-full text-left font-bold text-xl "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            SENWELL GROUP PRIVATE LIMITED
          </span>
          <span
            className="text-[#2460A6] w-full text-left md:hidden font-bold text-[16px] "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            SENWELL GROUP PRIVATE <br /> LIMITED
          </span>
          <span
            className=" w-full text-start md:text-end md:mt-2  font-semibold  text-[10px] text-[#566573]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Empowered by innovation...
          </span>
        </div>
      </div>
      <div className="items-center pr-20  overflow-x-hidden w-full justify-end hidden md:flex">
        <div className="space-x-8 ">
          {navigations.map((link, i) => (
            <span
              onMouseEnter={() => {
                if (i === 3) {
                  setShowDropDownTwo(true);
                } else {
                  handleDropdown(i);
                }
              }}
              className="font-[600]  h-full  m-auto hover:text-blue-800 cursor-pointer text-[#000000DE] text-[14px]"
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
                handleExit={handleExit}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showDropDownTwo && (
              <DropDownTwo
                handleExit={handleExit}
                setShowDropDownTwo={setShowDropDownTwo}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      <div
        onClick={toggleSidebar}
        class="m-auto flex flex-col md:hidden justify-end"
        id="Hamburger"
      >
        <div class="flex flex-col cursor-pointer m-auto justify-end bg-red-5 space-y-1.5">
          <div class="w-8 h-[2px] bg-black rounded-lg hamburger-line"></div>
          <div class="w-8 h-[2px] bg-black rounded-lg hamburger-line"></div>
          <div class="flex justify-end">
            <div class="w-4 h-[2px] bg-black rounded-lg hamburger-line"></div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 min-w-52 w-auto h-full bg-white shadow-2xl z-50 flex flex-col p-4"
          >
            <button
              className="self-start rotate-90 mb-4"
              onClick={toggleSidebar}
            >
              <IoIosArrowUp />
            </button>
            <div className="space-y-7 mt-10 bg-red-5  font-medium text-[1rem]  text-left pl-10">
              <span className="block text-gray-800 ">Home</span>
              <span
                onClick={() => setShowCompnay(!showCompany)}
                className="space-x-2  w-full justify-between  inline-flex items-center text-gray-800 "
              >
                <span>Company </span>
                <span className="mt-1">
                  {showCompany ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
              </span>
              {showCompany &&
                company.map((link, i) => (
                  <span key={i} className="block text-gray-800 ">
                    {link}
                  </span>
                ))}
              <span
                onClick={() => setShowServices(!showServices)}
                className=" w-full justify-between flex items-center text-gray-800 "
              >
                <span>Services</span>
                <span className="mt-1">
                  {showServices ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
              </span>
              {showServices &&
                services.map((link, i) => (
                  <span key={i} className="block text-gray-800 ">
                    {link}
                  </span>
                ))}
              <span className="block text-gray-800 ">Technologies</span>

              <span className="block text-gray-800 ">Blog</span>
              <span className="block text-gray-800 ">Career</span>
              <span className="block text-gray-800 ">Contact</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
