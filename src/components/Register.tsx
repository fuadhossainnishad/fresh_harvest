'use client'
import { client } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({fullName:"", email: "", password: "" });
    const [msg,setMsg]=useState("")
  
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setFormData({...formData,[e.target.name]:[e.target.value]})
    }
  
    const handleRegistration =async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const res=await client.post("users/register",formData)
        setMsg(res.data.message)
        console.log(msg)
      }catch(error){
        setMsg("User registration not done yet")
        console.log(error)
      }
    };
  return (
    <main className="bg-white text-black">
      <p className="text-center">Register</p>
      <form onSubmit={handleRegistration}>
        <div className="flex flex-col">
          <label htmlFor="fullName" className="">
            Full Name
          </label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="">
            Password
          </label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        {/* <div className="flex justify-between">
          <div className="flex">
            <Image src="" alt="" height={10} width={10}></Image>
            <p className="">Remember me</p>
          </div>
          <div className="underline">Forgot Password</div>
        </div> */}
        <button type="submit" className="text-center w-full bg-[#FF6A1A] ">
          Register
        </button>
      </form>
      <div className="relative text-center">
        <p className="text-center absolute w-full">Or Sign Up with</p>{" "}
        <div className="w-full bg-black h-0.5"></div>
      </div>
      <section className="flex justify-center">
        <div className="flex place-content-center">
          <Image src="" alt="" width={10} height={10} />
          Google
        </div>
        <div className="flex place-content-center">
          <Image src="" alt="" width={10} height={10} />
          Facebook
        </div>
      </section>
      <div className="text-center">
        Don&apos;t have an account?
        <Link href="" className="text-[#FF6A1A] ">
          Log In
        </Link>
      </div>
    </main>
  );
}
