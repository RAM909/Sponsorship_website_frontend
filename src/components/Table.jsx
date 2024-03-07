import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../layout/layout';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/users/getAllUser',{},{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        getUsers();
    }, []);

    return (
        <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8 h-screen">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowTable(!showTable)}
            >
                {showTable ? 'Hide Users' : 'Show Users'}
            </button>
            {showTable && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">User List:</h2>
                    <table className="min-w-full bg-white shadow-md rounded">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="border px-4 py-2">User Name</th>
                                <th className="border px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td className="border px-4 py-2">{user.userName}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        </Layout>
    );
}

export default UserTable;
