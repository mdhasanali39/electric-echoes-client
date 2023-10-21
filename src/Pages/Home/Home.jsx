import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import HotDeals from "../../Components/HotDeals/HotDeals";
import WebsiteFeatures from "../../Components/WebsiteFeatures/WebsiteFeatures";

const Home = () => {
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* our specialty - website features*/}
            <div className=" my-14 mt-20">
                <WebsiteFeatures></WebsiteFeatures>
            </div>
            {/* all brands */}
            <Brands></Brands>

            {/* hot deals  */}
            <div className="mt-14 mb-16">
            {/* heading  */}
            <h2 
            className="text-center text-4xl font-semibold mb-12"
            >Hot Deals</h2>
            <HotDeals></HotDeals>
            </div>

            
        </div>
    );
};

export default Home;