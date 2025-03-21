"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { usePathname } from "next/navigation";
// import React, { useState } from "react";

export default function Header() {
  const [signin, setSignin] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false)
  const [scroll, setScroll] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== undefined) {
        if (pathname !== '/') {
          window.onscroll = () => {
            setScroll(window.scrollY > 50)
          }
        } else {
          window.onscroll = () => {
            setScroll(window.scrollY > 700)
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => { window.removeEventListener("scroll", handleScroll) }
  })

  // if (pathname !== '/') {
  //   if (scrollref.current) {
  //     setScroll(scrollref.current.scrollTop > 50)
  //   }
  // } else {
  //   if (scrollref.current) {
  //     setScroll(scrollref.current.scrollTop > 700)
  //   }
  // }


  // }

  // const handleSignIn = () => {
  //   setSignin(true);
  // };
  return (
    <header className={`fixed  w-auto px-[12px] lg:px-[120px]  py-[30px] left-0 right-0 top-0 z-50 flex justify-center ${scroll ? "backdrop-blur-lg bg-blue-500/20" : ""}`}>
      <main className="flex justify-between w-full z-10">
        <section className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            height={17}
            width={30}
            priority
          />
          <p>Fresh Harvests</p>
        </section>
        <section className="flex leading-6 justify-between items-center gap-16 text-base text-wrap">
          {Navbars.map((nav, i) => (
            <Link href={nav.path} key={i} className="">
              {nav.name}
            </Link>
          ))}
        </section>
        <section className="flex justify-between items-center gap-4 text-base text-white">
          <div className="flex gap-2 cursor-pointer">
            <Image
              src="/icons/fav.svg"
              alt="fav"
              width={20}
              height={20}
              unoptimized
              priority
              className=""
            />
            Favourite
          </div>
          <Link href='/cart'>
            <div className="flex gap-2 cursor-pointer">
              <Image
                src="/icons/cart.svg"
                alt="cart"
                width={20}
                height={20}
                unoptimized
                priority
                className=""
              />
              Cart
            </div>
          </Link>

          <div
            onClick={() => setSignin(!signin)}
            className="px-6 py-2 border-[1px] border-white rounded-sm cursor-pointer "
          >
            Sign in
          </div>
        </section>

      </main>
      {signin &&
        <Login setSignIn={setSignin} setRegister={setRegister} />
      }
      {register &&
        <Register setSignIn={setSignin} setRegister={setRegister} />
      }
    </header>
  );
}

export const Navbars: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/product" },
  { name: "About us", path: "/aboutUs" },
  { name: "Blog", path: "/blog" },
];
