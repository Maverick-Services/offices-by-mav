// components/FeaturedProperties.js
"use client"

import { motion } from "framer-motion";

const properties = [
    {
        title: "UAE",
        location: "Dubai, Sharjah",
        image: "/uae.avif",
        featured: true,
    },
    {
        title: "India",
        location: "Delhi NCR",
        image: "/india.webp",
        featured: true,
    },
    // {
    //     title: "Australia",
    //     count: 5,
    //     image: "/australia.webp",
    //     featured: true,
    // },
    {
        title: "USA",
        location: "California, New York",
        image: "/usa.webp",
        featured: true,
    },
    // {
    //     title: "Commercial Space",
    //     count: 3,
    //     image: "/featured-6.jpeg",
    //     featured: true,
    // },
];

export default function FeaturedProperties() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-gray-900 mb-2 tracking-tight"
                    >
                        Premium Locations
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-gray-800 mx-auto mb-4"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-lg font-light max-w-2xl mx-auto"
                    >
                        Premium investments showcasing exceptional quality and strategic locations
                    </motion.p>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {properties.map((property, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className={`group relative overflow-hidden cursor-pointer`}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Featured Badge */}
                                {property.featured && (
                                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-bold text-gray-900 tracking-wide uppercase duration-300">
                                        {property?.title}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-1 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {property.location}
                                </h3>
                            </div>

                            {/* Featured Badge */}
                            {/* {property.featured && (
                                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-bold text-gray-900 tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {property?.title}
                                    </div>
                                )}
                            </div> */}

                            {/* Bottom Border Indicator */}
                            <div className="w-full h-1 bg-gray-300 mt-4 group-hover:bg-gray-800 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}