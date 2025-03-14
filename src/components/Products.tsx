import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <main className="flex flex-col items-center space-y-8 bg-white">
      <section className="w-full flex flex-col items-center pt-36 space-y-4">
        <h1 className="text-center text-xl self-center font-medium p-1 px-3 rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
          Our Products
        </h1>
        <h1 className="text-center text-5xl self-center font-medium ">
          Our Fresh Products
        </h1>
        <h1 className="text-center text-sm self-center text-wrap font-normal w-1/4">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </h1>
        <div className="flex gap-6 ">
          {categoryNavs.map((cat, i) => (
            <div
              key={i}
              className={`${
                i === 0
                  ? "bg-[#749B3F] text-white"
                  : "text-[#a6a6a6] border-[1px] border-[#d9d9d9]"
              } px-6 py-3 rounded-lg `}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>
      <Link
        href=""
        className="px-8 py-4 text-lg textclr font-semibold rounded-lg border-[1px] border-[#ff6a1a] max-w-fit"
      >
        See All Products
      </Link>
    </main>
  );
}

export const categoryNavs = ["All", "Fruits", "Vegetables", "Salad"];
