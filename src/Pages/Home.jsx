import React, { useState, useEffect } from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";

const HomePage = () => {
  // State variables to store server stats
  const [eventCount, setEventCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);

  // Function to fetch server stats
  const fetchServerStats = async () => {
    // Simulated data fetching
    // Replace this with actual API calls to fetch server stats
    const eventData =5; // Dummy event data
    const userData =5; // Dummy user data
    const companyData =5; // Dummy company data
    
    // Update state variables with dummy values
    setEventCount(eventData);
    setUserCount(userData);
    setCompanyCount(companyData);
  };

  // Function to simulate fetching data
// Function to simulate fetching data
const fetchData = (targetValue) => {
  return new Promise((resolve) => {
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue++;
      if (currentValue <= targetValue) {
        resolve(currentValue);
      } else {
        clearInterval(interval);
      }
    }, 1000); // Change interval to 1 millisecond
  });
};

  // Fetch server stats when component mounts
  useEffect(() => {
    fetchServerStats();
  }, []);

  return (
    <>
      <Layout>
        <div className="bg-gray-100 ">
          <div className="flex ">
            <div className="flex w-full h-96   flex-row">
              <div className="overflow-hidden">
                
              </div>
            </div>

            <div className="right-0 z-10 h-96 absolute flex w-60 ">
              <div className="right-0 z-10 h-96 absolute flex flex-col  w-60 p-4">
                <h2 className="text-xl font-bold mb-4">Server Stats</h2>
                <div className="mb-2">Events Registered: {eventCount}</div>
                <div className="mb-2">Users Signed In: {userCount}</div>
                <div>Companies: {companyCount}</div>
                {/* Add more server stats as needed */}
              </div>
            </div>
          </div>
          
          <div className="mt-10  flex flex-col mb-10  ">
            <div className="blur-0 absolute overflow-y-hidden">
              
            
            </div>
            
            <h1 className="text-4xl font-bold text-start mb-8">
              Register Your Application
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between   ">
              <p className="text-lg text-gray-700 mb-4">
                FREE TO REGISTER Sign up for a free account. There's no cost to post your event.
              </p>
              <Link to="/register">
                <button className=" mt-4 md:mt-0 h-20 w-32 bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded self-end md:self-auto">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-10  flex flex-col mb-10">
            <h1 className="text-4xl font-bold text-start mb-8">
              View Your Events
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <p className="text-lg text-gray-700 mb-4">
                View previously registered events. Check for any updates by the sponsors
              </p>
              <Link to="/Find">
                <button className=" mt-4 md:mt-0 h-20 w-32 bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded self-end md:self-auto">
                  Events
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
