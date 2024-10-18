"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductIcon() {
  const [easyReturnImg, setEasyReturnImg] = useState("/BVector.png");
  const [exchangeImg, setExchangeImg] = useState("/BVector2.png");
  const [discountImg, setDiscountImg] = useState("/BVector3.png");
  const [paymentImg, setPaymentImg] = useState("/BVector4.png");

  return (
    <div className="bg-[#F5F5F5] px-[162px] py-[46px] my-[46px]">
      <div className="grid grid-cols-4">
        {/* Easy Return Policy */}
        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <div
                className="bg-white hover:bg-red-600 rounded-full shadow-sm p-10 flex justify-center items-center"
                onMouseEnter={() => setEasyReturnImg("/AVector.png")}
                onMouseLeave={() => setEasyReturnImg("/BVector.png")}
              >
                <Image
                  width="200"
                  height="200"
                  src={easyReturnImg}
                  alt="Easy Return Policy"
                  className="w-[65px] h-[65px] transition-colors duration-300"
                />
              </div>
            </div>
            <p className="font-bold text-[#141414] text-[20px] mt-6">
              Easy Return Policy
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <div
                className="bg-white hover:bg-red-600 rounded-full shadow-sm p-10 flex justify-center items-center"
                onMouseEnter={() => setExchangeImg("/AVector2.png")}
                onMouseLeave={() => setExchangeImg("/BVector2.png")}
              >
                <Image
                  width="200"
                  height="200"
                  src={exchangeImg}
                  alt="7 Day Exchange Policy"
                  className="w-[65px] h-[65px] transition-colors duration-300"
                />
              </div>
            </div>
            <p className="font-bold text-[#141414] text-[20px] mt-6">
              7 Day Exchange Policy
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <div
                className="bg-white hover:bg-red-600 rounded-full shadow-sm p-10 flex justify-center items-center"
                onMouseEnter={() => setDiscountImg("/AVector3.png")}
                onMouseLeave={() => setDiscountImg("/BVector3.png")}
              >
                <img
                  src={discountImg}
                  alt="Weekend Discount"
                  className="w-[65px] h-[65px] transition-colors duration-300"
                />
              </div>
            </div>
            <p className="font-bold text-[#141414] text-[20px] mt-6">
              Weekend Discount
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <div
                className="bg-white hover:bg-red-600 rounded-full shadow-sm p-10 flex justify-center items-center"
                onMouseEnter={() => setPaymentImg("/AVector4.png")}
                onMouseLeave={() => setPaymentImg("/BVector4.png")}
              >
                <Image
                  width="200"
                  height="200"
                  src={paymentImg}
                  alt="Secure Payment Methods"
                  className="w-[65px] h-[65px] transition-colors duration-300"
                />
              </div>
            </div>
            <p className="font-bold text-[#141414] text-[20px] mt-6">
              Secure Payment Methods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
