import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const brand_name = form.brand_name.value;
    const product_price = form.product_price.value;
    const short_description = form.short_description.value;
    const image_url = form.image_url.value;
    const product_type = form.product_type.value;
    const product_rating = form.product_rating.value;

    const product = {
      product_name,
      brand_name,
      product_price,
      short_description,
      image_url,
      product_type,
      product_rating,
    };
    console.log(product);
    try {
      const res = await fetch(
        "https://electric-echoes-server.vercel.app/electricechoes/products",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      const data = await res.json();
      if (data.acknowledged) {
        Swal.fire("Congrats", "Your product added successfully", "success");
        form.reset();
      }
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-[90vh] mt-8 mb-10 px-5">
      <form onSubmit={handleAddProduct} className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="border flex-1 p-2 space-y-3">
            {/* product name  */}
            <label className="flex flex-col">
              Product Name
              <input
                type="text"
                name="product_name"
                placeholder="Product Name"
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
                required
                className="border p-3 outline-none"
              />
            </label>
            <p className="text-custom-blue-text">
              Your product type should be related to technology and electronics:
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
                required
                className="border p-3 outline-none"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value={"Add Product"}
          className="btn bg-custom-yellow hover:bg-custom-blue-text transition ease-linear duration-200 hover:text-white mt-10 md:w-1/4 mx-auto"
        />
      </form>
    </div>
  );
};

export default AddProduct;
