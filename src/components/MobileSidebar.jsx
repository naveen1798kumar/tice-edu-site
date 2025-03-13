import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp, FaArrowLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { courses, diplomaCourse } from "../data/courses.js";

const generatePath = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");

function MobileSidebar({ isSidebarOpen, onClose }) {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setIsSubMenuOpen(false); // Close submenu when sidebar closes
      setOpenCategory(null);
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isSidebarOpen]);

  if (!isSidebarOpen) return null;

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const openSubMenu = (category) => {
    setOpenCategory(category);
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setOpenCategory(null);
  };

  const activeLinkClass =
    "block w-full font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300";
  const defaultLinkClass =
    "block w-full font-medium text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300";

  return (
    <>
      <div className=" fixed inset-0 z-50">
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

        {/* Sidebar Container (Handles Sidebar & Submenu Transitions) */}
        <div className=" md:hidden fixed top-0 right-0 h-full w-[60%] min-w-[320px] bg-gray-900 backdrop-blur-lg shadow-2xl border-l border-gray-700 z-50 transition-transform duration-500 overflow-y-auto scrollbar-hidden ease-in-out transform">
          {/* Main Sidebar */}
          <div
            className={`absolute inset-0 w-full h-full bg-gray-900 transition-transform duration-500 ease-in-out ${
              isSubMenuOpen ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button onClick={onClose} className="text-xl text-white">
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col p-4 space-y-4">
              <li className="w-full">
                <NavLink to="/" onClick={onClose} className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>
                  Home
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/about" onClick={onClose} className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>
                  About
                </NavLink>
              </li>
              <li className="w-full">
                <button onClick={toggleCoursesDropdown} className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-all duration-300">
                  <span>Courses</span>
                  {isCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Dropdown Menu (Scrollable) */}
                <ul
                  className={`transition-all duration-300  ${
                    isCoursesOpen ? "max-h-screen opacity-100" : "hidden max-h-0 opacity-0"
                  }`}
                  style={{ maxHeight: isCoursesOpen ? "calc(100vh - 200px)" : "0px" }}
                >
                  {[...courses, ...diplomaCourse].map((subItem, subIndex) => (
                    <li key={subIndex} className="w-full">
                      <button
                        onClick={() => openSubMenu(subItem.category)}
                        className="block w-full text-gray-400 text-start hover:text-white hover:bg-gray-700 px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        {subItem.category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="w-full">
                <NavLink to="/Blog" onClick={onClose} className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>
                  Blog
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/contact" onClick={onClose} className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>
                  Contact
                </NavLink>
              </li>
              {/* Get Started Button */}
              <li className="w-full">
                <button className="w-full py-3 hover:scale-115 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium shadow-md hover:opacity-90 transition-all duration-300">
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          {/* Submenu Section (Slides from Left) */}
          <div
            className={`absolute inset-0 w-full h-full bg-gray-900 transition-transform duration-500 ease-in-out ${
              isSubMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Submenu Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <button onClick={closeSubMenu} className="text-white flex items-center">
                <FaArrowLeft className="mr-2" />
                Back
              </button>
              <button onClick={onClose} className="text-xl text-white">
                <FaTimes />
              </button>
            </div>

            {/* Submenu List */}
            <ul className="flex flex-col p-4 space-y-4">
              {openCategory &&
                [...courses, ...diplomaCourse]
                  .find((category) => category.category === openCategory)
                  ?.courses.map((course) => (
                    <li key={course.id} className="w-full">
                      <Link
                        to={`/courses/${generatePath(openCategory)}/${generatePath(course.title)}`}
                        className="block w-full text-gray-300 hover:text-white hover:bg-gray-700 px-6 py-2 rounded-lg transition-all duration-300"
                        onClick={()=> {onClose(), setIsCoursesOpen()}}
                      >
                        
                        {course.title}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;
