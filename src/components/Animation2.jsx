import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Animation2() {
  let src =
    "https://senwellsys.com/static/media/projectmanagement.3b4c6dd9effa0cbafae8.webp";
  const [ref, inView] = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <div className=" py-10 items-center space-y-20 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 200 }}
        animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <div className="flex flex-col text-left mx-10 my-4">
          <span className="text-[#3D8ED7] font-bold text-4xl">Start Fast.</span>
          <span className="text-[#212529] mt-3 font-bold text-4xl">
            Finish Confidently.
          </span>
          <span className="text-[#212529] text-justify block isolate mt-2">
            {" "}
            We want you to be able to start working on your project quickly, so
            we begin planning our work before our first call to hit the ground
            running as soon as you settle on your team.
          </span>
          <span className="text-[#212529] text-justify block isolate mt-3">
            {" "}
            As a quality-obsessed software development outsourcing company, we
            want to ensure your satisfaction with our work, so our QA is more
            thorough than you can imagine.
          </span>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex m-auto justify-center"
      >
        <div className="flex m-auto justify-center">
          <img className="w-[45%] h-auto object-cover" src={src} alt="" />
        </div>
      </motion.div>
    </div>
  );
}
