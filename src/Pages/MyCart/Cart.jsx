import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Cart = ({ product, handleDelete}) => {
  
  const [productQuantity, setProductQuantity] = useState(product.quantity);
  const [totalPrice, setTotalPrice] = useState([
    product.product_price * productQuantity,
  ]);

  // console.log(test);

  const { _id, product_name, brand_name, product_price, image_url } =
    product || {};

  const handleDecrement = async () => {
    if (productQuantity !== 1) {
      setProductQuantity(productQuantity - 1);
      try {
        const res = await fetch(
          `https://electric-echoes-server.vercel.app/electricechoes/carts/${_id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ quantity: productQuantity - 1 }),
          }
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // console.log({quantity: productQuantity+1});

  const handleIncrement = async () => {
    setProductQuantity(productQuantity + 1);
    try {
      const res = await fetch(
        `https://electric-echoes-server.vercel.app/electricechoes/carts/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ quantity: productQuantity + 1 }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  


  return (
    <div>
      {/* items */}
      <div className="flex gap-3 items-center justify-between mb-7">
        <div className="lg:flex gap-3 items-center">
          <div>
            <img className="w-[70px] h-[60px]" src={image_url} />
          </div>
          <div>
            <h2 className="card-title" title={product_name}>
              {product_name.length > 25
                ? product_name.slice(0, 25) + "..."
                : product_name}
            </h2>
            <p className="font-semibold capitalize">
              Brand: <span>{brand_name}</span>
            </p>
            <p className="font-semibold">
              Price: $<span>{product_price}</span>
            </p>
            <button 
            onClick={()=>handleDelete(_id)}
            className="text-red-600 font-semibold">Remove</button>
          </div>
        </div>
        {/* quantity and total here */}
        <div className="flex gap-4">
          {/* quantity */}
          <div className="select-none">
            <p className="font-medium mb-1">Quantity</p>
            <span
              onClick={handleDecrement}
              className="border px-3 py-1 text-lg"
            >
              -
            </span>
            <span className="mx-3">{productQuantity}</span>
            <span
              onClick={handleIncrement}
              className="border px-3 py-1 text-lg"
            >
              +
            </span>
          </div>
          {/* total  */}
          <div>
            <p className="border-b font-medium">Total</p>
            <p>${(product_price * productQuantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Cart;
