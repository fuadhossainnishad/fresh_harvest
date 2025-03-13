// import Login from "@/components/Login";
// import Register from "@/components/Register";
import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutUs from "./aboutUs/page";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import Blog from "./blog/page";
import ProductDetails from "@/components/ProductDetails";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      {/* <ProductDetails/> */}
      <Products />
      <AboutUs />
      <Offer />
      <Testimonials />
      <Blog />
    </main>
  );
}
