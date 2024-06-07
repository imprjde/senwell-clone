

import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa6";

export default function Footer() {
  let url =
    "https://senwellsys.com/static/media/finalsenwellgrouplogo.fbb0ce6431b7262166b7.png";
  return (
    <footer className="bg-[#131022] overflow-x-hidden  pt-5  text-white ">
      <div id="top" className="flex m-auto mb-20 items-center justify-around">
        <div id="Top_Left" className="flex items-center ">
          <div className="bg-red- pl-28 space-y-4 X-X p-5 w-fit">
            <div id="Logo_Div" className="bg-sky-5 text-left w-fit flex">
              <span>
                <img className="w-[90px]" src={url} alt="" />
              </span>
              <span
                className="text-white ml-3 w-full  text-left  items-center m-auto  font-bold text-xl "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                SENWELL GROUP <br />
                PRIVATE LIMITED
              </span>
            </div>

            <div id="Address_Div" className="bg-green-5 text-left">
              <div>
                <span
                  className="font-semibold text-xl"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Office Address
                </span>
              </div>
              <div className="text-[14.5px] mt-3 text-[#ffffffd9]">
                <span>
                  Gera's Imperium Alpha, Near Eon IT Park,
                  <br />
                  Kharadi, Pune - 411014 <br />
                  Maharashtra (India)
                </span>
              </div>
              <div>
                <span className="text-[14.5px]  text-[#ffffffd9]">
                  Email: info@senwellsys.com
                </span>
              </div>
            </div>
            <div id="Social_Links_Div" className="bg-yellow- text-left">
              <div className="pb-">
                <span className="text-white tracking-wider text-[1.1rem] font-bold">
                  Get In Touch With Us!
                </span>
              </div>
              <div className="flex m-auto mt-2 items-center space-x-2 ">
                <span className="p-2.5   rounded-md border-[2px] border-gray-500">
                  <span className="text-gray-300">
                    <FaLinkedin size={18} />
                  </span>
                </span>
                <span className="p-2.5   rounded-md border-[2px] border-gray-500">
                  <span className="text-gray-300">
                    <AiFillFacebook size={18} />
                  </span>
                </span>
                <span className="p-2.5   rounded-md border-[2px] border-gray-500">
                  <span className="text-gray-300">
                    <RiInstagramFill size={18} />
                  </span>
                </span>
                <span className="p-2.5   rounded-md border-[2px] border-gray-500">
                  <span className="text-gray-300">
                    <FaYoutube size={18} />
                  </span>
                </span>
                <span className="p-2.5   rounded-md border-[2px] border-gray-500">
                  <span className="text-gray-300">
                    <FaXTwitter size={18} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="Top_Right"
          className="flex m-auto justify-between pl-20 space-x-24 bg-orange-"
        >
          <div className="bg-orange-">
            <div id="ONE" className="text-left">
              <div>
                <span
                  className="text-[1.25rem] font-semibold mb-[1rem] "
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Popular categories
                </span>
              </div>
              <div
                className="flex flex-col text-[14px] mt-4 space-y-3 text-[#ffffffd9] "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span className="cursor-pointer">
                  Software Product Engineering
                </span>
                <span className="cursor-pointer">
                  Custom Software Development
                </span>
                <span className="cursor-pointer">Software as a Services</span>
                <span className="cursor-pointer">Mobile App Development</span>
                <span className="cursor-pointer">Web Development</span>
                <span className="cursor-pointer">Software Testing & QA</span>
                <span className="cursor-pointer">UI/UX Design</span>
              </div>
            </div>
          </div>
          <div className="bg-sky-5">
            <div id="TWO" className="text-left">
              <div>
                <span
                  className="text-[1.25rem] font-semibold mb-[1rem]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Company
                </span>
              </div>
              <div
                className="flex flex-col text-[14px] mt-4 space-y-3 text-[#ffffffd9] "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span className="cursor-pointer">Portfolio</span>
                <span className="cursor-pointer">Blogs / Articles</span>
                <span className="cursor-pointer">Careers</span>
                <span className="cursor-pointer">About us</span>
                <span className="cursor-pointer">Contact us</span>
              </div>
            </div>
          </div>
          <div className="bg-pink-5">
            <div id="THREE" className="text-left">
              <div>
                <span
                  className="text-[1.25rem] font-semibold mb-[1rem]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Technologies
                </span>
              </div>
              <div
                className="flex flex-col text-[14px] mt-4 space-y-3 text-[#ffffffd9] "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                <span className="cursor-pointer">React</span>
                <span className="cursor-pointer">Angular</span>
                <span className="cursor-pointer">Node Js</span>
                <span className="cursor-pointer">.Net</span>
                <span className="cursor-pointer">Java</span>
                <span className="cursor-pointer">React Native</span>
                <span className="cursor-pointer">Android</span>
              </div>
            </div>
            <div id="TWO"></div>
            <div id="THREE"></div>
          </div>
        </div>
      </div>

      <div
        className="bg-red-5 py-5 border border-x-0 border-b-0 border-t-gray-800"
        id="bottom"
      >
        <div
          className="text-[#FFFFFFD9] text-[13px]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          @2024 | Privacy Policy | Senwell Group Private Limited | All rights
          reserved
        </div>
        <div className="text-white mt-2 text-[13px] items-center m-auto justify-center flex ">
          <span>
            <FaCopyright />
          </span>
          <span className="ml-1 mb-0.5 tracking-wider font-medium">
            {" "}
            Prajwal.Dev
          </span>
        </div>
      </div>
    </footer>
  );
}
