import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Services from "../../components/Services";
import Global from "../../components/Global";
import Products from "../../components/Products";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-luxe-dark relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Global />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}