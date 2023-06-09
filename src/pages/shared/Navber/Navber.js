import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
              : "font-bold  text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
              : "font-bold text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          portfolio
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
              : "font-bold  text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          Blog
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-orange-600 underline underline-offset-2 transition-colors duration-200 bg-transparent"
              : "font-bold text-gray-700 transition-colors duration-200 bg-transparent"
          }
          end
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#fff2da] justify-between max-w-[1440px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Bizdata</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="mr-5">
        <Link className="btn text-orange-400 bg-[#ffe0c3]">Get Started</Link>
      </div>
    </div>
  );
};

export default Navber;
