import React, { useState, useEffect } from 'react';
import ApexChart from '../components/Apexchart';
import axios from 'axios';

const Analytic = () => {
    const [sponsors, setSponsors] = useState([]);
    const [user, setuser] = useState([]);

    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const response = await axios.post("https://shah-and-anchor-backend.onrender.com/api/sponsor/getAllSponsors", {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setSponsors(response.data.sponsor);
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
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.post("https://shah-and-anchor-backend.onrender.com/api/users/getAllUser", {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setuser(response.data.users);
                } else {
                    console.log("error", response.data.error);
                    alert(response.data.message);
                }
            } catch (error) {
                console.log("server Error", error);
                alert("Server Error");
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    const sponsorLength = sponsors.length;
    const userlenght = user.length;

    return (
        <div className="flex flex-col h-screen bg-gray-200">
            {/* Header */}
            <header className="bg-blue-600 text-white text-center py-4">
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-4">
                {/* Analytics Section */}
                <section className="flex flex-col items-center justify-center my-8">
                    <h2 className="text-xl font-bold mb-4">Analytics Overview</h2>
                    <div className="flex justify-center mb-10">
                        <div className="w-96 h-72">
                            <ApexChart />
                        </div>
                    </div>
                </section>

                {/* Other Analytics Metrics */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Example Metric 1 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                        <p className="text-xl font-bold">{userlenght}</p>
                    </div>

                    {/* Example Metric 2 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Sponsors available</h3>
                        <p className="text-xl font-bold">{sponsorLength}</p>
                    </div>

                    {/* Example Metric 3 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                        <p className="text-xl font-bold">Rs 10,000</p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white text-center py-2">
                <p>&copy; 2024 Analytics Inc.</p>
            </footer>
        </div>
    );
};

export default Analytic;
