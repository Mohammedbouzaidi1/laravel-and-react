import { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import { darkModeContext } from "../Context";

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(darkModeContext);
    return (
        <>
            <nav
                className={`flex space-x-40 ${
                    darkMode
                        ? "bg-black text-white transition duration-700"
                        : "bg-gray-100 text-black transition duration-700"
                } h-20 items-center`}
            >
                <p className="text-7x1 font-bold ml-4">School Management</p>
                <ul className="flex justify-center items-center space-x-8 ">
                    <li className="cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
                <button onClick={() => setDarkMode(!darkMode)}>DarkMode</button>
            </nav>
        </>
    );
};

export default Navbar;
