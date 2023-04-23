"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center py-2">
                <Image src="/logo.svg" width={50} height={50} alt="PromptHunt" />
                <span className="font-bold">PromptHunt</span>
              </span>
              </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="outline-none mobile-menu-button"
              onClick={handleMenuToggle}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-gray-700 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-2 w-48"
            />
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
              Search
            </button>
            {/* <Link href="/create">
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                Create
                </button>
            </Link> */}
            <Link href="/login">
                <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600">
                Login
                </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen ? (
        <div className="md:hidden flex justify-center align-middle flex-col space-y-4 mx-5 py-5">
            <input
                type="text"
                placeholder="Search"
                className="border rounded-md px-3 py-2 w-100"
            />
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                Search
            </button>
            {/* <Link href="/create">
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 flex justify-end" >
                  Create
              </button>
            </Link> */}
            <Link href="/login">
              <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600">
                  Login
              </button>
            </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;