export default function Form({ title = "Talk to a Specialist", buttonText = "Get a Call", className = "" }) {
  return (
    <div className={`bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-md w-full ${className}`}>
      <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{title}</h3>
      <form action="https://usebasin.com/f/34958f7f66a6" method="POST" id="form">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            aria-label="Enter your name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-label="Enter your phone number"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}