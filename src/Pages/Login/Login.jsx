import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {

    const {logInUser, googleLogin} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
    .then((result) => {
        Swal.fire(
            'Success',
            'Login Successful',
            'success'
          )
        console.log(result.user);
    }).catch((err) => {
        if(err.message === 'Firebase: Error (auth/invalid-login-credentials).'){
            toast.error('email or password does not matched')
            return;
        }
        toast.error(err.message.split("(")[1].slice(0,-2))
    });

  };

  const handleGoogleLogin = () =>{
    googleLogin()
    .then((result) => {
      Swal.fire(
        'Success',
        'Sign in with google Successful',
        'success'
      )
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="sm:px-4">
      <div className="lg:w-2/4 mx-auto border my-12 px-6 py-14  shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center border-b-8 border-yellow-500 w-3/5 mx-auto rounded-lg pb-2 mb-10">
          Login Now
        </h2>
        <h2 className="font-bold text-center mb-10">Login with email</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          {/* email */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              type="email"
              name="email"
              required
              placeHolder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Your Email
            </label>
          </div>
          {/* password */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              type="password"
              name="password"
              required
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Your Password
            </label>
          </div>
          <input
            type="submit"
            value={"Login"}
            className="btn bg-custom-yellow"
          />
        </form>
        {/* don't have an account  */}
        <p className="text-center mt-2">
          Don't have an account?
          <Link to={"/register"} className="text-blue-500 font-semibold">
            <span className="ml-1">Register</span>
          </Link>
        </p>
        {/* separator */}
        <div className="flex gap-3 justify-center items-center mt-6">
          <span className="w-20 h-[2px] bg-custom-yellow"></span>
          <span className="text-xl font-semibold">Or</span>
          <span className="w-20 h-[2px] bg-custom-yellow"></span>
        </div>
        {/* easy login  */}
        <div className="text-center font-medium mt-4">
          <p>Easy login with</p>
          <div
          className="flex gap-3 mt-6 justify-center">
            <div 
            onClick={handleGoogleLogin}
            className="p-1 border w-min bg-white rounded-full hover:scale-125 transition duration-200 shadow-2xl">
              <span className="text-3xl text-red-600">
                <FaGoogle />
              </span>
            </div>
            <div className="p-1 border w-min bg-white rounded-full hover:scale-125 transition duration-200 shadow-2xl">
              <span className="text-3xl text-blue-600">
                <FaFacebook />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
