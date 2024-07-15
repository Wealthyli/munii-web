// @ts-nocheck
"use client";
import { useState } from "react";
import Image from "next/image";
import { CardProp } from "@/types";
import { cardIcon } from "@/public/images";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import TextInput from "../TextInput";
import CustomButton from "../CustomButton";
import Link from "next/link";
import CTA from "../main/CTA";

const HowCanWeHelp = () => {
  const supportTiles = [
    {
      title: "General Support",
      text: "Need assistance? Contact us and we'll respond promptly.",
    },
    {
      title: "Technical Support",
      text: "Facing technical issues? Reach out and we'll help you resolve them quickly.",
    },
    {
      title: "Suggest an Integration",
      text: "Have an integration idea? Let us know and we'll consider it.",
    },
    {
      title: "Contact Sales",
      text: "Interested in our services? Get in touch with our sales team.",
    },
    {
      title: "Billing and Account",
      text: "Questions about billing or your account? We're here to assist you.",
    },
    {
      title: "Partner Programs",
      text: "Want to partner with us? Contact us for more information.",
    },
  ];

  const Card = ({ title, text }: CardProp) => {
    return (
      <motion.div
        whileHover={{ scale: 1 }}
        className="flex flex-col max-w-[387px] h-auto md:h-[286px] rounded-[20px] bg-white gap-10 p-8"
        style={{ boxShadow: "1px 5px 40px 8px #6E758812" }}
      >
        <div className="bg-black rounded-[50%] p-4 w-[50px] h-[50px]">
          <Image src={cardIcon} alt="card icon" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-text">{title}</h1>
          <p className="text-[16px] leading-[24px] text-s-text">{text}</p>
        </div>
      </motion.div>
    );
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const response = await fetch("https://munii.finance/api/v1/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error:any) {
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={[{ y: [-40, 0] }, { opacity: 1 }]}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="flex flex-col px-4 md:px-[5rem]"
      id="services"
    >
      <div className="flex flex-col items-center justify-center gap-4 mt-24">
        <h1 className="text-[36px] font-semibold leading-[54px] text-text text-center">
          How We Can Help You
        </h1>
        <p className="text-center font-[500] text-[16px] max-w-[549px] text-s-text">
          Browse through a variety of collaboration opportunities available on
          the platform
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center">
        {supportTiles.map((item, key) => (
          <Card key={key} title={item.title} text={item.text} icon={item.icon}/>
        ))}
      </div>
      <section className="my-24 flex  flex-col md:flex-row items-center justify-center gap-20 text-s-text text-lg">
        <article className="max-w-[487px] flex flex-col gap-4">
          <div>
            <h1 className="text-4xl text-black font-semibold mb-4">
              Let’s Talk Now
            </h1>
            <p>
              Feel free to reach out to us for any inquiries or assistance. Our
              team is here to provide the support you need and answer any
              questions you may have. We look forward to hearing from you!
            </p>
          </div>
          <p className="text-black font-medium">Contact Info</p>
          <div>
            <p className="mb-1 capitalize">
              1397, HAKEEM AGBOOLA CRESCENT, UNITY ESTATE,
            </p>
            <p className="capitalize">
              AMUWO ODOFIN, FESTAC TOWN, LAGOS STATE, NIGERIA
            </p>
          </div>
          <div>
            <p className="flex flex-row gap-1">
              <FiPhone />
              <span>+234 816 858 7116</span>
            </p>
            <p className="flex flex-row gap-1">
              <FiPhone />
              <span>+234 704 677 3631</span>
            </p>
          </div>
          <div>
            <p className="mb-2">Social Handles</p>
            <div className="flex flex-row gap-4 items-center ">
              <div className="rounded-full border border-s-test p-3">
                <a
                  href="https://www.instagram.com/munii_finance/?hl=en"
                  className=""
                >
                  <FaFacebookF className="text-black w-4 h-4" />
                </a>
              </div>
              <div className="rounded-full border border-s-test p-3">
                <a href="" className="">
                  <AiFillInstagram className="text-black w-4 h-4" />
                </a>
              </div>
              <div className="rounded-full border border-s-test p-3">
                <a href="https://x.com/MuniiFinance" className="">
                  <FaTwitter className="text-black w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
        <form
          className="flex flex-col gap-4 items-center justify-center max-w-[636px]"
          id="Contact"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="input-brand w-full"
              placeholder="First Name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              className="input-brand w-full"
              placeholder="Last Name"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="input-brand w-full"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input-brand w-full"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <textarea
              name="message"
              placeholder="Send message"
              className="border border-[#c9c4c4cc] sm:max-w-[636px] h-[245px] rounded-3xl p-6 w-full"
              value={formData.message}
              onChange={handleChange}
            />
            <CustomButton action={handleSubmit} color="default" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </CustomButton>
            {errors.submit && <p className="text-red-500">{errors.submit}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <p>
              By sending a message, you agree to our{" "}
              <Link href="/term" className="underline cursor">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="/policy" className="underline cursor">
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>
      </section>
      <CTA />
    </motion.div>
  );
};

export default HowCanWeHelp;
