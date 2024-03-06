import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        description: '',
        contact_email: '',
        contact_phone: '',
        budget: '',
        location: '',
        video: '',
        photo: ''
    });

    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        // Check if the input type is file
        const inputValue = type === 'file' ? e.target.files[0] : value;

        setFormData({
            ...formData,
            [name]: inputValue
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const nextStep = () => {
        // Check if all visible fields are filled before proceeding to the next step
        const visibleFields = getVisibleFields(step);
        const isStepValid = visibleFields.every(field => formData[field]);

        if (isStepValid) {
            setStep(step + 1);
        } else {
            // Handle validation error
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    // Helper function to get the list of visible fields for the current step
    const getVisibleFields = (step) => {
        switch (step) {
            case 1:
                return ['eventName', 'description'];
            case 2:
                return ['contact_email', 'contact_phone'];
            case 3:
                return ['budget', 'location'];
            case 4:
                return ['video', 'photo'];
            default:
                return [];
        }
    };

    // Options for eventName field
    const eventOptions = [
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
                                <select
                                    name="eventName"
                                    value={formData.eventName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="">Select Event Name</option>
                                    {eventOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </label>

                            <label className="block">
                                <span className="text-gray-700">Description:</span>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm text-left resize-none"
                                    rows={4} // Adjust the number of rows as needed
                                    required
                                />
                            </label>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <label className="block">
                                <span className="text-gray-700">Contact Email:</span>
                                <input type="email" name="contact_email" value={formData.contact_email} onChange={handleChange} className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Contact Phone:</span>
                                <input type="tel" name="contact_phone" value={formData.contact_phone} onChange={handleChange} className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                            </label>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <label className="block">
                                <span className="text-gray-700">Budget:</span>
                                <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Location:</span>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                            </label>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <label className="block">
                                <span className="text-gray-700">Video:</span>
                                <input type="file" name="video" value={formData.video} onChange={handleChange} className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Photo:</span>
                                <input type="file" accept=".jpg, .jpeg, .png" name="photo" onChange={handleChange} className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            </label>
                        </>
                    )}
                </div>
                <div className="p-6 bg-gray-50">
                    {step !== 1 && (
                        <button onClick={prevStep} className="mr-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Previous</button>
                    )}
                    {step !== 4 ? (
                        <button onClick={nextStep} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next</button>
                    ) : (
                        <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
