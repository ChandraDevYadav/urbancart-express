import Link from 'next/link'
import React from 'react'

const BannerSec = () => {
  return (
    <div className="bg-[url('/banner.jfif')] w-full bg-cover bg-bottom h-screen my-14 flex justify-center items-center">
        <div className='grid grid-cols-12'>
            <div className='col-span-4'></div>
        <div className='col-span-4 flex justify-center items-center border border-white rounded-[5px]'>
            <div className='bg-white m-[10px] rounded-[5px] w-[528px] h-[289px] pt-12'>
                <p className='text-[16px] text-[#64B6AC] text-center font-semibold'>Limited Time Offer!</p>
                <h1 className='text-[46px] font-bold text-center'>-40% OFF </h1>
                <p className='text-[16px] text-[#777777] text-center font-medium mb-5 ml-3'>Get The Best Deals Now</p>
                <div className='flex justify-center items-center'>
                <Link href='' className='text-white font-medium text-[16px] bg-[#64B6AC] px-[31px] py-[11px]'>DISCOVER NOW</Link>
                </div>
            </div>
        </div>
        <div className='col-span-4'></div>
        </div>
    </div>
  )
}

export default BannerSec