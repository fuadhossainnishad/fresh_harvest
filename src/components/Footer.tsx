import React from "react";
import Image from "next/image";
import Download from "../ui/Download";
import QuickLinks from "@/ui/QuickLinks";
// import { Navbars } from "./Header";

export default function Footer() {
  const QuickLinks1 = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/product" },
    { name: "About us", path: "/aboutUs" },
    { name: "Blog", path: "/blog" },
    { name: "Detail Blog", path: "/detailBlog" },
  ];
  return (
    <footer className="px-[120px] bg-[#F4F6F6] pt-16 pb-6 space-y-8">
      <section className="flex justify-between">
        <section className="flex flex-col justify-between w-fit">
          <div className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
              priority
              className="object-cover"
            />
            <h1 className="text-xl">Fresh Harvest</h1>
          </div>
          <Download />
        </section>
        <QuickLinks text="Quick Links 1" navs={QuickLinks1} />
        <QuickLinks text="Quick Links 2" navs={QuickLnks2} />
        <section className="flex flex-col space-y-3">
          <h1>Contact us</h1>
          <div className="flex gap-2">
            <Image
              src="/icons/mobile.svg"
              alt="number"
              height={20}
              width={20}
              priority
              className="object-cover"
            />
            <h1>01627408824</h1>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/mail.svg"
              alt="number"
              height={20}
              width={20}
              priority
              className="object-cover"
            />
            <h1>fuadhossainb01@gmail.com</h1>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/location.svg"
              alt="number"
              height={20}
              width={20}
              priority
              className="object-cover"
            />
            <h1>Dhaka,Bangladesh</h1>
          </div>
          <div>
            <h1 className="text-sm font-semibold">Accepted Payment Methods:</h1>
            <div className="flex gap-[10px]">
              <Image
                src="/icons/visa.svg"
                alt="number"
                height={70}
                width={48}
                priority
                className="object-cover"
              />
              <Image
                src="/icons/paypal.svg"
                alt="number"
                height={70}
                width={48}
                priority
                className="object-cover"
              />
              <Image
                src="/icons/applePay.svg"
                alt="number"
                height={70}
                width={48}
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </section>
      <div className="h-0.5 w-full bg-black"></div>
      <section className="flex justify-between">
        <h1 className="text-sm text-wrap">
          © Copyright 2024, All Rights Reserved by Fuad Hossain & Anidevaura
        </h1>
        <div className="flex gap-3">
          <Image
            src="/icons/twitter.svg"
            alt="number"
            height={32}
            width={32}
            priority
            className="object-cover"
          />
          <Image
            src="/icons/fb.svg"
            alt="number"
            height={32}
            width={32}
            priority
            className="object-cover"
          />
          <Image
            src="/icons/instagram.svg"
            alt="number"
            height={32}
            width={32}
            priority
            className="object-cover"
          />
        </div>
      </section>
    </footer>
  );
}

export const QuickLnks2 = [
  { name: "Favourite", path: "/favourite" },
  { name: "Cart", path: "/cart" },
  { name: "Sign in", path: "/signin" },
  { name: "Register", path: "/register" },
];
