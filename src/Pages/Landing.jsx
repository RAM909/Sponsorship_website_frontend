import React from "react";
import { Link } from "react-router-dom";
import topImage from "../assets/topimage.jpg";

const Landing = () => {
    return (
        <section className="hero relative">

                <img src={topImage} alt="Top Image" className="top-image object-cover backdrop-blur-lg h-screen w-screen" />
                <div className="absolute inset-0 flex justify-center items-start bg-black bg-opacity-50">
                    <div className="text-center text-white mt-52">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
                        <p className="text-lg mb-8">Discover and join amazing events</p>
                        <div className="flex justify-center space-x-4">
                            <Link to="/login">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Landing;
