import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <main
      className="flex items-center px[120px]
    "
    >
      <section className="">
        <Image
          src="/images/aboutus.png"
          alt="offer"
          width={700}
          height={570}
          priority
          unoptimized
          className="h-auto w-full object-cover"
        />
      </section>
      <section className="text-wrap">
        <h1 className="texttclr/10 px-8 py-4 text-sm text-center">About us</h1>
        <h2 className="">About Fresh Harvest</h2>
        <p className="">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>
        <button className="texttclr px-8 py-4 text-sm text-center">
          Ream More
        </button>
      </section>
    </main>
  );
}
