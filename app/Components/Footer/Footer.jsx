import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="px-[120px] py-[60px] bg-[#141414]">
      <div className="grid grid-cols-4 gap-6">
        <div className="">
          <h1 className="text-[18px] font-bold text-[#FFFFFF]">Company</h1>
          <ul className="flex flex-col gap-y-2 mt-3 text-[#FFFFFF] font-medium">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & conditions</li>
            <li>Return & refund policy</li>
            <li>Shipping policy</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold text-[#FFFFFF]">Resources</h1>
          <ul className="flex flex-col gap-y-2 mt-3 text-[#FFFFFF] font-medium">
            <li>Blog</li>
            <li className="flex gap-2">
              Newsletter{" "}
              <button className="bg-[#FFFFFF] text-[12px] px-[8px] py-[2px] text-[#141414] font-semibold rounded">
                New
              </button>
            </li>
            <li>Help center</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold text-[#FFFFFF]">For partners</h1>
          <ul className="flex flex-col gap-y-2 mt-3 text-[#FFFFFF] font-medium">
            <li>Register as a professional</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-bold text-[#FFFFFF]">Get the app</h1>
          <ul className="flex flex-col gap-y-4 mt-4 text-[#FFFFFF] font-medium">
            <li>
              <Image
                src="/AS.png"
                width="200"
                height="200"
                className="w-[148.5px] h-[44px] object-cover"
              />
            </li>
            <li className="">
              <Image
                src="/PS1.png"
                width="200"
                height="200"
                className="w-[148.5px] h-[44px] object-cover mr-2"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-t-[#E3E3E3] mt-6 pt-5">
        <div>
          <p className="text-[#FFFFFF] text-[16px]">
            © 2021 Urbancart Express. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <FaTwitter className="text-[#D4E3FF] w-6 h-6" />
          <FaLinkedin className="text-[#D4E3FF] w-6 h-6" />
          <FaYoutube className="text-[#D4E3FF] w-6 h-6" />
          <FaFacebook className="text-[#D4E3FF] w-6 h-6" />
          <FaGithub className="text-[#D4E3FF] w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
