import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/AboutSection";
import HowItWorks from "./components/HowitWorks";
import Transformations from "./components/Transformation";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer"
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <main className="">
        <Navbar />
        <HeroSection />
        <About />
        <HowItWorks />
        <Transformations />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>

    </>

  )
}

export default App;
