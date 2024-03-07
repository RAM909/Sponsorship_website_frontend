import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// const notifications = [
//     {
//         id: 1,
//         title: 'Notification 1',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//         id: 2,
//         title: 'Notification 2',
//         content: 'Sed a dui feugiat, aliquet libero nec, auctor urna.',
//     },
//     {
//         id: 3,
//         title: 'Notification 3',
//         content: 'Phasellus euismod ex eu elit rutrum, a consectetur nulla malesuada.',
//     },
// ];



const Notifications = () => {
    const [notifications, setNotifications] = useState([])
useEffect (()=>{
    const Notification = async () => {
        try {
            const res = await axios.post('https://shah-and-anchor-backend.onrender.com/api/users/see-notifications', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (res.data.success) {
                console.log(res);
                alert(res.data.message);
                setNotifications(res.data.notifications)
                console.log(notifications)
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error)
            alert.error(error)
        }
    }
    Notification()
},[])

const data = notifications.length;

    return (
        <>
            <div className="h-screen grid place-items-center my-8">
                <div className="lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border p-10 shadow-sm">
                    <div className="inline-flex items-center justify-between w-full">
                        <h3 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">Notifications</h3>
                        <Link to="/home">
                            <button
                                className="inline-flex text-xs sm:text-sm bg-white px-2 sm:px-3 py-2 text-blue-500 items-center rounded font-medium
         shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-blue-500
          hover:text-white hover:-translate-y-1 hover:scale-110 dark:text-gray-800 dark:hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd" />
                                </svg>
                                Close
                            </button>
                        </Link>
                    </div>
                    <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">Today</p>
                    {notifications.map(notification => (
                        <div key={notification.type} className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                            <div className="inline-flex items-center justify-between w-full">
                                <div className="inline-flex items-center">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                        alt="Training Icon" className="w-6 h-6 mr-3" />
                                    <h3 className="font-bold text-base text-gray-800">{notification.message}</h3>
                                </div>
                                <p className="text-xs text-gray-500">
                                    {notification.message}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default Notifications;
