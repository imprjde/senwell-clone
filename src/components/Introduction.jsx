// import React from "react";

// export default function Introduction() {
//   let src =
//     "https://senwellsys.com/static/media/Who2.57b4b57cb37a7772dc26.webp";
//   return (
//     <div className=" bg-[#F3F6FF] h-screen  flex px-28 py-10 space-x-4">
//       <div className="w-1/2 text-left" >
//         <div>
//           <span className="font-bold text-[2.5rem]">Who Are We?</span>
//           <span className="text-[#585c7b] space-y-5 text-[16px]">
//             <p className=" text-justify mt-4">
//               Senwell Group Private Limited is an innovative global platform,
//               seamlessly blending web development, design, and digital marketing
//               services, including social media marketing.Our mission is to
//               empower you with strategic solutions and state-of-the-art
//               technology, propelling you to market excellence and achieving
//               triumph. Rely on us for comprehensive support to thrive and
//               succeed.
//             </p>
//             <p className=" text-justify ">
//               {" "}
//               We are not just a team, but a dynamic and motivated powerhouse,
//               passionately dedicated to crafting innovative solutions that
//               resonate with the pulse of today's ever-evolving business
//               landscape. Our unwavering commitment lies in not only providing
//               top-notch services but also in understanding and adapting them to
//               your distinct needs, thus granting you the tools not just to
//               survive but to truly flourish in the cutthroat competitive market.
//               Count on us to not only be a reliable partner but an enthusiastic
//               architect of your triumphant journey towards success.
//             </p>
//           </span>
//           <span className="mt-5">
//             <button
//               className="bg-[#1266F1] mt-5  shado  shadow-2xl  shadow-black text-white rounded-lg px-[32px] py-[12px] font-semibold text-[1rem]"
//               style={{ fontFamily: "Manrope, sans-serif" }}
//             >
//               Know more about us
//             </button>
//           </span>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <div>
//           <img className="rounded-lg" src={src} alt="meetingLogo" />
//         </div>
//       </div>
//     </div>
//   );
// }

///////////////RESP///////////////////

import React from "react";

export default function Introduction() {
  let src =
    "https://senwellsys.com/static/media/Who2.57b4b57cb37a7772dc26.webp";
  return (
    <div className=" bg-[rgb(243,246,255)] m-auto min-h-screen md:h-screen  md:flex md:px-28 px-0 py-10 space-y-10 md:space-y-0 md:space-x-4">
      <div className=" w-full md:w-1/2 text-left px-10 md:px-10">
        <div>
          <span className="font-bold text-[2.5rem]">Who Are We?</span>
          <span className="text-[#585c7b] space-y-5 text-[16px]">
            <p className=" text-justify mt-4">
              Senwell Group Private Limited is an innovative global platform,
              seamlessly blending web development, design, and digital marketing
              services, including social media marketing.Our mission is to
              empower you with strategic solutions and state-of-the-art
              technology, propelling you to market excellence and achieving
              triumph. Rely on us for comprehensive support to thrive and
              succeed.
            </p>
            <p className=" text-justify ">
              {" "}
              We are not just a team, but a dynamic and motivated powerhouse,
              passionately dedicated to crafting innovative solutions that
              resonate with the pulse of today's ever-evolving business
              landscape. Our unwavering commitment lies in not only providing
              top-notch services but also in understanding and adapting them to
              your distinct needs, thus granting you the tools not just to
              survive but to truly flourish in the cutthroat competitive market.
              Count on us to not only be a reliable partner but an enthusiastic
              architect of your triumphant journey towards success.
            </p>
          </span>
          <span className="mt-5">
            <button
              className="bg-[#1266F1] mt-5  shado  shadow-2xl  shadow-black text-white rounded-lg px-[32px] py-[12px] font-semibold text-[1rem]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Know more about us
            </button>
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-5 md:px-0 ">
        <div>
          <img className="rounded-lg" src={src} alt="meetingLogo" />
        </div>
      </div>
    </div>
  );
}
