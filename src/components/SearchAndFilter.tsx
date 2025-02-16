import React, { useState, useEffect, useCallback } from "react";
import { IProduct } from "../../types/products";

interface SearchAndFilterProps {
  products: IProduct[];
  setFilteredProducts: (products: IProduct[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  products,
  setFilteredProducts,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  // Extract unique categories from products
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Memoized handleFilter function
  const handleFilter = useCallback(() => {
    let filtered = [...products]; // Ensure a new array to avoid modifying state directly

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (sortOrder === "lowest") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highest") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, sortOrder, setFilteredProducts]);

  // Handle changes in filters
  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 px-5 md:px-10 lg:px-40">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Price Sorting */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="default">Sort by Price</option>
        <option value="lowest">Lowest to Highest</option>
        <option value="highest">Highest to Lowest</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
