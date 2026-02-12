import { motion } from "framer-motion";
import { Check } from "lucide-react";
import LeadModal from "./LeadModal";
import { useState } from "react";

export default function AboutAligners() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section id="why-aligners" className="py-16 bg-[#F4F8F8]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          {/* Image - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img
              src="/aligners.jpeg"
              alt="Invisible clear aligners treatment at Scaler Dental Studio"
              className="rounded-2xl shadow-lg w-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-teal-600 uppercase mb-2">
              Why Clear Aligners?
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Straight Teeth. <span className="text-teal-600">No Metal Braces.</span>
            </h2>

            {/* Image - Mobile Only (Under H2) */}
            <div className="block lg:hidden mb-6">
              <img
                src="/aligners.png"
                alt="Invisible clear aligners treatment at Scaler Dental Studio"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <p className="text-gray-600 mb-6">
              At <strong>Scaler Dental Studio</strong>, we provide advanced
              invisible clear aligners that gently align your teeth using
              3D digital technology — comfortably and discreetly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Nearly Invisible",
                "Removable Anytime",
                "Comfortable Fit",
                "Fewer Clinic Visits",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setModalOpen(true)} className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-full font-semibold shadow-md">
              Book Free Consultation
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Free 3D Scan • EMI Available • Limited Slots
            </p>
          </motion.div>
        </div>
      </section>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
