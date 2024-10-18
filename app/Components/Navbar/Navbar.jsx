import { FaHeart, FaUserLarge } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";


export default function Navbar() {
  return (
    <div className="grid grid-cols-3 bg-[#64B6AC] px-[60px] py-3">
      <div className="">
        <h1 className="text-sm text-white">UrbanCart Epress</h1>
      </div>
      <div className='flex justify-end items-center'>
        <p className='text-white pr-20'>50% OFF all new collections! Discover Now!</p>
      </div>
      <div className=''>
        <div className='flex justify-end items-center pr-10'>
          <div className='flex justify-center items-center gap-2  border-r pr-5 border-white'>
          <FaUserLarge className='text-white'/>
          <p className='text-white'>My Account</p>
          </div>
          <div className='flex justify-start gap-2 items-center border-r px-5 border-white'>
            <FaHeart className='text-white'/>
            <p className='text-white'>Wishlist</p>
          </div>
          <div className='flex justify-center gap-2 items-center pl-5'>
            <BiLogIn className='text-white' />
            <p className='text-white'>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}
