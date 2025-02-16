import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { IProduct } from '../../../types/products';

interface StoreDatahandlerProps {
  products: IProduct[];
  setFilteredProducts: (products: IProduct[]) => void;
}

const StoreDatahandler: React.FC<StoreDatahandlerProps> = ({ products, setFilteredProducts }) => {
  const [sortOption, setSortOption] = useState("best");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  // Extract unique categories from products
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    setCategories(uniqueCategories);
  }, [products]);

  const handleFilter = () => {
    let filteredProducts = [...products];

    // Apply search filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Apply sorting
    if (sortOption === "lowest") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highest") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredProducts);
  };

  // Handle changes in filters
  useEffect(() => {
    handleFilter();
  }, [sortOption, searchTerm, category]);

  return (
    <div className="w-full px-5 md:px-10 lg:px-40 py-5 lg:py-20 flex lg:flex-row flex-col justify-between items-center">
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-2xl font-bold font-josefin-sans text-[#151875]">Ecommerce Furniture Sofa & Chairs</h2>
        <p className="text-xs text-gray-400 font-normal font-lato">Get {products.length} results</p>
      </div>

      <div className="flex justify-start flex-wrap items-center gap-5">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-7 px-2 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-500"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-7 px-2 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-500"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Sort By */}
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="sort" className="text-[#151875] font-lato font-medium">Sort By:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-500"
          >
            <option value="best">Best Match</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StoreDatahandler;
