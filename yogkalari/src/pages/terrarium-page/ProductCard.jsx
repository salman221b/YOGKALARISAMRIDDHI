import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import Marquee from "./Marquee";

const ProductCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <section className="bg-[#F6F3EB] py-10">
      <div className="max-w-full mx-auto px-10">
        {/* Header Section with Title and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#084C2E]">
              Tereriums
            </h1>

            {/* Search Bar */}
            <div className="flex items-center space-x-2">
              {/* Input with icon */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#] focus:border-transparent"
                />
                {/* Icon inside input */}
                <img
                  src="/Search.png"
                  alt="Search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                />
              </div>

              {/* Search button */}
              <button
                className="px-6 py-2 bg-[#084C2E] text-white rounded-full hover:bg-[#0A7646] transition"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer bg-white"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {/* Product Image */}
              <div className="relative w-full h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl px-2 py-2"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3
                  className="text-lg text-gray-900 leading-tight"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {product.name}
                </h3>
                <p>{product.description}</p>
                <p className="font-semibold mt-2 text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p
              className="text-gray-600 text-lg"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              No products found matching your search.
            </p>
          </div>
        )}
      </div>

      <div className="mt-10">
        <Marquee />
      </div>
    </section>
  );
};

export default ProductCard;
