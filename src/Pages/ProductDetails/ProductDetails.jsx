import { useLoaderData } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      <div className="min-h-[90vh]">
        <ProductDetailsCard product={product}></ProductDetailsCard>
      </div>
    </div>
  );
};

export default ProductDetails;
