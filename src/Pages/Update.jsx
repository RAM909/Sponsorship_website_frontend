import React, { useState } from 'react';
import ChatBar from '../components/Chat';
const Update = () => {
    const [selectedSponsor, setSelectedSponsor] = useState('');

    const handleSponsorSelect = (sponsorName) => {
        setSelectedSponsor(sponsorName);
    };

    // Predefined event name and description
    const eventName = "Your Event Name";
    const eventDescription = "Your Event Description";

    return (
        <>
            <div className='flex border border-red-500 w-96 h-96'>
                <div className="p-4">
                    {/* Display predefined event name */}
                    <h2 className="text-xl font-semibold">{eventName}</h2>
                    {/* Display predefined event description */}
                    <p className="text-gray-600">{eventDescription}</p>
                </div>
            </div>
            <div className="right-0 absolute flex justify-end">
                <div className="bg-gray-100 h-full w-3/4 p-4">
                    <h1 className="text-2xl font-semibold mb-4">Approved Sponsors</h1>
                    <ul>
                        <li onClick={() => handleSponsorSelect('Sponsor 1')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 1</li>
                        <li onClick={() => handleSponsorSelect('Sponsor 2')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 2</li>
                        <li onClick={() => handleSponsorSelect('Sponsor 3')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 3</li>
                        <li onClick={() => handleSponsorSelect('Sponsor 4')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 4</li>
                    </ul>
                </div>
                {selectedSponsor && <ChatBar sponsorName={selectedSponsor} />}
            </div>
        </>
    );
};

export default Update;
