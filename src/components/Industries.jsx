import React from "react";
import Carousel from "./Carousel";
const images = [
  {
    title: "Education",
    thumbnail:
      "https://senwellsys.com/static/media/10.2e8d1cbae3654b257b4a.webp",
  },
  {
    title: "Fintech",
    thumbnail:
      "https://senwellsys.com/static/media/11.49c57dec8fc5ea2c1ca9.webp",
  },
  {
    title: "Transport & Logistics",
    thumbnail:
      "https://senwellsys.com/static/media/12.f79f8e29763e5c47fcef.webp",
  },
  {
    title: "Aerospace",
    thumbnail:
      "https://senwellsys.com/static/media/1.6d537142e2f7c3d8aa80.webp",
  },
  {
    title: "Entertainment",
    thumbnail:
      "https://senwellsys.com/static/media/2.de82bc7ee9fea17636b2.webp",
  },
  {
    title: "Retail & Ecommerce",
    thumbnail:
      "https://senwellsys.com/static/media/3.bcfc7132acf007a62691.webp",
  },
  {
    title: "Communications",
    thumbnail:
      "https://senwellsys.com/static/media/4.3f055936f6e5aaafddeb.webp",
  },
  {
    title: "StartUps",
    thumbnail:
      "https://senwellsys.com/static/media/5.72a9aa04e2763403d079.webp",
  },
  {
    title: "Automative",
    thumbnail:
      "https://senwellsys.com/static/media/6.6362215500c86565846a.webp",
  },
  {
    title: "Platforms & Softwares",
    thumbnail:
      "https://senwellsys.com/static/media/7.cf8dbca6e41cb65477f2.webp",
  },
  {
    title: "Block chain",
    thumbnail:
      "https://senwellsys.com/static/media/8New.ebe274b00bb6819e2303.png",
  },
  {
    title: "Healthcare",
    thumbnail:
      "https://senwellsys.com/static/media/9.34009ff2461ea2143f14.webp",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen w-full -mt-5 flex m-auto space-y-10 flex-col bg-red-5  justify-center items-center ">
      <div className="bg-green-0 w-full">
        <span
          className="font-medium text-5xl text-[#0B2E58]"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {" "}
          Industries We Serve
        </span>
      </div>
      <div className="container pl-10 mx-auto flex flex-col justify-center bg-yellow-5">
        <Carousel images={images} width={350} slidesToShow={3} />
      </div>
    </div>
  );
}
