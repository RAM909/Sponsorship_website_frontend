import React, { useState } from 'react';

const Modal = ({ event, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                <p className="text-gray-700 mb-2">Date: {event.date}</p>
                <p className="text-gray-700 mb-4">Location: {event.location}</p>
                <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    Close
                </button>
            </div>
        </div>
    );
};

const Sponsors = ({ event }) => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    return (
        <>
        <div className=''>

            <section className="section bg-gray-100 p-4">
                <h1 className='text-3xl font-bold mb-4'>Dive into the Tech Universe with us</h1>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img className="w-full h-48 object-cover mb-4" src="" alt="" />
                    <div className="text-lg font-semibold mb-2">Title</div>
                    <p className="text-gray-700 mb-4">description</p>
                    <button onClick={toggleModal} type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                        Know More
                    </button>
                </div>
            </section>
            <div className='flex border w-96 border-red-500 h-10'>
                hi
            </div>
            {isModalOpen && <Modal event={event} onClose={toggleModal} />}
        </div>
        </>
    );
};

export default Sponsors;
