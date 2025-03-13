import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";
import HoverButton from "../elementComponents/HoverButton";
import SectionHeading from "../elementComponents/SectionHeading";

import BlogDefault from "../../assets/blog-defaults.jpg"

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Default Blog Image
const defaultImage = BlogDefault; // Use a hosted placeholder image

const BlogSection = ({ posts = blogPosts }) => {
  // Get the top 3 posts
  const topPosts = posts.slice(0, 3);

  return (
    <section className="container mx-auto px-6 py-12">
      <SectionHeading title="Latest Blog Posts" />

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {topPosts.map((post) => (
          <div
            key={post.id}
            className="relative bg-white shadow-xl rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Blog Image with Overlay */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={post.image || defaultImage} // Use default image if no image is found
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-opacity duration-300"></div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{post.summary}</p>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>

              <Link
                to={`/blog/${post.slug}`}
                onClick={handleClick}
                className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="text-center mt-12">
        <HoverButton link="/blog" text="View All Blogs" color="blue" />
      </div>
    </section>
  );
};

// Default Props for BlogSection
BlogSection.defaultProps = {
  posts: blogPosts,
};

export default BlogSection;
