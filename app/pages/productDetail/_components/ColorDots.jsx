export default function ColorDots() {
    return (
      <div className="flex space-x-2">
        <div className="relative w-[24px] h-[24px] group flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-black transition duration-300"></div>
          <div className="w-4 h-4 rounded-full bg-[#000000] transition duration-300"></div>
        </div>
  
        <div className="relative w-[24px] h-[24px] group flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-black transition duration-300"></div>
          <div className="w-4 h-4 rounded-full bg-[#EEEEEE] transition duration-300"></div>
        </div>
  
        <div className="relative w-[24px] h-[24px] group flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-black transition duration-300"></div>
          <div className="w-4 h-4 rounded-full bg-[#008000] transition duration-300"></div>
        </div>
  
        <div className="relative w-[24px] h-[24px] group flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-black transition duration-300"></div>
          <div className="w-4 h-4 rounded-full bg-[#9ACD32] transition duration-300"></div>
        </div>
  
        <div className="relative w-[24px] h-[24px] group flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-black transition duration-300"></div>
          <div className="w-4 h-4 rounded-full bg-[#008080] transition duration-300"></div>
        </div>
      </div>
    );
  }
  