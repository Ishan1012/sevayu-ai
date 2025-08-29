"use client";
import React from 'react';
import { 
    HeartPulse,
} from "lucide-react";
import '@/styles/LoadingPage.css';

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-emerald-50 font-sans flex flex-col items-center justify-center p-4">
            <div className="text-center">
                {/* Animated Logo */}
                <div className="relative inline-flex items-center justify-center animate-pulse-slow">
                    <HeartPulse className="w-24 h-24 text-emerald-500" />
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;