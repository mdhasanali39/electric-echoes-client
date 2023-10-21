import { Link, useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import ProductsSlider from "./ProductsSlider";

const Products = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div className="mb-20">
      {/* products slider  */}
      <ProductsSlider></ProductsSlider>
      {/* all products */}
      <h2 className="text-center text-4xl font-semibold">All Products</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>

      {/* if no products found  */}
      {products.length === 0 && (
        <div className="flex flex-col justify-center items-center min-h-[90vh]">
          <img
            className="w-2/4"
            src="https://i.ibb.co/zsjstR6/8961448-3973481.jpg"
            alt="no data found image"
          />
          <h2 className="text-center text-3xl font-bold">Sorry, No products found</h2>
          <Link to={"/"}>
            <button className="btn btn-neutral mt-4">Go Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
