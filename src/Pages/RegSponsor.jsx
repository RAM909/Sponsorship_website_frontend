import React, { useState } from 'react';
import Layout from '../layout/layout';

const RegSponsor = () => {
    const [formData, setFormData] = useState({
        industry: '',
        description: '',
        contact_email: '',
        contact_phone: '',
        budget: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <>
        <Layout>

        <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Register Sponsor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry:</label>
                    <input type="text" id="industry" name="industry" value={formData.industry} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700">Contact Email:</label>
                    <input type="email" id="contact_email" name="contact_email" value={formData.contact_email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">Contact Phone:</label>
                    <input type="tel" id="contact_phone" name="contact_phone" value={formData.contact_phone} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget:</label>
                    <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
            </form>
        </div>
        </Layout>
        </>
    );
};

export default RegSponsor;
