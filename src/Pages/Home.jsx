import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import topImage from "../assets/topimage.jpg";
import imagee1 from "../assets/image6.svg";
import imagee2 from "../assets/image5.svg";
import imagee3 from "../assets/image4.svg";
import ApexChart from "../components/Apexchart";

const HomePage = () => {
  return (
    <section className="hero relative">
      <Layout>
        <img src={topImage} alt="Top Image" className="top-image object-cover backdrop-blur-lg h-screen w-screen" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg mb-8">Discover and join amazing events</p>
            
            <div className="flex justify-center space-x-4">
              <Link to="/RegSponsor">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Become A Sponsor
                </button>
              </Link>
              <Link to="/events">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  View Events
                </button>
              </Link>
              <Link to="/sponsors">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  View Sponsors
                </button>
              </Link>
            </div>

            <section className="top-10 features gap-14 justify-center items-center py-16">
              <div className="flex justify-center space-x-8">
                <div>
                  <img src={imagee1} alt="Feature 1" className="w-56 h-56" />
                  <p className="text-center mt-4">Register events for free</p>
                </div>
                <div>
                  <img src={imagee2} alt="Feature 2" className="w-56 h-56" />
                  <p className="text-center mt-4">Get access to multiple sponsors</p>
                </div>
                <div>
                  <img src={imagee3} alt="Feature 3" className="w-56 h-56" />
                  <p className="text-center mt-4">Seamlessly get sponsorships</p>
                </div>
              </div>
            </section>
          
            {/* Place the chart below the images */}
            
            </div>
          </div>
      </Layout>
    </section>
  );
};

export default HomePage;
