import { CheckCircle } from "lucide-react";
import LeadForm from "./LeadForm";
import SmileImage from "/smile.png"; 
import LeadModal from "./LeadModal";
import { useState } from "react";

export default function HeroSection() {

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 lg:pt-24 bg-[#F4F8F8]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src={SmileImage}
          alt="Person smiling confidently with clear aligners"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F8F8]/95 via-[#F4F8F8]/85 to-[#F4F8F8]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1F2D2F] leading-tight"
          >
            Get a <span className="text-[#3C6D71]">Perfect Smile</span>
            <br className="hidden sm:inline" /> Without Metal Braces
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#4B5E60] font-medium max-w-lg">
            Invisible Clear Aligners at Scaler Dental Studio — Comfortable,
            Removable & Almost Invisible.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-lg mx-auto lg:mx-0">
            {[
              "No Painful Wires",
              "Eat Anything You Love",
              "100% Customized for Your Teeth",
              "Easy EMI Options Available",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle
                  className="text-[#3C6D71] shrink-0"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-[#2E5659] text-sm sm:text-base font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button onClick={() => setOpenModal(true)}
 className="w-full sm:w-auto bg-[#3C6D71] hover:bg-[#2E5659] text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition-all duration-300 hover:scale-[1.02]">
              Book Smile Consultation
            </button>
          </div>

          {/* Trust */}
          <p className="mt-6 text-sm text-[#4B5E60] font-medium">
            ⭐ 500+ Happy Smiles | Rated 4.9/5 by Patients
          </p>

        </div>

        {/* RIGHT FORM COMPONENT */}
        <LeadForm />

      </div>
      
    </section>
    <LeadModal open={openModal}
        onClose={() => setOpenModal(false)} />
        </>
  );
}
