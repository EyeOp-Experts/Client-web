"use client"; // Mark this component as a Client Component

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image'; // Import Next.js Image component
import lasikImage from "@/utils/Lasik.webp";
import cataractImage from "@/utils/Cataract.webp";
import retinaImage from "@/utils/Retinal.webp";

const blogs = [
  {
    id: 1,
    title: 'Introduction to Next.js',
    description: 'Learn the basics of Next.js and how to build server-rendered React applications.',
    image: lasikImage,
    link: '#',
  },
  {
    id: 2,
    title: 'Tailwind CSS for Rapid UI Development',
    description: 'Discover how to use Tailwind CSS to quickly style your applications.',
    image: cataractImage,
    link: '#',
  },
  {
    id: 3,
    title: 'Getting Started with Material-UI',
    description: 'A beginner’s guide to using Material-UI components in your React projects.',
    image: retinaImage,
    link: '#',
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="max-w-sm mx-auto flex flex-col" style={{ backgroundColor: '#fef9e7' }}>
              <CardActionArea className="flex-1">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover" // Ensures the image fits properly
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <CardContent className="flex-1">
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="line-clamp-3">
                    {blog.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="p-4">
                <Button size="small" color="primary" href={blog.link}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}