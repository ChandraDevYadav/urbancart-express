'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';

const Carousel = () => {
  const slides = [
    {
      image: '/Banner1.png',
      massgro: '/MG.png',
      title: 'Clothing Made For You!',
      muto: 'Your Fashion Smarter',
      description: 'Click here to shop in your local currency. We ship over 2million products around the world!',
    },
    {
      image: '/Banner2.png',
      massgro: '/MG.png',
      title: 'Clothing Made For You!',
      muto: 'Your Fashion Smarter',
      description: 'Click here to shop in your local currency. We ship over 2million products around the world!',
    },
    {
      image: '/Banner3.png',
      massgro: '/MG.png',
      title: 'Clothing Made For You!',
      muto: 'Your Fashion Smarter',
      description: 'Click here to shop in your local currency. We ship over 2million products around the world!',
    },
    {
      image: '/Banner4.png',
      massgro: '/MG.png',
      title: 'Clothing Made For You!',
      muto: 'Your Fashion Smarter',
      description: 'Click here to shop in your local currency. We ship over 2million products around the world!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[40%]">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-[40%]" 
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-5 text-white text-center">
              {/* <Image src={slide.massgro} width='600' height='600' className='w-full h-full px-28 py-[180px]'/> */}
              {/* <h3 className="text-4xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg">{slide.muto}</p>
              <p className="text-lg">{slide.description}</p> */}
              <div className='flex gap-4'>
                <Link href='' className='bg-white text-[#141414] hover:bg-red-600 hover:text-white px-8 font-medium py-3'>SHOP WOMEN'S</Link>
                <Link href='' className='text-[#FFFFFF] border-2 hover:bg-red-600 hover:text-white hover:border-2 hover:border-red-600 border-white px-8 font-medium py-3'>SHOP MEN'S</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
