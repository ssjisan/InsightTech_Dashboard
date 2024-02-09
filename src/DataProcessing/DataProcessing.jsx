import { createContext } from "react";
import PropTypes from 'prop-types';
import LoginForm from "./Components/LoginForm";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, isUserLoggedIn, setIsUserLoggedIn, handleLoginDetails, loginDetails } = LoginForm();
    return (
        <DataContext.Provider
            value={{
                //Login Form Data Pass
                showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, isUserLoggedIn, setIsUserLoggedIn, handleLoginDetails, loginDetails
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
// Prop types validation
DataProcessing.propTypes = {
    children: PropTypes.node.isRequired,
};