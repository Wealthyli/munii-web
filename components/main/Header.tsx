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
import { usePathname } from "next/navigation";

function Header() {

  const currentPath = usePathname()

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

  const isActive = (path: string) => {
    if (path === "/blog") {
      return currentPath === path || currentPath.startsWith("/blog/");
    }
    return currentPath === path;
  };


  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between px-4 lg:px-[5rem] md:py-[1.5rem] ">
        <Link className="" href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="lg:flex items-center justify-between text-white text-lg gap-6 hidden">
          <li className={`${isActive("/") ? "active" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${isActive("/about") ? "active" : ""}`}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={`${isActive("/contact") ? "active" : ""}`}>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className={`${isActive("/blog") ? "active" : ""}`}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <div className="lg:flex items-center gap-[1.5rem] hidden ">
          <button
            onClick={openModal}
            className="border-2 border-primary text-primary py-[10px] px-[32px] rounded-[20px] font-[600] text-lg"
          >
            Use Web App
          </button>
        </div>
        <div className="flex lg:hidden">
          {isMobileMenuOpen ? (
            <TfiClose
              className="text-2xl cursor-pointer text-white"
              onClick={toggleMobileMenu}
            />
          ) : (
            <HiOutlineBars3BottomRight
              className="text-3xl cursor-pointer text-white"
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
              className="lg:hidden fixed top-[3.4rem] right-0 w-64 h-full bg-black z-50 mobile-menu"
            >
              <div className="text-center flex flex-col items-center justify-center py-8">
                <Link
                  href="/about"
                  className="block mb-4 mt-2 hover:text-white text-primary"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block mb-4 hover:text-white text-primary"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  className="block mb-4 hover:text-white text-primary"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <button
                  onClick={openModal}
                  className="block mx-4 bg-black text-white py-3 px-4 border self-center border-primary rounded-[20px]"
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
