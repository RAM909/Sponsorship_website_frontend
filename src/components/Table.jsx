import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/users/getAllUser',{
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
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowTable(!showTable)}
            >
                Toggle Table
            </button>
            {showTable && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">User List:</h2>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">User Name</th>
                                <th className="border px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td className="border px-4 py-2">{user.username}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default UserTable;
