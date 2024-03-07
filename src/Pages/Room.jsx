import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/layout';

const Room = () => {
    const [roomcode, setRoomcode] = useState('');
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        if (roomcode) {
            navigate(`/room/${roomcode}`);
        }
    }, [navigate, roomcode]);

    return (
        <>
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <input
                        type="text"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter room name..."
                        value={roomcode}
                        onChange={(e) => setRoomcode(e.target.value)}
                    />
                    <button
                        onClick={handleClick}
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Join Room
                    </button>
                </div>
            </Layout>
        </>
    );
};

export default Room;
