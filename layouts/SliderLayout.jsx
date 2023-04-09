import React from "react";
import SliderBtn from "@/pages/components/SliderBtn";

function SliderLayout({ children }) {
  return (
    <main>
      {children}
      <SliderBtn />
    </main>
  );
}

export default SliderLayout;
