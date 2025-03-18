import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider
import SectionHeading from './elementComponents/SectionHeading';
import HoverButton from './elementComponents/HoverButton';
import { GoDotFill } from "react-icons/go";

import { courses, diplomaCourse } from '../data/courses';
import Images from "../assets/default-course.jpg";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const generatePath = (title) => title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

const coursePreview = { courses, diplomaCourse }
const defaultImage = Images;


const CoursesPreview = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coursePreview = [...courses, ...diplomaCourse];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 slides for large screens
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For md screens
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // For sm screens
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-400/30">
    <div className="container mx-auto px-6">
      {/* Section Heading */}
      <SectionHeading 
        title="Our Featured Courses" 
        span="Explore our courses designed" 
        description="to equip you with in-demand skills."
      />

      {/* Slider Wrapper */}
      <Slider {...settings} className="py-6 px-2 lg:px-6">
  {coursePreview.map((category) =>
    category.courses.map((course) => (
      <div key={course.id} className="px-3 py-6">
        {/* Course Card */}
        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-[0_10px_50px_rgba(34,_197,_94,_0.7)] min-h-[500px] flex flex-col ">
          
          {/* Image Section */}
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={course.image || defaultImage}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute flex inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-300 group-hover:bg-opacity-60 items-end justify-start p-2">
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent group-hover:from-indigo-800 group-hover:to-gray-950 text-2xl md:text-3xl font-extrabold tracking-wide font-poppins">
                {course.heading}
              </span>
            </div>
          </div>

          {/* Course Details */}
          <div className="p-6 flex flex-col flex-grow text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3 transition duration-300 group-hover:text-green-600">
              {course.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {course.description}
            </p>

            {/* Learn More Button */}
            <Link
              to={`/courses/${category.category}/${course.title}`}
              className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-md font-semibold transition-all duration-300 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    ))
  )}
</Slider>


      {/* Explore More Button */}
      <div className="flex items-center justify-center mt-10">
        <HoverButton link="/courses" text="Explore More" color="green" />
      </div>
    </div>
  </section>
  );
};

export default CoursesPreview;