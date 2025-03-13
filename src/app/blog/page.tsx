import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <main className="w-full text-center px-[120px] bg-white">
      <h1 className="">Our Blog</h1>

      <div className="max-w-fit inline-block text-center text-wrap">
        <h1 className="text-5xl">Fresh Harvest Blog</h1>
        <h1 className="text-sm whitespace-nowrap">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
      <Contents />
      <Contents />
      <Contents />
      </div>
     
    </main>
  );
}

export function Contents() {
  return (
    <main className="text-start text-lg ">
      <section>
        <Image
          src="/images/blog.png"
          alt=""
          height={10}
          width={10}
          unoptimized
          priority
          className="object-cover h-auto w-auto rounded-3xl"
        />
        <h1 className="font-normal">Date</h1>
        <h1 className="font-medium">
          Exploring Seasonal Delights: A Guide to What&apos;s Fresh Right Now
        </h1>
        <button className="flex gap-3 textclr font-semibold">
          Read More
          <Image
            src="/icons/rightArrow.svg"
            alt="rightArrow"
            height={16}
            width={16}
            unoptimized
            priority
            className="object-fill h-auto w-auto"
          />
        </button>
      </section>
    </main>
  );
}
