"use client"
import Link from "next/link";
import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AppBar position="sticky" className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg ">
      <Toolbar className="flex justify-between items-center px-6 md:px-16">
        {/* Logo */}
        <Typography variant="h5" className="font-bold text-white tracking-wide">
          Swasthya Health
        </Typography>

        {/* Mobile Menu Button */}
        <IconButton 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link key={index} href={item.toLowerCase()} className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
              {item}
            </Link>
          ))}
        </div>

        {/* "Get a Call" Button */}
        <Button
          variant="contained"
          startIcon={<CallIcon />}
          onClick={() => (window.location.href = "tel:+919876543210")}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full shadow-lg hidden md:flex"
        >
          Call Now
        </Button>
      </Toolbar>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white flex flex-col space-y-3 px-6 py-4 shadow-md">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link key={index} href={item.toLowerCase()} className="text-lg font-medium hover:text-yellow-300 transition duration-300">
              {item}
            </Link>
          ))}
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            onClick={() => (window.location.href = "tel:+919876543210")}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full shadow-lg"
          >
            Call Now
          </Button>
        </div>
      )}
    </AppBar>
  );
}
