"use client";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/utils/BlogsData';
import { motion } from 'framer-motion';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insightful articles, tips, and stories from our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="max-w-sm mx-auto"
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100">
                <Link href={`/blogs/${blog.slug}`} className="flex-1">
                  <CardActionArea className="flex-1 flex flex-col">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                        className="transition-transform duration-500 hover:scale-105"
                      />
                      {blog.category && (
                        <Box className="absolute top-4 right-4">
                          <Chip
                            label={blog.category}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255,255,255,0.9)',
                              fontWeight: 'bold'
                            }}
                          />
                        </Box>
                      )}
                    </div>
                    <CardContent className="flex-1">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="font-bold text-gray-800 line-clamp-2"
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="line-clamp-3 mb-4 text-gray-600"
                      >
                        {blog.description}
                      </Typography>
                      <div className="flex items-center text-sm text-gray-500">
                        {blog.date && (
                          <span className="mr-3">{blog.date}</span>
                        )}
                        {blog.readTime && (
                          <span>{blog.readTime} read</span>
                        )}
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions className="p-4 border-t border-gray-100">
                  <Link href={`/blogs/${blog.slug}`} passHref>
                    <Button
                      size="medium"
                      color="primary"
                      variant="outlined"
                      sx={{
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white'
                        }
                      }}
                    >
                      Read More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}