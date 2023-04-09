import React from "react";
import Image from "next/image";
import map from "@/public/slider/map.png";
import { motion } from "framer-motion";

function SetLocation() {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className="px-4 pt-24 flex flex-col items-center"
    >
      <p className="text-sm text-center w-60 mb-8">
        Allow access to geo data on the device mark your address on the map
      </p>
      <div>
        <figure className="w-full">
          <Image src={map} alt="Mapa" width="120%" height="100%" />
        </figure>
        <p className="text-end w-full text-[10px] mt-3">Where am i?</p>
      </div>
    </motion.div>
  );
}

export default SetLocation;
