import React, { useState, useEffect } from "react";
import userpng from "../assets/images/profile.jpg";
import timg from "../assets/logo/5.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [profile, setProfile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // State to track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menu, setMenu] = useState(false);

  const handelMenu = () => {
    setMenu((prev) => !prev);
  };

  // Function to open/close the profile menu
  const openProfile = () => {
    setProfile((prev) => !prev);
  };

  // Function to handle scroll event and hide/show navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY); // Update the last scroll position
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Dependency array includes lastScrollY to run when it changes

  return (
    <>
      <header
        className={`fixed w-full shadow-xl z-30 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-[100%]"
        }`}
      >
        <div
          className={`font-extralight text-[18px] ${
            profile ? "block" : "hidden"
          } w-[200px] h-[100px] absolute right-[200px] top-[90px] flex-col flex justify-center items-center shadow-2xl transition-all duration-300 uppercase`}
        >
          <a className="w-[80%] hover:px-[30px]" href="">
            profile
          </a>
          <a className="w-[80%] hover:px-[30px] " href="">
            Contact
          </a>
          <a className="w-[80%] hover:px-[30px]" href="">
            logout
          </a>
        </div>
        <nav className="bg-white border-gray-200 py-2.5">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <img className="w-[50px] h-[50px]" src={timg} alt="" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Travelia
              </span>
            </a>
            <div className="flex relative sm:right-4  items-center lg:order-2">
              <Link
                to={"/login"}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Login
              </Link>
            </div>
            <div
              onClick={handelMenu}
              className={`w-[50px] flex flex-col justify-between  duration-300 ${
                menu ? "gap-0" : "gap-[8px]"
              }`}
            >
              <div
                className={`w-[30px]  duration-300 ${
                  menu ? "rotate-45" : ""
                } h-[2px] bg-black`}
              ></div>
              <div
                className={`w-[30px] duration-300${
                  menu ? "hidden w-[0px]" : "block w-[30px]"
                } h-[2px] bg-black`}
              ></div>
              <div
                className={`w-[30px] duration-300 ${
                  menu ? "-rotate-45" : ""
                } h-[2px] bg-black`}
              ></div>
            </div>
            <div
              className={`items-center justify-between ${
                menu ? "block" : "hidden"
              } w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pl-3 pr-4"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 pl-3 pr-4">Video</Link>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4">
                    Destination
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4">
                    Booking
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[250px] h-[60px] sm:flex hidden justify-center  items-center rounded gap-[5px] shadow-2xl">
              <div className="max-w-md mx-auto">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
