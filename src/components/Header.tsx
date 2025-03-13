import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
      <header className="fixed w-full px-[120px] py-[30px] inset-0 z-10">
        <main className="flex justify-between w-full">
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
          <section className="flex justify-between items-center gap-16 text-sm text-wrap">
            {Navs.map((nav, i) => (
              <Link href={nav.path} key={i} className="">
                {nav.name}
              </Link>
            ))}
          </section>
          <section className="flex justify-between items-center gap-4 text-sm">
            <div className="flex gap-2">
              <Image src="/icons/logo.svg" alt="" width={10} height={10} />
              Favourite
            </div>
            <div className="flex gap-2">
              <Image src="/icons/logo.svg" alt="" width={10} height={`0`} />
              Cart
            </div>
            <div className="px-6 py-3 border-[1px] border-white rounded-sm">
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
