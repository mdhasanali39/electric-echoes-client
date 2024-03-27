import PropTypes from "prop-types";
import { Rating } from "@material-tailwind/react";
import { BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const {
    _id,
    product_name,
    brand_name,
    product_price,
    image_url,
    product_type,
    product_rating,
  } = product || {};


  return (
    <div className="card border pt-8 px-5">
      <figure className="relative">
        <img 
        className="rounded-lg"
        src={image_url} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title" 
        title={product_name}>{product_name.length > 60 ? product_name.slice(0,60) + '...' : product_name}
        </h2>
        <p className="font-semibold capitalize">Brand: <span>{brand_name}</span></p>
        <p className="font-semibold capitalize">Type: <span>{product_type}</span></p>
        <p className="font-semibold">Price: $<span>{product_price}</span></p>
        {/* rating  */}
        <div>
          <Rating value={Math.round(parseFloat(product_rating))}/>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/update_products/${_id}`}>
            <button className="btn bg-custom-yellow">
              <span className="text-2xl">
                <BiSolidEdit />
              </span>
            </button>
          </Link>
          <Link to={`/product_details/${_id}`}>
          <button className="btn bg-custom-yellow">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductsCard;
