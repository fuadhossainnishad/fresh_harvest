import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <main className="pt-20 pb-40 w-full flex flex-col items-center gap-10 text-center px-[120px] bg-white">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-xl font-medium p-1 px-3 w-fit rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
          Our Blog
        </h1>
        <h1 className="text-5xl font-medium">Fresh Harvest Blog</h1>
        <h1 className="text-sm text-wrap w-[26%]">
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
      <section className="space-y-3">
        <Image
          src="/images/blog.png"
          alt=""
          height={10}
          width={10}
          unoptimized
          priority
          className="object-cover h-auto w-auto rounded-3xl"
        />
        <h1 className="font-normal">Dec 12,2025</h1>
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
