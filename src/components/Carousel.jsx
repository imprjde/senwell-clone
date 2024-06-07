import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";

export default function Carousel({ images, width, slidesToShow }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: false,
  };

  return (
    <div className="flex items-center  justify-center ">
      <div className="w-full flex  flex-col m-auto justify-center">
        <Slider {...settings} className="flex flex-row  justify-center">
          {" "}
          {images.map(({ thumbnail, title }, i) => (
            <>
              <CarouselItem
                key={i}
                image={thumbnail}
                title={title}
                width={width}
              />
              {console.log("thumbnail", thumbnail)}
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}