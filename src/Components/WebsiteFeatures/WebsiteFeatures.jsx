import { BiCheckShield } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { SlSupport, SlRocket } from "react-icons/sl";
import { MdOutlineLocalOffer } from "react-icons/md";

const WebsiteFeatures = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/*  feature 1 */}
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10 ">
          <span className="text-4xl text-yellow-700"><SlRocket/></span>
        </figure>
        <div className="card-body -mt-5 items-center text-center">
          <h2 className="card-title">Fast and Free Delivery</h2>
          <p>Order over $1000</p>
        </div>
      </div>
    </div>
     {/* feature 2 */}
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10 ">
          <span className="text-4xl text-yellow-700"><TbTruckReturn/></span>
        </figure>
        <div className="card-body -mt-5 items-center text-center">
          <h2 className="card-title">1&1 Returns</h2>
          <p>Cancelation after 1 day</p>
        </div>
      </div>
    </div>
    {/*  feature 3 */}
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10 ">
          <span className="text-4xl text-yellow-700"><BiCheckShield/></span>
        </figure>
        <div className="card-body -mt-5 items-center text-center">
          <h2 className="card-title">Fast and Free Delivery</h2>
          <p>Order over $1000</p>
        </div>
      </div>
    </div>
     {/* feature 4 */}
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10 ">
          <span className="text-4xl text-yellow-700"><SlSupport/></span>
        </figure>
        <div className="card-body -mt-5 items-center text-center">
          <h2 className="card-title">Fast and Free Delivery</h2>
          <p>Order over $1000</p>
        </div>
      </div>
    </div>
    {/* feature 5 */}
    <div>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10 ">
          <span className="text-4xl text-yellow-700"><MdOutlineLocalOffer/></span>
        </figure>
        <div className="card-body -mt-5 items-center text-center">
          <h2 className="card-title">Fast and Free Delivery</h2>
          <p>Order over $1000</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WebsiteFeatures;
