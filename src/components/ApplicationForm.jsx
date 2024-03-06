import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        eventType: '',
        reason: '',
        money: '',
        location: '',
        date: ''
    });

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false); // Add state for submission status
    const navigate = useNavigate(); // Initialize useNavigate hook

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
            setIsSubmitting(true); // Set isSubmitting to true when form is submitted
            try {
                // Simulate API request delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log(formData);
                // Redirect to Opportunities after successful submission
                navigate('/Opportunites');
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false); // Set isSubmitting back to false after submission
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
        'Tech Event',
        'Cultural Event',
        'Music Festival',
        'Art Exhibition',
        'Sports Tournament',
        'Food Fair',
    ];

    return (
        <div className="max-w-md mx-auto mt-8 px-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 gap-6 p-6">
                    {step === 1 && (
                        <>
                            <label className="block">
                                <span className="text-gray-700">Event Name:</span>
                                <input
                                    type="text"
                                    name="eventName"
                                    value={formData.eventName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Enter Event Name"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Event Type:</span>
                                <select
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select Event Type</option>
                                    {eventTypeOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Reason:</span>
                                <textarea
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    className="form-textarea mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-left resize-none"
                                    rows={4}
                                    required
                                />
                            </label>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <label className="block">
                                <span className="text-gray-700">Money:</span>
                                <input type="text" name="money" value={formData.money} onChange={handleChange} className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Location:</span>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                            </label>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <label className="block">
                                <span className="text-gray-700">Date:</span>
                                <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
                            </label>
                        </>
                    )}
                </div>
                <div className="p-6 bg-gray-50">
                    {step !== 1 && (
                        <button onClick={prevStep} className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Previous</button>
                    )}
                    {step !== 3 ? (
                        <button onClick={nextStep} className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}>Next</button>
                    ) : (
                        <button type="button" onClick={handleSubmit} disabled={isSubmitting} className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}>Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
