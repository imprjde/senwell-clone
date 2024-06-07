// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Banner() {
//   const titles = ["Build", "Digitize", "Create"];
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
//     }, 3000); // Change title every 3 seconds

//     return () => clearInterval(interval);
//   }, [titles.length]);

//   let src =
//     "https://player.vimeo.com/video/870167957?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&muted=1&allowfullscreen=1&playsinline=1";

//   return (
//     <div className="relative bg-white w-full h-screen">
//       <div className="w-full">
//         <iframe
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={src}
//           autoPlay
//           loop
//           muted
//           title="Background_Video"
//         />
//       </div>
//       <div className="z-10 space-y-5 pl-[110px] -mt-6 relative flex flex-col items-start justify-center h-full px-10 bg-black bg-opacity-50">
//         <h1
//           className="text-white font-bold text-[30px] w-[40%] text-left"
//           style={{ fontFamily: "Manrope, sans-serif", lineHeight: "2.2rem" }}
//         >
//           Discover a New Vision for Your Business Solutions with Our Expertise
//         </h1>
//         <div className="text-left -space-y-6">
//           <p
//             className="font-extrabold text-[76px] text-white"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             We
//           </p>
//           <p
//             className="font-extrabold text-[76px] text-white"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             <AnimatePresence mode="wait">
//               {titles[currentTitleIndex]?.split("").map((ele, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: 2,
//                   }}
//                 >
//                   {ele}
//                 </motion.span>
//               ))}
//             </AnimatePresence>
//           </p>
//         </div>
//         <p
//           className="mt-2 text-[16px] w-[35%] text-white text-left font-semibold"
//           style={{ fontFamily: "Manrope, sans-serif" }}
//         >
//           The next stage of your digital success begins right here with Senwell
//           Group Private Limited.
//         </p>
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////// TEXT ANIMATION ////////////////////////////////////

// import { AnimatePresence, motion } from "framer-motion";

export default function Banner() {
  // const [title, setTitle] = useState(["B", "u", "i", "l", "d"]);
  // const [userName, setUserName] = useState(null);

  // useEffect(() => {
  //   setUserName("Build");
  //   setTimeout(() => {
  //     setUserName(null);
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setUserName("Digitize");
  //   }, 3000);

  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setUserName("Create");
  //   }, 7000);
  // }, []);

  let src =
    "https://player.vimeo.com/video/870167957?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&muted=1&allowfullscreen=1&playsinline=1";

  return (
    <div className="relative bg-white mb-10 w-full h-screen">
      <div className="w-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={src}
          autoPlay
          loop
          muted
          title="Background_Video"
        />
      </div>
      <div className="z-10 space-y-5 pl-[110px] -mt-6 relative flex flex-col items-start justify-center h-full px-10 ">
        <h1
          className="text-white font-bold text-[30px] w-[40%] text-left"
          style={{ fontFamily: "Manrope, sans-serif", lineHeight: "2.2rem" }}
        >
          Discover a New Vision for Your Business Solutions with Our Expertise
        </h1>
        <div className="text-left -space-y-6">
          <p
            className="font-extrabold text-[76px] text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We
          </p>
          <p
            className="font-extrabold text-[76px] text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {" "}
            {/* <AnimatePresence>
              {" "}
              {userName?.split("").map((ele, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    // duration: 1,
                    duration: 2,
                    // delay: i / 12,
                    delay: i / 24,
                  }}
                  key={i}
                >
                  {ele}
                </motion.span>
              ))}
            </AnimatePresence> */}
            Build
          </p>
        </div>
        <p
          className="mt-2 text-[16px] w-[35%] text-white text-left font-semibold"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          The next stage of your digital success begins right here with Senwell
          Group Private Limited.
        </p>
      </div>
    </div>
  );
}
