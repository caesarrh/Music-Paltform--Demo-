/** @format */
import React from "react";
import Header from "@/components/Header";
import WhoWeAre from "@/components/Whoweare";
import Concepts from "@/components/Concepts";
import SwiperSliderComponent from "@/components/swiperComponents";
import Publications from "@/components/Publication";
import Awards from "@/components/Awards";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <SwiperSliderComponent />
      <WhoWeAre />
      <Concepts />
      <Publications />
      <Awards />
      <Office />
      <Footer />
    </div>
  );
}