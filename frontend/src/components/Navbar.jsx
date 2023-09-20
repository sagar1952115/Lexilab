import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = localStorage.getItem("user");
  const User = JSON.parse(user);
  return (
    <div className="w-full shadow-xl lg:bg-white ">
      <div className="flex items-center justify-between w-full p-4 xl:m-auto xl:w-9/12 h-14 lg:h-16 md:h-12 lg:z-50">
        <div className="font-mono text-2xl font-bold text-blue">
          <Link to="/">LexiLab</Link>
        </div>
        <div className="hidden lg:flex">
          <li className="m-3 list-none">
            <Link to="/">Home</Link>
          </li>
          <li className="m-3 list-none">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="m-3 list-none">
            <a href="https://github.com/sagar1952115" target="_blank">
              Github
            </a>
          </li>
        </div>
        <div className="hidden lg:block">
          <div>
            {user !== null ? (
              <Link to="/profile">
                <div className="relative w-12 h-12 font-bold text-white list-none rounded-full bg-gray">
                  <li className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                    {User.data.name[0].toUpperCase()}
                  </li>
                </div>
              </Link>
            ) : (
              <li className="p-1 my-2 font-bold text-white list-none rounded bg-blue decoration text-md w-max">
                <Link to="/signup">Register</Link>
              </li>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} size="1.5rem" />
        </div>
      </div>
      {isOpen && (
        <div className="p-4 text-xl font-bold transition-all duration-700">
          <li className="my-2 list-none">
            <Link onClick={() => setIsOpen(!isOpen)} to="/">
              Home
            </Link>
          </li>
          <li className="my-2 list-none">
            <Link onClick={() => setIsOpen(!isOpen)} to="/contact">
              Contact Us
            </Link>
          </li>

          <li className="my-2 list-none">
            <a href="https://github.com/sagar1952115" target="_blank">
              Github
            </a>
          </li>

          {user !== null ? (
            <Link to="/profile">
              <div className="relative w-12 h-12 font-bold text-white list-none rounded-full bg-gray">
                <li
                  className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {User.data.name[0].toUpperCase()}
                </li>
              </div>
            </Link>
          ) : (
            <li className="p-1 my-2 font-bold text-white list-none rounded bg-blue decoration text-md w-max">
              <Link onClick={() => setIsOpen(!isOpen)} to="/signup">
                Register
              </Link>
            </li>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
