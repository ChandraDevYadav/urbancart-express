import { FaRegStar } from "react-icons/fa6";
import ColorDots from "./ColorDots";
import SizesMenu from "../SizesMenu";
import { GiPlainCircle } from "react-icons/gi";

export default function ItemDetail() {
  return (
    <div className="grid grid-cols-1 mt-12 ml-8">
      <div>
        <p className="text-[22px] font-semibold">
          Black Oversize Large Size Comfortable Cotton T-Shirt
        </p>
        <div className="flex gap-2 mt-3">
          <p className="text-[#64B6AC] text-[24px] font-semibold">$250.00</p>
          <p className="text-gray-400 text-[24px] font-semibold line-through">
            $321.00
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex gap-1">
            <FaRegStar className="text-[#FFBA0A] text-[15px]" />
            <FaRegStar className="text-[#FFBA0A] text-[15px]" />
            <FaRegStar className="text-[#FFBA0A] text-[15px]" />
            <FaRegStar className="text-[#FFBA0A] text-[15px]" />
            <FaRegStar className="text-[#FFBA0A] text-[15px]" />
          </div>
          <p className="underline text-md font-semibold text-[#141414]">
            3 reviews
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <p className="text-[#999999] text-[16px] font-semibold">
            Availability:
          </p>
          <p className="text-[16px] font-semibold text-[#141414]">
            In stock (7 items)
          </p>
        </div>
        <div className="mt-4">
          <p className="text-[#999999] text-[16px] font-semibold mb-3">
            Color:
          </p>
          <ColorDots />
        </div>
        <div className="mt-4">
          <p className="text-[#999999] text-[16px] font-semibold mb-3">Size:</p>
          <SizesMenu />
        </div>
        <div className="mt-4">
          <p className="text-[#000000] text-[16px] font-semibold mb-3">
            Description:
          </p>
          <p className="text-[#999999] text-[16px] mt-3 pr-56">
            Design inspiration lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci
            magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit
            amet enim.
          </p>
        </div>
        <ul className="space-y-2 mt-3">
          <li className="text-[#999999] flex justify-start gap-2 items-center">
            <GiPlainCircle className="w-[6px] h-[6px] text-[#64B6AC]" />
            Fabric 1: 100% Polyester
          </li>
          <li className="text-[#999999] flex justify-start gap-2 items-center">
            <GiPlainCircle className="w-[6px] h-[6px] text-[#64B6AC]" />
            Fabric 2: 100% Polyester, Lining: 100% Polyester
          </li>
          <li className="text-[#999999] flex justify-start gap-2 items-center">
            <GiPlainCircle className="w-[6px] h-[6px] text-[#64B6AC]" />
            Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane
          </li>
        </ul>
      </div>
    </div>
  );
}
