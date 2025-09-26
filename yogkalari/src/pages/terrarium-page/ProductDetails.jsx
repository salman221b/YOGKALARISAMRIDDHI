import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Marquee from "./Marquee2";
import ScrollToTop from "../../components/ScrollToTop";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [size, setSize] = useState("Ārāma");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  return (
    <section className="py-10 pt-30">
      <div className="text-sm text-gray-500 mb-6 px-26">
        Home &gt; Terrariums &gt; <span className="text-gray-800">Product</span>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Product Images */}
        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="rounded-xl shadow-lg w-full h-[750px] object-cover"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {[product.image, product.image, product.image].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img ? "border-green-700" : "border-gray-200"
                }`}
              />
            ))}
            <button className="w-20 h-20 border border-gray-300 rounded-lg text-sm text-gray-600">
              View More
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-green-800">{product.name}</h1>
          <p className="mt-2 text-gray-700">
            Anchored by a traditional multicolour brass Ganesha, this terrarium
            is both devotional and timeless. Brass is long revered for stability
            and abundance.
          </p>

          <p className="italic text-gray-500 text-sm mt-2">
            Includes a digital care guide. Full instructions on our{" "}
            <span className="underline cursor-pointer">
              Terrarium Care Page
            </span>
            .
          </p>

          {/* Price & Stock */}
          <div className="mt-4">
            <p className="text-2xl font-semibold">{product.price}</p>
            <p className="text-red-600 text-sm mt-1">
              Hurry Up! Only 3 Pieces left
            </p>
          </div>

          {/* Size Selector */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-700">Select Size</h3>
            <div className="flex gap-3 mt-2">
              {["Ārāma", "Ankur", "Large"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSize(option)}
                  className={`px-4 py-1 rounded-full border ${
                    size === option
                      ? "bg-green-800 text-white border-green-800"
                      : "border-gray-400 text-gray-600 hover:border-green-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-700">Select Quantity</h3>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded-xl"
              >
                −
              </button>
              <span className="text-lg font-semibold w-6 text-center">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border rounded-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-green-800 text-white px-6 py-3 rounded-lg shadow hover:bg-green-900">
              Buy Now
            </button>
            <button className="border border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-6 py-3 rounded-lg shadow">
              Add to Cart
            </button>
          </div>

          {/* Description Section */}
          <div className="mt-10 space-y-4 text-gray-700">
            <h3 className="font-bold text-lg">Description</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Placement: Desks, bedside, or children’s rooms.</li>
              <li>Gifting: Ideal for graduations or new jobs.</li>
              <li>Uniqueness: 3 pieces currently in stock.</li>
            </ul>

            <h3 className="font-bold text-lg mt-6">Why Brass Ganesha?</h3>
            <p>
              Heritage material with auspicious energy. Carries durability and
              sacred longevity.
            </p>

            <h3 className="font-bold text-lg mt-6">Key Features</h3>
            <p>
              Handcrafted terrarium with brass idol, long-lasting greenery, and
              minimal maintenance.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Marquee />
      </div>
      <ScrollToTop />
    </section>
  );
};

export default ProductDetails;
