"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/slices/sliderSlice";
import Link from "next/link";

function SliderBtn() {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleNext = () => {
    console.log("hola");
    console.log(increment);
    dispatch(increment());
  };

  return (
    <div className="w-full flex justify-center">
      {count === 6 ? (
        <Link
          className="bg-main-color flex items-center justify-center rounded-xl h-10 fixed w-11/12 bottom-8"
          href="/home"
        >
          Next
        </Link>
      ) : (
        <button
          className="bg-main-color rounded-xl h-10 fixed w-11/12 bottom-8"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default SliderBtn;
