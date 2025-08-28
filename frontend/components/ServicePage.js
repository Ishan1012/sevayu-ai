"use client";
import React from 'react';
import {
    Activity,
    Scan,
    Users,
    BrainCircuit,
    Cloud,
    Lock,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import { useRouter } from 'next/navigation';

const ServicePage = () => {
    const router = useRouter();
    const openConsultPage = () => {
        router.push('/consult');
    };
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
            <main>
                {/* Core Services Section */}
                <section id="core-services" className="py-20 md:py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                What We Offer
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                From initial symptoms to specialist care, our platform supports you at every step.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceCard
                                icon={<Activity className="w-10 h-10 text-emerald-500" />}
                                title="AI-Powered Symptom Analysis"
                                description="Describe your symptoms using text or voice. Our AI analyzes the information to predict potential conditions and suggest the next steps."
                            />
                            <ServiceCard
                                icon={<Scan className="w-10 h-10 text-emerald-500" />}
                                title="Medical Image Interpretation"
                                description="Our computer vision models analyze X-rays, MRIs, and other medical images to provide enhanced diagnostic accuracy and insights."
                            />
                            <ServiceCard
                                icon={<Users className="w-10 h-10 text-emerald-500" />}
                                title="Specialist Recommendations"
                                description="Based on the AI analysis, we connect you with the most suitable doctors and specialists in your local area using geolocation."
                            />
                        </div>
                    </div>
                </section>

                {/* Technology & Security Section */}
                <section id="technology" className="py-20 md:py-24 bg-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Advanced, Secure & Reliable
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                Built on a foundation of trust, our platform uses state-of-the-art technology to protect your data and deliver accurate results.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="hidden md:block rounded-xl overflow-hidden shadow-lg">
                                <img 
                                    src="https://placehold.co/600x400/1E293B/A7F3D0?text=Technology" 
                                    alt="Abstract technology graphic"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="space-y-8">
                                <TechFeature
                                    icon={<BrainCircuit className="w-8 h-8 text-emerald-600" />}
                                    title="Multi-Modal AI Engine"
                                    description="Our system continuously learns from both text and image data, improving its accuracy and adapting to new medical information over time."
                                />
                                <TechFeature
                                    icon={<Lock className="w-8 h-8 text-emerald-600" />}
                                    title="End-to-End Encryption"
                                    description="We prioritize your privacy. All data is secured with robust, end-to-end encryption, ensuring your personal health information remains confidential."
                                />
                                <TechFeature
                                    icon={<Cloud className="w-8 h-8 text-emerald-600" />}
                                    title="Scalable Cloud Infrastructure"
                                    description="Our reliable cloud-based platform ensures high availability and a seamless user experience, accessible anytime, anywhere."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Freemium Model Section */}
                <section id="pricing" className="py-20 md:py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="bg-emerald-600 text-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Accessible to Everyone
                            </h2>
                            <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
                                We believe in healthcare for all. Sevayu AI operates on a freemium model, providing essential services for free to support underserved communities, with premium features available for advanced needs.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <div className="bg-white text-slate-800 rounded-lg p-6 text-left max-w-md">
                                    <h4 className="text-xl font-bold mb-4">Core Features (Free)</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> AI Symptom Checker</li>
                                        <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> Basic Doctor Recommendations</li>
                                        <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3" /> Preventive Health Tips</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

// Reusable component for service cards
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
        <div className="inline-block bg-emerald-100 p-4 rounded-full mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-lg">{description}</p>
    </div>
);

// Reusable component for technology features
const TechFeature = ({ icon, title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center">
                {icon}
            </div>
        </div>
        <div className="ml-5">
            <h4 className="text-xl font-bold text-slate-900">{title}</h4>
            <p className="mt-1 text-slate-600">{description}</p>
        </div>
    </div>
);

export default ServicePage;
