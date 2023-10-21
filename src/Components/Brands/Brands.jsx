import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://electric-echoes-server.vercel.app/electricechoes/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="">
      <div className="my-8">
        <h2 className="text-center text-3xl font-semibold">Our Brands</h2>
      </div>
      {/* brands  */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {brands?.map((brand) => (
          <BrandsCard key={brand._id} brand={brand}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
