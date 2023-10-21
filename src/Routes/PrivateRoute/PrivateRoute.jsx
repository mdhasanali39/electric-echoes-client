import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext);
    
    if(loading){
        return <h1 className="flex justify-center items-center min-h-[80vh]"><span className="loading loading-dots loading-lg"></span></h1>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'}/>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;