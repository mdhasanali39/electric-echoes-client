import useTheme from "../../Hooks/useTheme";

const HotDeals = () => {
  const all = useTheme()

  return (
    <div className={`flex flex-col lg:flex-row cursor-pointer pt-10 pb-14 lg:pt-0 lg:pb-0  items-center  rounded-lg  border ${ all?.theme === 'light' ? "lg:bg-custom-yellow lg:bg-opacity-50":"lg:bg-white"}`}>
      <figure>
        <img
          src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/b2149cef-b33e-445d-b1d1-e3036efbe0db/md08003490-DZ-1"
          alt="45 UltraGear OLED Curved Gaming Monitor"
        />
      </figure>
      <div className="flex flex-col -ml-14 w-1/2">
        <h2 className="text-5xl font-bold -mt-10 mb-10 text-red-500">
          Deals <span className="text-white">Of The Day</span>
        </h2>
        <h2 className={`${all?.theme === 'dark' && "text-gray-700"} card-title`}>
          45" UltraGear™ OLED Curved <br /> Gaming Monitor WQHD with 240Hz
          Refresh rate
        </h2>
        <p className={`font-semibold ${all?.theme === 'dark' && "text-gray-700"}`}>Brand: Lg</p>
        <p className={`bg-custom-yellow w-min whitespace-nowrap px-2 line-through mt-8 ${all?.theme === 'dark' && "text-gray-700"}`}>
          Regular-Price: $1299.99
        </p>
        <p className={`bg-custom-yellow w-min text-3xl whitespace-nowrap px-2 mt-4 ${all?.theme === 'dark' && "text-gray-700"}`}>
          New-Price: $700
        </p>
      </div>
    </div>
  );
};

export default HotDeals;
