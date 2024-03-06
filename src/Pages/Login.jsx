import React, { useState, useContext } from "react";
import { UserContext } from "../feature/userslice";
import { postUserLogin } from "../apis/api";
import Layout from "../layout/layout";
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
  
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
  
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        alert("User logged in successfully");
        navigate("/");
      } else {
        alert("Error in login");
      }
    } catch (error) {
      console.error(error);
      alert("Internal Error in login");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={onfinishhandler}
          className="h-2/4 w-96 bg-gray-100 shadow-md rounded px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
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
