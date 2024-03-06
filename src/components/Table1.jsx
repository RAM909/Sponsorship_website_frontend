import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable1() {
    const [sponsors, setSponsors] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [count,setCount] = useState(1);

    const handleApprove = async (index) => {
        const res = await axios.post('http://localhost:5000/api/admin/approvingApplication',{sponsorId:sponsors[index]._id,status:"approve"},{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }); // Change the URL

       console.log(sponsors[index]._id) 
    }

    useEffect(() => {
        const getAllSponsors = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/sponsor/getAllSponsors',{},{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response.data.sponsor)
                setSponsors(response.data.sponsor);
                console.log()
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
                                <th className="border px-4 py-2">Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sponsors.map((sponsor,index) => (
                                <tr key={sponsor._id} >
                                    <td className="border px-4 py-2">{count+index}</td>
                                    <td className="border px-4 py-2">{sponsor.contact_email}</td>
                                    <td className="border px-4 py-2">{sponsor.industry}</td>
                                    <td onClick={()=>handleApprove(index)} className="border bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><button>Approve</button></td>
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
