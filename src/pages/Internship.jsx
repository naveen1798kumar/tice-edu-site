import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineProject, AiOutlineCheckCircle } from "react-icons/ai";
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaBriefcase } from "react-icons/fa";
import Banner from "../components/Banner";
import InternshipBanner from "../assets/Banners/internship-banner.jpg";
import GetInternship from "../assets/acheive-internship.jpg";
import WebDev from "../assets/bootcamp-internships/web-developer.jpeg";
import DataScientist from "../assets/bootcamp-internships/data-scientist.jpg";
import UIUX from "../assets/bootcamp-internships/UI-UX-designer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Internship = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 text-gray-900">
      {/* ✅ SEO Optimization with React Helmet */}
      <Helmet>
        <title>Best Internship in Coimbatore | TICE Institute</title>
        <meta name="description" content="Join TICE Institute in Coimbatore for top internships in Web Development, Data Science, and UI/UX Design. Gain real-world experience with hands-on training." />
        <meta name="keywords" content="Internship in Coimbatore, Web Development Internship, Data Science Internship, UI/UX Design Internship, TICE Institute, IT Internship, Coimbatore Training Programs" />
        <meta name="author" content="TICE Institute" />
        <meta property="og:title" content="Best Internship in Coimbatore | TICE Institute" />
        <meta property="og:description" content="Gain real-world experience with TICE Institute's hands-on internship programs in Coimbatore." />
        <meta property="og:image" content={InternshipBanner} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Hero Section with SEO content */}
      <Banner
        backgroundImage={InternshipBanner}
        title="Best Internship in Coimbatore – TICE Institute"
        description="Gain real-world experience with hands-on training in Web Development, Data Science, and UI/UX Design at TICE Coimbatore."
        breadcrumbs={["Internship"]}
        bgColor="bg-gradient-to-r from-purple-600 to-pink-500"
        data-aos="fade-up"
      />

      {/* ✅ Why Join Our Internship? */}
      <div className="container mx-auto p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-purple-700">Why Choose Our Internship?</h2>
            <p className="text-lg text-gray-700">
              TICE Institute in Coimbatore offers highly structured internship programs in the most in-demand fields. Our internships help you gain **real-world experience, live project exposure, and industry mentorship**.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex items-center text-gray-700">
                <AiOutlineProject className="text-purple-700 text-2xl mr-3" />
                <span>Work on <strong>real-time projects</strong> with expert guidance</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaCertificate className="text-purple-700 text-2xl mr-3" />
                <span>Receive a <strong>Certification from TICE Coimbatore</strong></span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaBriefcase className="text-purple-700 text-2xl mr-3" />
                <span><strong>Placement assistance</strong> & networking opportunities</span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaLaptopCode className="text-purple-700 text-2xl mr-3" />
                <span>Hands-on experience with the <strong>latest technologies</strong></span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaChalkboardTeacher className="text-purple-700 text-2xl mr-3" />
                <span>Learn from <strong>industry experts & mentors</strong></span>
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <img src={GetInternship} alt="Internship" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* ✅ Internship Tracks */}
      <div className="bg-purple-100 py-12">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-10" data-aos="fade-up">
            Internship Tracks – Explore Your Career Path
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Web Development Internship", img: WebDev, desc: "Master front-end and back-end technologies, build real-world applications, and kickstart your career as a developer." },
              { title: "Data Science Internship", img: DataScientist, desc: "Learn Python, machine learning, data analysis, and AI to become an industry-ready Data Scientist." },
              { title: "UI/UX Design Internship", img: UIUX, desc: "Gain expertise in wireframing, prototyping, and designing user-friendly digital experiences." },
            ].map((track, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                <img src={track.img} alt={track.title} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-purple-700">{track.title}</h3>
                <p className="text-gray-700">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
