import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BrandsCard = ({ brand }) => {

  const navigate = useNavigate()

  const { name, photoUrl } = brand || {};

  const handleBrand = () =>{
    navigate(`/products/${brand.name}`)
  }

  return (
    <div
    onClick={handleBrand}
     className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg cursor-pointer">
      <div className="relative overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img src={photoUrl} alt={name} />
        {/* <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div> */}

        <span className="absolute left-[5%] top-5 text-xl font-semibold uppercase">
          {name}
        </span>
      </div>
    </div>
  );
};
BrandsCard.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default BrandsCard;
