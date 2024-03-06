import React from 'react';

const MoreInfo = () => {
    const formData = {
        name: 'John Doe',
        industry: 'Technology',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies est vel ex rutrum, nec dapibus turpis ultricies. Integer quis justo nec velit faucibus pellentesque. Nam vehicula lectus id sollicitudin scelerisque. Nulla at placerat justo. Cras vel dictum ex. Vestibulum interdum sagittis magna, id consectetur leo.',
        location: 'New York',
        budget: '$10,000',
        email: 'john@example.com',
        contactNumber: '+1 123-456-7890'
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='flex border h-96 w-96 justify-center items-center'>
                <div className="w-full max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Name:</span>
                            <div className="mt-1 font-semibold">{formData.name}</div>
                        </div>
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Industry:</span>
                            <div className="mt-1 font-semibold">{formData.industry}</div>
                        </div>
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Description:</span>
                            <div className="mt-1">{formData.description}</div>
                        </div>
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Location:</span>
                            <div className="mt-1 font-semibold">{formData.location}</div>
                        </div>
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Budget:</span>
                            <div className="mt-1 font-semibold">{formData.budget}</div>
                        </div>
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Email:</span>
                            <div className="mt-1 font-semibold">{formData.email}</div>
                        </div>
                        <div className="mb-4">
                            <span className="text-gray-700">Contact Number:</span>
                            <div className="mt-1 font-semibold">{formData.contactNumber}</div>
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
