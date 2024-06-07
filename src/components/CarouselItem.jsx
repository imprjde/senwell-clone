export default function CarouselItem({ image, title, width }) {
  return (
    <div className=" m-auto flex space-x-3 justify-center ">
      <div className=" space-y-3 flex flex-col">
        <span className="">
          <img className="w-80" src={image} alt="" />{" "}
        </span>
        <span
          className="text-[#808080]  w-full m-auto text-center text-[20px] "
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {title && title}
        </span>
      </div>
    </div>
  );
}
