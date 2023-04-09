import Logo from "@/public/logo.svg";
import Image from "next/image";
import { motion } from 'framer-motion'

function OtpCode() {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className="flex flex-col justify-between px-4 py-14 h-screen w-screen"
    >
      <div className="flex flex-col items-center">
        <figure className="w-24 h-16 mb-6">
          <Image src={Logo} alt="Logo" />
        </figure>
        <h3 className="text-dark text-xl mb-3">Verification</h3>
        <p className="text-dark text-sm w-56 text-center mb-8">
          Enter the four-digit code from SMS SMS not received.{" "}
          {/* Add handle click */}
          <strong className="cursor-pointer">Send again?</strong>
        </p>
        {/* OTP Code input */}
      </div>
      <div></div>
    </motion.div>
  );
}

export default OtpCode;
