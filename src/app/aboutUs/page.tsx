import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <main
      className="space-y-20 flex gap-24 px-[120px] pt-20 bg-white justify-center items-center
    "
    >
      <section className="w-[53%]">
        <Image
          src="/icons/about.svg"
          alt="offer"
          width={400}
          height={570}
          priority
          unoptimized
          className="w-full h-full"
        />
      </section>
      <section className="text-wrap space-y-5 w-[40%]">
        <h1 className="text-xl font-medium p-1 px-3 w-fit rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
          About us
        </h1>
        <p className="text-5xl font-medium w-fit">About Fresh Harvest</p>
        <p className="text-base font-normal text-wrap ">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <Link
          href=""
          className="block px-8 py-4 text-lg textclr font-semibold rounded-lg border-[1px] border-[#ff6a1a] max-w-fit"
        >
          See All Products
        </Link>
      </section>
    </main>
  );
}
