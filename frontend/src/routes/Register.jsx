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
    } = useForm();

    const Submit = () => {};

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
                        for="nom"
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
                        for="prenom"
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
                        for="email"
                        class="text-sm font-semibold text-gray-600"
                    >
                        Email :
                    </label>
                    <input
                        type="text"
                        {...register("email", {
                            required: "this field is required",
                            minLength: {
                                value: 10,
                                message:
                                    "Le prénom doit etre au moins 10 characteres",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "la syntax email est fausse",
                            },
                        })}
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
                        for="password"
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
                        for="confirmPassword"
                        className="text-sm font-semibold text-gray-600"
                    >
                        Confirm Password :
                    </label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            validate: (value) =>
                                value === watch("password") ||
                                "Passwords do not match",
                        })}
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
