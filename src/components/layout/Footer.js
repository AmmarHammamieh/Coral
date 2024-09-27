import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import cards from "../../assets/images/cards.webp";
import logo from "../../assets/images/logos/logo.webp";
import { NavLink } from "react-router-dom";

function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-secondary">
      <div className="page-Footnotes py-14 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
        <div className="sm:col-span-2">
          <img src={logo} />
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex space-x-10">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div>
          <h6>catalog</h6>
          <ul className="flex flex-col justify-between space-y-3">
            <li>
              <NavLink>Necklaces</NavLink>
            </li>
            <li>
              <NavLink>hoodies</NavLink>
            </li>
            <li>
              <NavLink>Jewelry Box</NavLink>
            </li>
            <li>
              <NavLink>t-shirt</NavLink>
            </li>
            <li>
              <NavLink>jacket</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h6>about us</h6>
          <ul className="flex flex-col justify-between space-y-3">
            <li>
              <NavLink>Our Producers</NavLink>
            </li>
            <li>
              <NavLink>Sitemap</NavLink>
            </li>
            <li>
              <NavLink>FAQ</NavLink>
            </li>
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              <NavLink>Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <h6>customer services</h6>
          <ul className="flex flex-col justify-between space-y-3">
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
            <li>
              <NavLink>Track Your Order</NavLink>
            </li>
            <li>
              <NavLink>Product Care & Repair</NavLink>
            </li>
            <li>
              <NavLink>Book an Appointment</NavLink>
            </li>
            <li>
              <NavLink>Shipping & Returns</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="page-Footnotes grid grid-cols-3 gap-y-3 py-3">
          <span className="text-white order-2 md:order-1 col-span-2 md:col-span-1">
            © 2022 Coral , Inc.
          </span>
          <img
            src={cards}
            className="m-auto order-1 md:order-2 col-span-3 md:col-span-1 "
          />
          <div
            className="flex items-center order-3 md:order-3 space-x-2 text-white ml-auto cursor-pointer"
            onClick={scrollUp}
          >
            <span className="hidden sm:block">Scroll To Top</span>
            <FaArrowUp />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
