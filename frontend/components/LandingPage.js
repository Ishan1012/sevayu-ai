"use client";
import React, { useEffect } from 'react'
import {
    Stethoscope,
    MapPin,
    HeartPulse,
    BrainCircuit,
    ShieldCheck,
    DollarSign,
    ChevronRight,
} from "lucide-react";
import '@/styles/LandingPage.css';
import { useRouter } from 'next/navigation';

function LandingPage() {
    const router = useRouter();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => observer.observe(el));

        return () => elementsToAnimate.forEach(el => observer.unobserve(el));
    }, []);

    const openConsultPage = () => {
        router.push('/consult');
    };

    return (
        <div className="min-h-screen bg-emerald-50 font-inter text-gray-800 antialiased flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12 mt-10">
            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center w-full min-h-[calc(100vh-180px)]">
                <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 lg:p-20 text-center transition-all duration-500 ease-in-out hover:shadow-2xl relative overflow-hidden">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-on-scroll animate-fade-in">
                        Your <span className="text-emerald-500">Intelligent</span> Health
                        Companion.
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-on-scroll animate-fade-in delay-100">
                        Sevayu AI offers AI-powered symptom analysis, specialist
                        recommendations, and personalized health insights—all in one unified
                        platform.
                    </p>
                    <button
                        className="inline-flex items-center justify-center px-10 py-5 bg-emerald-600 text-white font-semibold text-lg rounded-full shadow-xl hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-on-scroll animate-pop-in delay-200 cursor-pointer"
                        onClick={openConsultPage}
                        aria-label="Start Your Health Journey"
                    >
                        Start Your Health Journey
                        <ChevronRight className="ml-3 w-6 h-6" />
                    </button>

                    {/* Background Shapes */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-30">
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 1440 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-300 0C-100 200 100 400 300 350C500 300 700 450 900 400C1100 350 1300 500 1600 400V0H-300Z"
                                fill="url(#lp_paint0_linear)"
                                style={{
                                    transform: "rotate(10deg) translate(50px, -50px)",
                                    transformOrigin: "center center",
                                }}
                            />
                            <path
                                d="M0 600C200 550 400 650 600 600C800 550 1000 650 1200 600C1400 550 1600 700 1600 700H0V600Z"
                                fill="url(#lp_paint1_linear)"
                                style={{
                                    transform: "rotate(-5deg) translate(-30px, 30px)",
                                    transformOrigin: "center center",
                                }}
                            />
                            <defs>
                                <linearGradient
                                    id="lp_paint0_linear"
                                    x1="650"
                                    y1="0"
                                    x2="650"
                                    y2="500"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#A7F3D0" />
                                    <stop offset="1" stopColor="#34D399" />
                                </linearGradient>
                                <linearGradient
                                    id="lp_paint1_linear"
                                    x1="650"
                                    y1="500"
                                    x2="650"
                                    y2="800"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#34D399" />
                                    <stop offset="1" stopColor="#059669" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </main>

            {/* Features */}
            <section id="features" className="w-full max-w-5xl py-20 md:py-24 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-12 animate-on-scroll animate-fade-in">
                    How Sevayu AI Helps You
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-on-scroll animate-slide-in-up delay-200">
                        <Stethoscope className="w-16 h-16 text-emerald-500 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                        <h4 className="text-2xl font-semibold text-gray-900 mb-3">Symptom Analysis</h4>
                        <p className="text-gray-600 text-lg">
                            Understand your health better with AI-powered insights, suggesting relevant medical departments.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-on-scroll animate-slide-in-up delay-300">
                        <MapPin className="w-16 h-16 text-emerald-500 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                        <h4 className="text-2xl font-semibold text-gray-900 mb-3">Find Specialists</h4>
                        <p className="text-gray-600 text-lg">
                            Connect with nearby doctors and specialists based on your needs.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-on-scroll animate-slide-in-up delay-400">
                        <HeartPulse className="w-16 h-16 text-emerald-500 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                        <h4 className="text-2xl font-semibold text-gray-900 mb-3">Daily Wellness</h4>
                        <p className="text-gray-600 text-lg">
                            Receive encouraging, personalized tips for a healthier lifestyle.
                        </p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section
                id="about"
                className="w-full max-w-5xl py-20 md:py-24 text-center bg-emerald-100 rounded-3xl shadow-inner p-8 sm:p-12 md:p-16"
            >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 animate-on-scroll animate-fade-in">Why Choose Sevayu AI?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-start text-left bg-white p-6 rounded-xl shadow-md animate-on-scroll animate-slide-in-up delay-300">
                        <BrainCircuit className="w-10 h-10 text-emerald-600 mr-4 flex-shrink-0" />
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Multi-modal AI</h4>
                            <p className="text-gray-600">Advanced AI combines text and imaging (future) for deeper insights.</p>
                        </div>
                    </div>
                    <div className="flex items-start text-left bg-white p-6 rounded-xl shadow-md animate-on-scroll animate-slide-in-up delay-400">
                        <ShieldCheck className="w-10 h-10 text-emerald-600 mr-4 flex-shrink-0" />
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h4>
                            <p className="text-gray-600">Your health data is protected with robust encryption.</p>
                        </div>
                    </div>
                    <div className="flex items-start text-left bg-white p-6 rounded-xl shadow-md animate-on-scroll animate-slide-in-up delay-500">
                        <DollarSign className="w-10 h-10 text-emerald-600 mr-4 flex-shrink-0" />
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Accessible & Affordable</h4>
                            <p className="text-gray-600">Designed with a freemium model for wider reach.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full max-w-4xl py-20 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 animate-on-scroll animate-fade-in">
                    Ready to experience smarter healthcare?
                </h3>
                <button
                    className="inline-flex items-center justify-center px-10 py-5 bg-emerald-600 text-white font-semibold text-lg rounded-full shadow-xl hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-on-scroll animate-pop-in"
                    onClick={openConsultPage}
                    aria-label="Explore Sevayu AI Now"
                >
                    Explore Sevayu AI Now
                    <ChevronRight className="ml-3 w-6 h-6" />
                </button>
            </section>
        </div>
    )
}

export default LandingPage