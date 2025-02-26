"use client";
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <Container maxWidth="lg">
        <Typography variant="body2" className="text-center">
          &copy; {new Date().getFullYear()} Sushruta Consultancy. All Rights Reserved.
        </Typography>
        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            <strong>Expert LASIK & Cataract Surgery Consultancy in Delhi NCR</strong> – 
            Connecting patients with the <strong>best eye hospitals in Delhi, Noida, Gurugram, and Faridabad</strong>. 
            Get free guidance for <strong>LASIK surgery, cataract removal, PRK treatment, SMILE surgery, glaucoma care, and vision correction</strong>.
          </Typography>
          <Typography variant="body2" mt={1}>
            <strong>Trusted by top ophthalmologists</strong>, we ensure safe, affordable, and high-quality <strong>laser eye surgery</strong> solutions.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
