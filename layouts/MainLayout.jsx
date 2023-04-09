import Navbar from "@/pages/components/navbar/Navbar";
import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      {children}
      <Navbar />
    </div>
  );
}

export default MainLayout;
