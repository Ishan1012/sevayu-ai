"use client";
import React from 'react';
import { 
    Heart, 
    BrainCircuit, 
    ShieldCheck, 
    Users,
    Target
} from "lucide-react";
import ServicePage from './ServicePage';

// This component can be used as a new page in a Next.js or React application.
// It provides information about the mission, vision, and team behind Sevayu AI.

const AboutPage = () => {
    const teamMembers = [
        { name: "Ishan Dwivedi", imageUrl: "https://placehold.co/128x128/E0E7FF/4F46E5?text=ID" },
        { name: "Suyash Sharma", imageUrl: "https://placehold.co/128x128/E0E7FF/4F46E5?text=SS" },
        { name: "Nitin Shukla", imageUrl: "https://placehold.co/128x128/E0E7FF/4F46E5?text=NS" },
        { name: "Amit Singh Gautam", imageUrl: "https://placehold.co/128x128/E0E7FF/4F46E5?text=AG" },
        { name: "Pratyush", imageUrl: "https://placehold.co/128x128/E0E7FF/4F46E5?text=P" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
            <ServicePage />

            <main className="container mx-auto px-6 py-16">
                {/* Mission and Vision Section */}
                <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1">
                        <div className="mb-8">
                            <div className="flex items-center mb-3">
                                <Target className="w-8 h-8 text-emerald-600 mr-3" />
                                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                            </div>
                            <p className="text-slate-600 text-lg">
                                To solve the challenges of timely and accurate medical support. We aim to eliminate the confusion caused by overlapping symptoms and the fragmentation of healthcare tools, reducing misdiagnosis, delayed treatments, and preventable complications.
                            </p>
                        </div>
                        <div>
                             <div className="flex items-center mb-3">
                                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                            </div>
                            <p className="text-slate-600 text-lg">
                                We envision a world where everyone, especially those in underserved communities, has access to intelligent medical guidance. By creating a single, unified platform for symptom checking, diagnosis, and preventive care, we strive to improve health engagement and outcomes globally.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src="https://placehold.co/600x600/ECFDF5/10B981?text=Sevayu+AI" alt="Sevayu AI Mission" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                    </div>
                </section>

                {/* Our Technology Section */}
                <section className="text-center max-w-4xl mx-auto mb-24">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                        The Technology Behind Our Vision
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
                        Sevayu AI is built on a unique multi-modal AI engine that integrates symptom analysis, image-based diagnostics, and preventive health insights into one seamless platform.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TechCard 
                            icon={<BrainCircuit size={32} />}
                            title="Multi-Modal AI"
                            description="Combines text and medical imaging analysis for higher diagnostic accuracy."
                        />
                        <TechCard 
                            icon={<ShieldCheck size={32} />}
                            title="Secure & Private"
                            description="Your health data is protected with robust, end-to-end encryption."
                        />
                         <TechCard 
                            icon={<Users size={32} />}
                            title="Continuous Learning"
                            description="Our AI continuously adapts and improves its accuracy as it learns from new data."
                        />
                    </div>
                </section>

                {/* Team Section */}
                <section className="text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-12">
                        Meet the Innovators
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <img 
                                    src={member.imageUrl} 
                                    alt={`Photo of ${member.name}`} 
                                    className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
                                />
                                <h4 className="font-bold text-lg text-slate-800">{member.name}</h4>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

const TechCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-emerald-500 inline-block bg-emerald-100 p-3 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="font-bold text-xl text-slate-800">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
    </div>
);

export default AboutPage;
