"use client";
import { client } from "@/lib/client";
import { setProduct } from "@/store/productSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Products() {
  // const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );

  // const [details, setDetails] = useState<ProductsInterface>({
  //   id: "",
  //   productName: "",
  //   description: "",
  //   price: 0,
  //   stock: 0,
  //   images: [],
  //   categoryId: "",
  //   isDeleted: false,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });

  // Update handleProductDetails to use `router.push` from `next/navigation`
  // const handleProductDetails = (e: ProductsInterface) => {
  //   router.push(`/product/${e.id}`);
  // };

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const res = await client.get("/products");
        dispatch(setProduct(res.data));
      } catch (error) {
        console.error(error);
        alert("Failed to fetch products");
      }
    };
    handleProducts();
  }, [dispatch]);

  return (
    <main className="flex flex-col items-center space-y-8 bg-white px-[12px] lg:px-[120px]">
      <section className="w-full flex flex-col items-center pt-36 space-y-4">
        <h1 className="text-center text-sm md:text-xl self-center font-medium p-1 px-3 rounded-lg bg-[#749B3F]/10 text-[#749B3F]">
          Our Products
        </h1>
        <h1 className="text-center text-3xl md:text-5xl self-center font-medium ">
          Our Fresh Products
        </h1>
        <h1 className="text-center text-[12px] md:text-sm self-center text-wrap font-normal w-1/2 md:w-1/4">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </h1>
        <div className="flex gap-6">
          {categoryNavs.map((cat, i) => (
            <div
              key={i}
              className={`${
                i === 0
                  ? "bg-[#749B3F] text-white"
                  : "text-[#a6a6a6] border-[1px] border-[#d9d9d9]"
              } px-6 py-3 rounded-lg`}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-center w-full">
        <section className="grid grid-cols-4 gap-6 justify-center">
          {products.length > 0 ? (
            products.map((pro, i) => (
              <div
                key={i}
                // onClick={() => handleProductDetails(pro)}
                className="cursor-pointer text-lg flex flex-col items-center rounded-lg shadow-xl space-y-3 p-4 bg-white"
              >
                <Link href={`/product/${pro.id}`}>
                  <Image
                    src={pro.images[0]} // Displaying the first image
                    alt={pro.productName}
                    width={200}
                    height={200}
                    unoptimized
                    priority
                    className="w-full h-full object-cover rounded-lg bg-[#f4f6f6]"
                  />
                </Link>
                <h3 className=" font-medium">{pro.productName}</h3>
                <p className="font-normal ">${pro.price}/kg</p>
                <Link
                  href={`/product/${pro.id}`}
                  className="btnclr text-center py-2 w-full rounded-lg"
                >
                  Add To Cart
                </Link>
              </div>
            ))
          ) : (
            <p className="col-span-4 text-center">No products available</p>
          )}
        </section>
      </section>

      <Link
        href="/products"
        className="px-8 py-4 text-lg font-semibold rounded-lg border-[1px] border-[#ff6a1a] max-w-fit"
      >
        See All Products
      </Link>
    </main>
  );
}

export const categoryNavs = ["All", "Fruits", "Vegetables", "Salad"];
