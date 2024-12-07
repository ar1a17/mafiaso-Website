import React, { useState } from "react";
import { assets } from "../assets/mafiaso_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Reusable function for navigation link styles
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "flex flex-col items-center gap-1 text-blue-500 font-bold"
      : "flex flex-col items-center gap-1 group";

  // Reusable function for animated text
  const animatedText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="inline-block group-hover:animate-wiggle">
        {char}
      </span>
    ));

  return (
    <div className="flex items-center justify-between py-5 px-6 font-medium">
      {/* Logo on the left */}
      <Link to ='/'><img src={assets.logo} className="w-16" alt="Company Logo" /></Link>

      {/* Centered Navigation Links */}
      <div className="hidden sm:flex flex-1 justify-center">
        <ul className="flex gap-8 text-sm text-gray-700">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item}>
              <NavLink to={`/${item.toLowerCase()}`} className={navLinkStyles}>
                <p className="group-hover:text-black transition duration-300">
                  {animatedText(item.toUpperCase())}
                </p>
                <hr className="w-0 group-hover:w-full border-none h-[2px] bg-black transition-all duration-300" />
              </NavLink>
            </li>
          ))}
          
          {/* Collection Dropdown with Apple-like Hover Effect */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <p className="group-hover:text-black transition duration-300">
              {animatedText("COLLECTION")}
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-black transition-all duration-300" />

            {/* Dropdown Menu with Subtle Hover Animations */}
            {dropdownVisible && (
              <div className="absolute left-0 mt-2 w-48 py-3 px-4 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <NavLink
                  to="/collection/category1"
                  className="block py-2 text-sm text-gray-600 hover:text-black"
                >
                  Category 1
                </NavLink>
                <NavLink
                  to="/collection/category2"
                  className="block py-2 text-sm text-gray-600 hover:text-black"
                >
                  Category 2
                </NavLink>
                <NavLink
                  to="/collection/category3"
                  className="block py-2 text-sm text-gray-600 hover:text-black"
                >
                  Category 3
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Right Section (Search, Profile, Cart, and Menu) */}
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile Icon"
          />
          <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              {["My Profile", "Order", "Logout"].map((option) => (
                <p
                  key={option}
                  className="cursor-pointer hover:text-black transition duration-300"
                >
                  {option}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 ${
          visible ? "w-2/3" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Close Icon"
            />
            <p>Back</p>
          </div>
          {["Home", "Collection", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="py-3 pl-6 border-b hover:bg-gray-100"
              onClick={() => setVisible(false)}
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
