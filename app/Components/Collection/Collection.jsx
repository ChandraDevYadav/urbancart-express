"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const Collection = () => {
  const products = [
    {
      image: "/Hero2.png",
      images: ["/Hero2.png", "/Hero1.png", "/Hero3.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
      rating: 5,
      layer: "3",
      layerImage: "/layers.png",
      oldPrice: 180,
      newPrice: 150,
    },
    {
      image: "/Hero2.png",
      images: ["/Hero3.png", "/Hero1.png", "/Hero2.png", "/Hero.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 5,
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
      rating: 5,
      layer: "5",
      layerImage: "/layers.png",
      oldPrice: 250,
      newPrice: 240,
    },
    {
      image: "/Hero3.png",
      images: ["/Hero2.png", "/Hero1.png", "/Hero.png", "/Hero3.png"],
      title: "Black Oversize Large Size Comfortable Cotton T-Shirt",
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
          RECENT PRODUCTS
        </h1>
        <p className="absolute top-8 left-[40%] text-[32px] font-bold text-[#141414]">
          SEE OUR COLLECTION
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
      className="max-w-sm relative bg-white border rounded-[12px] border-[#DFDFDF]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMainImage(product.image);
      }}
    >
      <div className="relative overflow-hidden w-full rounded-lg">
        <Image
        width='600'
        height='600'
          src={mainImage}
          alt={product.title}
          className="w-full h-[361px] transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-125 object-cover"
        />
      </div>

      {isHovered && (
        <div className="absolute top-[50.3%] z-50 left-0 right-0 justify-start bg-white">
          <div className="bg-gray-100">
            <p className="pl-3 py-1">4 sizes available</p>
          </div>
          <div className="flex justify-start space-x-2 pl-3 py-3 bg-white border-b border-gray-300">
            {product.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                width="50"
                height="50"
                alt="small preview"
                className="w-12 h-14 object-cover rounded-[4px] hover:border hover:border-[#64B6AC] hover:rounded-[4px] cursor-pointer"
                onMouseEnter={() => setMainImage(img)}
              />
            ))}
          </div>
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
          {product.layer && (
            <div className="absolute top-[60%] right-9 flex justify-center items-center">
              <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r z-30 from-[#FC00FF] to-[#00DBDE] absolute" />

              <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r z-20 from-[#FF5F6D] to-[#FFC371] absolute transform translate-x-1/2" />

              <span className="relative z-10 left-2 py-1 pl-9 pr-2 rounded-2xl bg-white text-black font-bold text-xs">
                {product.layer}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 mt-2 pl-4">
          {[...Array(5)].map((_, starIndex) => (
            <FaStar
              key={starIndex}
              className={`w-[15px] h-[15px] fill-current ${
                starIndex < product.rating ? "text-[#F49F0B]" : "text-gray-300"
              }`}
            />
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
