"use client";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import logo from "@/utils/logo_transparent.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AppBar
      position="sticky"
      className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg !important"
    >
      <Toolbar className="flex justify-between items-center px-4 md:px-16 min-h-[50px] py-1">
        {/* 🔹 Left Side: Website Name (Adjusted for Mobile) */}
        <div className="flex items-center space-x-2">
          {/* Logo (Hidden on Mobile) */}
          <div className="hidden md:block"> {/* Hide logo on mobile */}
            <Image
              src={logo}
              alt="Visionary Logo"
              width={40}
              height={40}
              className="object-contain md:w-[50px] md:h-[50px]"
              priority={false}
              loading="lazy"
            />
          </div>

          {/* Website Name (Smaller on Mobile) */}
          <Typography
            variant="h6"
            className="text-white font-bold font-serif tracking-wide text-xs md:text-2xl leading-snug text-center md:text-left"
          >
            <span className="text-white">SWASTHYA HEALTH</span>
          </Typography>
        </div>

        {/* 🔹 Desktop Navigation (Visible on larger screens) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href={`/`}
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300"
          >
            {"Home"}
          </Link>
          {"Blogs About".split(" ").map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300"
            >
              {item}
            </Link>
          ))}

          {/* 🔹 Call Now Button (Visible only in desktop) */}
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            onClick={() => (window.location.href = "tel:+919818996967")}
            className="hidden md:flex"
            sx={{
              backgroundColor: "#facc15",
              color: "#1e40af",
              "&:hover": {
                backgroundColor: "#fde047",
              },
              fontWeight: "bold",
              padding: "8px 16px",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Call Now
          </Button>
        </div>

        {/* 🔹 Mobile Navigation (Call Now + Menu) */}
        <div className="flex items-center md:hidden space-x-2">
          {/* Call Now Button (Full Width for Mobile) */}
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            onClick={() => (window.location.href = "tel:+919818996967")}
            className="flex md:hidden w-full justify-center"
            sx={{
              backgroundColor: "#facc15",
              color: "#1e40af",
              "&:hover": {
                backgroundColor: "#fde047",
              },
              fontWeight: "bold",
              padding: "6px 16px",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textTransform: "none",
              fontSize: "0.875rem",
              whiteSpace: "nowrap",
            }}
          >
            Call Now
          </Button>

          {/* Mobile Menu Button */}
          {isMounted && (
            <IconButton
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </div>
      </Toolbar>

      {/* 🔹 Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white flex flex-col space-y-3 px-6 py-4 shadow-md">
          {["Home", "Blogs", "About"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="text-lg font-medium hover:text-yellow-300 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </AppBar>
  );
}
