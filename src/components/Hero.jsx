import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Background Image
import TICEBackgroundOne from "../assets/Hero_Slider/IT_developers in_coimbatore.jpg";
import TICEBackgroundTwo from "../assets/Hero_Slider/learn_IT_in_coimbatore.jpg";
import TICEBackgroundThree from "../assets/Hero_Slider/web_development in_coimbatore.jpg";
import TICEBackgroundFour from "../assets/Hero_Slider/full-stack-developer-in-coimbatore.jpg";

import Banner from "../assets/Banners/about-banner.jpg"

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    // fade: true,
    arrows: false,
    swipe: true,
  };

  const slides = [
    {
      // image: slide1,
      background: TICEBackgroundOne,
      alt: "Learn Web Development",
      title: "Master Web Development",
      description: "Get hands-on experience with HTML, CSS, JavaScript, and React.",
      buttonText: "Explore Courses",
      buttonLink: "/",
    },
    {
      // image: slide2,
      background: TICEBackgroundTwo,
      alt: "JavaScript Development Training",
      title: "JavaScript Development Roadmap & Guide",
      description: "Kickstart your JavaScript journey with our detailed Bootcamp.",
      buttonText: "Enroll Bootcamp",
      buttonLink: "/bootcamp",
    },
    {
      // image: slide3,
      background: TICEBackgroundThree,
      alt: "Graphic Design Course",
      title: "Kickstart Your Tech Career ",
      description: "Join our career program Internships to learn job-ready tech skills with expert guidance.",
      buttonText: "Join Us",
      buttonLink: "/internship",
    },
    {
      // image: slide3,
      background: TICEBackgroundFour,
      alt: "Graphic Design Course",
      title: "Full Stack Development Simplified",
      description: "Master frontend and backend development step by step with hands-on learning.",
      buttonText: "Enroll Now",
      buttonLink: "/blog",
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-auto p-5 min-h-[70vh] h-500px md:h-[600px] lg:h-[550px] ">
            
            {/* Background Image */}
            <motion.img
              src={slide.background}
              alt="TICE-Training-Center"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 hover:scale-105 bg-gradient-to-r from-green-500 to-teal-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              loading="lazy"
            />
            {/* opacity */}
            <div className="absolute inset-0 bg-gray-800/60 "></div>
{/* Slide Content */}
<div className="relative z-10  px-6 md:px-20 lg:px-32 h-[80vh] md:h-full">
  
  {/* Text Section */}
  <motion.div 
  className=" absolute bottom-10 left-0 min-w-[80%] md:min-w-[70%] z-[4]  rounded-2xl text-left bg-black/30 overflow-hidden"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  data-aos="fade-up"
>
<div className="w-auto min-w-[80%] border-l-4 border-green-600 p-4 md:p-8 pl-4">
{/* import { Typewriter } from "react-simple-typewriter"; */}

<motion.h1
  className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-green-200"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Typewriter
    words={[slide.title]} // Uses the slide title dynamically
    loop={1} // Type only once
    cursor
    cursorStyle=" "
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</motion.h1>


  <motion.p 
    className="text-md md:text-lg lg:text-xl text-gray-300 mt-3 max-w-2xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  >
    {slide.description}
  </motion.p>

  <motion.div 
    className="mt-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Link
      to={slide.buttonLink}
      onClick={handleClick}
      className="inline-block bg-green-400 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-md md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {slide.buttonText}
    </Link>
  </motion.div>
</div>

</motion.div>

</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
