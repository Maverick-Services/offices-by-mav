"use client";
import { motion } from "framer-motion";
import {
    Sparkles,
    Globe2,
    Headphones,
    Users,
    Sliders,
    Gift,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const features = [
    {
        title: "Brand Image",
        desc: "A warm and professional work environment that connects you to a diverse and welcoming community.",
        icon: Sparkles,
        color: "text-purple-500",
        border: "border-purple-200",
        bgGradient: "bg-gradient-to-br from-purple-50 to-white",
    },
    {
        title: "Ecosystem",
        desc: "Explore business synergy with our powerful ecosystem and value-added partners across India.",
        icon: Globe2,
        color: "text-green-500",
        border: "border-green-200",
        bgGradient: "bg-gradient-to-br from-green-50 to-white",
    },
    {
        title: "High-Quality Service",
        desc: "Round-the-clock support personnel always ready to help at your workspace doorstep.",
        icon: Headphones,
        color: "text-orange-500",
        border: "border-orange-200",
        bgGradient: "bg-gradient-to-br from-orange-50 to-white",
    },
    {
        title: "Diverse Community",
        desc: "Join a vibrant and diverse community with members from all spheres of business.",
        icon: Users,
        color: "text-blue-500",
        border: "border-blue-200",
        bgGradient: "bg-gradient-to-br from-blue-50 to-white",
    },
    {
        title: "Flexibility and Ease",
        desc: "Customize your workspace as per business needs. Scale up or down effortlessly.",
        icon: Sliders,
        color: "text-pink-500",
        border: "border-pink-200",
        bgGradient: "bg-gradient-to-br from-pink-50 to-white",
    },
    {
        title: "Member Benefits",
        desc: "Access an exclusive network of services, offers, and benefits for your growth.",
        icon: Gift,
        color: "text-yellow-500",
        border: "border-yellow-200",
        bgGradient: "bg-gradient-to-br from-yellow-50 to-white",
    },
];

// Component for floating dots background
const FloatingDots = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-black"
                    initial={{
                        x: Math.random() * 100 + 'vw',
                        y: Math.random() * 100 + 'vh',
                    }}
                    animate={{
                        x: [
                            Math.random() * 100 + 'vw',
                            Math.random() * 100 + 'vw',
                            Math.random() * 100 + 'vw'
                        ],
                        y: [
                            Math.random() * 100 + 'vh',
                            Math.random() * 100 + 'vh',
                            Math.random() * 100 + 'vh'
                        ],
                    }}
                    transition={{
                        duration: Math.random() * 30 + 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default function WhyChooseUs() {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-0">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDAgMCBMIDYwIDAgTCA2MCA2MCIgLz48cGF0aCBkPSJNIDAgMCBMIDAgNjAgTCA2MCA2MCIgLz48L2c+PC9zdmc+')]"></div>
            </div>

            {/* Floating dots background */}
            <FloatingDots />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl font-medium text-gray-900 mb-2 tracking-tight"
                    >
                        Why Choose Us
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
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto mt-6"
                    >
                        Unlock unique advantages with our professional spaces and services.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className={`rounded-2xl border ${feature.border} bg-white shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center cursor-pointer relative overflow-hidden group`}
                        >
                            {/* Background gradient on hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.bgGradient} -z-10`}></div>

                            {/* Icon with continuous animation */}
                            <motion.div
                                className="flex justify-center mb-6"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="relative"
                                >
                                    <feature.icon className={`w-12 h-12 ${feature.color}`} />
                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 bg-current rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
                                </motion.div>
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>

                            {/* Hover effect line - more subtle */}
                            <motion.div
                                className="h-0.5 bg-gray-300 mt-4 w-0 mx-auto group-hover:w-16 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}