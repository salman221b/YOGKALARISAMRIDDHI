import React from "react";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ankur (The Seeded Beginning)",
    price: "AED 160",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757153522/9e935f936294a2248fbe5d51c4ae962a294a0747_yoip4p.jpg",
    rating: 4.8,
    reviews: "(1000+)",
  },
  {
    id: 2,
    name: "Sthira (The Grounded Grove)",
    price: "AED 160",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757153589/2d9b6dbf0d0e772d2b4f5a4c8cb6ac512b26296a_n21g7j.jpg",
    rating: 4.9,
    reviews: "(700+)",
  },
  {
    id: 3,
    name: "Ārāma (The Sacred Forest)",
    price: "AED 160",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757153611/d06f7beab4cc6daf401260e3c5235291560de87e_mrsiri.jpg",
    rating: 3.7,
    reviews: "(500+)",
  },
  {
    id: 4,
    name: "Vana Kavacha (The Forest Shield)",
    price: "AED 160",
    image:
      "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757153652/182bec551d38436dcfb4352b31d485dcebdecedf_1_fxreyo.jpg",
    rating: 4.9,
    reviews: "(100+)",
  },
];

const ProductCard = () => {
  return (
    <section className="bg-[#F6F3EB] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
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
                <p className="font-semibold mt-2 text-lg">{product.price}</p>

                {/* Rating */}
                <div className="flex items-center justify-center mt-2 space-x-1">
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
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                  <button className="bg-[#016241] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 shadow">
                    Buy Now
                  </button>
                  <button className="border border-[#016241] text-[#016241] hover:bg-[#016241] hover:text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
