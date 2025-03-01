"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";

import lasikImage from "@/utils/Lasik.webp";
import cataractImage from "@/utils/Cataract.webp";
import retinaImage from "@/utils/Retinal.webp";
import glaucomaImage from "@/utils/Glaucoma.webp";
import corneaImage from "@/utils/Corneal.webp";
import pediatricImage from "@/utils/Pediatric.webp";

const surgeries = [
  { image: lasikImage, title: "LASIK Surgery", link: "/lasik" },
  { image: cataractImage, title: "Cataract Surgery", link: "/cataract" },
  { image: retinaImage, title: "Retina Treatment", link: "/retina" },
  { image: glaucomaImage, title: "Glaucoma Care", link: "/glaucoma" },
  { image: corneaImage, title: "Corneal Transplant", link: "/cornea" },
  { image: pediatricImage, title: "Pediatric Eye Care", link: "/pediatric" },
];

export default function SurgerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % surgeries.length);
      setTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? surgeries.length - 1 : prev - 1));
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[550px] flex flex-col items-center justify-center  bg-gradient-to-b from-[#fef9e7] to-[#fef9e7] text-gray-900 relative overflow-hidden">
      {/* 🔹 Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Types of Surgeries We Provide
      </h2>

      <div className="relative w-full max-w-[95%] md:max-w-[85%] h-[450px] flex items-center justify-center overflow-hidden">
        {/* Image Container with Smooth Transition */}
        <div
          className="absolute w-full h-full flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {surgeries.map((surgery, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-300 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image
                    src={surgery.image}
                    alt={surgery.title}
                    layout="fill"
                    objectFit="cover" // ✅ Ensures image fits properly
                    loading="lazy"
                    className="absolute w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white w-full">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {surgery.title}
                    </h3>
                    <a
                      href={surgery.link}
                      className="text-[#FACC15] hover:text-yellow-300 text-sm mt-2 font-medium underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Now Visible on Mobile Too */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
