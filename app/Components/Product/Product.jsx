"use client";
import Image from "next/image";
import React, { useState } from "react";

const Collection = () => {
  const products = [
    {
      image: "/Hero2.png",
      images: ["/Hero2.png", "/Hero1.png", "/Hero3.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "4",
      layerImage: "/layers.png",
      oldPrice: 210,
      newPrice: 200,
      imageTitle: "#1 Bestseller",
    },
    {
      image: "/Hero1.png",
      images: ["/Hero1.png", "/Hero2.png", "/Hero3.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 5,
      new: "NEW!",
      layer: "4",
      layerImage: "/layers.png",
      oldPrice: 210,
      newPrice: 200,
    },
    {
      image: "/Hero3.png",
      images: ["/Hero3.png", "/Hero1.png", "/Hero2.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 3,
      sale: "SALE!",
      layer: "4",
      layerImage: "/layers.png",
      oldPrice: 210,
      newPrice: 200,
    },
    {
      image: "/Hero3.png",
      images: ["/Hero1.png", "/Hero.png", "/Hero2.png", "/Hero3.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "4",
      layerImage: "/layers.png",
      oldPrice: 210,
      newPrice: 200,
      imageTitle: "#1 Bestseller",
    },
    {
      image: "/Hero1.png",
      images: ["/Hero.png", "/Hero2.png", "/Hero1.png", "/Hero3.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "3",
      layerImage: "/layers.png",
      oldPrice: 180,
      newPrice: 150,
    },
    {
      image: "/Hero2.png",
      images: ["/Hero3.png", "/Hero1.png", "/Hero2.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "4",
      sale: "SALE!",
      layerImage: "/layers.png",
      oldPrice: 220,
      newPrice: 210,
      imageTitle: "#1 Bestseller",
    },
    {
      image: "/Hero1.png",
      images: ["/Hero3.png", "/Hero2.png", "/Hero.png", "/Hero1.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "5",
      layerImage: "/layers.png",
      oldPrice: 250,
      newPrice: 240,
    },
    {
      image: "/Hero3.png",
      images: ["/Hero2.png", "/Hero1.png", "/Hero.png", "/Hero3.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "4",
      new: "NEW!",
      layerImage: "/layers.png",
      oldPrice: 220,
      newPrice: 210,
      imageTitle: "#1 Bestseller",
    },
    {
      image: "/Hero3.png",
      images: ["/Hero.png", "/Hero1.png", "/Hero2.png", "/Hero3.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "4",
      layerImage: "/layers.png",
      oldPrice: 220,
      newPrice: 210,
      imageTitle: "#1 Bestseller",
    },
    {
      image: "/Hero.png",
      images: ["/Hero1.png", "/Hero2.png", "/Hero3.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 5,
      new: "NEW!",
      layer: "3",
      layerImage: "/layers.png",
      oldPrice: 210,
      newPrice: 200,
    },
    {
      image: "/Hero1.png",
      images: ["/Hero.png", "/Hero2.png", "/Hero3.png", "/Hero1.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 5,
      sale: "SALE!",
      layer: "3",
      layerImage: "/layers.png",
      oldPrice: 210,
      newPrice: 200,
    },
    {
      image: "/Hero2.png",
      images: ["/Hero.png", "/Hero1.png", "/Hero2.png", "/Hero3.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 4,
      layer: "4",
      layerImage: "/layers.png",
      oldPrice: 220,
      newPrice: 210,
      imageTitle: "#1 Bestseller",
    },
  ];

  return (
    <div>
      <div className="relative">
        <h1 className="text-center text-8xl font-bold text-[#DFDFDF] tracking-wide pb-12">
          TRENDING PRODUCTS
        </h1>
        <p className="absolute top-8 left-[40%] text-[32px] font-bold text-[#141414]">
          WINTER COLLECTION
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-14">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMainImage(product.image);
      }}
    >
      <div className="relative overflow-hidden w-full rounded-lg">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-[361px] transition-transform duration-500 ease-in-out transform scale-100 hover:scale-125 object-cover"
        />
      </div>

      {isHovered && (
        <div className="absolute top-[60%] z-10 left-0 right-0 flex justify-start space-x-2 bg-white pl-4 py-2">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="small preview"
              className="w-12 h-12 object-cover border-2 border-transparent hover:border-gray-500 cursor-pointer"
              onMouseEnter={() => setMainImage(img)}
            />
          ))}
        </div>
      )}

      <div className="">
        <h3 className="text-md font-semibold pl-2 pt-2">{product.title}</h3>

        <div className="">
          {product.sale && (
            <p className="absolute top-2 bg-[#008000] ml-4 mt-2 px-2 py-1 text-white font-medium">
              {product.sale}
            </p>
          )}
          {product.new && (
            <p className="absolute top-2 ml-4 mt-2 bg-[#64B6AC] text-white px-2 py-4 text-sm font-medium rounded-full">
              {product.new}
            </p>
          )}
          {product.imageTitle && (
            <h1 className="bg-[#64B6AC] text-white absolute top-[68%] w-full text-center">
              {product.imageTitle}
            </h1>
          )}
          {product.layer && product.layerImage && (
            <p className="absolute top-[60%] bg-white px-2 rounded-2xl right-0 flex justify-center items-center gap-2">
              <Image
                src={product.layerImage}
                width="20"
                height="20"
                className="w-4 h-4"
                alt=""
              />
              {product.layer}
            </p>
          )}
        </div>

        <div className="flex items-center mt-2 pl-4">
          {[...Array(5)].map((_, starIndex) => (
            <svg
              key={starIndex}
              className={`w-4 h-4 fill-current ${
                starIndex < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15 8.5 22 9.5 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.5 9 8.5 12 2" />
            </svg>
          ))}
        </div>

        <div className="flex items-center mt-2 pl-2 pb-6">
          <span className="text-gray-500 line-through mr-2">
            ${product.oldPrice}
          </span>
          <span className="text-black font-bold">${product.newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
