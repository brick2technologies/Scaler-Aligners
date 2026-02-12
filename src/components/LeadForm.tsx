export default function LeadForm() {
  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 max-w-md mx-auto border-t-4 border-[#3C6D71] w-full">

      <h2 className="text-xl sm:text-2xl font-bold text-[#3C6D71] text-center mb-6">
        Start Your Smile Journey Today
      </h2>

      <form className="space-y-5" aria-describedby="form-privacy-note">

        <div>
          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            required
            autoComplete="name"
            className="w-full border border-gray-300 focus:border-[#3C6D71] focus:ring-2 focus:ring-[#3C6D71]/30 outline-none rounded-xl px-5 py-3 text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            required
            pattern="[0-9]{10,15}"
            autoComplete="tel"
            className="w-full border border-gray-300 focus:border-[#3C6D71] focus:ring-2 focus:ring-[#3C6D71]/30 outline-none rounded-xl px-5 py-3 text-sm transition-all"
          />
        </div>

        <div>
          <label htmlFor="city" className="sr-only">City</label>
          <input
            id="city"
            type="text"
            placeholder="City"
            required
            autoComplete="address-level2"
            className="w-full border border-gray-300 focus:border-[#3C6D71] focus:ring-2 focus:ring-[#3C6D71]/30 outline-none rounded-xl px-5 py-3 text-sm transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3C6D71] hover:bg-[#2E5659] text-white py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-md hover:scale-[1.02]"
        >
          Book Now – It's Free
        </button>

      </form>

      <p
        id="form-privacy-note"
        className="text-xs text-gray-600 mt-5 text-center"
      >
        We respect your privacy. Your information is safe with us.
      </p>

    </div>
  );
}
