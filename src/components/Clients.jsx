import { useEffect, useState } from "react";
import Carousel from "./Carousel";

let logos = [
  {
    thumbnail:
      "https://senwellsys.com/static/media/client1.a934c197bad100935a0f.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client2.836a46ae7491043f5a9a.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client3.91ea7889b54a40d2810f.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client4.ed7cd478ccfe1b5eb807.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client5.f1c424912099b0c73e1f.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client6(new).eb884770632b09f9aa15.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client7.1d56c515d0b3c2c084aa.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client8.d0d2551c81f2fb7d7479.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client9.3ed2e4843caf8d203959.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/client10.70bd24ac0e99d1693975.webp",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/CiscoLogo.9db40e640ffc9d6c25b8.png",
  },
  {
    thumbnail:
      "https://senwellsys.com/static/media/HR4UKNEW.9c2c15c2759faf1aa293.png",
  },
];
export default function Clients() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (one < 1000) {
        setOne((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 2);
    return () => {
      clearInterval(intervalId);
    };
  }, [one]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (two < 90) {
        setTwo((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 30);
    return () => {
      clearInterval(intervalId);
    };
  }, [two]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (three < 500) {
        setThree((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 6);
    return () => {
      clearInterval(intervalId);
    };
  }, [three]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (four < 15) {
        setFour((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [four]);

  return (
    <div className="bg-white   min-h-screen overflow-x-hidden">
      <div id="clients">
        <div className="mt-[50px] mb-[15px] space-y-20">
          <div
            className="text-5xl font-[500px] text-[#131022]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Some of Our Premium Clients
          </div>
          <div className="container pl-10 mx-auto flex flex-col justify-center bg-yellow-5">
            <Carousel images={logos} width={2} slidesToShow={4} />
          </div>
        </div>
      </div>
      <div id="impact">
        <div className="mt-20">
          <div
            className="text-5xl  font-[500px] text-[#131022]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Our Impact
          </div>
        </div>

        <div className="bg-red-6 px-24 w-full">
          <div
            className="bg-[#F3F6FF] mt-14 justify-between  space-x-20 py-[60px]  flex w-full m-auto px-16"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "150px",
              borderTopRightRadius: "150px",
              borderBottomRightRadius: "20px",
            }}
          >
            <div className=" flex min-w-[180px] flex-col">
              <span className="text-[#21aae4] font-bold text-[3.3rem]">
                {one}+
              </span>
              <span
                className="font-[400] text-[18px] -mt-3 "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Project Delivered
              </span>
            </div>
            <div className=" bg min-w-[180px] flex flex-col ">
              <span className="text-[#21aae4] font-bold text-[3.3rem]">
                {two}%
              </span>
              <span
                className="font-[400] text-[18px] -mt-3 "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Contract Renewals
              </span>
            </div>
            <div className=" bg min-w-[180px] flex flex-col">
              <span className="text-[#21aae4] font-bold text-[3.3rem]">
                {" "}
                {three}+
              </span>
              <span
                className="font-[400] text-[18px]  -mt-3 "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Team of passionate
                <br /> Engineers
              </span>
            </div>
            <div className=" bg-yellow-5 flex bg min-w-[180px] flex-col">
              <span className="text-[#21aae4] font-bold text-[3.3rem]">
                {four}+
              </span>
              <span
                className="font-[400] text-[18px] -mt-3 "
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
