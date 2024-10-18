import Image from "next/image";
import React from "react";
import { FaEnvelope, FaHeart, FaTruck } from "react-icons/fa6";
import QuantityButton from "./_components/QuantityButton";

const sizes = ["XS", "S", "M", "XL", "XXL"];

export default function SizeButtons() {
  return (
    <div className='sizebutton'>
      <div className="flex space-x-3">
        {sizes.map((size, index) => (
          <button
            key={index}
            className="px-4 py-2 border-2 text-[15px] font-semibold transition-colors duration-300 hover:border-pink-500 hover:border-2 hover:text-pink-500"
          >
            {size}
          </button>
        ))}
      </div>
      <div className='sizelist'>
        <ul className='flex gap-4 mt-4'>
          <li className='flex justify-center items-center text-[14px] font-bold gap-4'><Image src='/C.png' width='20' height='20' className='object-cover'/> Size guide</li>
          <li className='flex justify-center items-center text-[14px] font-bold gap-4'><FaTruck/> Shipping</li>
          <li className='flex justify-center items-center text-[14px] font-bold gap-4'><FaEnvelope/> Ask about this products</li>
        </ul>
      </div>
      <div className='sizetabs'>
        <ul className='flex gap-4 mt-4'>
          <li className='flex justify-center items-center text-[14px] font-bold gap-4'><QuantityButton/></li>
          <li className='flex justify-center items-center text-[14px] font-bold px-[31px] rounded-[6px] border-[1.4px] border-[#141414] gap-2'><FaHeart/> ADD TO WISHLIST</li>
        </ul>
      </div>
    </div>
  );
}
