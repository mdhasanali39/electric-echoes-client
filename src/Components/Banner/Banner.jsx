import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination'
import CustomSlideControlBtns from '../CustomSlideControlBtns/CustomSlideControlBtns';
import useTheme from '../../Hooks/useTheme';

const Banner = () => {
  const all = useTheme()

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      className="mb-10 relative"
    >
      {/* slide 1  */}
      <SwiperSlide>
        <div className={`flex flex-col  ${all?.theme === 'light' ? "bg-custom-yellow bg-opacity-50": "bg-white border-2 border-white rounded-lg"} lg:flex-row justify-center items-center cursor-pointer shadow-xl`}>
          <figure>
            <img
              src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/7d9f968d-5854-4d19-b993-cfa8b8331719/md08001330-DZ-01_v1-jpg"
              alt="32” UHD UltraFine Monitor"
              className="w-3/4 mx-auto lg:mx-0"
            />
          </figure>
          <div className="card-body  lg:-ml-[400px]">
            <h2 className="card-title">
              32” UHD UltraFine™ Monitor <br /> with HDR10 and USB Type-C
            </h2>
            <p className={`bg-custom-yellow w-min whitespace-nowrap p-1 ${all?.theme === 'dark' && "text-gray-700" }`}>
              Brand: LG
            </p>
            <p className={`bg-custom-yellow w-min whitespace-nowrap p-1 ${all?.theme === 'dark' && "text-gray-700" }`}>
              Price: $349.99
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* slider 2  */}
      <SwiperSlide>
        <div className={`flex flex-col  ${all?.theme === 'light' ? "bg-custom-yellow bg-opacity-50": "bg-white border-2 border-white rounded-lg"} lg:flex-row justify-center items-center cursor-pointer shadow-xl`}>
          <figure >
            <img
              src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/c3c65501-e167-4d01-86ab-9df835649a0d/md06104496-32ML600M-Z1-jpg"
              alt="32” UHD UltraFine Monitor"
              className="w-3/4 mx-auto lg:mx-0"
            />
          </figure>
          <div className="card-body lg:-ml-[400px]">
            <h2 className="card-title">
              32” UHD UltraFine™ Monitor <br /> with HDR10 and USB Type-C
            </h2>
            <p className={`bg-custom-yellow w-min whitespace-nowrap p-1 ${all?.theme === 'dark' && "text-gray-700" }`}>
              Brand: LG
            </p>
            <p className={`bg-custom-yellow w-min whitespace-nowrap p-1 ${all?.theme === 'dark' && "text-gray-700" }`}>
              Price: $349.99
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* slide 3 */}
      <SwiperSlide>
        <div className={`flex flex-col  ${all?.theme === 'light' ? "bg-custom-yellow bg-opacity-50": "bg-white border-2 border-white rounded-lg"} lg:flex-row justify-center items-center cursor-pointer shadow-xl`}>
          <figure className="">
            <img
              src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/767390fa-2041-4842-91d9-647f245d5f78/24MR400-B_gallery_01_3000x3000"
              alt="32” UHD UltraFine Monitor"
              className="w-3/4 mx-auto lg:mx-0"
            />
          </figure>
          <div className="card-body lg:-ml-[400px]">
            <h2 className="card-title">
              32” UHD UltraFine™ Monitor <br /> with HDR10 and USB Type-C
            </h2>
            <p className={`bg-custom-yellow w-min whitespace-nowrap p-1 ${all?.theme === 'dark' && "text-gray-700" }`}>
              Brand: LG
            </p>
            <p className={`bg-custom-yellow w-min whitespace-nowrap p-1 ${all?.theme === 'dark' && "text-gray-700" }`}>
              Price: $349.99
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* control buttons  */}
      <CustomSlideControlBtns/>
    </Swiper>
  );
};

export default Banner;
