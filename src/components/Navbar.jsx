"use client";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import logo from "@/utils/logo_transparent.png"; // ✅ Use the transparent logo

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AppBar
      position="sticky"
      className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg"
    >
      <Toolbar className="flex justify-between items-center px-4 md:px-16 min-h-[50px] py-1">
        {/* 🔹 Left Side: Logo + Name */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Visionary Logo"
            width={40} // ✅ Smaller logo in mobile
            height={40}
            className="object-contain md:w-[50px] md:h-[50px]" // ✅ Different sizes for mobile & desktop
            priority={false} // ✅ Do not prioritize loading for performance
            loading="lazy" // ✅ Lazy loading for optimization
          />
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
          {["Blogs", "About"].map((item, index) => (
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
            className="hidden md:flex" // 🔹 Visible only on large screens
            sx={{
              backgroundColor: "#facc15", // yellow-400
              color: "#1e40af", // blue-800
              "&:hover": {
                backgroundColor: "#fde047", // yellow-300
              },
              fontWeight: "bold",
              padding: "8px 16px",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textTransform: "none", // 🔹 Prevents uppercase transformation
              fontSize: "1rem", // 🔹 Adjust font size for large screens
            }}
          >
            Call Now
          </Button>
        </div>

        {/* 🔹 Mobile Navigation (Call Now + Menu) */}
        <div className="flex items-center md:hidden space-x-2">
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            onClick={() => (window.location.href = "tel:+919818996967")}
            className="flex md:hidden" // 🔹 Visible only on mobile screens
            sx={{
              backgroundColor: "#facc15", // yellow-400
              color: "#1e40af", // blue-800
              "&:hover": {
                backgroundColor: "#fde047", // yellow-300
              },
              fontWeight: "bold",
              padding: "6px 12px", // 🔹 Smaller padding for mobile
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textTransform: "none", // 🔹 Prevents uppercase transformation
              fontSize: "0.875rem", // 🔹 Smaller font size for mobile
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
