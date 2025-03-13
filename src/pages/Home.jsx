import React from 'react';
import { Helmet } from 'react-helmet';
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
      {/*  */}
      <Helmet>
        <title>TICE - Best IT Training & Bootcamp Institute in Coimbatore</title>
        <meta 
          name="description" 
          content="Join TICE, the leading IT training institute in Coimbatore. Learn web development, data science, UI/UX design, and software development with hands-on bootcamps, expert mentors, and guaranteed placement assistance."
        />
        <meta 
          name="keywords" 
          content="IT training Coimbatore, best IT institute, web development courses, UI/UX training, data science bootcamp, software development, career-focused education, job-oriented IT training, coding bootcamp, hands-on learning, internship programs"
        />
        <meta name="author" content="TICE Institute" />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content="TICE - Leading IT Training Institute in Coimbatore" />
        <meta 
          property="og:description" 
          content="TICE offers career-focused IT courses, coding bootcamps, and internship opportunities to help students secure jobs in top tech companies."
        />
        <meta property="og:image" content="/images/tice-home-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ticeinstitute.com/" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TICE - IT Bootcamp & Training Institute" />
        <meta 
          name="twitter:description" 
          content="Master web development, data science, UI/UX, and software engineering with our expert-led IT courses in Coimbatore."
        />
        <meta name="twitter:image" content="/images/tice-home-banner.jpg" />

        {/* Robots for SEO Indexing */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ticeinstitute.com/" />
      </Helmet>
      {/*  */}

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
