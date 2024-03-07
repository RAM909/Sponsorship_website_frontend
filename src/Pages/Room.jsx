import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Room = () => {

    const[roomcode,setRoomcode]=useState('')
    const navigate = useNavigate();

    const handleClick = useCallback(()=>{
        if(roomcode){
            navigate(`/room/${roomcode}`)
        }
    },[navigate,roomcode])
    return (
        <div className="flex justify-center items-center h-screen">
            <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter room name..."
                value={roomcode}
                onChange={(e)=>setRoomcode(e.target.value)}
            />
        <button onClick={handleClick}> Join Room </button>
        </div>
    );
};

export default Room;
