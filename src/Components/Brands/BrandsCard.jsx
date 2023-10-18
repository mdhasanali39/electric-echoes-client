import PropTypes from "prop-types";

const BrandsCard = ({ brand }) => {
  const { name, photoUrl } = brand || {};
  return (
    <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
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
