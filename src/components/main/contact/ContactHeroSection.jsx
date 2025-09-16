"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Mail, Phone, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function ContactHeroSection() {
    return (
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute -inset-[50%] bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)] opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90" />
            </div>

            {/* Content */}
            <div className={`relative z-10 text-center px-6 ${inter.className}`}>
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold mb-6"
                >
                    Let’s Connect
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    Have questions, ideas, or want to collaborate?
                    Reach out to us and we’ll get back to you shortly.
                </motion.p>

                {/* Contact Info Quick Links */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200"
                >
                    <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-white" />
                        <span>info@yourcompany.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-white" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-white" />
                        <span>New Delhi, India</span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
