import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const loadedProduct = useLoaderData()
    // destructured
    const {
        _id,
          product_name,
          brand_name,
          product_price,
          short_description,
          image_url,
          product_type,
          product_rating,
        } = loadedProduct || {}

  const handleUpdateProduct = async(e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const brand_name = (form.brand_name.value).toLowerCase();
    const product_price = form.product_price.value;
    const short_description = form.short_description.value;
    const image_url = form.image_url.value;
    const product_type = form.product_type.value;
    const product_rating = form.product_rating.value;


    // check price number or not 
    if(isNaN(product_price)){
      return toast.error('Product price should be number')
    }

    if(isNaN(product_rating)){
      return toast.error('Rating value should be number')
    }
    if(parseFloat(product_rating) < 0 || parseFloat(product_rating) > 5){
      return toast.error('Product rating should not less than 0 and not greater than 5')
    }


    const productUpdated = {
      product_name,
      brand_name,
      product_price,
      short_description,
      image_url,
      product_type,
      product_rating,
    };
    console.log(productUpdated);

    try {
        const res = await fetch(`https://electric-echoes-server.vercel.app/electricechoes/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productUpdated)
        })
        const data = await res.json();
        if(data.modifiedCount >0){
            Swal.fire(
                'Congrats',
                'Your product updated successfully',
                'success'
              )
        }
        console.log(data);
    } catch (err) {
        console.error(err);
    }

  };
  console.log(loadedProduct);


  return (
    <div className="min-h-[78vh] px-2 md:px-5 mt-8 mb-10">
      <form onSubmit={handleUpdateProduct} className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="border flex-1 p-2 space-y-3">
            {/* product name  */}
            <label className="flex flex-col">
              Product Name
              <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                defaultValue={product_name}
                required
                className="border p-3 outline-none"
              />
            </label>
            {/* brand name  */}
            <label className="flex flex-col">
              Brand Name
              <input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                defaultValue={brand_name}
                required
                className="border p-3 outline-none"
              />
            </label>
            {/* product price  */}
            <label className="flex flex-col">
              Product Price
              <input
                type="text"
                name="product_price"
                placeholder="Product Price"
                defaultValue={product_price}
                required
                className="border p-3 outline-none"
              />
            </label>
            {/* short description */}
            <label className="flex flex-col">
              Short Description
              <textarea
                cols={"40"}
                rows={"4"}
                name="short_description"
                placeholder="Short Description"
                defaultValue={short_description}
                required
                className="border p-3 outline-none"
              ></textarea>
            </label>
          </div>
          <div className="border flex-1 p-2 space-y-3">
            {/* product image  */}
            <label className="flex flex-col">
              Product Image
              <input
                type="url"
                name="image_url"
                placeholder="Product Image Url"
                defaultValue={image_url}
                required
                className="border p-3 outline-none"
              />
            </label>

            {/* product type  */}
            <label className="flex flex-col">
              Product Type
              <input
                type="text"
                name="product_type"
                placeholder="Product Type"
                defaultValue={product_type}
                required
                className="border p-3 outline-none"
              />
            </label>
            <p className="text-custom-blue-text">
              Your product type should be like:
            </p>
            <p className="text-custom-blue-text">
              phone, Laptop, Tablet, Wearable, Gaming Console, Headphone, Smart
              TV, Home Automation Device, Digital Camera, Drone, Audio Speaker
              ,etc
            </p>
            {/* product rating  */}
            <label className="flex flex-col">
              Product Rating
              <input
                type="text"
                name="product_rating"
                placeholder="Product Rating"
                defaultValue={product_rating}
                required
                className="border p-3 outline-none"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value={"Update Product"}
          className="btn bg-custom-yellow hover:bg-custom-blue-text transition ease-linear duration-200 hover:text-white mt-7 md:w-1/4 mx-auto"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
