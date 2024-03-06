import React, { useState } from 'react';

const Sponsors = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleHiVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='relative'>
            <section className="section bg-gray-100 p-4">
                <h1 className='text-3xl font-bold mb-4'>Dive into the Tech Universe with us</h1>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img className="w-full h-48 object-cover mb-4" src="" alt="" />
                    <div className="text-lg font-semibold mb-2">Title</div>
                    <p className="text-gray-700 mb-4">description</p>
                    <button onClick={toggleHiVisibility} type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                        Know More
                    </button>
                </div>
            </section>
            <div className={`absolute top-40 border w-96 border-red-500 h-48 z-10 ${isVisible ? '' : 'hidden'}`}>
                hi
            </div>
        </div>
    );
};

export default Sponsors;
