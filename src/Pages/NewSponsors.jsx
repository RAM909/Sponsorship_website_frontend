import React, { useEffect, useState } from 'react';
import Styles from "./Products.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router';

const NewSponsors = () => {
    const [sponser, setSponser] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSponser = async () => {
            try {
                const response = await axios.post("http://localhost:5000/api/sponsor/getAllSponsors", {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setSponser(response.data.sponsor);
                    console.log(response.data.sponsor);
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

        fetchSponser();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const handlebuttonclick = (id) => {
        navigate(`/MoreInfo/${id}`);

    }

    const filteredSponser = sponser.filter((sponsor) =>
        sponsor.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search by industry name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className='flex gap-10'>
                {(searchTerm ? filteredSponser : sponser).map((sponsor) => (
                    <div key={sponsor?.id} className='flex flex-row border border-red-500 h-72 w-64'>
                        <div className='flex flex-row border border-red-500 h-72 w-64 p-4 flex flex-col justify-between'>
                            <div>
                                <h2 className="text-lg font-bold">Location</h2>
                                <p>{sponsor?.location}</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Company Name</h2>
                                <p>{sponsor?.industry}</p>
                            </div>
                            <div className='flex flex-row '>
                                <h2 className="text-lg font-bold">Budget</h2>
                                <p>{sponsor?.budget}</p>
                                <button onClick={() => handlebuttonclick(sponsor?.id)} className=' border border-red-500 w-32  bg-blue-500 ml-10'>
                                    More Info
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NewSponsors;
