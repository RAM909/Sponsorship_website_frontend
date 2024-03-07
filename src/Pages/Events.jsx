import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';

const YourEvents = () => {
    return (
        <Layout>
            <div className='flex justify-center'>
                <div className='m-10 z-10 gap-10'>
                    <Link to="/update">
                        <div className='flex flex-col border border-blue-500 h-96 w-80 justify-center items-center align-middle cursor-pointer p-4 rounded-lg shadow-md bg-blue-100'>
                            <div className='text-xl font-bold mb-2 text-black'>Event Name</div>
                            <div className='mb-2 text-black'>Event Date: January 1, 2024</div>
                            <div className='text-black'>Industry Type: Technology</div>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">More Info</button>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default YourEvents;
