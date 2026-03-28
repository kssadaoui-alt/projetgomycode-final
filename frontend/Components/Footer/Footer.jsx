"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="w-full mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <footer className="bg-white py-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
            {/* Left Section - Logo & Description */}
            <div className="w-full md:w-1/3 md:text-left text-center">
              <Link href={"/"} className="text-2xl font-semibold text-gray-900">
                <span className="text-[#FF5F15]">S</span>wiftCart.
              </Link>
              <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            {/* Middle Section - Centered Company Links */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">Company</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                {[
                  { href: "/", label: "Home" },
                  { href: "/Shop", label: "Shop" },
                  { href: "/About", label: "About Us" },
                  { href: "/Contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-base md:text-lg hover:text-[#FF5F15] transition-all duration-500 ${
                        pathname === link.href ? "text-[#FF5F15]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Contact Info & Social Icons */}
            <div className="w-full md:w-1/3 md:text-right text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Get in touch
              </h3>
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                +216-26-000-590
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                contact@SwiftCart.shop
              </p>
              {/* Social Icons */}
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/share/1E5Cg8AfGF/"
                  className="text-gray-600 hover:text-[#FF5F15] transition-all duration-600"
                >
                  <FaFacebookF size={20} />
                </a>
               
                <a
                  href="https://www.instagram.com/swiftcart.shop/"
                  className="text-gray-600 hover:text-[#FF5F15] transition-all duration-600"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF5F15] transition-all duration-600"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-gray-600 text-xs md:text-sm mt-8 border-t border-gray-300 pt-4">
            Copyright 2025 © SwiftCart, All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
