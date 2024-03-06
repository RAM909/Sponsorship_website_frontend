import React, { useState, useContext } from 'react';
import { UserContext } from '../feature/userslice';
import { useNavigate } from "react-router-dom";
import { postUserRegister } from '../apis/api';

const signup = () => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const signupUser = async () => {
            const response = await postUserRegister({ email, userName, password });
            if (response.success) {
                toast.success("Signup successfull");
                localStorage.setItem("token", response.token);
                updateUser(response.data.user);
                navigate("/");
            } else {
                alert(response.message);
            }
        };
        signupUser();
        console.log('Username:', userName);
        console.log('Email:', email);
        console.log('Password:', password);
        // setUsername('');
        // setEmail('');
        // setPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <form onSubmit={handleSubmit} className="h-2/3 w-96 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8">
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default signup;
