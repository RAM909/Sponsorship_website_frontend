import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sponsors from '../components/Sponsors';
import Layout from '../layout/layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Find = () => {
  const [sponsors, setSponsors] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/sponsor/getAllSponsors", {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.data.success) {
          // Sort sponsors based on budget in descending order
          const sortedSponsors = response.data.sponsor.sort((a, b) => b.budget - a.budget);
          // Take the top 5 sponsors
          const top5Sponsors = sortedSponsors.slice(0, 5);
          setSponsors(top5Sponsors);
          
        } else {
          console.log("error", response.data.error);
          alert(response.data.message);
        }
      } catch (error) {
        console.log("server Error", error);
        alert("Server Error");
      }
    };

    fetchSponsors();
  }, []);

  const handleButtonClick = (id) => {
    navigate(`/MoreInfo/${id}`);
  };

  return (
    <>
      <Layout>
        <div className='flex flex-col items-center justify-center gap-5 mt-10'>
          <Link to="/register">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Apply for a new event
            </button>
          </Link>
          <h1 className='font-bold text-3xl underline mb-10'>Top Sponsors Available</h1>
          <div className='flex gap-4'>
            <div className='flex gap-10'>
              {sponsors.map((sponsor, index) => (
                <div key={sponsor?.id} className='border border-red-500 h-72 w-64'>
                  <div className='p-4 flex flex-col justify-between'>
                    <div>
                      <h2 className="text-lg font-bold">Industry Name</h2>
                      <p>{sponsor?.industry}</p>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Location</h2>
                      <p>{sponsor?.location}</p>
                    </div>

                    <div className='flex flex-col '>
                      <h2 className="text-lg font-bold">Budget </h2>
                      <p>  {sponsor?.budget}</p>
                    </div>

                    <button onClick={() => handleButtonClick(sponsor?._id)} className=' mt-10 border border-red-500 w-32 bg-blue-500 ml-10 rounded-lg px-4 py-2 text-white'>
                      More Info
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Find;
