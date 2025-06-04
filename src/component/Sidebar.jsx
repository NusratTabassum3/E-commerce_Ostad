import React from "react";
import { Check, ChevronUp, Funnel, X, ChevronDown } from "lucide-react";
const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 border-b-2 border-gray-400 border-opacity-45 pb-4">
          <Funnel></Funnel>
          <h3 className="text-xl">Filters</h3>
        </div>
        <div className="border-b-2 border-gray-400 border-opacity-45 pb-4">
          <div className="flex justify-between items-center gap-3">
            <div>Applied Filters</div>
            <div>
              <button className="underline font-semibold text-sm">
                clear all
              </button>
            </div>
          </div>

          <div className="flex flex-wrap xl:flex-nowrap justify-start items-center mt-3 gap-2">
            <div className="flex justify-between items-center gap-1 bg-gray-200 rounded-sm text-sm px-2 py-1 cursor-pointer hover:bg-gray-300 transition">
              <div>All</div>
              <div>
                <X className="w-3 h-3" />
              </div>
            </div>

            <div className="flex justify-between items-center gap-1 bg-gray-200 rounded-sm text-sm px-2 py-1 cursor-pointer hover:bg-gray-300 transition">
              <div>Running shoes</div>
              <div>
                <X className="w-3 h-3" />
              </div>
            </div>

            <div className="flex justify-between items-center gap-1 bg-gray-200 rounded-sm text-sm px-2 py-1 cursor-pointer hover:bg-gray-300 transition">
              <div>Red</div>
              <div>
                <X className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 border-opacity-45 pb-4">
          <div className="flex justify-between items-center">
            <h4>Category</h4>
            <ChevronUp></ChevronUp>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <input
                id="all"
                value="All"
                type="checkbox"
                className="accent-black"
              />
              <label htmlFor="all">All</label>
            </div>

            <div className="flex items-center gap-4">
              <input
                id="running"
                value="Running Shoes"
                type="checkbox"
                className="accent-black"
              />
              <label htmlFor="running">Running Shoes</label>
            </div>

            <div className="flex items-center gap-4">
              <input
                id="cat3"
                value="Category 3"
                type="checkbox"
                className="accent-black"
              />
              <label htmlFor="cat3">Category 3</label>
            </div>

            <div className="flex items-center gap-4">
              <input
                id="cat4"
                value="Category 4"
                type="checkbox"
                className="accent-black"
              />
              <label htmlFor="cat4">Category 4</label>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 border-opacity-45 pb-4">
          <div className="flex justify-between items-center">
            <h4>Stock Status</h4>
            <ChevronUp></ChevronUp>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <input
                id="in-stock"
                value="In Stock"
                type="checkbox"
                className="accent-black"
              />
              <label htmlFor="in-stock">In Stock</label>
            </div>

            <div className="flex items-center gap-4">
              <input
                id="out-of-stock"
                value="Out of Stock"
                type="checkbox"
                className="accent-black"
              />
              <label htmlFor="out-of-stock">Out of Stock</label>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 border-opacity-45 pb-4">
          <div className="flex justify-between items-center">
            <h4>Size</h4>
            <ChevronDown></ChevronDown>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between items-center mb-3">
            <h4>Color</h4>
            <ChevronUp></ChevronUp>
          </div>

          <div className="grid grid-cols-6 gap-2">
            <div className="bg-red-600 h-5 w-5 rounded-full border border-black flex justify-center items-center ">
              <Check className=" h-5 text-white" />
            </div>
            <div className="bg-orange-400 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-green-500 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-green-400 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-blue-700 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-pink-700 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-pink-300 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-green-300 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-pink-800 h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-black h-5 w-5 rounded-full border border-black"></div>
            <div className="bg-white h-5 w-5 rounded-full border border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
