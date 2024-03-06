import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Layout from '../layout/layout';

const NewSponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const response = await axios.post("http://localhost:5000/api/sponsor/getAllSponsors", {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setSponsors(response.data.sponsor);
                    alert(response.data.message);
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
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleButtonClick = (id) => {
        navigate(`/MoreInfo/${id}`);
    };

    const filteredSponsors = sponsors.filter((sponsor) =>
        sponsor.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <Layout>

            <div className="flex justify-center mb-4 ">

                <form class="max-w-md mx-auto ">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                        </div>
                        <input
                            type="text"
                            placeholder="Search by industry name"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="px-4 py-2 rounded-lg border border-gray-300  focus:outline-none focus:border-blue-500 w-64 md:w-96"
                            />



                    </div>
                </form>

            </div>
            <div className='flex flex-wrap gap-10 justify-center'>
                {(searchTerm ? filteredSponsors : sponsors).map((sponsor) => (
                    <div key={sponsor?.id} className='border border-red-500 h-72 w-64'>
                        <div className='p-4 flex flex-col justify-between'>
                            <div>
                                <h2 className="text-lg font-bold">Location</h2>
                                <p>{sponsor?.location}</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Industry Name</h2>
                                <p>{sponsor?.industry}</p>
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
                </Layout>
        </>
    );
};

export default NewSponsors;
