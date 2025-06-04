import React from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";

const Page = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-10 px-6">
        {/* Left spacer (optional or for symmetry) */}
        <div className="w-1/3" />

        {/* Centered button */}
        <div className="flex justify-center items-center w-1/3">
          <button className="flex items-center border border-black px-4 py-2 rounded-md">
            Next Page <MoveRight className="ml-3" strokeWidth={1.5} />
          </button>
        </div>

        {/* Right side pagination info */}
        <div className="flex justify-end items-center gap-4 w-1/3">
          <div className="bg-gray-200 rounded-sm py-2 px-2">01</div>
          <div className="flex items-center">of 55</div>
          <div className="bg-gray-200 rounded-sm py-2 px-2">
            <ChevronLeft />
          </div>
          <div className="bg-gray-200 rounded-sm py-2 px-2">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
