import React from "react";
import { motion } from "framer-motion";
import { SlArrowLeft } from "react-icons/sl";
import { backPage } from "@/slices/dishSlice";
import { useDispatch } from "react-redux";

function CarPage() {
  const dispatch = useDispatch();

  return (
    <motion.section
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className="pt-7 px-4"
    >
      <header>
        <figure className="cursor-pointer" onClick={() => dispatch(backPage())}>
          <SlArrowLeft size={20} />
        </figure>
      </header>
    </motion.section>
  );
}

export default CarPage;
