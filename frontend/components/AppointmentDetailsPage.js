"use client";
import React, { useState, useEffect } from 'react';
import {
    User,
    Calendar,
    Clock,
    MapPin,
    Stethoscope,
    Phone,
    Loader2,
    CheckCircle,
    XCircle,
    RefreshCw
} from "lucide-react";
import dynamic from "next/dynamic";
import getAppointments from '@/services/AppointmentService';
import LoadingPage from './LoadingPage';

const DoctorMap = dynamic(() => import("./DoctorMap"), { ssr: false });

const AppointmentDetailsPage = () => {
    const [appointment, setAppointment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching appointment data
        setTimeout(() => {
            const data = getAppointments();
            setAppointment(data);
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!appointment) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <p className="text-xl text-slate-600">Could not load appointment details.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
            <main className="container mx-auto px-4 sm:px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Appointment Details</h1>

                    <div className="space-y-8">
                        <DoctorInfoCard doctor={appointment.doctor} />
                        <AppointmentInfoCard appointment={appointment} />
                        <ActionButtons status={appointment.status} />
                    </div>
                </div>
            </main>
        </div>
    );
};

// --- Sub-components ---

const DoctorInfoCard = ({ doctor }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <img 
                src={doctor.imageUrl} 
                alt={doctor.name} 
                className="w-32 h-32 rounded-full border-4 border-emerald-200 mb-6 sm:mb-0 sm:mr-8"
            />
            <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900">{doctor.name}</h2>
                <p className="text-xl font-semibold text-emerald-600 mt-1">{doctor.specialty}</p>
                <div className="mt-4 flex items-center justify-center sm:justify-start text-slate-600">
                    <Phone size={18} className="mr-2" />
                    <span>{doctor.phone}</span>
                </div>
            </div>
        </div>
    </div>
);

const AppointmentInfoCard = ({ appointment }) => {
    const getStatusChip = (status) => {
        switch (status) {
            case 'Confirmed':
                return <span className="flex items-center text-xs font-semibold px-3 py-1 bg-green-100 text-green-800 rounded-full"><CheckCircle size={14} className="mr-1.5" /> {status}</span>;
            case 'Completed':
                return <span className="flex items-center text-xs font-semibold px-3 py-1 bg-slate-200 text-slate-800 rounded-full"><CheckCircle size={14} className="mr-1.5" /> {status}</span>;
            case 'Cancelled':
                return <span className="flex items-center text-xs font-semibold px-3 py-1 bg-red-100 text-red-800 rounded-full"><XCircle size={14} className="mr-1.5" /> {status}</span>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Booking Information</h2>
                {getStatusChip(appointment.status)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Details */}
                <div className="space-y-6">
                    <InfoDetail icon={<User />} label="Patient Name" value={appointment.patientInfo.name} />
                    <InfoDetail icon={<Calendar />} label="Date" value={new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} />
                    <InfoDetail icon={<Clock />} label="Time" value={appointment.timeSlot} />
                    <InfoDetail icon={<Stethoscope />} label="Consultation Type" value={appointment.type} />
                </div>
                {/* Location & Instructions */}
                <div className="space-y-6">
                    <InfoDetail icon={<MapPin />} label="Location" value={appointment.doctor.address} />
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-bold text-slate-800 mb-2">Instructions/Notes</h4>
                        <p className="text-slate-600 text-sm">{appointment.patientInfo.notes}</p>
                    </div>
                </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-slate-200 rounded-lg overflow-hidden">
                 <DoctorMap doctors={[appointment.doctor]} />
            </div>
        </div>
    );
};

const InfoDetail = ({ icon, label, value }) => (
    <div>
        <h3 className="text-sm font-semibold text-slate-500 flex items-center mb-1">
            {React.cloneElement(icon, { size: 16, className: "mr-2" })}
            {label}
        </h3>
        <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
);

const ActionButtons = ({ status }) => {
    if (status !== 'Confirmed') return null;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Manage Appointment</h2>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center font-semibold bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors">
                    <RefreshCw size={18} className="mr-2" /> Reschedule
                </button>
                <button className="flex-1 flex items-center justify-center font-semibold bg-red-100 text-red-700 px-6 py-3 rounded-lg hover:bg-red-200 transition-colors">
                    <XCircle size={18} className="mr-2" /> Cancel Appointment
                </button>
            </div>
        </div>
    );
};

export default AppointmentDetailsPage;

