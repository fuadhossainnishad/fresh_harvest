// import Login from "@/components/Login";
// import Register from "@/components/Register";
import React from "react";
import Image from "next/image";
import Download from "@/ui/Download";

export default function Hero() {
  return (
    <main className="bgimageadjust px-[12px] lg:px-[120px] pt-[180px] relative pb-10 w-full">
      <div className="absolute -right-40 bottom-0  w-auto h-full flex items-end">
        <Image
          src="/images/cover.png"
          alt="cover"
          height={900}
          width={680}
          unoptimized
          priority
          className=" object-cover w-full h-1/2 sm:h-2/3 md:h-full"
        />
      </div>
      <section className="relative z-10">
        <section className="max-w-1/2 md:max-w-1/2 space-y-4">
          <h1 className="text-xl lg:text-xl py-1 px-3 bg-[#749B3F]/10 text-[#749B3F]  w-fit rounded-lg ">
            Welcome to Fresh Harvest
          </h1>
          <h1 className="text-wrap font-medium text-[#212337] text-5xl lg:text-[100px]">
            Fresh Fruits and Vegetables
          </h1>
          <h1 className="text-lg font-normal text-wrap ">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </h1>
          <button className="btnclr cursor-pointer text-white text-lg font-semibold py-4 px-8 rounded-[8px]">
            Shop Now
          </button>
        </section>
        <div className="flex gap-6 px-32 py-6 items-start">
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={80}
            height={60}
            unoptimized
            priority
            className="object-fill "
          />
          <Image
            src="/images/offer.png"
            alt="offer"
            width={50}
            height={50}
            unoptimized
            priority
            className="object-cover h-auto w-[34%] ml-6"
          />
        </div>
        <div className="mt-5">
          <Download />
        </div>
      </section>
    </main>
  );
}

{
  /* <section className=" h-screen bg-[url('/images/bg2.png')] bg-cover">
        <div className=" inset-[50%]">
          <h1 className="text-base p-1 bg-[#749B3F]/10 text-[#749B3F] w-fit rounded-lg ">
            Welcome to Fresh Harvest
          </h1>
          <h1>Fresh Fruits and Vegetables</h1>
          <h1>
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </h1>
          <button className="btnclr text-white text-sm py-4 px-8 rounded-[8px]">
            Shop Now
          </button>
          <div className="">
            <Image
              src="/icons/arrow.svg"
              alt="arrow"
              width={50}
              height={50}
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="h-screen bg-[#749B3F] w-[30%]"></div>
        </div>

        {/* <Login />
        <Register /> */
}
//</section> */}
