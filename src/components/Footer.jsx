"user client"
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <Container maxWidth="lg">
        <Typography variant="body2" className="text-center">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;