import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useContext(DataContext);
    return isUserLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};