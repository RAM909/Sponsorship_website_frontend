import React, { useState } from 'react';

const Sponsors = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleHiVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='relative'>
            <section className="h-80 section bg-gray-100 p-4">
                <h1 className='text-3xl font-bold mb-4'>Sponsor 1 </h1>
                <div className="hbg-white p-4 rounded-lg shadow-md">
                    <div className="text-lg font-semibold mb-2">Name</div>
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
