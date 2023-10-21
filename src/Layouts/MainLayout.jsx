import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="font-Roboto">
      <Navbar></Navbar>
      <div className="max-w-[1300px] mx-auto px-4 py-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster/>
    </div>
  );
};

export default MainLayout;
