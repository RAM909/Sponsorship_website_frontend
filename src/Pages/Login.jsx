import React, { useState, useContext } from 'react';
import { UserContext } from '../feature/userslice';
import { postUserLogin } from '../apis/api';
import Layout from '../layout/layout';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { updateUser } = useContext(UserContext);


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginUser = async () => {
            const response = await postUserLogin({ email, password });

            if (response.success) {
                localStorage.setItem("token", response.token);
                updateUser(response.data.user);
                alert.success("login succesfull");


            } else {
                alert(response.message);
            }
        }

        loginUser();


        console.log('Username:', username);
        console.log('Password:', password);

    };

    return (
        <Layout>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="h-2/3 w-96 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8">
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
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
