import React from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black py-4">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">SPORTS</h1>

          <nav>
            <ul className="hidden lg:block lg:flex list-none gap-6 text-white">
              <li className="relative group">
                <a
                  href="#"
                  className="hover:text-yellow-500 transition duration-200"
                >
                  Product
                </a>
                <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300"></span>
              </li>

              <li className="relative group">
                <a
                  href="#"
                  className="hover:text-yellow-500 transition duration-200"
                >
                  Track Order
                </a>
                <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300"></span>
              </li>

              <li className="relative group">
                <a
                  href="#"
                  className="hover:text-yellow-500 transition duration-200"
                >
                  Contact
                </a>
                <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300"></span>
              </li>

              <li className="relative group">
                <a
                  href="#"
                  className="hover:text-yellow-500 transition duration-200"
                >
                  About Us
                </a>
                <span className="absolute left-0 bottom-[-2px] w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300"></span>
              </li>
            </ul>

            <div className="">
              <Menu className="text-white block lg:hidden" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
