import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sliderData } from "./data";
import activeFigure from "@/public/slider/active.svg";
import circle from "@/public/slider/circle.svg";
import { useSelector } from "react-redux";

const variants = {
  initial: { x: -32 },
  second: { x: 0 },
  third: { x: 30 },
};

function MultiStepSlider() {
  const { count } = useSelector((state) => state.count);

  return (
    <>
      <motion.div
        key={count}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        className="flex flex-col gap-2 mb-52 mt-16"
      >
        <figure className="w-screen h-80 flex justify-center">
          <Image
            width={300}
            height={300}
            src={sliderData[count].img}
            alt="Slide"
          />
        </figure>
        <p className="px-[122px] text-center font-normal text-base">
          {sliderData[count].text}
        </p>
      </motion.div>
      <div className="absolute w-screen bottom-20">
        <div className="flex items-center gap-3 justify-center mb-4">
          <figure>
            <Image src={circle} alt="Circle" />
          </figure>
          <motion.figure
            className="absolute"
            animate={
              count === 0
                ? "initial"
                : count === 1
                ? "second"
                : count === 2
                ? "third"
                : ""
            }
            variants={variants}
          >
            <Image src={activeFigure} alt="Image" />
          </motion.figure>
          <figure>
            <Image src={circle} alt="Circle" />
          </figure>
          <figure>
            <Image src={circle} alt="Circle" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default MultiStepSlider;
