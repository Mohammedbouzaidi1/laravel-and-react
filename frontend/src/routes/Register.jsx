import React, { useContext } from "react";
import { darkModeContext } from "../Context";
import { useForm } from "react-hook-form";
const Register = () => {
    const { darkMode, setDarkMode } = useContext(darkModeContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        trigger,
    } = useForm();

    const Submit = (data) => {
        console.log(data);
        alert(JSON.stringify(data));
    };

    return (
        <div
            className={`flex space-x-40 ${
                darkMode
                    ? "bg-black text-white transition duration-700"
                    : "bg-gray-100 text-black transition duration-700"
            } h-96 items-center`}
        >
            <form
                action=""
                onSubmit={handleSubmit(Submit)}
                className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md mt-40"
            >
                <div className="mb-4">
                    <label
                        htmlFor="nom"
                        className="text-sm font-semibold text-gray-600"
                    >
                        Nom :
                    </label>
                    <input
                        type="text"
                        {...register("nom", {
                            required: "this field is required",
                            minLength: {
                                value: 2,
                                message:
                                    "Le prénom doit etre au moins 2 characteres",
                            },
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "the name should not be numeric",
                            },
                        })}
                        onBlur={() => trigger("nom")}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.nom && (
                        <span className="text-red-500 text-sm">
                            {errors.nom.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="prenom"
                        className="text-sm font-semibold text-gray-600"
                    >
                        Prenom :
                    </label>
                    <input
                        type="text"
                        {...register("prenom", {
                            required: "this field is required",
                            minLength: {
                                value: 2,
                                message:
                                    "Le prénom doit etre au moins 2 characteres",
                            },
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "the name should not be numeric",
                            },
                        })}
                        onBlur={() => trigger("prenom")}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.prenom && (
                        <span className="text-red-500 text-sm">
                            {errors.prenom.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-600"
                    >
                        Email :
                    </label>
                    <input
                        type="text"
                        {...register("email", {
                            required: "this field is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "la syntax email est incorrecte",
                            },
                        })}
                        onBlur={() => trigger("email")}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:r ing focus:border-blue-300"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="text-sm font-semibold text-gray-600"
                    >
                        Password :
                    </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message:
                                    "Password must be at least 8 characters",
                            },
                        })}
                        onBlur={() => trigger("password")}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="confirmPassword"
                        className="text-sm font-semibold text-gray-600"
                    >
                        Confirm Password :
                    </label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "The confirmation is required",
                            validate: (value) =>
                                value === watch("password") ||
                                "Passwords do not match",
                        })}
                        onBlur={() => trigger("confirmPassword")}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.confirmPassword && (
                        <span className="text-red-500 text-sm">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
