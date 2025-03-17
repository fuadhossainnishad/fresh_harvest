import Image from "next/image";
import React from "react";

export default function Offer() {
  return (
    <main className="offerbg  relative w-screen h-fit">
      <div className="bg-[url(/icons/bg.svg)] bg-no-repeat bg-contain bg-left-bottom absolute left-0 bottom-0 w-full h-full z-[-1]"></div>
      <div className="bg-[url(/icons/bg2.svg)] bg-no-repeat bg-contain bg-right-top absolute right-0 top-0 w-full h-full  z-[-2]"></div>
      <div className="absolute right-[10%] bottom-20  h-[63%] z-[-1]">
        <Image
          src="/images/offer2.png"
          alt="offer"
          height={40}
          width={60}
          unoptimized
          priority
          className="object-cover h-full w-full"
        />
      </div>
      <section className="space-y-8 px-[12px] lg:px-[120px] py-[90px] ">
        <div className="text-xl font-medium p-1 px-3 w-fit rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
          Special Offer
        </div>
        <div className="text-[#212337] text-8xl font-medium">
          Seasonal Fruit Bundle
        </div>
        <div className="text-5xl text-[#212337] font-medium">
          Discount up to <span className="text-[#ff6a1a]">80% OFF</span>
        </div>
        <section className="flex gap-6">
          <div className="flex flex-col bg-white rounded-lg  w-fit items-center p-10 py-6  text-4xl">
            <div className="py-4 ">03</div>
            <div className="text-lg font-normal">Days</div>
          </div>
          <div className="flex flex-col bg-white rounded-lg  w-fit items-center p-10 py-6  text-4xl">
            <div className="py-4 ">03</div>
            <div className="text-lg font-normal">Days</div>
          </div>
          <div className="flex flex-col bg-white rounded-lg  w-fit items-center p-10 py-6  text-4xl">
            <div className="py-4 ">03</div>
            <div className="text-lg font-normal">Days</div>
          </div>
          <div className="flex flex-col bg-white rounded-lg  w-fit items-center p-10 py-6  text-4xl">
            <div className="py-4 ">03</div>
            <div className="text-lg font-normal">Days</div>
          </div>
        </section>
        <div className="rounded-4xl bg-[#176d38] py-4 px-8 text-3xl font-semibold w-fit ">
          <h1 className="text-white">
            CODE : <span className="text-[#fac714]">FRUIT28</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
