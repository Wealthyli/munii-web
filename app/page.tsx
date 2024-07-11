
import { Header, Footer } from "@/components/main";
import { Hero, MainBody } from "@/components";


export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <MainBody />
      </main>
      <Footer />
    </>
  );
}
