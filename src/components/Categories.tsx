import React from "react";
import Heading from "./mini/Heading";
import Image from "next/image"; // Ensure you import Image if you're using Next.js
import Link from "next/link";

const Categories = () => {
  return (
    <div className="w-full px-5 lg:px-40 py-10">
      <Heading text="Top Categories" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
        {/* Chair Category */}
        <div className="w-full h-[360px] flex flex-col items-center justify-center relative group transition-all duration-200 hover:shadow-sm shadow-gray-300">
          <div className="w-full h-[70%]">
            {/* Image */}
            <div className="size-[220px] bg-[#f7f7f7] flex justify-center items-center rounded-full drop-shadow-lg group-hover:border group-hover:border-purple mx-auto">
              <Image src={"/latest5.png"} height={170} width={170} alt="Chair" />
            </div>
          </div>
          {/* Details */}
          <div className="flex flex-col items-center justify-center gap-2 bg-white py-2">
            <h1 className="text-[#151875] underline font-lato">Modern Chairs</h1>
          </div>

          {/* Centered Button */}
          <Link href={"category-sofa"}>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
            <button className="px-4 py-2 rounded-sm text-white bg-[#08D15F] font-josefin-sans text-xs hover:bg-black">
              View Shop
            </button>
          </div>
          </Link>
        </div>

        {/* Sofa Category */}
        <div className="w-full h-[360px] flex flex-col items-center justify-center relative group transition-all duration-200 hover:shadow-sm shadow-gray-300">
          <div className="w-full h-[70%]">
            {/* Image */}
            <div className="size-[220px] bg-[#f7f7f7] flex justify-center items-center rounded-full drop-shadow-lg group-hover:border group-hover:border-purple mx-auto">
              <Image src={"/wheelchair.png"} height={170} width={170} alt="Sofa" />
            </div>
          </div>
          {/* Details */}
          <div className="flex flex-col items-center justify-center gap-2 bg-white py-2">
            <h1 className="text-[#151875] underline font-lato">Comfortable Sofas</h1>
            
          </div>

          {/* Centered Button */}
          <Link href={"category-sofa"}>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
            <button className="px-4 py-2 rounded-sm text-white bg-[#08D15F] font-josefin-sans text-xs hover:bg-black">
              View Shop
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
