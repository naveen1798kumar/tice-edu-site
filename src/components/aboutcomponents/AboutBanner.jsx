import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images for the banners
import BootcampBanner from "../../assets/Banners/bootcamp-banner.jpg";
import InternshipBanner from "../../assets/Banners/internship-banner.jpg";
import SectionHeading from "../elementComponents/SectionHeading";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AboutBanners = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container mx-auto py-16 px-6">
      <SectionHeading title="Explore Our Career Programs" />

    <section className="w-full px-4 md:px-12 lg:px-20 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Bootcamp Banner */}
        <div 
          className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer group" 
          data-aos="fade-right"
        >
          <img
            src={BootcampBanner}
            alt="Bootcamp"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 to-teal-600/60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
            <h3 className="text-4xl font-extrabold drop-shadow-md">
              Elevate Your Skills with Our Bootcamp
            </h3>
            <p className="text-lg mt-3 max-w-2xl font-light">
              Join our intensive, hands-on bootcamp designed to transform beginners into industry-ready professionals.
            </p>
            <Link
              to="/bootcamp"
              onClick={handleClick}
              className="mt-5 px-8 py-3 bg-white text-green-800 font-semibold rounded-lg shadow-md transition-all hover:bg-green-700 hover:text-white hover:shadow-xl"
            >
              Explore Bootcamp
            </Link>
          </div>
        </div>

        {/* Internship Banner */}
        <div 
          className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer group" 
          data-aos="fade-left"
        >
          <img
            src={InternshipBanner}
            alt="Internship"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 to-pink-600/60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
            <h3 className="text-4xl font-extrabold drop-shadow-md">
              Unlock Real-World Experience with Our Internship
            </h3>
            <p className="text-lg mt-3 max-w-2xl font-light">
              Work on live projects, receive expert mentorship, and gain industry experience that sets you apart.
            </p>
            <Link
              to="/internship"
              onClick={handleClick}
              className="mt-5 px-8 py-3 bg-white text-purple-800 font-semibold rounded-lg shadow-md transition-all hover:bg-purple-700 hover:text-white hover:shadow-xl"
            >
              Apply for Internship
            </Link>
          </div>
        </div>

      </div>
    </section>
    </section>
  );
};

export default AboutBanners;

