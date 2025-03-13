import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <main className="text-center ">
      <section>
        <h1 className="">Testimonial</h1>
        <h1 className="text-5xl font-medium">What Our Customers Say</h1>
        <div className="flex justify-center w-full">
          <h1 className=" text-center w-1/4 text-wrap">
            Don&apos;t just take our word for it—here&apos;s what some of our
            customers have to say about their experience with Fresh Harvest:
          </h1>
        </div>
      </section>
      <section className="flex gap-14 items-center justify-center w-full">
        <div>
          <Image
            src="/images/test.png"
            alt="testimonials"
            height={100}
            width={100}
            unoptimized
            priority
            className="object-cover object-top rounded-[200px] h-[60%] w-[40%]"
          />
        </div>
        <div className="text-start">
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
