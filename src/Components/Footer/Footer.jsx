import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer md:grid-cols-2 items-start grid-flow-row lg:grid-flow-col p-10 text-base-content">
      <aside className="-mt-2">
        <img
          className="w-[260px]"
          src="https://i.ibb.co/ydmzCz2/logo-light.png"
          alt="logo-dark"
        />
        <p>
          Electric-Echoes
          <br />
          have any questions, or any problem, <br /> contact with below methods
        </p>
        <address className="flex">
          <span className="mr-2">
            <FaLocationDot />
          </span>
          123 Main Street Anytown, USA 12345
        </address>
        <p className="flex items-center">
          <span className="mr-2">
            <FaPhone />
          </span>
          +1 5*********
        </p>
        <p className="flex items-center">
          <span className="mr-2">
            <FaEnvelope />
          </span>
          example@gmail.com
        </p>
      </aside>
      <nav>
        <header className="footer-title">My Accounts</header>
        <a className="link link-hover">Account</a>
        <a className="link link-hover">address</a>
        <a className="link link-hover">Payment</a>
        <a className="link link-hover">Shipping</a>
        <a className="link link-hover">Check out</a>
        <a className="link link-hover">History</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text font-medium">
              Join our new later! Just provide your email and click the
              subscribe button
            </span>
          </label>
          <div className="relative w-4/5">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-custom-yellow border-none absolute top-0 right-0 rounded-l-none">
              <span className="text-2xl text-white"><BsArrowUpRight/></span>
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
