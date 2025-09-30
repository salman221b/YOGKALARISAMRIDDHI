import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import Marquee from "./Marquee";

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F6F3EB] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {/* Product Image */}
              <div className="relative w-full h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 text-center">
                <h3
                  className="text-lg text-gray-900 leading-tight"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {product.name}
                </h3>
                <p>{product.description}</p>
                <p className="font-semibold mt-2 text-lg">{product.price}</p>

                {/* Rating */}
                {/* <div className="flex items-center justify-center mt-2 space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.round(product.rating)
                          ? "fill-[#016241] text-[#084C2E]"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">
                    {product.reviews}
                  </span>
                </div> */}

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                  {/* <button className="bg-[#016241] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 shadow">
                    Buy Now
                  </button> */}
                  <button className="border border-[#016241] text-[#016241] hover:bg-[#016241] hover:text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 shadow">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Marquee />
      </div>
    </section>
  );
};

export default ProductCard;
