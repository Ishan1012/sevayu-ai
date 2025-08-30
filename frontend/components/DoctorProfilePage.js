"use client";
import React, { useState, useEffect } from 'react';
import {
    Phone,
    MapPin,
    Calendar,
    LogOut,
    ChevronRight,
    FileText,
    Settings,
    Users,
    ClipboardList
} from "lucide-react";
import { getDoctor } from '@/services/DoctorService';
import { getDoctorAppointments, getDoctorRecords, getRecords } from '@/services/AppointmentService';
import LoadingPage from './LoadingPage';

const DoctorProfilePage = () => {
    const [doctor, setDoctor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDoctorData = () => {
            try {
                const data = getDoctor(1);
                const appointment = getDoctorAppointments(1);
                const records = getDoctorRecords(1);

                const fetchedData = {
                    ...data,
                    upcomingAppointments: appointment,
                    patientRecords: records
                };

                setDoctor(fetchedData);

                setTimeout(() => {
                    setDoctor(fetchedData);
                    setIsLoading(false);
                }, 1500);
            } catch (error) {
                console.error("Error fetching doctor data:", error);
                setIsLoading(false);
            }
        };

        fetchDoctorData();
    }, []);


    if (isLoading) {
        return <LoadingPage />;
    }

    if (!doctor) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <p className="text-xl text-slate-600">Could not load doctor profile.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
            <main className="container mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Profile Card */}
                    <aside className="lg:col-span-1 space-y-8">
                        <DoctorProfileCard doctor={doctor} />
                        <button className="w-full flex items-center justify-center font-semibold bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-rose-500 hover:text-white transition-colors cursor-pointer">
                            <LogOut className="mr-2" size={20} /> Log Out
                        </button>
                    </aside>

                    {/* Right Column: Dashboard and Appointments */}
                    <div className="lg:col-span-2 space-y-8">
                        <DoctorDashboardNav />
                        <UpcomingAppointments appointments={doctor.upcomingAppointments} />
                        <PatientRecords records={doctor.patientRecords} />
                    </div>
                </div>
            </main>
        </div>
    );
};


// --- Sub-components ---

const DoctorProfileCard = ({ doctor }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <img
            src={doctor.imageUrl}
            alt="Doctor Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-emerald-200"
        />
        <h1 className="text-3xl font-bold text-slate-900">{doctor.name}</h1>
        <p className="text-emerald-600 font-semibold mt-1">{doctor.specialty}</p>

        <div className="mt-8 text-left space-y-4">
            <InfoItem icon={<FileText size={20} />} label="Qualifications" value={doctor.qualifications} />
            <InfoItem icon={<Calendar size={20} />} label="Experience" value={`${doctor.experience}`} />
            <InfoItem icon={<Phone size={20} />} label="Phone" value={doctor.phone} />
            <InfoItem icon={<MapPin size={20} />} label="Address" value={doctor.address} />
        </div>
        <button
            className="mt-8 w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
        >
            Edit Profile
        </button>
    </div>
);

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-500 rounded-full">
            {icon}
        </div>
        <div className="ml-4">
            <p className="text-sm font-semibold text-slate-500">{label}</p>
            <p className="text-md font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

const DoctorDashboardNav = () => {
    const navItems = [
        { icon: <ClipboardList />, text: "My Schedule" },
        { icon: <Users />, text: "My Patients" },
        { icon: <Settings />, text: "Account Settings" },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Doctor's Dashboard</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {navItems.map(item => (
                    <div
                        key={item.text}
                        className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg text-center cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                        <div className="text-emerald-500 mb-2">{React.cloneElement(item.icon, { size: 32, strokeWidth: 1.5 })}</div>
                        <p className="font-semibold text-sm">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const UpcomingAppointments = ({ appointments }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Appointments</h2>
        <div className="space-y-4">
            {appointments.length > 0 ? (
                appointments.map((appt, index) => <AppointmentCard key={index} appointment={appt} />)
            ) : (
                <p className="text-slate-600 text-center py-4">You have no upcoming appointments.</p>
            )}
        </div>
    </div>
);

const AppointmentCard = ({ appointment }) => (
    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer">
        <div className="flex items-center">
            <div className="bg-emerald-100 text-emerald-700 p-3 rounded-lg">
                <Calendar size={24} />
            </div>
            <div className="ml-4">
                <p className="font-bold text-slate-800">{appointment.patientInfo.name}</p>
                <p className="text-sm text-slate-600">{appointment.type}</p>
                <p className="text-sm text-slate-600 font-semibold">
                    {new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {appointment.timeSlot}
                </p>
            </div>
        </div>
        <ChevronRight className="text-slate-400" />
    </div>
);

const PatientRecords = ({ records }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Patient Records</h2>
        <div className="space-y-4">
            {records.length > 0 ? (
                records.map(record => <RecordCard key={record.id} record={record} />)
            ) : (
                <p className="text-slate-600 text-center py-4">No patient records found.</p>
            )}
        </div>
    </div>
);

const RecordCard = ({ record }) => (
    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between hover:bg-slate-100 transition-colors">
        <div className="flex items-center">
            <div className="bg-slate-200 text-slate-600 p-3 rounded-lg">
                <FileText size={24} />
            </div>
            <div className="ml-4">
                <p className="font-bold text-slate-800">{record.diagnosis}</p>
                <p className="text-sm text-slate-600">Patient: {record.patientName}</p>
                <p className="text-sm text-slate-600 font-semibold">{new Date(record.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </div>
        <a href={record.reportUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold text-emerald-600 hover:text-emerald-800">
            View Report
        </a>
    </div>
);

export default DoctorProfilePage;