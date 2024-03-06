import React, { useState } from 'react';

const ChatBar = ({ sponsorName }) => {
    const [showChat, setShowChat] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowChat(true);
    };

    return (
        <div className="bg-gray-200 h-full w-1/4">
            <h2 className="text-lg font-semibold text-center mt-4">Messages</h2>
            <ul className="mt-4">
                <li onClick={() => handleOptionSelect('file-sharing')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">File Sharing</li>
                <li onClick={() => handleOptionSelect('video-calling')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Video Calling</li>
            </ul>
            {showChat && (
                <div className="mt-4 p-4 border-t border-gray-400">
                    <h3 className="text-lg font-semibold">Chat with {sponsorName}</h3>
                    {/* Render chat component based on selectedOption */}
                    {/* For simplicity, you can show different chat components */}
                    {selectedOption === 'file-sharing' && <div>File Sharing Chat Component</div>}
                    {selectedOption === 'video-calling' && <div>Video Calling Chat Component</div>}
                </div>
            )}
        </div>
    );
};

const ApprovedSponsors = () => {
    const [selectedSponsor, setSelectedSponsor] = useState('');

    const handleSponsorSelect = (sponsorName) => {
        setSelectedSponsor(sponsorName);
    };

    return (
        <div className="flex justify-between">
            <div className="bg-gray-100 h-full w-3/4 p-4">
                <h1 className="text-2xl font-semibold mb-4">Approved Sponsors</h1>
                {/* Render list of approved sponsors */}
                <ul>
                    <li onClick={() => handleSponsorSelect('Sponsor 1')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 1</li>
                    <li onClick={() => handleSponsorSelect('Sponsor 2')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 2</li>
                    <li onClick={() => handleSponsorSelect('Sponsor 3')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 3</li>
                    <li onClick={() => handleSponsorSelect('Sponsor 4')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Sponsor 4</li>
                    {/* Add more sponsors as needed */}
                </ul>
            </div>
            {selectedSponsor && <ChatBar sponsorName={selectedSponsor} />}
        </div>
    );
};

const Update = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <ApprovedSponsors />
        </div>
    );
};

export default Update;
