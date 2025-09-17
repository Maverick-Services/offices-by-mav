"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function HeroSection() {
    const fullText = "Redefining Work. Redefining Prestige.";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 100; // Faster deleting

        if (!isDeleting && index === fullText.length) {
            // Pause before deleting
            typingSpeed = 1500;
            setTimeout(() => setIsDeleting(true), typingSpeed);
        } else if (isDeleting && index === 0) {
            // Pause before retyping
            typingSpeed = 1000;
            setTimeout(() => setIsDeleting(false), typingSpeed);
        } else {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.substring(0, index));
                setIndex((prev) => prev + (isDeleting ? -1 : 1));
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [index, isDeleting, fullText]);

    return (
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/hero-bg-optimized.mp4" // Replace with your video path
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />

            {/* Overlay Content */}
            <div
                className={`relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 ${inter.className}`}
            >
                {/* Typing Heading */}
                <h1 className="text-2xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </h1>

                {/* Subtext */}
                <motion.p
                    className="max-w-2xl text-base md:text-lg text-gray-200 mb-8 drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    Experience world-class offices and bespoke corporate spaces in the most iconic locations.
                </motion.p>

                {/* CTA Button with spreading background */}
                <a
                    href="/contact"
                    className="relative inline-block px-6 py-3 font-medium rounded-full text-white border border-white overflow-hidden group"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                        Get Started
                    </span>
                </a>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0" />
        </section>
    );
}
