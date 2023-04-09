import { Roboto } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { setPhone } from "@/slices/authSlice";
import Slider from "./components/slider/Slider";

const mainFont = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400"],
});

export default function Home() {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.auth.phone);

  return (
    <main className={`${mainFont.variable} bg-main-gradient`}>
      <Slider />
    </main>
  );
}
