import React from 'react';
import Hero from '../components/Hero';
import CoursesPreview from '../components/CoursesPreview';
import Testimonials from '../components/Testimonials';
import ProgressSection from '../components/homecomponents/ProgressSection';
import StatsSection from '../components/homecomponents/StatsSection';
import AboutSection from '../components/homecomponents/AboutSection';
import Features from '../components/homecomponents/Features';
import TestimonialSection from '../components/homecomponents/TestimonialSection';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/homecomponents/BlogSection';
import DownloadPDFSection from '../components/homecomponents/DownloadPDFSection';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <ProgressSection /> */}
      {/* <StatsSection/> */}
      <AboutSection/>
      <CoursesPreview />

      <BlogSection />
      <Features />
      <DownloadPDFSection/>

      <Testimonials />
      {/* <TestimonialSection /> */}
    </div>
  );
};

export default Home;
