"use client";
import React, { useState } from 'react';
import { 
    HeartPulse,
    User,
    Stethoscope,
    ArrowRight
} from "lucide-react";
import RegisterPage from './RegisterPage';
import DoctorRegistrationPage from './DoctorRegitstrationPage';

const RoleSelectionPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    if (selectedRole === 'doctor') {
        return <DoctorRegistrationPage />;
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col items-center justify-center p-4 mt-15">
            <div className="text-center mb-12">
                <HeartPulse className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tighter">
                    Join Sevayu AI
                </h1>
                <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                    Please select your role to get started with a personalized experience.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                {/* Patient Card */}
                <div className="flex-1 group">
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col text-center items-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-emerald-500">
                        <div className="bg-emerald-100 p-4 rounded-full mb-6">
                            <User className="w-12 h-12 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">I am a Patient</h2>
                        <p className="text-slate-600 text-lg mb-8 flex-grow">
                            Get AI-powered symptom analysis, find specialists, and manage your health journey.
                        </p>
                        <button 
                            className="w-full inline-flex cursor-pointer items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition-colors"
                            onClick={() => setSelectedRole('patient')}
                        >
                            Continue as a Patient
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Doctor Card */}
                <div className="flex-1 group">
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col text-center items-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-blue-500">
                        <div className="bg-blue-100 p-4 rounded-full mb-6">
                            <Stethoscope className="w-12 h-12 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">I am a Doctor</h2>
                        <p className="text-slate-600 text-lg mb-8 flex-grow">
                            Join our network of specialists, manage appointments, and access AI-assisted diagnostic tools.
                        </p>
                        <button 
                            className="w-full inline-flex cursor-pointer items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors" 
                            onClick={() => setSelectedRole('doctor')}
                        >
                            Continue as a Doctor
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionPage;