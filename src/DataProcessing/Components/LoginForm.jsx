import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../UserAuth/firebase';

export default function LoginForm() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    //eslint-disable-next-line
    const [email, setEmail] = useState('');
    //eslint-disable-next-line
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
            setIsUserLoggedIn(true)
        } catch (error) {
            alert('Error logging in:', error);
        }
    }
    return (
        {
            email, password, showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, setPassword, setEmail,isUserLoggedIn,setIsUserLoggedIn
        }
    )
}
