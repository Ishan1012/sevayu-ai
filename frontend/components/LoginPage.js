"use client";
import React from 'react';
import {
    HeartPulse,
    Mail,
    Lock
} from "lucide-react";
import Link from 'next/link';

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.861 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex items-center justify-center p-4 m-15">
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
                    {/* Form Section */}
                    <div className="p-8 md:p-12 space-y-6">
                        <div className="flex items-center gap-2 mb-8">
                            <HeartPulse className="h-8 w-8 text-emerald-500" />
                            <h1 className="text-2xl font-bold text-slate-900">Sevayu AI</h1>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
                        <p className="text-slate-600 mb-8">Sign in to continue to your health dashboard.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="font-semibold text-slate-700">Email Address</label>
                                <div className="relative mt-1">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label className="font-semibold text-slate-700">Password</label>
                                    <a href="#" className="text-sm font-semibold text-emerald-600 hover:underline">Forgot Password?</a>
                                </div>
                                <div className="relative mt-1">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full py-3 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="flex items-center">
                            <div className="flex-grow border-t border-slate-300"></div>
                            <span className="mx-4 text-slate-500 font-semibold">OR</span>
                            <div className="flex-grow border-t border-slate-300"></div>
                        </div>
                        <button
                            type="button"
                            className="w-full flex items-center justify-center bg-white text-slate-700 font-semibold py-3 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                        >
                            <GoogleIcon />
                            Sign in with Google
                        </button>

                        <p className="text-center text-slate-600 mt-8">
                            Don&apos;t have an account? <Link href="/register" className="font-semibold text-emerald-600 hover:underline">Sign Up</Link>
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="hidden md:block">
                        <img
                            src="./images/login.jpg"
                            alt="login image"
                            className="w-full h-full object-cover opacity-50"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;