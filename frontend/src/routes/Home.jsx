import { useContext } from "react";
import { darkModeContext } from "../Context";

const Home = () => {
    const { darkMode, setDarkMode } = useContext(darkModeContext);

    return (
        <div
            className={`${
                darkMode
                    ? "bg-black text-white transition duration-700"
                    : "bg-gray-100 text-black transition duration-700"
            } h-96 items-center`}
        >
            Home
        </div>
    );
};

export default Home;
