import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";



function Footer() {
  // Function to get the current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className="bg-black w-full h-[80vh] pb-12 flex flex-col justify-end px-4 md:px-[5rem] ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8 md:gap-0">
          <div className="text-white flex flex-row gap-4">
            <Link href="">About Us</Link>
            <Link href="">Contact</Link>
            <Link href="">Help</Link>
          </div>
          <div className="text-white flex gap-8">
            <Link href="/">
              <FaFacebookSquare className="w-6 h-6" />
            </Link>
            <FaTwitter className="w-6 h-6" />
            <Link href="https://www.instagram.com/munii_finance/?hl=en">
              <FaVimeoV className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/MuniiFinance">
              <FaYoutube className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-white">
            <h1 className="text-sm">&#169;{getCurrentYear()} Munii Finance. All rights reserved</h1>
          </div>
          <div className="text-white flex gap-8">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>

  );
}

export default Footer;
