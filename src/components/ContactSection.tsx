import { Phone, MapPin } from "lucide-react";
import { useState } from "react";
import LeadModal from "./LeadModal";

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm font-semibold text-teal-600 uppercase mb-2">
              Book Your Consultation
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Start Your Smile Transformation Today
            </h2>

            <p className="text-gray-600 mb-8 max-w-lg">
              Visit Scaler Dental Studio for a free 3D smile scan and
              personalized clear aligner treatment plan.
              Take the first step toward a confident smile.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium text-gray-900">
                    +91 798 950 5377
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-medium text-gray-900">
                    SR Nagar, Hyderabad
                  </p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>
                  <p className="font-semibold text-gray-900">
                    Mon – Sat | 10 AM – 8 PM
                  </p>
                </div>
              </div> */}

            </div>

          </div>

          {/* RIGHT CTA CARD */}
          <div className="bg-[#F4F8F8] p-10 rounded-2xl shadow-lg text-center">

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Free 3D Smile Scan
            </h3>

            <p className="text-gray-600 mb-6">
              Limited slots available this week.
              Book your consultation now.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-full font-semibold text-lg shadow-md transition"
            >
              Book Appointment
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Free Consultation • EMI Available • No Hidden Charges
            </p>

          </div>

        </div>
      </section>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
