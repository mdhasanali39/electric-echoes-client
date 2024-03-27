import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light')
  const all = useTheme()
  
  
  
  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme")
    // set localTheme to setTheme (from ThemeManager) function
    all?.setTheme(localTheme)
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[setTheme, theme,all])

  // this is a theme toggling func
  const handleToggleTheme = (e) =>{
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }

  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log-out successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="bg-custom-yellow">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto px-4 py-5">
        {/* logo here */}
        <h1>
          <img
            className="w-[260px]"
            src="https://i.ibb.co/ydmzCz2/logo-light.png"
            alt="logo-light"
          />
        </h1>
        <ul
          className={`${
            menuClick
              ? "absolute transition ease-linear duration-300  top-[20.8%] left-4 right-4 z-50 text-center space-y-4 bg-custom-blue-text p-7"
              : "absolute -top-[320.8%] left-4 right-4 z-50 text-center space-y-4 bg-none p-7"
          }   lg:bg-transparent lg:space-y-0 lg:static lg:text-left lg:translate-x-0 lg:p-0 lg:pr-4 lg:flex items-center gap-6`}
        >
          <li className="item text-yellow-500 lg:text-black">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="item text-yellow-500 lg:text-black">
            <NavLink
              to="/add_product"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="item text-yellow-500 lg:text-black">
            <NavLink
              to="/my_cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline" : ""
              }
            >
              My Cart
            </NavLink>
          </li>
          {/* dark/light  */}
          <li>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggleTheme} 
                checked={theme === 'light' ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-white w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
          {user ? (
            <div className="flex lg:block">
              <div className="relative max-[400px]:w-[30%] min-[401px]:w-[10%] md:w-[5%] mx-auto lg:w-max lg:mx-0">
                <div onClick={() => setActive(!active)}>
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src={user.photoURL}
                  />
                </div>
                <div
                  className={`${
                    active ? "block" : "hidden"
                  } absolute z-50 -top-[540%] lg:top-[130%] -right-[165%] lg:right-[5%] min-w-max border border-blue-500 bg-white p-4 rounded-md`}
                >
                  <div onClick={() => setActive(!active)}>
                    <img
                      className="w-12 h-12 mx-auto object-cover mb-4 rounded-full"
                      src={user.photoURL}
                    />
                  </div>
                  <h3 className="text-center">{user.displayName}</h3>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm flex bg-custom-yellow mt-4 mr-2"
                  >
                    <span>
                      <FaSignOutAlt />
                    </span>
                    Log-out
                  </button>
                </div>
              </div>
            </div>
          ) : (
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
          )}
        </ul>
        <label className="btn btn-circle swap swap-rotate lg:hidden">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={() => setMenuClick(!menuClick)} />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
