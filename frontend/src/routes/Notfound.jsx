import React, { useContext } from "react";
import { darkModeContext } from "../Context";

const Notfound = () => {
  const { darkMode, setDarkMode } = useContext(darkModeContext);

    return (
        <div
            className={`flex space-x-40 ${
                darkMode
                    ? "bg-black text-white transition duration-700"
                    : "bg-gray-100 text-black transition duration-700"
            } h-20 items-center`}
        >
            Not found
        </div>
    );
};

export default Notfound;
