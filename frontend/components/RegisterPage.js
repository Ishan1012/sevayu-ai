"use client";
import React, { useState } from 'react';
import { 
    HeartPulse,
    Mail,
    Lock,
    User,
    Eye,
    EyeOff
} from "lucide-react";
import Link from 'next/link';
import RoleSelectionPage from './RoleSelectionPage';

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.861 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [roleSelect, setRoleSelect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!fullName || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        // // Check if user already exists (simulation)
        // const userExists = getDoctors().some(doctor => doctor.email === email);
        // if (userExists) {
        //     setError("An account with this email already exists.");
        //     return;
        // }

        // In Link real app, you would now send the data to your backend to be hashed and stored.
        // alert(`Registration successful for ${fullName}!`);
        // You could redirect the user to the login page or Link dashboard
        setRoleSelect(true);
    };

    if(roleSelect) {
        return <RoleSelectionPage />;
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex items-center justify-center p-4 m-15">
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
                    {/* Form Section */}
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-2 mb-8">
                            <HeartPulse className="h-8 w-8 text-emerald-500" />
                            <h1 className="text-2xl font-bold text-slate-900">Sevayu AI</h1>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h2>
                        <p className="text-slate-600 mb-8">Join us to take control of your health journey.</p>

                        <div className="space-y-6">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="font-semibold text-slate-700">Full Name</label>
                                    <div className="relative mt-1">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-slate-700">Email Address</label>
                                    <div className="relative mt-1">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-slate-700">Password</label>
                                    <div className="relative mt-1">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full py-3 pl-10 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 hover:text-emerald-600"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-slate-700">Confirm Password</label>
                                    <div className="relative mt-1">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full py-3 pl-10 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                        />
                                         <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 hover:text-emerald-600"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                                        </button>
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 text-white cursor-pointer font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                                >
                                    Create Account
                                </button>
                            </form>
                            <div className="flex items-center">
                                <div className="flex-grow border-t border-slate-300"></div>
                                <span className="mx-4 text-slate-500 font-semibold">OR</span>
                                <div className="flex-grow border-t border-slate-300"></div>
                            </div>
                            <button
                                type="button"
                                className="w-full flex items-center cursor-pointer justify-center bg-white text-slate-700 font-semibold py-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                            >
                                <GoogleIcon />
                                Sign up with Google
                            </button>
                        </div>

                        <p className="text-center text-slate-600 mt-8">
                            Already have an account? <Link href="/login" className="font-semibold text-emerald-600 hover:underline">Sign In</Link>
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="hidden md:block">
                        <img
                            src="./images/register.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover opacity-50"
                            loading='lazy'
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/10B981/FFFFFF?text=Image+Not+Found'; }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;