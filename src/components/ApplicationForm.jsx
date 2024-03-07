import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Layout from '../layout/layout';
const ApplicationForm = () => {
    const { user } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        eventName: '',
        eventType: '',
        reason: '',
        money: '',
        location: '',
        date: '',
        userId: user?.userID
    });

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const inputValue = type === 'file' ? e.target.files[0] : value;

        setFormData({
            ...formData,
            [name]: inputValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isSubmitting) {
            setIsSubmitting(true);
            try {
                const response = await axios.post("http://localhost:5000/api/events/create-event", formData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.message === "Event created successfully") {
                    alert(response.data.message);
                    setFormData({
                        eventName: '',
                        eventType: '',
                        reason: '',
                        money: '',
                        location: '',
                        date: '',
                        userId: user?.userID
                    })
                    navigate('/Events')
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.log("server Error", error);
                alert("Server Error");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const nextStep = () => {
        const visibleFields = getVisibleFields(step);
        const isStepValid = visibleFields.every(field => formData[field]);

        if (isStepValid) {
            if (step !== 3) {
                setStep(step + 1);
            }
        } else {
            // Handle validation error
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const getVisibleFields = (step) => {
        switch (step) {
            case 1:
                return ['eventName', 'eventType', 'reason'];
            case 2:
                return ['money', 'location'];
            case 3:
                return ['date'];
            default:
                return [];
        }
    };

    const eventTypeOptions = [
        'Scholarship',
        'Tech Event',
        'Cultural Event',
        'Music Festival',
        'Art Exhibition',
        'Sports Tournament',
        'Food Fair',

    ];

    return (
        <>
        <Layout>

            <div className='py-0 -mt-10 h-screen w-screen bg-blue-900'>

                <div className="max-w-md mx-auto mt-8 px-4">
                    <form onSubmit={handleSubmit} className=" bg-slate-800 text-white shadow-md rounded-lg overflow-hidden">
                        <div className="text-white grid grid-cols-1 gap-6 p-6">
                            {step === 1 && (
                                <>
                                    <label className="block">
                                        <span className="text-white font-bold">Event Name:</span>
                                        <input
                                            type="text"
                                            name="eventName"
                                            value={formData.eventName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border h-7 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-100"
                                            placeholder="Enter Event Name"
                                            required
                                            />
                                    </label>

                                    <label className="block">
                                        <span className="text-white font-bold">Event Type:</span>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="text-black font-bold mt-1 block w-full border h-7 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-100"
                                            required
                                            >
                                            <option value="">Select Event Type</option>
                                            {eventTypeOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="block">
                                        <span className="text-white font-bold">Reason:</span>
                                        <textarea
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleChange}
                                            className="form-textarea text-black font-bold mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-left resize-none focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-100"
                                            rows={4}
                                            required
                                        />
                                    </label>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <label className="block">
                                        <span className="text-white font-bold">Money:</span>
                                        <input type="text" name="money" value={formData.money} onChange={handleChange} className="text-black font-bold h-8 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-100" required />
                                    </label>
                                    <label className="block">
                                        <span className="text-white font-bold">Location:</span>
                                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="h-8 font-bond text-black form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-100" required />
                                    </label>
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <label className="block">
                                        <span className="text-white font-bold">Date:</span>
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="text-black h-10 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-gray-100" required />
                                    </label>
                                </>
                            )}
                        </div>
                        <div className="p-6 bg-gray-50">
                            {step !== 1 && (
                                <button onClick={prevStep} className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Previous</button>
                            )}
                            {step !== 3 ? (
                                <button onClick={nextStep} className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}>Next</button>
                            ) : (
                                <button type="button" onClick={handleSubmit} disabled={isSubmitting} className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}>Submit</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
                                </Layout>
        </>
    );
};

export default ApplicationForm;
