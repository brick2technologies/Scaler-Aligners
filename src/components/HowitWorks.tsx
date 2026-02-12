import { motion } from "framer-motion";
import { useState } from "react";
import LeadModal from "./LeadModal";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    image: "/scan.jpeg",
    title: "Free 3D Smile Scan",
    desc: "We perform an advanced digital scan and create your personalized treatment plan.",
  },
  {
    image: "/aligners-2.jpeg",
    title: "Custom Clear Aligners",
    desc: "Your invisible aligners are specially designed for a comfortable and precise fit.",
  },
  {
    image: "/smile-result.jpeg",
    title: "Smile Transformation",
    desc: "Wear them daily and watch your teeth gradually align into a confident smile.",
  },
];

export default function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="smile-journey" className="py-20 bg-[#F4F8F8]">
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
              Smile Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Your Clear Aligner Treatment in 3 Simple Steps
            </h2>
          </motion.div>

          {/* Flip Cards */}
          <div className="grid lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={styles.flipCard}
              >
                <div className={styles.flipInner}>

                  {/* FRONT */}
                  <div className={`${styles.flipFront} bg-white shadow-md flex flex-col items-center justify-center p-8`}>

                    <div className="bg-teal-600 text-white w-14 h-14 flex items-center justify-center rounded-full font-bold mb-6 shadow-lg">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>

                  </div>

                  {/* BACK */}
                  {/* BACK */}
<div className={`${styles.flipBack} relative shadow-xl`}>

  {/* Full Background Image */}
  <img
    src={step.image}
    alt={step.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">

    <h3 className="text-xl font-semibold mb-3">
      {step.title}
    </h3>

    <p className="text-sm leading-relaxed text-white/90">
      {step.desc}
    </p>

  </div>

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
              Book Free 3D Smile Scan
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
