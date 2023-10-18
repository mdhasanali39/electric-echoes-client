import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-custom-yellow">
      <div className="flex justify-between max-w-[1300px] mx-auto px-4 py-5">
        {/* logo here */}
        <h1>Electric-Echoes</h1>
        <ul className="flex gap-6">
          <li className="item">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/add_product"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/my_cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              My Cart
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
