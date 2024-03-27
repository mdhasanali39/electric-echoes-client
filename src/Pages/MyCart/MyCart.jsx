import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [displayedProducts, setDisPlayedProducts] = useState(cartProducts)
  const [subTotal, setSubTotal] = useState(0)

  console.log(subTotal);

  const handleDelete = async(_id) =>{
    console.log(_id);
    try {
      const res = await fetch(`https://electric-echoes-server.vercel.app/electricechoes/carts/${_id}`, {method: 'DELETE'})
      const data = await res.json()
      if(data.deletedCount > 0){
        Swal.fire(
          'Deleted',
          'Deleted successfully',
          'success'
        )
        const remainingProducts = displayedProducts.filter(product => product._id !== _id)
        setDisPlayedProducts(remainingProducts)
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    let price = 0;
    for(let p of displayedProducts){
      price += p.product_price * p.quantity
      setSubTotal(price)
    }
  },[displayedProducts])

  console.log(displayedProducts,);

  return (
    <div className="lg:flex gap-6 my-10">
      <div className="flex-grow">
        {
          displayedProducts?.map((product) => (
          <Cart key={product._id} 
          product={product} 
          handleDelete={handleDelete}
          ></Cart>
        ))}
        {
          displayedProducts.length === 0 &&
          <div className="flex flex-col justify-center items-center min-h-[90vh]">
          <img
          className="w-2/4"
           src="https://i.ibb.co/zsjstR6/8961448-3973481.jpg" alt="no data found image"/>
          <h2 className="text-center text-3xl font-bold">Sorry, No products found</h2>
          <Link to={'/'}>
          <button className="btn btn-neutral mt-4">Add Products</button>
          </Link>
        </div>
        }
      </div>
      {/* checkout  */}
      <div className="border flex-1 p-5">
        <div className="border-b">
          <h4>${(subTotal).toFixed(2)}</h4>
          <h4 className="my-4">Delivery Cost: $50</h4>
        </div>
        <div>
          {/* have a coupon  */}
          <div className="mt-4 pb-4 border-b">
            <p className="mb-2">Have a coupon?</p>
            <input
              type="text"
              placeholder="Coupon"
              className="border outline-none px-3 py-1"
            />
            <button className="btn btn-sm block mt-3 bg-custom-yellow rounded-md">
              Apply
            </button>
          </div>
          <h4 className="text-lg font-semibold mt-6">Grand Total: ${(subTotal).toFixed(2)}</h4>
        </div>
        <div className="flex justify-center">
          <button className="btn bg-custom-yellow mt-4 mr-2 w-full">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
