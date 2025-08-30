"use client";
import React, { useState } from 'react';
import {
    HeartPulse,
    Mail,
    Lock,
    User,
    Award,
    Briefcase,
    Camera,
    Clock,
    BookText
} from "lucide-react";

const DoctorRegistrationPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        specialty: '',
        qualifications: '',
        experience: '',
        profileImage: null,
        availableDays: [],
        availableTimeSlots: [],
        description: ''
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData(prev => {
            const currentValues = prev[name];
            if (checked) {
                return { ...prev, [name]: [...currentValues, value] };
            } else {
                return { ...prev, [name]: currentValues.filter(item => item !== value) };
            }
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, profileImage: e.target.files[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Simple validation
        if (!formData.fullName || !formData.email || !formData.password || !formData.specialty || !formData.qualifications || !formData.experience) {
            setError('Please fill out all required fields.');
            return;
        }
        console.log("Doctor Registration Data:", formData);
        alert('Doctor registration submitted successfully! (Check console for data)');
    };

    const specialties = [
        "Consultant Physician (OPD)", "Cardiologist", "Dermatologist", "Neurologist",
        "Orthopedist", "Pediatrician", "Psychiatrist", "Gynecologist",
        "ENT Specialist", "Ophthalmologist", "Other"
    ];

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
    ];


    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex items-center justify-center p-4 py-12 mt-10">
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <HeartPulse className="h-10 w-10 text-emerald-500" />
                            <h1 className="text-3xl font-bold text-slate-900">Sevayu AI</h1>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">Doctor Registration</h2>
                        <p className="text-slate-600 mt-2">Join our network of trusted medical professionals.</p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Personal & Professional Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={<User />} placeholder="Dr. John Doe" required />
                            <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} icon={<Mail />} placeholder="doctor@example.com" required />
                            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleInputChange} icon={<Lock />} placeholder="••••••••" required />
                            
                            <div>
                                <label className="font-semibold text-slate-700 block mb-1">Medical Specialty *</label>
                                <select name="specialty" value={formData.specialty} onChange={handleInputChange} className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400" required>
                                    <option value="">Select your specialty</option>
                                    {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <InputField label="Qualifications" name="qualifications" value={formData.qualifications} onChange={handleInputChange} icon={<Award />} placeholder="MBBS, MD" required />
                            <InputField label="Years of Experience" name="experience" type="number" value={formData.experience} onChange={handleInputChange} icon={<Briefcase />} placeholder="e.g., 10" required />
                        </div>

                        {/* Profile Image */}
                        <div>
                            <label className="font-semibold text-slate-700 block mb-2">Profile Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <Camera className="mx-auto h-12 w-12 text-slate-400" />
                                    <div className="flex text-sm text-slate-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none">
                                            <span>Click to upload profile image</span>
                                            <input id="file-upload" name="profileImage" type="file" className="sr-only" onChange={handleFileChange} accept="image/png, image/jpeg" />
                                        </label>
                                    </div>
                                    <p className="text-xs text-slate-500">PNG, JPG up to 5MB</p>
                                    {formData.profileImage && <p className="text-sm text-emerald-700 font-semibold mt-2">{formData.profileImage.name}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <CheckboxGroup label="Available Days *" name="availableDays" options={daysOfWeek} selectedOptions={formData.availableDays} onChange={handleCheckboxChange} />
                            <CheckboxGroup label="Available Time Slots *" name="availableTimeSlots" options={timeSlots} selectedOptions={formData.availableTimeSlots} onChange={handleCheckboxChange} />
                        </div>
                        
                        {/* Description */}
                        <div>
                            <label className="font-semibold text-slate-700 block mb-1">Professional Description *</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                placeholder="Share a brief summary of your professional background, expertise, and patient care philosophy..."
                                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                required
                            ></textarea>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 text-white font-semibold py-4 text-lg cursor-pointer rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                            Complete Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


// Helper components
const InputField = ({ label, name, type = 'text', value, onChange, icon, placeholder, required }) => (
    <div>
        <label className="font-semibold text-slate-700 block mb-1">{label} {required && '*'}</label>
        <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">{icon}</div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required={required}
            />
        </div>
    </div>
);

const CheckboxGroup = ({ label, name, options, selectedOptions, onChange }) => (
    <div>
        <label className="font-semibold text-slate-700 block mb-3">{label}</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {options.map(option => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="checkbox"
                        name={name}
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={onChange}
                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700">{option}</span>
                </label>
            ))}
        </div>
    </div>
);


export default DoctorRegistrationPage;