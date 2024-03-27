import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ProductDetailsCard = ({ product }) => {
  const [tabActive, setTabActive] = useState(false);

  // destructuring product
  const {
    _id,
    product_name,
    brand_name,
    product_price,
    short_description,
    image_url,
    product_type,
    product_rating,
  } = product || {};

  const handleAddToCart = async () => {
    const cartProduct = {
      product_name,
      brand_name,
      product_price,
      image_url,
      quantity: 1,
      total_price: product_price,
    };
    try {
      const res = await fetch(`https://electric-echoes-server.vercel.app/electricechoes/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct),
      });
      const data = await res.json();
      if (data.acknowledged) {
        Swal.fire(
          "Awesome",
          "Product successfully added to your cart",
          "success"
        );
      }
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row px-4">
        {/* image  */}
        <div className="flex-1 flex justify-center items-center">
          <img 
          className="rounded-lg"
          src={image_url} alt={product_name} />
        </div>
        {/* details  */}
        <div className="flex-1 py-6">
          <div className="border-b">
            <h2 className="text-2xl w-3/4 font-semibold">{product_name}</h2>
            {/* social share */}
            <div>
              <div className="flex gap-2 items-center mt-3">
                <p className="">Share</p>
                <a className="cursor-pointer">
                  <span className="text-xl ">
                    <FaFacebook />
                  </span>
                </a>
                <a className="cursor-pointer">
                  <span className="text-xl ">
                    <FaTwitter />
                  </span>
                </a>
                <a className="cursor-pointer">
                  <span className="text-xl ">
                    <FaInstagram />
                  </span>
                </a>
              </div>
            </div>
            <p className="text-red-400 font-medium my-4">${product_price}</p>
            <p className="text-sm pb-4 ">{short_description}</p>
          </div>
          <div className="mt-4">
            {/* choose size  */}
            <p className="font-medium">Color</p>
            <select className="border px-3 py-1">
              <option value={"small"}>S</option>
              <option value={"medium"}>M</option>
              <option value={"large"}>L</option>
            </select>
            {/* choose color  */}
            <div className="my-3">
              <p className="font-medium">Color</p>
              <div className="flex gap-2 ml-3">
                <input type="radio" name="color" value={"gold"} />
                <input type="radio" name="color" value={"silver"} />
              </div>
            </div>
            {/* quantity */}
            {/* <div>
              <p className="font-medium">Quantity</p>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-[100px] px-3 py-1 outline-none border"
              />
            </div> */}
            <div>
              {/* add to cart button  */}
              <button
                onClick={handleAddToCart}
                className="btn bg-custom-yellow mt-4 mr-2"
              >
                <span>
                  <FaShoppingCart />
                </span>
                Add To Cart
              </button>
              {/* add to wishlist */}
              <button className="hover:bg-none hover:text-blue-400">
                ❤ Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* product details bottom */}
      <div>
        <div className="tabs">
          <a className="tab tab-bordered text-lg font-bold">Product Details</a>
          <a className="tab tab-bordered tab-active text-lg font-bold">
            Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
