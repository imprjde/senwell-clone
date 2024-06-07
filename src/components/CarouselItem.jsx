export default function CarouselItem({ image, title, width }) {
  console.log("IMAGE", image);
  return (
    <div className=" m-auto flex justify-center ">
      <div className=" space-y-3 flex flex-col">
        <span className="">
          <img className={`w-[${width}px]`} src={image} alt="" />{" "}
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
