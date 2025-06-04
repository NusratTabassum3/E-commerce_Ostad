import React from "react";
import { ShoppingCart, Search, X } from "lucide-react";

const SearchBar = () => {
  return (
    <div>
      <section className="px-4 py-5">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
            {/* Search bar */}
            <div className="relative flex-grow w-full sm:max-w-[80%]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-300 rounded-md py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/*  Search Icon */}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />

              {/*  Clear Icon */}
              <X className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black cursor-pointer hover:text-red-500" />
            </div>

            {/* Cart Button */}
            <button className="flex items-center justify-center sm:w-auto w-full bg-yellow-500 rounded-md py-3 px-4 font-semibold min-h-[44px]">
              <ShoppingCart className="text-black fill-black" />
              <span className="ml-2">View Cart</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
