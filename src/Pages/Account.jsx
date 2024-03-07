import React from 'react';
import Layout from '../layout/layout';

const Account = () => {
    const dummyUser = {
        username: 'John Doe',
        email: 'johndoe@example.com',
        eventsRegistered: [
            { id: 1, title: 'Event 1', date: '2024-03-10' },
            { id: 2, title: 'Event 2', date: '2024-03-15' }
        ]
    };

    return (
        <>
            <Layout>

                <div className="flex justify-center items-center h-screen bg-gray-200">
                    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold mb-4 text-center">Account Details</h1>
                        <div className="mb-6">
                            <p className="text-lg mb-2"><span className="font-bold">Name:</span> {dummyUser.username}</p>
                            <p className="text-lg mb-2"><span className="font-bold">Email:</span> {dummyUser.email}</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2">Events Registered:</h2>
                            <ul className="list-disc pl-5">
                                {dummyUser.eventsRegistered.map(event => (
                                    <li key={event.id} className="text-lg">{event.title} - {event.date}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Account;
