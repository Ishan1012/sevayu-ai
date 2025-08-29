"use client";
import React, { useEffect, useState } from 'react';
import { ArrowRight, Search, Tag } from "lucide-react";
import { allCategories, getFeaturedPost, getPosts } from '@/services/BlogService';
import LoadingPage from './LoadingPage';

const BlogPage = () => {
    const [featuredPost, setFeaturedPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const categories = allCategories;

    useEffect(() => {
        const data = getFeaturedPost();
        setFeaturedPost(data);
        const data2 = getPosts();
        setPosts(data2);
    }, []);

    if(featuredPost.length === 0 || posts.length === 0) {
        return <LoadingPage />;
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased mt-10">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tighter">
                        Health & Tech Insights
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        Stay informed with the latest articles on AI in healthcare, wellness tips, and platform updates from the Sevayu AI team.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Blog Posts Section */}
                    <div className="lg:col-span-2">
                        {/* Featured Post */}
                        <FeaturedPostCard post={featuredPost} />

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-8 pb-4">
                            Latest Articles
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {posts.map((post, index) => (
                                <BlogPostCard key={index} post={post} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28">
                            {/* Search Bar */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Search</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full py-2 pl-4 pr-10 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    />
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <a href="#" className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors">
                                                <Tag className="w-4 h-4 mr-3" />
                                                {cat}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

// Reusable component for a standard blog post card
const BlogPostCard = ({ post }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <p className="text-sm font-semibold text-emerald-600 mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{post.title}</h3>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>
            <a href="#" className="font-semibold text-emerald-600 inline-flex items-center">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
    </div>
);

// Reusable component for the featured blog post
const FeaturedPostCard = ({ post }) => (
     <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
        <div className="md:flex">
            <div className="md:w-1/2">
                 <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-sm font-semibold text-emerald-600 mb-2">{post.category}</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">{post.title}</h2>
                <p className="text-slate-600 mb-6">{post.excerpt}</p>
                <div className="text-sm text-slate-500 mb-6">
                    <span>By {post.author}</span> &bull; <span>{post.date}</span>
                </div>
                <a href="#" className="font-semibold text-emerald-600 inline-flex items-center self-start">
                    Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>
        </div>
    </div>
);


export default BlogPage;
