import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MoreInfo = () => {
    const [formData, setFormData] = useState(null);
    const [userdata, setuserdata] = useState(null);
    const { id } = useParams(); // Accessing the ID parameter from the URL
    const [showApplyForm, setShowApplyForm] = useState(false); // State to toggle the display of the apply form
    const [formValues, setFormValues] = useState({
        reason: '',
        location: '',
        money: '',
        photoUpload: null,
        link: ''
    });

    useEffect(() => {
        const fetchSponsorDetails = async () => {
            const token = localStorage.getItem('token')
            console.log(token)
            try {
                const response = await axios.post(`http://localhost:5000/api/sponsor/getSponsor/${id}`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    console.log(response.data)
                    console.log(response.data.user)

                    setFormData(response.data.sponsor);
                    setuserdata(response.data.user);
                } else {
                    console.log("error", response.data.error);
                    alert(response.data.message);
                }
            } catch (error) {
                console.log("server Error", error);
                alert("Server Error");
            }
        };

        fetchSponsorDetails();
    }, [id]); // Fetch sponsor details when the ID parameter changes

    const handleApplyButtonClick = () => {
        setShowApplyForm(true);
    };

    const handleCloseForm = () => {
        setShowApplyForm(false);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Process form data here
        const token = localStorage.getItem('token');
        console.log(token);
        console.log(formValues)
        try {
            const response = await axios.post('http://localhost:5000/api/application/apply', formValues, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                alert("Application submitted successfully!");
                // Reset form values and hide form
                setFormValues({
                    reason: '',
                    location: '',
                    money: '',
                    photoUpload: null,
                    link: ''
                });
                setShowApplyForm(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log("server Error", error);
            alert("Server Error");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='flex border h-96 w-96 justify-center items-center'>
                <div className="w-full max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="mb-4 border-b border-gray-300">
                            <span className="text-gray-700">Name:</span>
                            <div className="mt-1 font-semibold">{userdata.userName}</div>
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
                            <div className="mt-1 font-semibold">{formData.contact_email}</div>
                        </div>
                        <div className="mb-4">
                            <span className="text-gray-700">Contact Number:</span>
                            <div className="mt-1 font-semibold">{formData.contact_phone}</div>
                        </div>
                        <button onClick={handleApplyButtonClick} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            {showApplyForm && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg relative">
                        <button onClick={handleCloseForm} className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800">
                            Close
                        </button>
                        <h2 className="text-2xl mb-4">Apply</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="reason" className="block text-gray-700">Reason:</label>
                                <input type="text" id="reason" name="reason" className="mt-1 p-2 border rounded-md w-full" required onChange={handleInputChange} value={formValues.reason} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-gray-700">Location:</label>
                                <input type="text" id="location" name="location" className="mt-1 p-2 border rounded-md w-full" required onChange={handleInputChange} value={formValues.location} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="money" className="block text-gray-700">Money:</label>
                                <input type="text" id="money" name="money" className="mt-1 p-2 border rounded-md w-full" required onChange={handleInputChange} value={formValues.money} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="driveLink" className="block text-gray-700">Drive Link:</label>
                                <input type="text" id="link" name="link" className="mt-1 p-2 border rounded-md w-full" required onChange={handleInputChange} value={formValues.link} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="photoUpload" className="block text-gray-700">Photo Upload:</label>
                                <input type="file" id="photoUpload" name="photoUpload" className="mt-1 p-2 border rounded-md w-full" onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoreInfo;
