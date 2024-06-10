// import React from "react";

// export default function OurWork() {
//   let images = [
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/image11.26c39f84a91aa8044e2f.webp",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/image2.b7aec96dc0d8ad151d0c.webp",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/image3.6f84a2197261d2ece920.webp",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/image4.9acd541a8fb18b0c4921.webp",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/image5.559f28f2b6c3bad79859.webp",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/image6.2aee06d9e0e7aa8a74e3.webp",
//     },
//   ];
//   return (
//     <div className="min-h-screen mb-16 px-20">
//       <div className=" flex flex-col">
//         <span
//           className="font-medium text-5xl text-[#0B2E58] "
//           style={{ fontFamily: "Manrope, sans-serif" }}
//         >
//           Our Work
//         </span>
//         <span
//           className="font-medium text-5xl text-justify  mt-8 text-[#585c7b] text-[17px]"
//           style={{ fontFamily: "Manrope, sans-serif", lineHeight: "25px" }}
//         >
//           At Senwell Group Private Limited, we don't just provide IT and Digital
//           Marketing services; we craft digital experiences that elevate your
//           business in the modern landscape. Our Portfolio is a testament to the
//           transformative Power of Technology and Creativity, merging seamlessly
//           to drive success. Join us in shaping the digital narrative - Where
//           Technology meets Creativity, and Solutions pave the path to success.
//           Transforming Today, Powering Tomorrow.
//         </span>
//       </div>
//       <div className="mt-20">
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 ">
//           {images.map((image, i) => (
//             <div
//               className="bg-white p-10 rounded-lg border border-gray-200 flex m-auto"
//               key={i}
//             >
//               <img
//                 className=" object-cover scale-125"
//                 src={image.thumbnail}
//                 alt=""
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

//////RESP//////////////////////

import React from "react";

export default function OurWork() {
  let images = [
    {
      thumbnail:
        "https://senwellsys.com/static/media/image11.26c39f84a91aa8044e2f.webp",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/image2.b7aec96dc0d8ad151d0c.webp",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/image3.6f84a2197261d2ece920.webp",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/image4.9acd541a8fb18b0c4921.webp",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/image5.559f28f2b6c3bad79859.webp",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/image6.2aee06d9e0e7aa8a74e3.webp",
    },
  ];
  return (
    <div className="min-h-screen -mt-32 md:-mt-0 mb-16 px-10 md:px-20">
      <div className=" flex flex-col">
        <span
          className="font-medium text-5xl text-[#0B2E58] "
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Our Work
        </span>
        <span
          className="font-medium text-5xl text-justify  mt-8 text-[#585c7b] text-[17px]"
          style={{ fontFamily: "Manrope, sans-serif", lineHeight: "25px" }}
        >
          At Senwell Group Private Limited, we don't just provide IT and Digital
          Marketing services; we craft digital experiences that elevate your
          business in the modern landscape. Our Portfolio is a testament to the
          transformative Power of Technology and Creativity, merging seamlessly
          to drive success. Join us in shaping the digital narrative - Where
          Technology meets Creativity, and Solutions pave the path to success.
          Transforming Today, Powering Tomorrow.
        </span>
      </div>
      <div className="mt-20">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 ">
          {images.map((image, i) => (
            <div
              className="bg-white p-10 rounded-lg border border-gray-200 flex m-auto"
              key={i}
            >
              <img
                className=" object-cover scale-125"
                src={image.thumbnail}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
