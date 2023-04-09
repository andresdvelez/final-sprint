import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { sliderData } from "./data";
import activeFigure from "@/public/slider/active.svg";
import circle from "@/public/slider/circle.svg";

const variants = {
  initial: { x: -32 },
  second: { x: 0 },
  third: { x: 30 },
};

function Slider() {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <section className="w-screen h-screen flex flex-col justify-center">
      <motion.div
        key={count}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        className="flex flex-col gap-2 mb-56 mt-20"
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
      <div className="absolute w-screen bottom-12">
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
        <div className="px-4">
          {count === 2 ? (
            <button className="bg-main-color rounded-xl h-10 w-full relative">
              <Link
                className="absolute bottom-0 top-2 right-0 w-full h-full"
                href="/signin"
              >
                Next
              </Link>
            </button>
          ) : (
            <button
              className="bg-main-color rounded-xl h-10 w-full"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Slider;
