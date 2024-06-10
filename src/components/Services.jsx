// export default function Services() {
//   let services = [
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Web-1.7334464320823c8a5348.webp",
//       title: "Software Product Development",
//       about: `Senwell Group Private Limited can help you realize your
//         business's vision because we are experts in developing software
//         products that are intuitive and driven by design. Our objective
//         is to accelerate the innovation of software products, offering a
//         unique competitive advantage and a superior customer experience.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Digital-2.396c1a0161468935ffb8.webp",
//       title: "Custom Software Development",
//       about: ` Senwell Group Private Limited can help you achieve a unique advantage for your complex business needs. Realize the full potential of our expertise in developing dependable, agile custom software solutions and applications. Accelerate the digital transformation of your company with our dedication to scalability, agility, and technological innovation.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Mob-1.d37e21fc8d568b31de20.webp",
//       title: "SaaS Development",
//       about: `Creating a successful SaaS product requires more than just writing code, it also requires careful planning, user-centered design thinking, efficient development, and ongoing improvement. With our comprehensive SaaS development services, which cover every stage from conception to deployment and beyond, you can take your business to new heights.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/It-2.55d5b757d7140bc967df.webp",
//       title: "Software Testing & QA",
//       about: `Work with Senwell Group Private Limited to fully immerse yourself in the dynamic world of software testing and quality assurance services. Our dedication assures you of cost-effectiveness as well as unmatched delivery speed without sacrificing quality. Set new industry standards for excellence with a significant increase in the efficiency of code deployment and an optimized Software Development Life Cycle.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Testing-1.a6395e8d5e3204e2f17e.webp",
//       title: "Application Development",
//       about: `Senwell Group Private Limited is a leading mobile app development company that prides itself on having a team of experienced developers with a track record of accomplishments. Our professionals are skilled in creating hybrid, iOS, and Android apps with a clear emphasis on user-centric design. Put your trust in us to use our unmatched experience and digital intelligence to bring your vision to life.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Testing-1.a6395e8d5e3204e2f17e.webp",
//       title: "UI/UX Development",
//       about: `Create a user interface that is enticing in order to improve business engagement and provide memorable online experiences. Unlock Senwell Group Private Limited' full potential by making use of state-of-the-art tools and technologies to create aesthetically pleasing and intuitive designs. To make sure your online presence sticks out in the crowded online space, take advantage of our extensive creative designing experience.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Dev-1.9c4e4d0775d045232aca.webp",
//       title: "Web Development",
//       about: `Give Senwell Group Private Limited the task of meticulously planning, developing, and implementing web apps that result in notable changes to transform your web development projects. Within our comprehensive development approach, we begin by conducting a thorough analysis of the disruptive web development challenges. Next, with ease, we design a user-friendly user interface (UI/UX) that ensures a reliable, fully functional web solution tailored to your unique needs.`,
//     },
//     {
//       thumbnail:
//         "https://senwellsys.com/static/media/Out-1.3676cecb5785a7115d4d.webp",
//       title: "Cloud",
//       about: `Senwell Group Private Limited is a prominent provider of cloud solutions and a leading cloud development company. Its mission is to help businesses transform their IT infrastructure seamlessly by offering highly affordable cloud services. Our team of seasoned professionals specializes in providing cutting-edge cloud computing consulting services, enabling businesses to achieve previously unheard-of levels of productivity.`,
//     },
//   ];

//   return (
//     <div className="bg-[#F3F6FF] cursor-pointer min-h-screen py-16 space-y-10">
//       <div>
//         <span
//           className="font-medium text-5xl text-[#0B2E58]"
//           style={{ fontFamily: "Manrope, sans-serif" }}
//         >
//           Services we Offer
//         </span>
//       </div>
//       <div>
//         <span
//           className="font-medium text-2xl text-[#333333]"
//           style={{ fontFamily: "Manrope, sans-serif" }}
//         >
//           We build software solutions with clean code and engage in all stages
//           of product development.
//         </span>
//       </div>
//       <div className=" py-10 px-[110px] ">
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className={`bg-white flex group   overflow-hidden ${
//                 i % 2 === 0 ? "flex-col" : "flex-col-reverse"
//               } `}
//             >
//               <div className="top overflow-hidden ">
//                 <img
//                   className={`transition w-full  duration-500 ease-in-out transform scale-100 group-hover:scale-110 max-w-full max-h-full ${
//                     i % 2 === 0 ? "mt-" : "mt-8"
//                   } `}
//                   src={service.thumbnail}
//                   alt=""
//                 />
//               </div>
//               <div
//                 className={` mx-5 text-justify ${
//                   i % 2 !== 0 ? "pt-5 " : "mt-6 mb-"
//                 }`}
//               >
//                 <span
//                   className="text-[#0b2e58] font-semibold text-xl"
//                   style={{ fontFamily: "Manrope, sans-serif" }}
//                 >
//                   {service.title}
//                 </span>
//                 <br />
//                 <div className="mt-2">
//                   <span className="text-[#333] text-[16px]">
//                     {service.about}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////RESP ////////////////////////////////////////////////

export default function Services() {
  let services = [
    {
      thumbnail:
        "https://senwellsys.com/static/media/Web-1.7334464320823c8a5348.webp",
      title: "Software Product Development",
      about: `Senwell Group Private Limited can help you realize your
        business's vision because we are experts in developing software
        products that are intuitive and driven by design. Our objective
        is to accelerate the innovation of software products, offering a
        unique competitive advantage and a superior customer experience.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/Digital-2.396c1a0161468935ffb8.webp",
      title: "Custom Software Development",
      about: ` Senwell Group Private Limited can help you achieve a unique advantage for your complex business needs. Realize the full potential of our expertise in developing dependable, agile custom software solutions and applications. Accelerate the digital transformation of your company with our dedication to scalability, agility, and technological innovation.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/Mob-1.d37e21fc8d568b31de20.webp",
      title: "SaaS Development",
      about: `Creating a successful SaaS product requires more than just writing code, it also requires careful planning, user-centered design thinking, efficient development, and ongoing improvement. With our comprehensive SaaS development services, which cover every stage from conception to deployment and beyond, you can take your business to new heights.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/It-2.55d5b757d7140bc967df.webp",
      title: "Software Testing & QA",
      about: `Work with Senwell Group Private Limited to fully immerse yourself in the dynamic world of software testing and quality assurance services. Our dedication assures you of cost-effectiveness as well as unmatched delivery speed without sacrificing quality. Set new industry standards for excellence with a significant increase in the efficiency of code deployment and an optimized Software Development Life Cycle.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/Testing-1.a6395e8d5e3204e2f17e.webp",
      title: "Application Development",
      about: `Senwell Group Private Limited is a leading mobile app development company that prides itself on having a team of experienced developers with a track record of accomplishments. Our professionals are skilled in creating hybrid, iOS, and Android apps with a clear emphasis on user-centric design. Put your trust in us to use our unmatched experience and digital intelligence to bring your vision to life.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/Testing-1.a6395e8d5e3204e2f17e.webp",
      title: "UI/UX Development",
      about: `Create a user interface that is enticing in order to improve business engagement and provide memorable online experiences. Unlock Senwell Group Private Limited' full potential by making use of state-of-the-art tools and technologies to create aesthetically pleasing and intuitive designs. To make sure your online presence sticks out in the crowded online space, take advantage of our extensive creative designing experience.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/Dev-1.9c4e4d0775d045232aca.webp",
      title: "Web Development",
      about: `Give Senwell Group Private Limited the task of meticulously planning, developing, and implementing web apps that result in notable changes to transform your web development projects. Within our comprehensive development approach, we begin by conducting a thorough analysis of the disruptive web development challenges. Next, with ease, we design a user-friendly user interface (UI/UX) that ensures a reliable, fully functional web solution tailored to your unique needs.`,
    },
    {
      thumbnail:
        "https://senwellsys.com/static/media/Out-1.3676cecb5785a7115d4d.webp",
      title: "Cloud",
      about: `Senwell Group Private Limited is a prominent provider of cloud solutions and a leading cloud development company. Its mission is to help businesses transform their IT infrastructure seamlessly by offering highly affordable cloud services. Our team of seasoned professionals specializes in providing cutting-edge cloud computing consulting services, enabling businesses to achieve previously unheard-of levels of productivity.`,
    },
  ];

  return (
    <div className="bg-[#F3F6FF] cursor-pointer min-h-screen py-16 space-y-10">
      <div>
        <span
          className="font-semibold md:font-medium text-[2rem] md:text-5xl text-[#0B2E58]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Services we Offer
        </span>
      </div>
      <div>
        <span
          className="font-medium text-[1.1rem] md:text-2xl text-[#333333]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          We build software solutions with clean code and engage in all stages
          of product development.
        </span>
      </div>
      <div className=" md:py-10 px-5 md:px-[110px] ">
        {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 "> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-white flex group shadow   overflow-hidden ${
                i % 2 === 0 ? "flex-col" : "flex-col-reverse"
              } `}
            >
              <div className="top overflow-hidden ">
                <img
                  className={`transition w-full  duration-500 ease-in-out transform scale-100 group-hover:scale-110 max-w-full max-h-full ${
                    i % 2 === 0 ? "mt-" : "mt-8"
                  } `}
                  src={service.thumbnail}
                  alt=""
                />
              </div>
              <div
                className={` mx-5 text-justify ${
                  i % 2 !== 0 ? "pt-5 " : "mt-6 mb-"
                }`}
              >
                <span
                  className="text-[#0b2e58] font-semibold text-xl"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {service.title}
                </span>
                <br />
                <div className="mt-2">
                  <span className="text-[#333] text-[16px]">
                    {service.about}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
