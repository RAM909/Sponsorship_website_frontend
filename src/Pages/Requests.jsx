import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Requests = () => {
    const [formData, setFormData] = useState();
    const [data, setUserData] = useState([]);
    const [showData, setShowData] = useState(false); // State for conditional rendering
    const { user } = useSelector((state) => state.user);
    const id = user?.userID;

    useEffect(() => {
        const fetchSponsorDetails = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.post(`http://localhost:5000/api/application/all-apply`, {
                    sponsorId: id
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setUserData(response.data.applications);
                    console.log(response);
                    setFormData(response.data.sponsor);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.log("server Error", error);
                alert("Server Error");
            }
        };

        fetchSponsorDetails();
    }, [id]);
    const data1 = data
    console.log(data1);
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Requests</h2>
                <button onClick={() => setShowData(!showData)} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {showData ? 'Hide Data' : 'Show Data'}
                </button>
                {showData && (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2">Location</th>
                                    <th className="px-4 py-2">Amount requested</th>
                                    <th className="px-4 py-2">more info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data1 && data1.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 border-b border-gray-200' : 'bg-white border-b border-gray-200'}>
                                        <td className="px-4 py-2">{item.location}</td>
                                        <td className="px-4 py-2">{item.money}</td>
                                        <td className="px-4 py-2">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Open</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Requests;
