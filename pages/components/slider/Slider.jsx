import { useSelector } from "react-redux";
import SliderLayout from "@/layouts/SliderLayout";
import MultiStepSlider from "./MultiStepSlider";
import SignIn from "@/pages/components/signIn/SignIn";
import OtpCode from "@/pages/components/otpCode/OtpCode";
import SetLocation from "@/pages/components/setLocation/SetLocaation";
import SignUp from "../createAccount/CreateAccount";

function Slider() {
  const { count } = useSelector((state) => state.count);

  return (
    <section className="w-screen h-screen flex flex-col justify-center">
      <SliderLayout>
        {count < 3 ? <MultiStepSlider /> : ""}
        {count === 3 ? (
          <SignIn />
        ) : count === 4 ? (
          <OtpCode />
        ) : count === 5 ? (
          <SignUp />
        ) : count === 6 ? (
          <SetLocation />
        ) : null}
      </SliderLayout>
    </section>
  );
}

export default Slider;
