import { createContext } from "react";
import PropTypes from 'prop-types';
import LoginForm from "./Components/LoginForm";
import ProjectRequestData from "./Components/ProjectRequestData";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, isUserLoggedIn, setIsUserLoggedIn, handleLoginDetails, loginDetails } = LoginForm();
    const { allRequests,handleChangePage, handleChangeRowsPerPage, page, rowsPerPage,handleRemoveRequest } = ProjectRequestData()
    return (
        <DataContext.Provider
            value={{
                //Login Form Data Pass
                showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, isUserLoggedIn, setIsUserLoggedIn, handleLoginDetails, loginDetails,
                // Client Project Request
                allRequests,handleChangePage, handleChangeRowsPerPage, page, rowsPerPage,handleRemoveRequest
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