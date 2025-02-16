"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "./mini/Topbar";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCategories, setShowCategories] = useState(false); // Hover state for categories
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="w-full">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <nav className="w-full bg-white px-2 lg:px-40 py-4 grid grid-cols-2 lg:grid-cols-5 justify-between items-center">
      <div className="logo text-[34px] font-bold font-josefin-sans text-black"><Link href={"/"}>Hekto</Link></div>

        {/* Menu */}
        <div className="hidden md:flex col-span-2 justify-start gap-4 items-center">
          <Link href={"/"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">Home</Link>

          {/* Categories with Hover Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <Link href={"#"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">Categories</Link>

            {/* Dropdown Menu */}
            {showCategories && (
              <div className="absolute top-6 left-0 bg-white border z-50 shadow-md rounded-md flex flex-col w-40">
                <Link href={"/category-chairs"} className="px-4 py-2 text-gray-700 hover:bg-gray-100">Chairs</Link>
                <Link href={"/category-sofa"} className="px-4 py-2 text-gray-700 hover:bg-gray-100">Sofa</Link>
              </div>
            )}
          </div>

          <Link href={"/shop"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">Shop</Link>
          <Link href={"/about"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">About</Link>
          <Link href={"/contact"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">Contact</Link>
          <Link href={"/faq"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">FAQ</Link>
          <Link href={"/blog"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">Blog</Link>
        </div>

        {/* Mobile navigator icon */}
        <div className="flex md:hidden justify-end items-center px-5">
          <button
            className="w-8 h-6 flex flex-col justify-between"
            onClick={() => setOpen(!open)}
          >
            <div className={`h-1 w-full bg-gray-700 transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`h-1 w-full bg-gray-700 transition-opacity duration-300 ${open ? "opacity-0" : ""}`}></div>
            <div className={`h-1 w-full bg-gray-700 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#070722] text-white flex flex-col items-center pt-20 z-50 transition-transform duration-500 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button 
            onClick={() => setOpen(false)} 
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✖
          </button>

          {/* Mobile Search Bar */}
          <form 
            onSubmit={handleSearch} 
            className="w-4/5 h-10 flex items-center border border-gray-200 bg-white rounded-md px-2"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-black px-2 py-1 outline-none"
              placeholder="Search products..."
            />
            <button type="submit" className="bg-[#fb2e86] p-2 rounded-md">
              <FiSearch size={20} color="white" />
            </button>
          </form>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center mt-5 space-y-4 text-lg">
            <Link href={"/"} className="hover:text-[#fb2e86] transition-colors duration-300">Home</Link>
            <Link href={"/shop"} className="hover:text-[#fb2e86] transition-colors duration-300">Shop</Link>
            <Link href={"/blog"} className="hover:text-[#fb2e86] transition-colors duration-300">Blog</Link>
            <Link href={"/about"} className="hover:text-[#fb2e86] transition-colors duration-300">About</Link>
            <Link href={"/faq"} className="hover:text-[#fb2e86] transition-colors duration-300">FAQ</Link>
            <Link href={"/contact"} className="hover:text-[#fb2e86] transition-colors duration-300">Contact</Link>
          </nav>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:col-span-5 lg:col-span-2 md:flex justify-end items-center">
          <form onSubmit={handleSearch} className="md:w-full lg:w-80 h-10 bg-skyBlue grid grid-cols-6 items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 font-josefin-sans font-semibold text-offNavyBlue border-gray-300 border outline-none placeholder:text-gray-300 col-span-5"
              placeholder="Search products..."
            />
            <button type="submit" className="bg-[#fb2e86] w-full h-full flex justify-center items-center">
              <FiSearch size={20} color="white" />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
