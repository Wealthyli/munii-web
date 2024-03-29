import Image from "next/image";
import { Header, MainBody, Footer, CTA, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <MainBody />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
