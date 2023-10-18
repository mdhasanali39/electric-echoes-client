import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        console.log(data);
      });
  }, []);

  // const submitBrand = (e) =>{
  //     e.preventDefault()
  //     const form = e.target;
  //     const name = form.name.value;
  //     const photoUrl = form.photo.value
  //     const brand = {
  //         name, photoUrl
  //     }
  //     console.log(brand);

  //     fetch('http://localhost:5000/brand',{
  //         method: 'POST',
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(brand)
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //     })
  // }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* brands  */}
      {brands?.map((brand) => (
        <BrandsCard key={brand._id} brand={brand}></BrandsCard>
      ))}
    </div>
  );
};

export default Brands;
