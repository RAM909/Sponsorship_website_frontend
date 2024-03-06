import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable1() {
    const [sponsors, setSponsors] = useState([]);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        const getAllSponsors = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/sponsor/getAllSponsors',{},{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                });
                setSponsors(response.data.sponsor);
            } catch (error) {
                console.error('Error fetching sponsors:', error);
            }
        };

        getAllSponsors();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowTable(!showTable)}
            >
                {showTable ? 'Hide Sponsors' : 'Show Sponsors'}
            </button>
            {showTable && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Sponsors List:</h2>
                    <table className="min-w-full bg-white shadow-md rounded">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Industry</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sponsors.map(sponsor => (
                                <tr key={sponsor._id}>
                                    <td className="border px-4 py-2">{sponsor.contact_email}</td>
                                    <td className="border px-4 py-2">{sponsor.industry}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default UserTable1;
