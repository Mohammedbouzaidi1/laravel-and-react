import React, { useContext } from "react";
import { darkModeContext } from "../Context";


const Login = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);

    return (
        <div
            className={`flex space-x-40 ${
                darkMode
                    ? "bg-black text-white transition duration-700"
                    : "bg-gray-100 text-black transition duration-700"
            } h-20 items-center`}
        >
            Login
        </div>
    );
};

export default Login;
