import { useState } from "react";
import { Menu, X } from "lucide-react";
import ScalerIcon from "/Scaler-icon.png";
import ScalerName from "/name.png";
import LeadModal from "./LeadModal";
import {Link} from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
    setOpen(false); // close mobile menu if open
  };

  return (
    <>
      <header className="fixed top-6 left-0 w-full z-50 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="md:bg-transparent md:backdrop-blur-none bg-white/60 backdrop-blur-xl rounded-full px-4 py-2 shadow-md md:shadow-none">
  <Link to="/" className="flex items-center gap-1">
    <img
      src={ScalerIcon}
      alt="Scaler Dental Studio Icon"
      className="h-10 w-auto"
    />
    <img
      src={ScalerName}
      alt="Scaler Dental Studio"
      className="h-7 pt-1 w-auto"
    />
  </Link>
</div>




          {/* DESKTOP NAV */}
          <nav className="hidden md:flex bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-full px-8 py-3">
            <div className="flex items-center gap-8 text-gray-700 font-medium">

              <a href="#why-aligners" className="hover:text-black transition">
                About
              </a>

              <a href="#smile-journey" className="hover:text-black transition">
                How it Works
              </a>

              <a href="#results" className="hover:text-black transition">
                Transformations
              </a>

              <a href="#faqs" className="hover:text-black transition">
                FAQs
              </a>

              <button
                onClick={openModal}
                className="bg-[#3c6d71] text-white px-6 py-2 rounded-full hover:bg-[#3c6d71]/90 transition"
              >
                Book
              </button>

            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md rounded-full p-3"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed top-24 left-4 right-4 md:hidden bg-white/60 backdrop-blur-2xl border border-gray-200 shadow-xl rounded-2xl p-6 z-50">

            <div className="flex flex-col gap-6 text-gray-700 font-medium">

              <a href="#why-aligners" onClick={handleMobileLinkClick}>
                About
              </a>

              <a href="#smile-journey" onClick={handleMobileLinkClick}>
                How it Works
              </a>

              <a href="#results" onClick={handleMobileLinkClick}>
                Transformations
              </a>

              <a href="#faqs" onClick={handleMobileLinkClick}>
                FAQs
              </a>

              <button
                onClick={openModal}
                className="bg-[#3c6d71] text-white py-3 rounded-full text-center"
              >
                Change Your Smile
              </button>

            </div>
          </div>
        )}
      </header>

      {/* MODAL (Outside Header — Important) */}
      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
