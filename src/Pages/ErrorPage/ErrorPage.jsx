import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div>
                <img className="w-1/4 mx-auto" src="https://i.ibb.co/NYD0nWN/404-not-found.jpg" alt="404 not fount image"/>
            </div>
            <h3 className="text-4xl font-semibold">Sorry, Page not found</h3>
            <Link to={'/'}>
            <button className="btn btn-neutral mt-4">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;