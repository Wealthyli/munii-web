"use client";

import { useState, useEffect } from "react";
import { logo } from "@/public/images";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ComingSoonModal from "./ComingSoonModal";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between px-4 lg:px-[5rem] md:py-[1.5rem] ">
        <Link className="" href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="md:flex items-center justify-between text-white text-lg gap-6 hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <div className="md:flex items-center gap-[1.5rem] hidden ">
          <button className="p-2 bg-white rounded-[50%]">
            <Link href="https://www.instagram.com/munii_finance/?hl=en">
              <AiOutlineTwitter className="text-black w-[30px] h-[30px]" />
            </Link>
          </button>
          <button className="p-2 bg-white rounded-[50%]">
            <Link href="https://x.com/MuniiFinance">
              <AiFillInstagram className="text-black w-[30px] h-[30px]" />
            </Link>
          </button>
          <button
            onClick={openModal}
            className="border-2 border-primary text-primary py-[10px] px-[32px] rounded-[20px] font-[600] text-lg"
          >
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
              className="md:hidden fixed top-[3.4rem] right-0 w-64 h-full bg-white z-50 mobile-menu"
            >
              <div className="text-center flex flex-col items-center justify-center py-8">
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
                  href="/support"
                  className="block mb-4 hover-text-green-500"
                  onClick={closeMobileMenu}
                >
                  Support
                </Link>
                <button
                  onClick={openModal}
                  className="block mx-4 bg-black text-white rounded py-3 px-4 hover-bg-transparent hover-border-green-700 border self-center"
                >
                  Get the App
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {isModalOpen && <ComingSoonModal closeModal={closeModal} />}
    </header>
  );
}

export default Header;
