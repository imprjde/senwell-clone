// export default function Rewards() {
//   const logos = [
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Clutch1.283202073903f5374c1d.png",
//     },
//     {
//       thumbnail:
//         "data:image/png;base64,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",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/IOS27.9cc01188ff752bd42b2b.png",
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/TopCompany.ced597f69cbe6bdb4d9b.png",
//     },
//   ];
//   return (
//     <div>
//       <div className="bg-black py-10    flex m-auto justify-center items-center ">
//         <div className=" flex m-auto justify-center space-x-10 items-center">
//           <div className="flex flex-col">
//             <span
//               className="text-white text-[40px]"
//               style={{ fontFamily: "Manrope, sans-serif" }}
//             >
//               Rewards &
//             </span>
//             <span
//               className=" text-[40px] text-[#E84625] -mt-4"
//               style={{ fontFamily: "Manrope, sans-serif" }}
//             >
//               Recognition
//             </span>
//           </div>
//           <div className="flex space-x-8 pl-6">
//             {logos.map((logo, i) => (
//               <div>
//                 <img className="w-40" src={logo.thumbnail} alt="" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////////////RESP//////////////////////////////////////

export default function Rewards() {
  const logos = [
    {
      thumbnail:
        "https://senwellsys.com/static/media/Clutch1.283202073903f5374c1d.png",
    },
    {
      thumbnail:
        "data:image/png;base64,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",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/IOS27.9cc01188ff752bd42b2b.png",
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/TopCompany.ced597f69cbe6bdb4d9b.png",
    },
  ];
  return (
    <div>
      <div className="bg-black py-10    flex m-auto justify-center items-center ">
        <div className=" flex flex-col md:flex-row m-auto justify-center md:space-x-10 items-center">
          <div className="flex flex-col">
            <span
              className="text-white text-[40px]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Rewards &
            </span>
            <span
              className=" text-[40px] text-[#E84625] -mt-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Recognition
            </span>
          </div>
          <div className="md:flex md:space-x-8 md:pl-6">
            {logos.map((logo, i) => (
              <div key={i}>
                <img className="w-52 md:w-40" src={logo.thumbnail} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
