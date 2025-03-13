import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import Banner from "../components/Banner";

import BlogBanner from "../assets/Banners/blog-banner.jpg";
import BlogDefault from "../assets/blog-defaults.jpg"
import SectionHeading from "../components/elementComponents/SectionHeading";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const defaultImage = BlogDefault;

const Blog = () => {
  return (
    <section className="bg-gray-100 text-gray-900">

    {/*  */}
    <Banner 
    backgroundImage={BlogBanner}
    title="See more about our Blogs"
    description="Upgrade your skills with expert-led courses and take your career to the next level."
    breadcrumbs={[ "Blogs"]}
    bgColor="bg-gradient-to-r from-indigo-600 to-blue-500"
    data-aos="fade-up"
    />

    <div className="container mx-auto p-6">
      <SectionHeading 
       title="Explore All our Blogs" 
       span="Explore our blogs" 
       description="for all latest updates & informations."
      />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 py-2">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image || defaultImage} alt={post.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.summary}</p>
              <p className="text-xs text-gray-400 mt-1">{post.date}</p>
              <Link
                to={`/blog/${post.slug}`}
                onClick={handleClick}
                className="mt-4 block text-blue-600 font-semibold hover:text-blue-800"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Blog;
