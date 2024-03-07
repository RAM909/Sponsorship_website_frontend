import React, { useState, useContext } from "react";
import { UserContext } from "../feature/userslice";
import { postUserLogin } from "../apis/api";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onfinishhandler = async (e) => {
        try {
            e.preventDefault();
            console.log(email, password);
            const response = await axios.post("https://shah-and-anchor-backend.onrender.com/api/users/login", {
                email,
                password,
            });

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                alert("User logged in successfully");
                navigate("/home");
            } else {
                alert("Error in login");
            }
        } catch (error) {
            console.error(error);
            alert("Internal Error in login");
        }
    };

    return (

        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form
                onSubmit={onfinishhandler}
                className="h-2/4 w-96 bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8"
            >
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                    <div className="text-gray-300">
                        Not Signed In?
                        <a href="/SignUp" className="ml-4 underline">Sign Up</a>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Login;
