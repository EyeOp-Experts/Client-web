"use client"; // Mark this component as a Client Component

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/utils/BlogsData';


export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="max-w-sm mx-auto flex flex-col" style={{ backgroundColor: '#fef9e7' }}>
              <Link href={`/blogs/${blog.slug}`} className="flex-1">
                <CardActionArea className="flex-1">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="line-clamp-3">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions className="p-4">
                <Link href={`/blogs/${blog.slug}`}>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
