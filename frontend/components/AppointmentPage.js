"use client";
import React, { useEffect, useState } from 'react';
import {
    ChevronLeft, 
    ChevronRight, 
    CheckCircle 
} from "lucide-react";
import getDoctors from '@/services/DoctorService';
import allAppointmentTypes from '@/services/getAppointmentTypes';

const AppointmentPage = () => {
    const [step, setStep] = useState(1);
    const [appointmentDetails, setAppointmentDetails] = useState({
        type: '',
        doctor: null,
        date: '',
        timeSlot: '',
        patientInfo: {
            name: '',
            age: '',
            gender: '',
            address: '',
            phone: '',
            email: '',
            notes: '',
        },
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSelect = (field, value) => {
        setAppointmentDetails(prev => ({ ...prev, [field]: value }));
    };
    
    const handlePatientInfoChange = (e) => {
        const { name, value } = e.target;
        setAppointmentDetails(prev => ({
            ...prev,
            patientInfo: { ...prev.patientInfo, [name]: value }
        }));
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">

            <main className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    {/* Step Content */}
                    {step === 1 && <Step1_AppointmentType onSelect={handleSelect} nextStep={nextStep} />}
                    {step === 2 && <Step2_ChooseDoctor onSelect={handleSelect} details={appointmentDetails} nextStep={nextStep} prevStep={prevStep} />}
                    {step === 3 && <Step3_PatientDetails onChange={handlePatientInfoChange} details={appointmentDetails.patientInfo} nextStep={nextStep} prevStep={prevStep} />}
                    {step === 4 && <Step4_Confirmation details={appointmentDetails} />}
                </div>
            </main>
        </div>
    );
};

const Step1_AppointmentType = ({ onSelect, nextStep }) => {
    const appointmentTypes = allAppointmentTypes;

    return (
        <div>
            <h2 className="text-3xl font-bold fs-4 text-slate-900 mb-6 text-center">Select Appointment Type</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {appointmentTypes.map(type => (
                    <button 
                        key={type.title}
                        onClick={() => { onSelect('type', type.title); nextStep(); }}
                        className="p-6 border-2 border-slate-200 rounded-xl text-center hover:border-emerald-500 hover:bg-emerald-50 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                    >
                        <div className="text-emerald-500 inline-block mb-4">{type.icon}</div>
                        <h3 className="font-bold text-xl text-slate-800">{type.title}</h3>
                        <p className="text-lg text-slate-600 mt-1">{type.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

const Step2_ChooseDoctor = ({ onSelect, details, nextStep, prevStep }) => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(details.doctor);
    const [selectedTime, setSelectedTime] = useState(details.timeSlot);
    const [selectedDate, setSelectedDate] = useState(details.date);

    useEffect(() => {
        const data = getDoctors();
        setDoctors(data);
    }, [])

    const handleNext = () => {
        onSelect('doctor', selectedDoctor);
        onSelect('timeSlot', selectedTime);
        onSelect('date', selectedDate);
        nextStep();
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Choose Doctor, Date & Time</h2>
            <div className="space-y-6">
                <h3 className="font-bold text-2xl text-slate-800 text-center md:text-left">Select a Doctor</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {doctors.map(doc => (
                        <div key={doc.name} onClick={() => setSelectedDoctor(doc)} className={`p-6 border-2 rounded-xl cursor-pointer text-center ${selectedDoctor?.name === doc.name ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200'}`}>
                            <h3 className="font-bold text-xl">{doc.name}</h3>
                            <p className="text-slate-600 text-sm">{doc.specialty}</p>
                            {selectedDoctor?.name === doc.name && <CheckCircle className="text-emerald-500 mx-auto mt-2" />}
                        </div>
                    ))}
                </div>
            </div>

            {selectedDoctor && (
                <div className="mt-8">
                    <h3 className="font-bold text-2xl text-slate-800 mb-4">Select Date</h3>
                     <input 
                        type="date" 
                        name="date" 
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)} 
                        className="w-xs mt-1 p-2 border border-slate-300 rounded-lg" 
                    />
                </div>
            )}

            {selectedDoctor && selectedDate && (
                <div className="mt-8">
                    <h3 className="font-bold text-2xl mb-4 text-center">Available Time Slots for {selectedDoctor.name}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {selectedDoctor.timeSlots.map(time => (
                            <button 
                                key={time} 
                                onClick={() => setSelectedTime(time)}
                                className={`px-4 py-2 rounded-full cursor-pointer font-semibold ${selectedTime === time ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="flex items-center font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"><ChevronLeft className="mr-2" /> Back</button>
                <button onClick={handleNext} disabled={!selectedDoctor || !selectedDate || !selectedTime} className="flex items-center cursor-pointer font-semibold bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 disabled:bg-slate-300">Next <ChevronRight className="ml-2" /></button>
            </div>
        </div>
    );
};

const Step3_PatientDetails = ({ onChange, details, nextStep, prevStep }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Enter Your Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="md:col-span-2">
                    <label className="font-semibold text-slate-700">Full Name</label>
                    <input type="text" name="name" value={details.name} onChange={onChange} className="w-full mt-1 p-2 border border-slate-300 rounded-lg" />
                </div>
                <div>
                    <label className="font-semibold text-slate-700">Age</label>
                    <input type="number" name="age" value={details.age} onChange={onChange} className="w-full mt-1 p-2 border border-slate-300 rounded-lg" />
                </div>
                <div>
                    <label className="font-semibold text-slate-700">Gender</label>
                    <select name="gender" value={details.gender} onChange={onChange} className="w-full mt-1 p-2 border border-slate-300 rounded-lg bg-white">
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="font-semibold text-slate-700">Address</label>
                    <textarea name="address" value={details.address} onChange={onChange} rows="5" className="w-full mt-1 p-2 border border-slate-300 rounded-lg"></textarea>
                </div>
                <div>
                    <label className="font-semibold text-slate-700">Phone Number</label>
                    <input type="tel" name="phone" value={details.phone} onChange={onChange} className="w-full mt-1 p-2 border border-slate-300 rounded-lg" />
                </div>
                 <div>
                    <label className="font-semibold text-slate-700">Email Address</label>
                    <input type="email" name="email" value={details.email} onChange={onChange} className="w-full mt-1 p-2 border border-slate-300 rounded-lg" />
                </div>
            </form>
             <div className="flex justify-between mt-10">
                <button onClick={prevStep} className="flex items-center font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"><ChevronLeft className="mr-2" /> Back</button>
                <button onClick={nextStep} className="flex items-center font-semibold bg-emerald-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-emerald-600">Confirm Appointment <ChevronRight className="ml-2" /></button>
            </div>
        </div>
    );
};

const Step4_Confirmation = ({ details }) => {
    return (
        <div className="text-center">
            <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900">Appointment Confirmed!</h2>
            <p className="text-slate-600 mt-2">A confirmation email has been sent to {details.patientInfo.email}.</p>
            
            <div className="mt-8 text-left bg-slate-100 p-6 rounded-xl max-w-md mx-auto">
                <h3 className="font-bold text-xl mb-4">Appointment Summary</h3>
                <div className="space-y-3">
                    <p><strong>Patient:</strong> {details.patientInfo.name}, {details.patientInfo.age} ({details.patientInfo.gender})</p>
                    <p><strong>Contact:</strong> {details.patientInfo.phone} | {details.patientInfo.email}</p>
                    <p><strong>Address:</strong> {details.patientInfo.address}</p>
                    <hr className="border-slate-300 my-2" />
                    <p><strong>Type:</strong> {details.type}</p>
                    <p><strong>Doctor:</strong> {details.doctor?.name} ({details.doctor?.specialty})</p>
                    <p><strong>Date & Time:</strong> {details.date} at {details.timeSlot}</p>
                </div>
            </div>
        </div>
    );
};


export default AppointmentPage;