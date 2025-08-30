"use client";
import React, { useState, useEffect } from 'react';
import {
    User,
    Phone,
    MapPin,
    Calendar,
    LogOut,
    ChevronRight,
    FileText,
    Settings,
    Bell,
    Download
} from "lucide-react";
import LoadingPage from './LoadingPage';
import { useRouter } from 'next/navigation';
import { getPatient } from '@/services/PaitentService';
import getAppointments from '@/services/AppointmentService';
import getDoctors, { getDoctor } from '@/services/DoctorService';

const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = () => {
            let fetchedData = getPatient('123');
            fetchedData.upcomingAppointments = fetchedData.upcomingAppointments.map(item => ({
                ...item,
                doctor: getDoctor(item.doctorid)
            }));
            fetchedData.medicalRecords = fetchedData.medicalRecords.map(item => ({
                ...item,
                doctor: getDoctor(item.doctorid)
            }));
            console.log(fetchedData);

            setTimeout(() => {
                setUser(fetchedData);
                setIsLoading(false);
            }, 1500);
        };

        fetchUserData();
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <p className="text-xl text-slate-600">Could not load user profile.</p>
            </div>
        )
    }


    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
            <main className="container mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Profile Card */}
                    <aside className="lg:col-span-1 space-y-8">
                        <ProfileCard user={user} />
                        <button className="w-full flex items-center justify-center font-semibold bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-rose-500 hover:text-white transition-colors cursor-pointer">
                            <LogOut className="mr-2" size={20} /> Log Out
                        </button>
                    </aside>

                    {/* Right Column: Dashboard and Appointments */}
                    <div className="lg:col-span-2 space-y-8">
                        <DashboardNav user={user} />
                        <UpcomingAppointments appointments={user.upcomingAppointments} />
                        <MedicalRecords records={user.medicalRecords} />
                    </div>
                </div>
            </main>
        </div>
    );
};

const ProfileCard = ({ user }) => {
    const router = useRouter();
    const openSettings = () => {
        router.push(`/settings?id=${user.id}`);
    };
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <img
                src={user.profile}
                alt="User Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-emerald-200"
            />
            <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
            <p className="text-slate-600 mt-1">{user.email}</p>

            <div className="mt-8 text-left space-y-4">
                <InfoItem icon={<User size={20} />} label="Gender" value={user.gender} />
                <InfoItem icon={<Calendar size={20} />} label="Age" value={user.age} />
                <InfoItem icon={<Phone size={20} />} label="Phone" value={user.phone} />
                <InfoItem icon={<MapPin size={20} />} label="Address" value={user.address} />
            </div>
            <button
                onClick={openSettings}
                className="mt-8 w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
                Edit Profile
            </button>
        </div>
    );
}

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

const DashboardNav = ({ user }) => {
    const router = useRouter();
    const navItems = [
        { icon: <FileText />, text: "Medical Records" },
        { icon: <Bell />, text: "Notifications" },
        { icon: <Settings />, text: "Account Settings" },
    ];

    const handleClick = (name) => {
        if (name === "Account Settings") {
            router.push(`/settings?id=${user.id}`);
        } else if (name === "Notifications") {
            router.push(`/settings?id=${user.id}`)
        } else if (name === "Medical Records") {
            router.push('/profile#records');
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Dashboard</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {navItems.map(item => (
                    <div
                        key={item.text}
                        onClick={() => handleClick(item.text)}
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

const UpcomingAppointments = ({ appointments }) => {
    return (
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
}

const AppointmentCard = ({ appointment }) => {
    const router = useRouter();
    const openAppointment = () => {
        router.push(`/appointments?id=${appointment.id}`);
    };
    return (
        <div onClick={openAppointment} className="bg-slate-50 p-4 rounded-lg flex items-center justify-between hover:bg-emerald-50 transition-colors cursor-pointer">
            <div className="flex items-center">
                <div className="bg-emerald-100 text-emerald-700 p-3 rounded-lg">
                    <Calendar size={24} />
                </div>
                <div className="ml-4">
                    <p className="font-bold text-slate-800">Dr. {appointment.doctor.name}</p>
                    <p className="text-sm text-slate-600">{appointment.doctor.specialty}</p>
                    <p className="text-sm text-slate-600 font-semibold">{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {appointment.timeSlot}</p>
                </div>
            </div>
            <ChevronRight className="text-slate-400" />
        </div>
    );
}

const MedicalRecords = ({ records }) => (
    <div id="records" className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Medical Records</h2>
        <div className="space-y-4">
            {records.length > 0 ? (
                records.map((record, index) => <RecordCard key={index} record={record} />)
            ) : (
                <p className="text-slate-600 text-center py-4">You have no past medical records.</p>
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
                <p className="text-sm text-slate-600">with Dr. {record.doctor.name} ({record.doctor.specialty})</p>
                <p className="text-sm text-slate-600 font-semibold">{new Date(record.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </div>
        <a href={record.reportUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold text-emerald-600 hover:text-emerald-800">
            <Download size={18} className="mr-2" />
            View Report
        </a>
    </div>
);


export default UserProfilePage;