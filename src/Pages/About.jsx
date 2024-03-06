import React from 'react';
import Layout from '../layout/layout';

const About = () => {
    return (
        <div>
            <Layout>
                <div className="p-8 bg-yellow-50 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                    <p className="text-lg leading-relaxed">
                        Welcome to Sponsor Finder, your premier destination for connecting sponsors with events and opportunities. At Sponsor Finder, we believe in the power of partnerships to drive success and innovation.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        Founded by a team of passionate individuals at Shah and Anchor College, Sponsor Finder aims to bridge the gap between sponsors looking for impactful opportunities and events seeking valuable support.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        Our mission is to empower both sponsors and event organizers to achieve their goals by facilitating meaningful connections and collaborations. Whether you're a corporate entity seeking to enhance your brand visibility or an event organizer in need of financial or in-kind support, Sponsor Finder is here to help you succeed.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        Join us on our journey to transform the sponsorship landscape and unlock new possibilities for growth and development. Together, let's create unforgettable experiences and drive positive change through the power of sponsorship.
                    </p>
                </div>
            </Layout>
        </div>
    );
};

export default About;
