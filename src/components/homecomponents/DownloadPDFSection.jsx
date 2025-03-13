import React, { useState } from "react";
import SectionHeading from "../elementComponents/SectionHeading";
import pdfUrlLink from "../../assets/pdf/JavaScript Fundamentals GreatStack.pdf";

const DownloadPDFSection = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const pdfUrl = pdfUrlLink; // Replace with actual PDF URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "TICE Courses Modules.pdf";
    link.click();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6 md:px-16 rounded-lg shadow-xl text-center">
      {/* Section Heading */}
      <SectionHeading title="Download Our Free PDF Guide" color="green-400" />
      
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4 font-medium leading-relaxed">
        Unlock expert insights! Enter your details below to get instant access 
        to our free <span className="text-indigo-600 hover:text-green-600 transition-all duration-500 font-semibold">JavaScript Fundamentals</span> guide.
      </p>

      {/* Form Section */}
      <form className="max-w-lg mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="space-y-5">
          {/* Mobile Input */}
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 transition"
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="flex items-center justify-center mt-6">
          <button
            type="button"
            onClick={handleDownload}
            className="relative inline-block bg-white/70 text-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white py-2 px-4 md:py-3 md:px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl"
          >
            Download Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default DownloadPDFSection;