import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import LeadModal from "./LeadModal";

const faqs = [
  {
    question: "Are clear aligners painful?",
    answer:
      "Clear aligners are designed for comfort. You may feel mild pressure during the first few days of a new aligner set, which means your teeth are shifting. Unlike metal braces, there are no wires or brackets causing irritation.",
  },
  {
    question: "How long does clear aligner treatment take?",
    answer:
      "Treatment usually takes between 6 to 18 months depending on your case. After your 3D digital scan at Scaler Dental Studio, we provide a personalized treatment timeline.",
  },
  {
    question: "Can I remove aligners while eating?",
    answer:
      "Yes. Clear aligners are removable. You can take them out while eating or brushing, but they should be worn 20–22 hours daily for best results.",
  },
  {
    question: "Are clear aligners expensive?",
    answer:
      "Aligner treatment is more affordable than many think. We offer transparent pricing and flexible EMI options to make your smile transformation easy.",
  },
  {
    question: "Am I eligible for clear aligners?",
    answer:
      "Most adults and teenagers with mild to moderate alignment issues are eligible. Book a free 3D smile consultation at Scaler Dental Studio to know your suitability.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section id="faqs" className="py-20 bg-[#F4F8F8] relative">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything You Need to Know
            </h2>
            <p className="text-gray-600 mt-4">
              Get answers about clear aligner treatment at Scaler Dental Studio.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-medium text-gray-900"
                >
                  {faq.question}
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-teal-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-teal-600" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
            >
              Book Free Smile Consultation
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Free 3D Scan • EMI Available • Limited Slots
            </p>
          </div>

        </div>
      </section>

      {/* Smooth Curve Divider */}
      <div className="relative -mt-12">
        <div className="h-24 w-full bg-white rounded-t-[60px]"></div>
      </div>

      {/* Modal */}
      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
