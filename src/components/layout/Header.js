import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import logo from "../../assets/images/logos/logo.webp";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="page-Footnotes grid grid-cols-2 md:grid-cols-3 ">
        <IoSearch className="my-auto hidden md:block" />
        <img src={logo} className="md:m-auto" />
        <div className="flex space-x-5 justify-end">
          <NavLink to={"/profile"} className="flex items-center space-x-2">
            <FaUser />
            <span className="nav-link hidden lg:block">Account</span>
          </NavLink>
          <div className="flex items-center space-x-2">
            <FaBagShopping />
            <span className="nav-link hidden lg:block">Shopping</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
