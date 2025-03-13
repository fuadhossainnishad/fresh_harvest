import React from "react";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <main className="px-[120px] bg-white">
      <section className="flex gap-12  w-full">
        <section className="w-1/2 h-auto border-[1px] border-white rounded-xl flex items-center justify-center ">
          <Image
            src="/images/veg3.png"
            alt=""
            height={566}
            width={566}
            unoptimized
            priority
            className="object-fill"
          />
        </section>
        <section className="w-1/2 space-y-24 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="">Fuits</h1>
            <h1 className="text-5xl">Coconut</h1>
            <div className="flex gap-1">
              <h1>*****</h1>
              <h1>5.0</h1>
              <h1>1 review</h1>
            </div>
            <h1>$6.3/kg</h1>
            <h1 className="text-sm text-wrap">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </h1>
          </div>

          <div className="space-y-10">
            <div className="flex items-center">
              <h1>Quantity</h1>
              <div className="border place-items-center">-</div>
              <div className="border place-items-center">1</div>
              <div className="border place-items-center">+</div>
              <div className=" place-items-center">/kg</div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 w-full">
              <button className="bg-[#F4F6F6] gap-2.5  text-lg flex justify-center rounded-lg p-4 px-8">
                <Image
                  src=""
                  alt=""
                  height={32}
                  width={32}
                  unoptimized
                  priority
                  className="object-cover"
                />
                Save as favourite
              </button>
              <button className="btnclr gap-2.5  text-lg flex justify-center rounded-lg p-4 px-8">
                <Image
                  src=""
                  alt=""
                  height={32}
                  width={32}
                  unoptimized
                  priority
                  className="object-cover"
                />
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className="space-y-6">
        <div className="flex gap-[10px] ">
          <h1 className="px-6 py-3 bg-[#749b3f] rounded-lg text-center items-center text-lg">
            Description
          </h1>
          <h1 className="px-6 py-3  border-[1px] rounded-lg text-center items-center text-lg">
            Reviews (1)
          </h1>
        </div>
        <div className="w-2/3 text-wrap rounded-3xl py-10 px-8 bg-[#f4f6f6] text-[#4A4A52] leading-6">
          Our coconuts are sustainably grown, ensuring the best quality and
          taste. Each coconut is handpicked and carefully prepared, offering you
          the freshest product possible. Rich in healthy fats, electrolytes, and
          essential nutrients, coconuts provide both hydration and nourishment.
          Whether you’re using the water, flesh, or milk, our coconuts bring
          versatility to your kitchen while supporting healthy living. Perfect
          for smoothies, desserts, curries, and more — let the natural sweetness
          of the coconut elevate your recipes. Enjoy the tropical goodness in
          its purest form, directly from nature.
        </div>
      </section>
    </main>
  );
}
