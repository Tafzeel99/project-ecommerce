"use client";
import React, { useState, useEffect, Suspense } from "react";
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
import Pagination from "@/components/Pagination";

function ShopGridContent() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of products per page
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

  useEffect(() => {
    if (searchQuery && products.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setCurrentPage(1);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <MainHeader title="Shop Grid Default" prev="Home . Pages ." current="Shop Grid Default" />
      <StoreDatahandler products={products} setFilteredProducts={setFilteredProducts} />
      <div className="px-5 md:px-10 lg:px-40 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10 py-10">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Link key={product._id} href={`product/${product._id}`}>
              <div className="w-full h-[360px] flex flex-col relative group transition-all shadow-sm duration-200 hover:shadow-md hover:shadow-rose-200 rounded-md shadow-gray-200">
                <div className="w-full h-[70%] bg-[#f6f7fb] flex justify-center items-center">
                  <Image src={urlFor(product.image).url()} height={170} width={170} alt="product" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 bg-white py-2">
                  <h1 className="text-navyBlue font-lato text-center font-semibold">{product.name}</h1>
                  <div className="flex gap-2">
                    <p className="font-josefin-sans font-normal text-sm text-offBlue">{product.price}</p>
                    <p className="font-lato text-xs text-pink line-through">{product.price * 2}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No products found.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
      <Companies />
    </>
  );
}

export default function ShopGrid() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ShopGridContent />
    </Suspense>
  );
}
