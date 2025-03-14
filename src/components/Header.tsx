import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" fixed w-full px-[120px] py-[30px] inset-0 z-30">
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
          {Navs.map((nav, i) => (
            <Link href={nav.path} key={i} className="">
              {nav.name}
            </Link>
          ))}
        </section>
        <section className="flex justify-between items-center gap-4 text-base text-white">
          <div className="flex gap-2">
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
          <div className="flex gap-2">
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
          <div className="px-6 py-3 border-0 border-white rounded-sm  ">
            Sign in
          </div>
        </section>
      </main>
    </header>
  );
}

export const Navs = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About us", path: "/aboutUs" },
  { name: "Blog", path: "/blog" },
];
