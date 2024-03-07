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
            <ul className="mt-4 ml-4">
                <li onClick={() => handleOptionSelect('file-sharing')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">File Sharing</li>
                <li onClick={() => handleOptionSelect('video-calling')} className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2">Video Calling</li>
            </ul>
            {showChat && (
                <div className="mt-4 p-4 border-t border-gray-400 ml-4">
                    <h3 className="text-lg font-semibold">Chat with {sponsorName}</h3>
                    {selectedOption === 'file-sharing' && <div>Chat</div>}
                    {selectedOption === 'video-calling' && <div>Video Calling </div>}
                </div>
            )}
        </div>
    );
};

export default ChatBar;
