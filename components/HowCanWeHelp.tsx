// @ts-nocheck
"use client";
import Image from "next/image";
import { CardProp } from "@/types";
import { cardIcon } from "@/public/images";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import TextInput from "./ui/ReUableInput/TextInput";
import CustomButton from "./ui/custom-buttton/CustomButton";
import Link from "next/link";
import CTA from './CTA'



const HowCanWeHelp = () => {

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
                <Card
                    title="General Support"
                    text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
                />
                <Card
                    title="Suggest an Integration"
                    text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
                />
                <Card
                    title="Contact Sales"
                    text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
                />
                <Card
                    title="Technical Support"
                    text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
                />
                <Card
                    title="Partner Programs"
                    text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
                />
                <Card
                    title="Billing and Account"
                    text="Automatically track your expenses across all your accounts. Receive real-time updates on your spending "
                />
            </div>
            <section className="my-24 flex  flex-col md:flex-row items-center justify-center gap-20 text-s-text text-lg">
                <article className="max-w-[487px] flex flex-col gap-4">
                    <div>
                        <h1 className="text-4xl text-black font-semibold mb-4">Let’s Talk Now</h1>
                        <p >
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </p>
                    </div>
                    <p className="text-black font-medium">Contact Info</p>
                    <div>
                        <p className="mb-1">62 Uruwat Al-Rijal Street, Al-Qurayyat</p>
                        <p>6 Abdel Azim El Alimi Street, Al-Mansoura</p>
                    </div>
                    <div>
                        <p className="flex flex-row gap-1">
                            <FiPhone />
                            <span>+2349065875857</span>
                        </p>
                        <p className="flex flex-row gap-1">
                            <FiPhone />
                            <span >+2348185768695</span>
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">Social Handles</p>
                        <div className="flex flex-row gap-4 items-center ">
                            <div className="rounded-full border border-s-test p-3">
                                <FaFacebookF className="text-black w-4 h-4" />
                            </div>
                            <div className="rounded-full border border-s-test p-3">
                                <FaLinkedinIn className="text-black w-4 h-4" />
                            </div>
                            <div className="rounded-full border border-s-test p-3">
                                <FaTwitter className="text-black w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </article>
                <form className="flex flex-col gap-4 items-center justify-center max-w-[636px]">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <TextInput
                            inputLabel="First Name"
                            placeholder="First Name"
                            overrideStyles="w-full"
                        />
                        <TextInput
                            inputLabel="Last Name"
                            placeholder="Last Name"
                            overrideStyles="w-full"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <TextInput
                            inputLabel="Email"
                            placeholder="Email"
                            overrideStyles="w-full"
                        />
                        <TextInput
                            inputLabel="phone Number"
                            placeholder="phone Number"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <textarea name="" id="" placeholder="send message" className="border border-[#c9c4c4cc] sm:max-w-[636px] h-[245px] rounded-3xl p-6 w-full"></textarea>
                        <CustomButton
                            overrideStyle="bg-black text-primary text-lg font-semibold w-full mt-4 rounded-2xl p-4"
                        >
                            Submit
                        </CustomButton>
                        <p>By sending message, you agree to our <Link href="/term"> Terms and Conditions</Link> and <Link href="/policy">Privacy Policy</Link></p>
                    </div>
                </form>
            </section>
            <CTA />
        </motion.div>
    );
}

export default HowCanWeHelp;
