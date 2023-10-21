import { useSwiper } from "swiper/react";
import { BiChevronsRight, BiSolidChevronsLeft } from "react-icons/bi";

const CustomSlideControlBtns = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-[5%] left-[60%] z-50 flex gap-5 items-center ">
      <button 
      onClick={()=>swiper.slidePrev()}
      className="bg-custom-yellow border border-blue-500 rounded-sm px-2 py-1"
      >
        <span className="text-2xl text-white">
          <BiSolidChevronsLeft />
        </span>
      </button>
      <button 
      onClick={()=> swiper.slideNext()}
      className="bg-custom-yellow border border-blue-500 rounded-sm px-2 py-1"
      >
        <span className="text-2xl text-white">
          <BiChevronsRight />
        </span>
      </button>
    </div>
  );
};

export default CustomSlideControlBtns;
