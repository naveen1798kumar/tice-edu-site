import React from "react";
import { Helmet } from "react-helmet";
import { FaRegLightbulb, FaLaptopCode, FaClipboardCheck } from "react-icons/fa";
import Banner from "../components/Banner";
import BootcampBanner from "../assets/Banners/bootcamp-banner.jpg";
import BootCamp from "../assets/get-bootcamp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Bootcamp = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 text-gray-900">
      {/* ✅ SEO Optimization with React Helmet */}
      <Helmet>
        <title>Best Bootcamp in Coimbatore | TICE Institute</title>
        <meta name="description" content="Join TICE Bootcamp in Coimbatore and master in-demand skills with expert-led training, hands-on projects, and placement support." />
        <meta name="keywords" content="Bootcamp in Coimbatore, Web Development Bootcamp, Data Science Bootcamp, UI/UX Bootcamp, TICE Institute, Career Training, Tech Bootcamp, IT Training Coimbatore" />
        <meta name="author" content="TICE Institute" />
        <meta property="og:title" content="Best Bootcamp in Coimbatore | TICE Institute" />
        <meta property="og:description" content="TICE Institute offers the best bootcamp training in Coimbatore with real-world projects, mentorship, and career support." />
        <meta property="og:image" content={BootcampBanner} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Hero Section with SEO content */}
      <Banner
        backgroundImage={BootcampBanner}
        title="Best Bootcamp in Coimbatore – TICE Institute"
        description="Master in-demand skills through online and offline training with real-world projects at TICE Coimbatore."
        breadcrumbs={["Bootcamp"]}
        bgColor="bg-gradient-to-r from-green-600 to-teal-500"
        data-aos="fade-up"
      />

      {/* ✅ What is Our Bootcamp? */}
      <div className="container mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 space-y-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-green-700">Why Join Our Bootcamp?</h2>
            <p className="text-lg text-gray-700">
              TICE Institute’s Bootcamp in Coimbatore is a career-focused training program designed for beginners and professionals to gain industry-relevant expertise.
              Our bootcamp ensures you master Web Development, Data Science, and UI/UX Design through real-world projects, expert mentorship, and placement assistance.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex items-center text-gray-700">
                <FaLaptopCode className="text-green-700 text-2xl mr-3" />
                <span><strong>Live interactive classes</strong> with industry experts</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaRegLightbulb className="text-green-700 text-2xl mr-3" />
                <span><strong>Hands-on experience</strong> through real-world projects</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaClipboardCheck className="text-green-700 text-2xl mr-3" />
                <span><strong>Placement assistance</strong> & resume building support</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img src={BootCamp} alt="Bootcamp Training" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* ✅ How It Works - Timeline Layout */}
      <div className="bg-green-100 py-12">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10" data-aos="fade-up">
            How Our Bootcamp Works
          </h2>
          <div className="space-y-10">
            {[
              { title: "Step 1: Enroll", desc: "Choose your desired track and enroll in our career-focused bootcamp.", icon: <FaClipboardCheck /> },
              { title: "Step 2: Learn & Build", desc: "Attend live classes, build projects, and work on real-world case studies.", icon: <FaLaptopCode /> },
              { title: "Step 3: Get Certified & Hired", desc: "Earn a globally recognized certificate and receive placement support.", icon: <FaRegLightbulb /> },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                <div className="text-green-600 text-4xl">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bootcamp;
