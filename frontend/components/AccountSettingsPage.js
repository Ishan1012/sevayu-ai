"use client";
import React, { useState, useEffect } from 'react';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Lock,
    Bell,
    ShieldCheck,
    Trash2,
    Eye,
    EyeOff
} from "lucide-react";
import LoadingPage from './LoadingPage';
import { getPatient } from '@/services/PaitentService';
import { getDoctor } from '@/services/DoctorService';

const AccountSettingsPage = ({ userid, isDoctor }) => {
    const [settings, setSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            let data;
            if(isDoctor) {
                data = getDoctor(Number(userid));
            } else {
                data = getPatient(userid);
            }
            setSettings(data);
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div id="accountsettings" className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
            <main className="container mx-auto px-4 sm:px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Account Settings</h1>
                    <div className="space-y-8">
                        <PersonalInformation settings={settings} setSettings={setSettings} />
                        <SecuritySettings />
                        <NotificationSettings settings={settings} setSettings={setSettings} />
                        <DeleteAccount />
                    </div>
                </div>
            </main>
        </div>
    );
};

const PersonalInformation = ({ settings, setSettings }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(settings);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setSettings(formData);
        setIsEditing(false);
        // Here you would typically make an API call to save the data
    };
    
    const handleCancel = () => {
        setFormData(settings);
        setIsEditing(false);
    };

    return (
        <SettingsCard
            icon={<User />}
            title="Personal Information"
            description="Update your personal details."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <InfoField label="Full Name" name="name" value={formData.name} onChange={handleChange} isEditing={isEditing} icon={<User className="text-slate-400" />} />
                <InfoField label="Email Address" name="email" value={formData.email} onChange={handleChange} isEditing={isEditing} icon={<Mail className="text-slate-400" />} type="email" />
                <InfoField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} isEditing={isEditing} icon={<Phone className="text-slate-400" />} type="tel" />
                <InfoField label="Address" name="address" value={formData.address} onChange={handleChange} isEditing={isEditing} icon={<MapPin className="text-slate-400" />} />
            </div>
            <div className="mt-6 flex justify-end gap-4">
                {isEditing ? (
                    <>
                        <button onClick={handleCancel} className="font-semibold bg-slate-200 text-slate-700 cursor-pointer px-6 py-2 rounded-lg hover:bg-slate-300">Cancel</button>
                        <button onClick={handleSave} className="font-semibold bg-emerald-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-emerald-700">Save Changes</button>
                    </>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="font-semibold cursor-pointer bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">Edit</button>
                )}
            </div>
        </SettingsCard>
    );
};

const InfoField = ({ label, name, value, onChange, isEditing, icon, type = "text" }) => (
    <div>
        <label className="font-semibold text-slate-700 text-sm">{label}</label>
        {isEditing ? (
            <div className="relative mt-1">
                 <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5">{icon}</div>
                 <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full py-2 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
            </div>
        ) : (
            <p className="text-slate-900 font-medium mt-1">{value}</p>
        )}
    </div>
);


const SecuritySettings = () => {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    
    return (
        <SettingsCard
            icon={<ShieldCheck />}
            title="Security"
            description="Manage your password and account security."
        >
            <div className="mt-6 space-y-4">
                <PasswordField label="Current Password" show={showCurrent} toggleShow={() => setShowCurrent(!showCurrent)} />
                <PasswordField label="New Password" show={showNew} toggleShow={() => setShowNew(!showNew)} />
            </div>
            <div className="mt-6 flex justify-end">
                <button className="font-semibold bg-emerald-600 text-white px-6 cursor-pointer py-2 rounded-lg hover:bg-emerald-700">Change Password</button>
            </div>
        </SettingsCard>
    );
};

const PasswordField = ({ label, show, toggleShow }) => (
    <div>
        <label className="font-semibold text-slate-700 text-sm">{label}</label>
        <div className="relative mt-1">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
                type={show ? "text" : "password"}
                placeholder="••••••••"
                className="w-full py-2 pl-10 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
                type="button"
                onClick={toggleShow}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
            >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    </div>
);

const NotificationSettings = ({ settings, setSettings }) => {
    const handleToggle = (key) => {
        setSettings(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: !prev.notifications[key]
            }
        }));
    };

    return (
        <SettingsCard
            icon={<Bell />}
            title="Notifications"
            description="Choose how you want to be notified."
        >
            <div id='notification' className="mt-6 space-y-4">
                <ToggleSwitch label="Appointment Reminders" enabled={settings.notifications.appointmentReminders} onToggle={() => handleToggle('appointmentReminders')} />
                <ToggleSwitch label="Health Tips & Articles" enabled={settings.notifications.healthTips} onToggle={() => handleToggle('healthTips')} />
                <ToggleSwitch label="Promotional Updates" enabled={settings.notifications.promotionalUpdates} onToggle={() => handleToggle('promotionalUpdates')} />
            </div>
        </SettingsCard>
    );
};

const ToggleSwitch = ({ label, enabled, onToggle }) => (
    <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg">
        <span className="font-semibold text-slate-800">{label}</span>
        <button
            onClick={onToggle}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${enabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
            />
        </button>
    </div>
);


const DeleteAccount = () => (
    <SettingsCard
        icon={<Trash2 />}
        title="Delete Account"
        description="Permanently delete your account and all associated data."
    >
        <div className="mt-6">
            <p className="text-slate-600 mb-4">
                This action is irreversible. Please be certain before you proceed.
            </p>
            <button className="font-semibold bg-red-500 text-white cursor-pointer px-6 py-2 rounded-lg hover:bg-red-600">
                Delete My Account
            </button>
        </div>
    </SettingsCard>
);

const SettingsCard = ({ icon, title, description, children }) => (
    <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full">
                {React.cloneElement(icon, { size: 28 })}
            </div>
            <div className="ml-4">
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                <p className="text-slate-600 mt-1">{description}</p>
            </div>
        </div>
        <div className="mt-4 border-t border-slate-200">
            {children}
        </div>
    </div>
);

export default AccountSettingsPage;