// import React from "react";

// export default function Review() {
//   let reviews = [
//     {
//       title: "TOP NOTCH",
//       review: ` Through Senwell Group Private Limited, I've participated in
//       multiple outsourcing projects for North American clients, with
//       their performance consistently exceeding that of in-house teams.
//       Their remarkable productivity sets the company apart, among other
//       advantages.`,
//       name: "Derick",
//       place: "Hatchster Ltd. UK",
//     },
//     {
//       title: "INCREDIBLE",
//       review: `I've engaged in numerous outsourcing projects for North American clients through Senwell Group Private Limited. Their performance consistently surpasses that of clients' in-house teams, exemplifying remarkable productivity. This advantage, among others, sets the company apart significantly.`,
//       name: "Kevin Atom",
//       place: "Property hatch Ltd, United States",
//     },
//     {
//       title: "PHENOMENAL",
//       review: ` We are highly pleased with Senwell Group Private Limited' performance as our contractor. Their team is extremely responsive, possesses a deep grasp of the subject matter, and consistently delivers code at an impressively rapid pace. This swiftness in code delivery holds particular significance for our travel-oriented business.`,
//       name: "Nicolo Anderson",
//       place: "England",
//     },
//     {
//       title: "EXTRAORDINARY SERVICE",
//       review: ` Working with you has been a terrific experience. Yes, your customer assistance is excellent, and your SEO and SMO services are really effective. I'm confident that I won't ever collaborate with anyone else on my digital marketing campaign.`,
//       name: "Daniel Peters",
//       place: "Colombia",
//     },
//   ];

//   let svg = (
//     <svg
//       width="40"
//       height="30"
//       viewBox="0 0 40 30"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g opacity="0.2">
//         <path
//           d="M0 19.2589C0 7.92167 9.45455 1.69587 14.1818 0.00012207C8.36364 4.6513 8.12121 9.93233 8.72727 11.9915C14.9091 10.9013 18.9091 14.5351 18.9091 20.7124C18.9091 25.945 16 28.5451 13.0909 29.4334C8.72727 30.7658 0 30.5962 0 19.2589Z"
//           fill="#2490EF"
//         ></path>
//         <path
//           d="M21.0898 19.2589C21.0898 7.92167 30.5444 1.69587 35.2717 0.00012207C29.4535 4.6513 29.2111 9.93233 29.8171 11.9915C35.9989 10.9013 39.9989 14.5351 39.9989 20.7124C39.9989 25.945 37.0898 28.5451 34.1808 29.4334C29.8171 30.7658 21.0898 30.5962 21.0898 19.2589Z"
//           fill="#2490EF"
//         ></path>
//       </g>
//     </svg>
//   );
//   return (
//     <div className="bg-[#F9FAFB]  mt-10  min-h-screen py-32 ">
//       <div>
//         <span
//           className="font-medium text-5xl text-[#0B2E58]"
//           style={{ fontFamily: "Manrope, sans-serif" }}
//         >
//           {" "}
//           What Our Clients Say{" "}
//         </span>
//       </div>
//       <div className=" mx-[88px] mt-14" >
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ">
//           {reviews.map((review, i) => (
//             <div
//               key={i}
//               className="bg-white  shadow-md rounded-lg px-5 py-10 space-y-8 flex flex-col"
//             >
//               <span className=" text-[#212529] font-extrabold text-[26px] text- text-center">
//                 {review.title}
//               </span>
//               <span >{svg}</span>
//               <span
//                 className=" text-[16px] text-justify text-[#333]"
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                 }}
//               >
//                 {review.review}
//               </span>
//               <span className="flex flex-col">
//                 <span className="font-[500] text-[#212529]  text-left">
//                   {review.name}
//                 </span>
//                 <span className=" text-left text-[#212529]  text-[13px]">
//                   {review.place}
//                 </span>
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////RESP////////////

import React from "react";

export default function Review() {
  let reviews = [
    {
      title: "TOP NOTCH",
      review: ` Through Senwell Group Private Limited, I've participated in
      multiple outsourcing projects for North American clients, with
      their performance consistently exceeding that of in-house teams.
      Their remarkable productivity sets the company apart, among other
      advantages.`,
      name: "Derick",
      place: "Hatchster Ltd. UK",
    },
    {
      title: "INCREDIBLE",
      review: `I've engaged in numerous outsourcing projects for North American clients through Senwell Group Private Limited. Their performance consistently surpasses that of clients' in-house teams, exemplifying remarkable productivity. This advantage, among others, sets the company apart significantly.`,
      name: "Kevin Atom",
      place: "Property hatch Ltd, United States",
    },
    {
      title: "PHENOMENAL",
      review: ` We are highly pleased with Senwell Group Private Limited' performance as our contractor. Their team is extremely responsive, possesses a deep grasp of the subject matter, and consistently delivers code at an impressively rapid pace. This swiftness in code delivery holds particular significance for our travel-oriented business.`,
      name: "Nicolo Anderson",
      place: "England",
    },
    {
      title: "EXTRAORDINARY SERVICE",
      review: ` Working with you has been a terrific experience. Yes, your customer assistance is excellent, and your SEO and SMO services are really effective. I'm confident that I won't ever collaborate with anyone else on my digital marketing campaign.`,
      name: "Daniel Peters",
      place: "Colombia",
    },
  ];

  let svg = (
    <svg
      width="40"
      height="30"
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          d="M0 19.2589C0 7.92167 9.45455 1.69587 14.1818 0.00012207C8.36364 4.6513 8.12121 9.93233 8.72727 11.9915C14.9091 10.9013 18.9091 14.5351 18.9091 20.7124C18.9091 25.945 16 28.5451 13.0909 29.4334C8.72727 30.7658 0 30.5962 0 19.2589Z"
          fill="#2490EF"
        ></path>
        <path
          d="M21.0898 19.2589C21.0898 7.92167 30.5444 1.69587 35.2717 0.00012207C29.4535 4.6513 29.2111 9.93233 29.8171 11.9915C35.9989 10.9013 39.9989 14.5351 39.9989 20.7124C39.9989 25.945 37.0898 28.5451 34.1808 29.4334C29.8171 30.7658 21.0898 30.5962 21.0898 19.2589Z"
          fill="#2490EF"
        ></path>
      </g>
    </svg>
  );
  return (
    <div className="bg-[#F9FAFB]  mt-10  min-h-screen py-32 ">
      <div>
        <span
          // className="font-medium text-5xl text-[#0B2E58]"
          className="font-semibold md:font-medium text-[1.8rem] md:text-5xl text-[#0B2E58]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          What Our Clients Say{" "}
        </span>
      </div>
      <div className="mx-4 md:mx-[88px] mt-14">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white  shadow-md rounded-lg px-5 py-10 space-y-8 flex flex-col"
            >
              <span className=" text-[#212529] font-extrabold text-[26px] text- text-center">
                {review.title}
              </span>
              <span>{svg}</span>
              <span
                className=" text-[16px] text-justify text-[#333]"
                style={{
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                {review.review}
              </span>
              <span className="flex flex-col">
                <span className="font-[500] text-[#212529] text-xl  text-left">
                  {review.name}
                </span>
                <span className=" text-left text-[#212529]  text-[13px]">
                  {review.place}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
