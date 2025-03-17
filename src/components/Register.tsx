"use client";
import { client } from "@/lib/client";
import Image from "next/image";
import React, { useState } from "react";

export default function Register({ setSignIn, setRegister }: { setSignIn: React.Dispatch<React.SetStateAction<boolean>>, setRegister: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState<string>("");
  const [view, setview] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await client.post("auth/login", formData);
      setMsg(res.data.message);
      console.log(msg);
    } catch (error) {
      setMsg("Login data is not correct");
      console.log(error);
    }
  };

  return (
    <main className="bg-black/36 text-black absolute w-full -mt-[30px] h-screen flex justify-center items-center">
      <section className=" bg-white w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-1/3  p-10 space-y-6">
        <div onClick={() => setRegister(false)} className="cursor-pointer flex justify-end">
          <Image src='/icons/cross.svg' alt="cross" width={15} height={15} unoptimized priority className="" />
        </div>
        <p className="text-center text-4xl font-semibold">Register</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" className="">
              Full Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="text-[#a6a6a6] border-[1px] border-[#d9d9d9] rounded-lg p-4 grow appearance-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="text-[#a6a6a6] border-[1px] border-[#d9d9d9] rounded-lg p-4 grow appearance-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="">
              Password
            </label>
            <div className="flex justify-between items-center border-[1px] p-4 border-[#d9d9d9] rounded-lg">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="text-[#a6a6a6]  grow appearance-none focus:outline-none"
              />
              {view ? (
                <Image
                  src="/icons/view.svg"
                  alt="not view"
                  width={20}
                  height={20}
                  unoptimized
                  priority
                  onClick={() => setview(!view)}
                  className="cursor-pointer "
                />
              ) : (
                <Image
                  src="/icons/view2.svg"
                  alt="not view"
                  width={20}
                  height={20}
                  unoptimized
                  priority
                  onClick={() => setview(!view)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <button type="submit" className="cursor-pointer text-center w-full bg-[#FF6A1A] rounded-lg py-4">
            Register
          </button>
        </form>
        <div className="text-center flex items-center">
          <div className="w-auto grow bg-[#d9d9d9] h-[1px]"></div>
          <p className="text-center w-fit px-2">Or Sign in with</p>{" "}
          <div className="w-auto grow bg-[#d9d9d9] h-[1px]"></div>
        </div>
        <section className="flex justify-between gap-4">
          <div className="cursor-pointer grow px-5 py-3 flex place-content-center gap-3 rounded-lg border-[1px] border-[#d9d9d9]">
            <Image
              src="/icons/google.svg"
              alt="google"
              width={20}
              height={20}
              className="text-lg font-semibold"
            />
            Google
          </div>
          <div className="cursor-pointer grow px-5 py-3 flex place-content-center gap-3 rounded-lg border-[1px] border-[#d9d9d9]">
            <Image src="/icons/fb.svg" alt="fb" width={20} height={20}
              className="text-lg font-semibold" />
            Facebook
          </div>
        </section>
        <div className="text-center">
          Don&apos;t have an account?
          <span onClick={() => { setRegister(false); setSignIn(true) }} className="cursor-pointer text-[#FF6A1A] ">
            Log in          </span>
        </div>
      </section>
    </main>
  );
}
