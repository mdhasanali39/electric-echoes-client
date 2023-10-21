import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CustomSlideControlBtns from "../../Components/CustomSlideControlBtns/CustomSlideControlBtns";

const ProductsSlider = (product) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mb-14"
      >
        {/* slide 1  */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center min-h-[84vh] items-center cursor-pointer border rounded-md pb-10">
            <figure className=" px-3 md:pl-36 py-10">
              <img
                src="https://static-01.daraz.com.bd/p/c43d9cbd5953fa0a36d044e09bb950d8.jpg_300x0q75.webp"
                alt="Sony ZV-E10 24.2MP"
                className=" rounded-lg"
              />
            </figure>
            <div className="card-body ml-10">
              <h2 className="card-title">
                Sony ZV-E10 24.2MP APS-C <br /> Exmor CMOS Sensor UHD 4K30p
              </h2>
              <p className="bg-custom-yellow w-min whitespace-nowrap p-1">
                Brand: Sony
              </p>
              <p className="bg-custom-yellow w-min whitespace-nowrap p-1">
                Price: $780
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2  */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center min-h-[84vh] items-center cursor-pointer border rounded-md">
            <figure className=" px-3 md:pl-36 py-10">
              <img
                src="https://static-01.daraz.com.bd/p/27052a1c3fd6134b35f77efdf24a0520.jpg_300x0q75.webp"
                alt="Sony ZV-E10 24.2MP"
                className=" rounded-lg"
              />
            </figure>
            <div className="card-body ml-10">
              <h2 className="card-title">
                Sony ZV-E10 24.2MP APS-C <br /> Exmor CMOS Sensor UHD 4K30p
              </h2>
              <p className="bg-custom-yellow w-min whitespace-nowrap p-1">
                Brand: Sony
              </p>
              <p className="bg-custom-yellow w-min whitespace-nowrap p-1">
                Price: $780
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center min-h-[84vh] items-center cursor-pointer border rounded-md">
            <figure className=" px-3 md:pl-36 py-10">
              <img
                src="https://static-01.daraz.com.bd/p/4a69c01ab4f2126badc59bc23de85a50.jpg_300x0q75.webp"
                alt="Sony ZV-E10 24.2MP"
                className=" rounded-lg"
              />
            </figure>
            <div className="card-body ml-10">
              <h2 className="card-title">
                Sony ZV-E10 24.2MP APS-C <br /> Exmor CMOS Sensor UHD 4K30p
              </h2>
              <p className="bg-custom-yellow w-min whitespace-nowrap p-1">
                Brand: Sony
              </p>
              <p className="bg-custom-yellow w-min whitespace-nowrap p-1">
                Price: $780
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* control buttons  */}
        <CustomSlideControlBtns/>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
