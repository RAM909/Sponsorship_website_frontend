import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        type: '',
        description: '',
        contact_email: '',
        contact_phone: '',
        budget: '',
        location: '',
        video: '',
        photo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Type:</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} required />

            <label>Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} required />

            <label>Contact Email:</label>
            <input type="email" name="contact_email" value={formData.contact_email} onChange={handleChange} required />

            <label>Contact Phone:</label>
            <input type="tel" name="contact_phone" value={formData.contact_phone} onChange={handleChange} required />

            <label>Budget:</label>
            <input type="text" name="budget" value={formData.budget} onChange={handleChange} required />

            <label>Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />

            <label>Video:</label>
            <input type="text" name="video" value={formData.video} onChange={handleChange} />

            <label>Photo:</label>
            <input type="text" name="photo" value={formData.photo} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ApplicationForm;
