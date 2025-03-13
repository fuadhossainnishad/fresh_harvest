import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <main className="w-full flex flex-col items-center ">
      <h1 className="text-center text-xl self-center">Our Products</h1>
      <h1 className="text-center text-5xl self-center">Our Fresh Products</h1>
      <h1 className="text-center text-sm self-center text-wrap">
        We pride ourselves on offering a wide variety of fresh and flavorful
        fruits, vegetables, and salad ingredients.
      </h1>
      <div className="flex gap-6">
        {categoryNavs.map((cat, i) => (
          <div key={i} className="bg-[749B3F] px-6 py-3">
            {cat}
          </div>
        ))}
      </div>
      <Link href='' className="px-8 py-4 text-lg textclr">See All Products</Link>
    </main>
  );
}

export const categoryNavs = ["All", "Fruits", "Vegetables", "Salad"];
