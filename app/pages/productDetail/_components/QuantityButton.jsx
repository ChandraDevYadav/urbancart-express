'use client'
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; 
export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1); 
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1); 
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); 
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className='flex justify-start items-center py-1 bg-[#F8F8F8] '>
      <button
        onClick={handleDecrease}
        className="flex items-center justify-start px-2 w-10 h-10 transition-colors duration-300"
        disabled={quantity <= 1} 
      >
        <FaMinus className="text-[#D0D0D0] hover:text-pink-600" />
      </button>

      <span className="text-lg font-semibold px-4">{quantity}</span>

      <button
        onClick={handleIncrease}
        className="flex items-center justify-end px-2 w-10 h-10 transition-colors duration-300"
      >
        <FaPlus className="text-[#D0D0D0] hover:text-pink-600" />
      </button>      
      </div>
      <button
        onClick={() => console.log(`Added ${quantity} items to the cart`)} 
        className="px-[31px] py-[14px] border rounded-md bg-[#64B6AC] text-[14px] text-white hover:bg-[#1f7067] transition-colors duration-300"
      >
        ADD TO CART
      </button>
    </div>
  );
}
