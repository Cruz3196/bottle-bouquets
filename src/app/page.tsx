import Hero from "./Components/Hero/Hero";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Shop />
      <About />
      <Footer />
    </div>
  );
}