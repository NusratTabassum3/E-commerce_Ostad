import React from "react";
import { AlignLeft } from "lucide-react";

const Sort = () => {
  return (
    <div className="px-4">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center text-sm text-black gap-2">
        <span className="underline">Home</span>
        <span>/</span>
        <span className="underline">Search</span>
        <span>/</span>
        <span>Running Shoes</span>
      </div>

      {/* Sort and Results Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3 mt-3">
        {/* Results Text */}
        <div className="text-sm font-semibold text-black">
          <span className="text-xl md:text-2xl">“Running Shoes” — </span>
          <span className="text-black">288 Results</span>
        </div>

        {/* Sort Button */}
        <div className="flex items-center px-3 py-2 gap-2 border border-black rounded-sm cursor-pointer hover:bg-gray-100 transition">
          <AlignLeft />
          <span>Sort by</span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
