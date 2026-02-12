import { motion } from "framer-motion";
import { useState } from "react";
import LeadModal from "./LeadModal";

const transformations = [
  {
    image: "/transformation-1.jpeg",
  },
  {
    image: "/transformation-2.jpeg",
  },
];


export default function Transformations() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="results" className="py-20 bg-[#F4F8F8]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-semibold text-teal-600 uppercase mb-2">
              Smile Transformations
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Real Results. Real Confidence.
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              See how clear aligners at Scaler Dental Studio have transformed
              smiles — comfortably and invisibly.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
  {transformations.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
    >
      <div className="relative rounded-xl overflow-hidden">

        <img
          src={item.image}   // 👈 use your combined image here
          alt="Before and After Clear Aligner Treatment"
          className="w-full h-[350px] object-cover"
        />

        {/* Optional small badge */}
        <div className="absolute bottom-4 right-4 bg-teal-600 text-white text-xs px-4 py-2 rounded-full shadow">
          Real Patient Result
        </div>

      </div>
    </motion.div>
  ))}
</div>


          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
            >
              Start My Smile Transformation
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Free Consultation • EMI Available • Limited Slots
            </p>
          </motion.div>

        </div>
      </section>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
