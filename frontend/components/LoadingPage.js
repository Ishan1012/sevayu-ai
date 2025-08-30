"use client";
import React from 'react';
import {
    HeartPulse,
} from "lucide-react";
import '@/styles/LoadingPage.css';

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            {/* A simple loader */}
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500"></div>
        </div>
    );
};

export default LoadingPage;