import Image from "next/image";
import Link from "next/link";

export default function HeroSec() {
  return (
    <div className="grid grid-cols-5 gap-8 px-14 py-14">
      <div className="col-span-2">
        <div className="relative overflow-hidden w-full h-full group">
          <Image
            src="/Hero.png"
            width="500"
            height="1000"
            alt=""
            className="w-full h-full transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-125 object-cover cursor-default" // Add cursor-default here
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <Link href='/pages/productDetail' className="bg-[#64B6AC] text-white px-4 py-2">
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 gap-y-8">
        <div className="flex gap-8">
        <div className="relative overflow-hidden w-full h-full group">
          <Image
            src="/Hero3.png"
            width="500"
            height="500"
            alt=""
            className="w-full h-full transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-125 object-cover cursor-default" // Add cursor-default here
          />

          <button className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="bg-[#64B6AC] text-white px-4 py-2">
              DISCOVER MORE
            </div>
          </button>
        </div>
        <div className="relative overflow-hidden w-full group">
          <Image
            src="/Hero2.png"
            width="500"
            height="500"
            alt=""
            className="w-full h-full transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-125 object-cover cursor-default" // Add cursor-default here
          />

          <button className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="bg-[#64B6AC] text-white px-4 py-2">
              DISCOVER MORE
            </div>
          </button>
        </div>
        </div>
        <div className="mt-8">
        <div className="relative overflow-hidden w-full group">
          <Image
            src="/Hero1.png"
            width="500"
            height="500"
            alt=""
            className="w-full h-full transition-transform duration-500 ease-in-out transform scale-100 group-hover:scale-125 object-cover cursor-default" // Add cursor-default here
          />

          <button className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="bg-[#64B6AC] text-white px-4 py-2">
              DISCOVER MORE
            </div>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
