import { createContext } from "react";
import PropTypes from 'prop-types';
import LoginForm from "./Components/LoginForm";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { email, password, showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, setPassword, setEmail, isUserLoggedIn,setIsUserLoggedIn } = LoginForm();
    return (
        <DataContext.Provider
            value={{
                //Login Form Data Pass
                email, password, showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, setPassword, setEmail, isUserLoggedIn,setIsUserLoggedIn
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