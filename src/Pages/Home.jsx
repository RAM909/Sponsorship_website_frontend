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
            <div className="top-image-container"> {/* Container for top image */}
              <img src={topImage} alt="Top Image" className="top-image" />
              <Link to="#" className="btn-on-image">Another Button</Link> {/* Button on top image */}
            </div>
            <div className="hero-content">
              <h2>Empower the Next Generation</h2>
              <p>Help us support talented students and groundbreaking research projects. Partner with us in shaping the future.</p>
              <a href="#" className="btn">Become a Sponsor</a>
            </div>
          </section>
          <section className="features">
            <div className="feature">
              <img src={imagee2} alt="Why Sponsor" />
              <h3>Why Sponsor?</h3>
              <p>Gain visibility among bright minds and influential academics.</p>
            </div>
            <div className="feature">
              <img src={imagee1} alt="How it Works" />
              <h3>How it Works</h3>
              <p>Choose a sponsorship package tailored to your goals and budget.</p>
            </div>
            <div className="feature">
              <img src={imagee3} alt="Success Stories" />
              <h3>Success Stories</h3>
              <p>Discover how our sponsors have made a difference in the academic community.</p>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default HomePage;
