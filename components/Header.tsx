"use client";

import { useState, useEffect } from "react";
import { logo } from "@/public/images";
import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu if clicked outside the menu
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu")) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="">
      <nav className="flex items-center justify-between px-4 md:px-[5rem] py-[1.5rem]">
        <div className="">
          <Image src={logo} alt="logo" />
        </div>
        <div className="md:flex items-center gap-[1.5rem] hidden ">
          <button className="p-2 bg-black rounded-[50%]">
            <RiInstagramLine className="text-primary w-[19px] h-[16px]" />
          </button>
          <button className="p-2 bg-black rounded-[50%]">
            <FaXTwitter className="text-primary w-[19px] h-[16px]" />
          </button>
          <button className="border-2 border-black py-[18px] px-[32px] rounded-[20px] font-[600] text-lg">
            Use Web App
          </button>
        </div>
        <div className="flex md:hidden">
          {isMobileMenuOpen ? (
            <TfiClose
              className="text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <HiOutlineBars3BottomRight
              className="text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-20 right-0 w-64 h-full bg-white z-50 mobile-menu"
            >
              <div className="text-center py-8">
                <Link
                  href="/about"
                  className="block mb-4 mt-2 hover:text-green-500"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="block mb-4 hover:text-green-500"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  href="/#faq"
                  className="block mb-4 hover-text-green-500"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
                <Link
                  href="/support"
                  className="block mb-4 hover-text-green-500"
                  onClick={closeMobileMenu}
                >
                  Support
                </Link>
                <Link
                  href="#"
                  className="block mx-4 bg-green-500 text-white rounded py-3 px-4 hover-bg-transparent hover-border-green-700 border"
                  onClick={closeMobileMenu}
                >
                  Get the App
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
