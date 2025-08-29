const featuredPost = {
    imageUrl: "https://placehold.co/800x400/A7F3D0/1E293B?text=Health+Insights",
    category: "Wellness",
    title: "The Future of Preventive Healthcare with AI",
    excerpt: "Discover how artificial intelligence is revolutionizing our ability to predict and prevent chronic illnesses before they become a problem.",
    author: "Dr. Alisha Verma",
    date: "August 22, 2025",
};

const posts = [
    {
        imageUrl: "https://placehold.co/400x250/ECFDF5/10B981?text=AI+in+Medicine",
        category: "Technology",
        title: "Understanding Multi-Modal AI in Diagnostics",
        excerpt: "A deep dive into how combining text and image analysis leads to more accurate medical diagnoses.",
    },
    {
        imageUrl: "https://placehold.co/400x250/ECFDF5/10B981?text=Data+Security",
        category: "Security",
        title: "Why Your Health Data is Safer Than Ever",
        excerpt: "Exploring the robust encryption and security measures that protect your sensitive information on modern health platforms.",
    },
    {
        imageUrl: "https://placehold.co/400x250/ECFDF5/10B981?text=Healthy+Living",
        category: "Lifestyle",
        title: "5 Simple Lifestyle Changes for a Healthier Heart",
        excerpt: "Small, actionable tips backed by science to improve your cardiovascular health and overall well-being.",
    },
];

const allCategories = ["Wellness", "Technology", "Security", "Lifestyle", "Medical Insights"];

const getFeaturedPost = () => {
    return featuredPost;
}

const getPosts = () => {
    return posts;
};

export { getFeaturedPost, getPosts, allCategories };