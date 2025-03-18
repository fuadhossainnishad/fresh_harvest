"use client";

// import React, { useEffect, useRef, useState } from "react";
// import { ProductsInterface } from "@/store/productSlice";
// import { client } from "@/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Products from "../../../components/Products";
import { useSelector } from "react-redux";
import { selectProductById } from "@/lib/selectProductById";
import { RootState } from '../../../store/store';
import { useState } from "react";

export default function ProductDetails() {
  const [image, setImage] = useState<number>(0)
  const { id } = useParams();
  const productId = Array.isArray(id) ? id[0] : id?.toString() || ""
  const product = useSelector((state: RootState) => selectProductById(state, productId))

  // const fetched = useRef(false);
  // const [productDetails, setProductDetails] = useState<ProductsInterface>({
  //   id: "",
  //   productName: "Coconut",
  //   description:
  //     "From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.",
  //   price: 67,
  //   stock: 10,
  //   images: [],
  //   categoryId: "Fruits",
  //   isDeleted: false,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
  // useEffect(() => {
  //   if (!id || fetched.current) return;
  //   fetched.current = true;
  //   const handleProducts = async () => {
  //     try {
  //       const res = await client.get(`/products/${id}`);
  //       setProductDetails(res.data);
  //     } catch (error) {
  //       console.error(error);
  //       alert("Failed to fetch products");
  //     }
  //   };
  //   handleProducts();
  // }, [id]);

  if (!product) return <main className="px-[12px] lg:px-[120px] bg-white py-40 space-y-10 h-screen">Loading Product</main>

  return (
    <main className="px-[12px] lg:px-[120px] bg-white py-40 space-y-10 h-full">
      <section className="flex gap-24 w-full justify-between h-full">
        <section className="lg:w-[800px] lg:h-[700px] rounded-lg border-[1px] border-black/10 flex flex-col items-center justify-center">
          <Image
            src={product?.images[image] || ""}
            alt=""
            height={566}
            width={566}
            unoptimized
            priority
            className="object-cover object-center  h-full "
          />
          <div className="w-full flex justify-center gap-2 pb-4">
            {product?.images.map((_, i) => (
              <div key={i} onClick={() => setImage(i)} className={`cursor-pointer rounded-full h-3 w-3 ${image === i ? "bg-[#749b3f]" : "bg-[#d9d9d9]"} `}></div>
            ))}
          </div>

        </section>
        <section className="w-1/2 space-y-12 lg:space-y-24 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-xl font-medium p-1 px-3 w-fit rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
              {product.categoryId}
            </h1>
            <h1 className="text-5xl font-semibold">
              {product.productName}
            </h1>
            <div className="flex gap-1 text-lg font-medium">
              <h1>*****</h1>
              <h1>5.0</h1>
              <h1>1 review</h1>
            </div>
            <h1 className="text-4xl font-semibold textclr">
              ${product.price}/kg
            </h1>
            <h1 className="text-lg font-normal text-wrap">
              {product.description}
            </h1>
          </div>

          <div className="space-y-10">
            <div className="flex items-center">
              <h1 className="font-medium pr-4">Quantity:</h1>
              <div className="font-medium border place-items-center p-1 px-3 rounded-l-sm">
                -
              </div>
              <div className="border place-items-center p-1 px-3">1</div>
              <div className="border place-items-center p-1 px-3 rounded-r-sm">
                +
              </div>
              <div className=" place-items-center">/kg</div>
            </div>
            <div className="grid grid-cols-2 gap-12 w-full">
              <button className="bg-[#F4F6F6] gap-2.5 text-lg flex justify-center rounded-lg p-4 px-8">
                <Image
                  src="/icons/fav.svg"
                  alt=""
                  height={25}
                  width={25}
                  unoptimized
                  priority
                  className=" "
                />
                Save as favourite
              </button>
              <button className="btnclr gap-2.5 text-lg flex justify-center rounded-lg p-4 px-8">
                <Image
                  src="/icons/cart.svg"
                  alt=""
                  height={25}
                  width={25}
                  unoptimized
                  priority
                  className=""
                />
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className="space-y-6">
        <div className="flex gap-[10px]">
          <h1 className="px-6 py-3 bg-[#749b3f] rounded-lg text-center items-center text-lg">
            Description
          </h1>
          <h1 className="px-6 py-3 border-[1px] rounded-lg text-center items-center text-lg">
            Reviews (1)
          </h1>
        </div>
        <div className="w-2/3 text-wrap rounded-3xl py-10 px-8 bg-[#f4f6f6] text-[#4A4A52] leading-6">
          Our coconuts are sustainably grown, ensuring the best quality and
          taste...
        </div>
      </section>
      <Products />
    </main>
  );
}
