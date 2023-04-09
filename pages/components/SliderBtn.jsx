"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/slices/sliderSlice";

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
      <button
        className="bg-main-color rounded-xl h-10 fixed w-11/12 bottom-8"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default SliderBtn;
