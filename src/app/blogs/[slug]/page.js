"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogs } from '@/utils/BlogsData';

export default function BlogPost({ params }) {
  const { slug } = React.use(params);
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound(); // Render the 404 page if the blog is not found
  }

  // Preprocess the description to wrap paragraphs in <p> tags
  const formattedDescription = blog.description
    .split('\n') // Split the description by new lines
    .map((paragraph) => `<p>${paragraph}</p>`) // Wrap each paragraph in <p> tags
    .join(''); // Join the paragraphs back together

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Container */}
          <div className="relative w-full h-96">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            {/* Render the formatted description as HTML */}
            <div
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}