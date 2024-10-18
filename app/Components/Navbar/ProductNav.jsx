"use client"; // This makes it a client component

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Import both useRouter and usePathname
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
import { useEffect, useState } from "react";

export default function ProductNav() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const router = useRouter(); // Declare router
  const pathname = usePathname(); // Get current path

  const isActive = (path) => pathname === path;

  return (
    <div className="grid grid-cols-3 bg-white px-[60px] py-3">
      <div className="">
        <ul className="flex gap-8 text-black font-bold">
          <li>
            <button
              type="button"
              onClick={() => router.push("/")}
              className={`${
                isActive("/") ? "text-[#64B6AC] underline" : "text-black"
              }`}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => router.push("/pages/womens")}
              className={`${
                isActive("/pages/womens")
                  ? "text-[#64B6AC] underline"
                  : "text-black"
              }`}
            >
              WOMEN'S
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => router.push("/pages/mens")}
              className={`${
                isActive("/pages/mens") ? "text-[#64B6AC] underline" : "text-black"
              }`}
            >
              MEN'S
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => router.push("/pages/kids")}
              className={`${
                isActive("/pages/kids") ? "text-[#64B6AC] underline" : "text-black"
              }`}
            >
              KID'S
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/group.png"
          width="40"
          height="40"
          className="object-cover"
          alt="logo"
        />
      </div>
      <div className="flex justify-end items-center gap-5">
        <div className="">
          <FaMagnifyingGlass className="text-black text-xl" />
        </div>
        <div className="relative">
          <p className="absolute bg-[#64B6AC] px-1 bottom-[14px] left-3 text-[10px] rounded-full text-white">
            0
          </p>
          <SlHandbag className="text-black text-xl" />
        </div>
      </div>
    </div>
  );
}
