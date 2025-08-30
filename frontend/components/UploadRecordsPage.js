"use client";
import React, { useState, useEffect } from 'react';
import {
    HeartPulse,
    Stethoscope,
    FileText,
    UploadCloud,
    Loader2,
    ChevronDown,
    ClipboardList
} from "lucide-react";

// --- Mock Data Services ---
// In a real application, these would be in separate service files.

const getDoctors = () => {
    return [
        {
            id: 1,
            name: "Dr. Evelyn Reed",
            specialty: "Cardiologist",
        },
        {
            id: 2,
            name: "Dr. Marcus Thorne",
            specialty: "Neurologist",
        }
    ];
};

const getAppointments = () => {
    return [
        {
            id: 'appt1',
            type: 'New Consultation',
            doctor: getDoctors()[0],
            date: '2025-09-05',
            timeSlot: '10:00 AM',
            patientInfo: {
                id: 'PAT12345',
                name: 'Priya Sharma',
                age: '28',
                gender: 'Female',
                address: '123 Health St, Dehradun',
                phone: '555-9876',
                email: 'priya.sharma@email.com',
            },
            status: "Completed", // Changed to 'Completed' to represent a past appointment
        },
        {
            id: 'appt2',
            type: 'Follow-up Visit',
            doctor: getDoctors()[1],
            date: '2025-08-20',
            timeSlot: '02:30 PM',
            patientInfo: {
                id: 'PAT12345',
                name: 'Priya Sharma',
            },
            status: "Completed",
        },
    ];
};


const UploadRecordPage = () => {
    const [formData, setFormData] = useState({
        appointmentId: '',
        diagnosis: '',
        description: ''
    });
    const [appointments, setAppointments] = useState([]);
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch past appointments when the component mounts
        const pastAppointments = getAppointments();
        setAppointments(pastAppointments);
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!formData.appointmentId || !formData.diagnosis || !formData.description || !file) {
            setError('Please fill out all fields and select a file.');
            return;
        }

        setIsLoading(true);

        // Find the selected appointment to get patient ID, doctor ID, and date
        const selectedAppointment = appointments.find(appt => appt.id === formData.appointmentId);

        const recordData = {
            id: Date.now().toString(), // Generate a unique ID for the new record
            patientId: selectedAppointment.patientInfo.id,
            doctorId: selectedAppointment.doctor.id,
            date: selectedAppointment.date, // Use date from the selected appointment
            diagnosis: formData.diagnosis,
            description: formData.description,
            reportUrl: `/${file.name}` // Simulating a file path
        };

        // Simulate API call delay
        setTimeout(() => {
            console.log("Uploading Record Data:", recordData);
            alert('Medical record uploaded successfully! (Check console for data)');
            setIsLoading(false);
            // Optionally, reset the form
            setFormData({ appointmentId: '', diagnosis: '', description: '' });
            setFile(null);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex items-center justify-center p-4 py-12 mt-10">
            <div className="w-full max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <HeartPulse className="h-10 w-10 text-emerald-500" />
                            <h1 className="text-3xl font-bold text-slate-900">Sevayu AI</h1>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">Upload Medical Record</h2>
                        <p className="text-slate-600 mt-2">Add a new document to your health profile.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        {/* Appointment Dropdown */}
                        <div>
                             <label className="font-semibold text-slate-700 block mb-1">Select Past Appointment *</label>
                            <div className="relative">
                               <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                               <select
                                    name="appointmentId"
                                    value={formData.appointmentId}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full appearance-none bg-white py-3 pl-10 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                >
                                    <option value="" disabled>Choose a consultation...</option>
                                    {appointments.map(appt => (
                                        <option key={appt.id} value={appt.id}>
                                            {`Dr. ${appt.doctor.name} - ${new Date(appt.date).toLocaleDateString()}`}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <InputField label="Diagnosis / Report Title" name="diagnosis" value={formData.diagnosis} onChange={handleInputChange} icon={<FileText />} placeholder="e.g., Annual Check-up Report" required />
                        
                        <TextareaField label="Description" name="description" value={formData.description} onChange={handleInputChange} icon={<ClipboardList />} placeholder="Add a brief description or notes about the record..." required />

                        {/* File Upload */}
                        <div>
                            <label className="font-semibold text-slate-700 block mb-2">Upload Report File *</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
                                    <div className="flex text-sm text-slate-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none">
                                            <span>Select a file</span>
                                            <input id="file-upload" name="reportFile" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
                                    {file && <p className="text-sm text-emerald-700 font-semibold mt-2">{file.name}</p>}
                                </div>
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center font-semibold">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center bg-emerald-600 text-white font-semibold py-3 text-lg cursor-pointer rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-slate-400"
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Upload Record'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

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

// Helper component for textarea fields
const TextareaField = ({ label, name, value, onChange, icon, placeholder, required }) => (
    <div>
        <label className="font-semibold text-slate-700 block mb-1">{label} {required && '*'}</label>
        <div className="relative">
            <div className="absolute left-3 top-4 w-5 h-5 text-slate-400">{icon}</div>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required={required}
                rows="5"
            />
        </div>
    </div>
);


export default UploadRecordPage;