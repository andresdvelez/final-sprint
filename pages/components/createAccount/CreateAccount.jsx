"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion'

function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    router.push("/signup/location");
  };

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className="px-4 py-20 pb-36 h-screen"
    >
      <h1 className="font-semibold text-2xl tracking-wider mb-14 text-[#414141]">
        Create account
      </h1>
      <form
        className="flex flex-col justify-between h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="flex flex-col gap-2 pb-1 border-b-[1px]  border-b-[#A7A7A7] mb-4">
            <span className="uppercase text-[#A7A7A7] text-[10px]">name</span>
            <input
              type="text"
              className="font-light text-sm text-dark"
              {...register("username")}
              placeholder="Robert Foxy"
            />
          </label>
          <label className="flex flex-col gap-2 pb-1 border-b-[1px]  border-b-[#A7A7A7] mb-4">
            <span className="uppercase text-[#A7A7A7] text-[10px]">email</span>
            <input
              type="text"
              {...register("email")}
              className="font-light text-sm text-dark"
              placeholder="example@gmail.com"
            />
          </label>
          <label className="flex flex-col gap-2 pb-1 border-b-[1px]  border-b-[#A7A7A7] mb-4">
            <span className="uppercase text-[#A7A7A7] text-[10px]">
              password
            </span>
            <input
              type="password"
              {...register("password")}
              className="font-light text-sm text-dark"
              placeholder="******"
            />
          </label>
        </div>
      </form>
    </motion.div>
  );
}

export default SignUp;
