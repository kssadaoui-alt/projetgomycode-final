"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { useState, useContext } from "react";
import { AppContext } from "@/app/Context/AppContext";

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { setSearchBarVisible, searchBarVisible } = useContext(AppContext);
  // Removed console.log for Search Bar Visible

  return (
    <>
      <nav className="shadow-xl fixed top-0 w-full z-10 mb-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <a href={"/"} className="text-2xl font-semibold text-gray-900">
              <span className="text-[#FF5F15]">S</span>wiftCart.
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/Shop", label: "Shop" },
                { href: "/About", label: "About Us" },
                { href: "/Contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-lg hover:text-[#FF5F15] transition-all duration-300 ${
                    pathname === link.href ? "text-[#FF5F15]" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Link href="/Shop">
                {" "}
                <FiSearch
                  onClick={() => {
                    setSearchBarVisible((prev) =>
                      prev === true ? false : true
                    );
                  }}
                  className="text-gray-700 text-2xl cursor-pointer hover:text-[#FF5F15] transition-all duration-300"
                />
              </Link>
              <Link href="/Cart">
                <TbShoppingBag className="text-gray-700 text-2xl cursor-pointer hover:text-[#FF5F15] transition-all duration-300" />
              </Link>
              <button
                className="md:hidden text-gray-800 text-2xl cursor-pointer hover:text-[#FF5F15] transition-all duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <MdClose /> : <FiMenu />}
              </button>
              <a
                href={"/Login"}
                className="hidden md:flex py-1 px-3 outline-1 outline-gray-600 rounded-full cursor-pointer"
              >
                Account
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24"></div>
    </>
  );
};

export default Nav;
