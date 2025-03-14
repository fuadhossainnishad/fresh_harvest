// import Image from "next/image";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <main className="text-center bg-white pt-20 w-full space-y-16 ">
      <section className="space-y-4 flex flex-col items-center">
        <h1 className="text-xl font-medium p-1 px-3 w-fit rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
          Testimonial
        </h1>
        <h1 className="text-5xl font-medium">What Our Customers Say</h1>
        <div className="flex justify-center w-full">
          <h1 className=" text-center font-normal w-[28%] text-wrap">
            Don&apos;t just take our word for it—here&apos;s what some of our
            customers have to say about their experience with Fresh Harvest:
          </h1>
        </div>
      </section>
      <section className="flex h-auto items-center justify-center w-full gap-24">
        <div className=" ">
          <Image
            src="/icons/test.svg"
            alt="testimonials"
            height={600}
            width={400}
            unoptimized
            priority
            className="object-top object-cover "
          />
        </div>

        <div className="text-start text-xl font-normal text-wrap max-w-[35%] h-fit rounded-3xl p-8 bg-[#f4f6f6] space-y-8 ">
          <h1 className="text-xl leading-8">
            I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It&apos;s always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </h1>
          <h1 className="text-lg">
            <span className="font-medium">Jane Doe </span>- Professional chef
          </h1>
        </div>
      </section>
    </main>
  );
}
