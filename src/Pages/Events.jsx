import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';

const YourEvents = () => {
    return (
        <Layout>
            <div className='flex justify-center'>
                <div className='m-10 z-10 gap-10 h-96'>
                    <Link to="/update">
                        <div className='flex border border-red-500 h-96 w-80 justify-center items-center align-middle cursor-pointer'>
                            <div className=''>
                                Event Name
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='m-10 z-10 gap-10 h-96'>
                    <Link to="/update">
                        <div className='flex border border-red-500 h-96 w-80 justify-center items-center align-middle cursor-pointer'>
                            <div className=''>
                                Event Name
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='m-10 z-10 gap-10 h-96'>
                    <Link to="/update">
                        <div className='flex border border-red-500 h-96 w-80 justify-center items-center align-middle cursor-pointer'>
                            <div className=''>
                                Event Name
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default YourEvents;
