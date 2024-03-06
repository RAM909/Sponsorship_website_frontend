import React, { useState, useEffect } from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import imagee1 from "../assets/image6.svg";
import imagee2 from "../assets/image5.svg";
import imagee3 from "../assets/image4.svg";
import topImage from "../assets/topimage.jpg"; // Import the top image

const HomePage = () => {
  // State variables to store server stats

  return (
    <>
      <Layout>
        <main>
          <section className="hero">
            <div className="flex flex-col border border-red-500"> 
              {/* <img src={topImage} alt="Top Image" className="top-image" style={{ width: '100%', height: '100%' }} /> */}

              <Link to="/RegSponsor" ><button class=" justify-center itcbg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Become A Sponsor
              </button>
              </Link>

            </div>

          </section>
        </main>
      </Layout>
    </>
  );
};

export default HomePage;
