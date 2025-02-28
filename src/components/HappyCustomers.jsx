"use client";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import rahulImage from "@/utils/main-image.webp";
import snehaImage from "@/utils/main-image.webp";
import amitImage from "@/utils/main-image.webp";
import priyaImage from "@/utils/main-image.webp";

const testimonials = [
  {
    name: "Rahul Mehta",
    review: "The LASIK surgery was a life-changer. The staff was very professional, and the process was smooth!",
    image: rahulImage,
  },
  {
    name: "Sneha Kapoor",
    review: "Cataract surgery was painless, and my vision is better than ever. Highly recommend this place!",
    image: snehaImage,
  },
  {
    name: "Amit Sharma",
    review: "The doctors were kind and explained everything well. Retina treatment was successful!",
    image: amitImage,
  },
  {
    name: "Priya Verma",
    review: "Excellent care and advanced technology made my cornea transplant seamless. Thank you!",
    image: priyaImage,
  },
];

export default function HappyCustomers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50 text-gray-900">
      {/* 🔹 Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Happy Customers</h2>

      {/* 🔹 Desktop: Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              loading="lazy" // ✅ Lazy Loading
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-lg font-medium">{testimonial.review}</p>
            <h3 className="text-xl font-semibold mt-3 text-gray-700">- {testimonial.name}</h3>
          </div>
        ))}
      </div>

      {/* 🔹 Mobile: Slidable Carousel with Reduced Text Width */}
      <div
        className="md:hidden relative flex items-center justify-center max-w-sm mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Sliding Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition z-10"
        >
          <ChevronLeft fontSize="large" />
        </button>

        <div className="w-[85%] bg-white border border-gray-300 shadow-lg rounded-2xl p-5 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={70}
            height={70}
            loading="lazy" // ✅ Lazy Loading Applied Here
            className="w-16 h-16 rounded-full object-cover mb-3"
          />
          <p className="text-md font-medium w-[90%] mx-auto">
            {testimonials[currentIndex].review}
          </p>
          <h3 className="text-xl font-semibold mt-3 text-gray-700">
            - {testimonials[currentIndex].name}
          </h3>
        </div>

        {/* Right Sliding Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition z-10"
        >
          <ChevronRight fontSize="large" />
        </button>
      </div>
    </section>
  );
}
