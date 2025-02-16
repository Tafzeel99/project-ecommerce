"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Companies from "@/components/Companies";
import MainHeader from "@/components/MainHeader";
import StoreDatahandler from "@/components/mini/StoreDatahandler";
import { getProductData } from "@/sanity/lib/getProductData";
import { IProduct } from "../../../types/products";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { TbHeart } from "react-icons/tb";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function ShopGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  // Update filtered products based on search query
  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <>
      <MainHeader title="Shop Grid Default" prev="Home . Pages ." current="Shop Grid Default" />

      {/* Pass sorting and filtering logic */}
      <StoreDatahandler products={products} setFilteredProducts={setFilteredProducts} />

      <div className="px-5 md:px-10 lg:px-40 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10 py-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product._id} href={`product/${product._id}`}>
              <div className="w-full h-[360px] flex flex-col relative group transition-all shadow-sm duration-200 hover:shadow-md hover:shadow-rose-200 rounded-md shadow-gray-200">
                
                {/* Image */}
                <div className="w-full h-[70%] bg-[#f6f7fb] flex justify-center items-center">
                  <Image src={urlFor(product.image).url()} height={170} width={170} alt="product" />
                </div>

                {/* Details */}
                <div className="flex flex-col items-center justify-center gap-2 bg-white py-2">
                  <h1 className="text-navyBlue font-lato text-center font-semibold">{product.name}</h1>
                  <div className="flex justify-center items-center gap-2">
                    <div className="size-3 bg-[#DE9034] rounded-full"></div>
                    <div className="size-3 bg-pink rounded-full"></div>
                    <div className="size-3 bg-offPurple rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <p className="font-josefin-sans font-normal text-sm text-offBlue">{product.price}</p>
                    <p className="font-lato text-xs text-pink line-through">{product.price * 2}</p>
                  </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-2 absolute bottom-28 left-7 md:left-8 lg:left-16 z-10 opacity-0 group-hover:opacity-100">
                  <div className="flex justify-center items-center bg-transparent text-[#1490b9] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1">
                    <BsCart2 size={25} />
                  </div>

                  <div className="flex justify-center items-center bg-transparent text-[#1490b9] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1">
                    <TbHeart size={25} />
                  </div>

                  <div className="flex justify-center items-center bg-transparent text-[#1490b9] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1">
                    <LiaSearchPlusSolid size={25} />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No products found.</p>
        )}
      </div>

      <Companies />
    </>
  );
}
