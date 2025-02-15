"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
    return (
      <section className="w-full py-16 bg-gray-50 text-gray-900">
        {/* 🔹 Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Happy Customers
        </h2>
  
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image.src}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-lg font-medium">{testimonial.review}</p>
              <h3 className="text-xl font-semibold mt-3 text-gray-700">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }