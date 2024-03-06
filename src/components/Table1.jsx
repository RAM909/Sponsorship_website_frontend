import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable1() {
    const [sponsors, setSponsors] = useState([]);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        const getAllSponsors = async () => {
            try {
                const token = localStorage.getItem('token')
                console.log(token)
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
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowTable(!showTable)}
            >
                Show Sponsors
            </button>
            {showTable && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Sponsors List:</h2>
                    <table className="min-w-full">
                        <thead>
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
