export default function Footer() {
  return (
    <footer className="  bg-white/70 backdrop-blur-xl py-12 mt-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start text-center md:text-left">

        {/* Column 1 – Logo & Tagline */}
        <div className="flex flex-col items-center md:items-center">
          <img
            src="/logo.png"
            alt="Scaler Dental Studio Logo"
            className="h-20 w-auto"
          />
          <p className="text-sm text-gray-600 mt-4 max-w-xs">
            Advanced clear aligner treatment designed for comfort,
            confidence, and a perfect smile.
          </p>
        </div>

        {/* Column 2 – Middle Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-teal-600 uppercase mb-4">
            Quick Links
          </h4>
          <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
            <a href="#why-aligners" className="hover:text-teal-600 transition">
              About
            </a>
            <a href="#smile-journey" className="hover:text-teal-600 transition">
              How it Works
            </a>
            <a href="#results" className="hover:text-teal-600 transition">
              Transformations
            </a>
            <a href="#faqs" className="hover:text-teal-600 transition">
              FAQs
            </a>
          </div>
        </div>

        {/* Column 3 – Address */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-teal-600 uppercase mb-4">
            Contact
          </h4>
          <p className="text-sm text-gray-600">
            Scaler Dental Studio<br />
            sr nagar, Hyderabad<br />
            📞 +91 XXXXX XXXXX
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Scaler Dental Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
