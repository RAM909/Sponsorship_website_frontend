import React from 'react';
import Layout from '../layout/layout';
const Requests = () => {
    // Sample array of requests (replace with actual data)
    const requests = [
        { eventName: 'Event 1', message: 'Message 1 with text' },
        { eventName: 'Event 2', message: 'Message 2 with file' },
        { eventName: 'Event 3', message: 'Message 3 with text' },
    ];

    return (
        <>
        <Layout>


        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Requests</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">Event Name</th>
                            <th className="px-4 py-2">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 border-b border-gray-200' : 'bg-white border-b border-gray-200'}>
                                <td className="px-4 py-2">{request.eventName}</td>
                                <td className="px-4 py-2">{request.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
                        </Layout>
                        </>
    );
};

export default Requests;
