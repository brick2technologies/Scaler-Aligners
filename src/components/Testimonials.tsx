import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import LeadModal from "./LeadModal";

const testimonials = [
  {
    name: "Priya S.",
    text: "I was always conscious about my smile. The clear aligners at Scaler Dental Studio were completely invisible and very comfortable. I started seeing results within months!",
  },
  {
    name: "Rahul K.",
    text: "I didn’t want metal braces at 28. The aligners were removable, painless, and fit perfectly into my routine. Highly recommend the team!",
  },
  {
    name: "Ananya R.",
    text: "The 3D scan and smile preview gave me confidence to start. The entire process was smooth and professional. My smile has completely transformed.",
  },
];

export default function Testimonials() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="testimonials" className="py-20 bg-[#F4F8F8]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-semibold text-teal-600 uppercase mb-2">
              Patient Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted by Happy Smiles
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              See what our patients say about their clear aligner treatment at Scaler Dental Studio.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-left"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{item.text}"
                </p>

                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  Clear Aligner Patient
                </p>
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
              Book Free Smile Consultation
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Free 3D Scan • Limited Slots
            </p>
          </motion.div>

        </div>
      </section>

      {/* Modal */}
      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
