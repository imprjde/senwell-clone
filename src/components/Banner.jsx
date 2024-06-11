// import Typewriter from "typewriter-effect";

// export default function Banner() {
//   let src =
//     "https://player.vimeo.com/video/870167957?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&muted=1&allowfullscreen=1&playsinline=1";

//   return (
//     <div className="relative bg-white    mb-10 w-full h-screen">
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
//       <div className="z-10 space-y-5 pl-[110px] -mt-6 relative flex flex-col items-start justify-center h-full px-10 ">
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
//             <Typewriter
//               options={{
//                 strings: ["Build", "Digitilize", "Create"],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
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

////////RESP//////////////

import Typewriter from "typewriter-effect";

export default function Banner() {
  let src =
    "https://player.vimeo.com/video/870167957?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&muted=1&allowfullscreen=1&playsinline=1";

  return (
    <div className="relative bg-white mb-4 md:mb-10 w-full h-fit md:h-screen">
      <div className="w-full  mt-6 md:mt-0">
        <iframe
          className="absolute md:top-0 left-0 w-full h-full object-cover"
          src={src}
          autoPlay
          loop
          muted
          title="Background_Video"
        />
      </div>

      {/* HERE  */}
      <div className="z-10  space-y-5 py-6 md:py-0  mt-[80px] md:mt-10 md:pl-[110px]   -top-[340p x] md:-top-0  -mt-6 relative flex flex-col items-start justify-center h-full px-10 ">
        <h1
          className="text-white hidden md:flex font-bold text-[30px] w-[40%] text-left"
          style={{ fontFamily: "Manrope, sans-serif", lineHeight: "2.2rem" }}
        >
          Discover a New Vision for Your Business Solutions with Our Expertise
        </h1>

        <h1
          className="text-white md:hidden font-bold  text-[14px] w-fit text-left"
          style={{ fontFamily: "Manrope, sans-serif", lineHeight: "2rem" }}
        >
          Discover a New Vision for Your Business <br /> Solutions with Our
          Expertise
        </h1>

        <div className="text-left  md:-space-y-6">
          <p
            className="font-extrabold text-[20px] md:text-[76px] text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We
          </p>
          <p
            className="font-extrabold text-[20px] md:text-[76px] text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <Typewriter
              options={{
                strings: ["Build", "Digitilize", "Create"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <p
          className="mt-2 text-[16px] w-[35%] hidden md:flex text-white text-left font-semibold"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          The next stage of your digital success begins right here with Senwell
          Group Private Limited.
        </p>
      </div>
    </div>
  );
}
