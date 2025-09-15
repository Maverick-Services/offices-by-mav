"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function CoworkingHeroSection() {
    const texts = [
        "Work. Connect. Grow.",
        "Flexible Spaces for Modern Teams.",
        "Where Ideas Meet Opportunities.",
    ];
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === texts[index].length) {
            typingSpeed = 1500;
            setTimeout(() => setIsDeleting(true), typingSpeed);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        } else {
            const timeout = setTimeout(() => {
                setDisplayText(texts[index].substring(0, charIndex));
                setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, isDeleting, index, texts]);

    return (
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
            {/* Background Image */}
            <img
                src="/coworking-bg.jpeg" // 🔥 Replace with a coworking/office interior image
                alt="Coworking Space"
                className="absolute top-0 left-0 w-full h-full object-cover"
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
                    Discover a dynamic coworking environment built for{" "}
                    <span className="font-semibold">startups, freelancers, and enterprises</span>.
                    From flexible desks to premium private offices — enjoy{" "}
                    <span className="font-semibold">networking, collaboration, and productivity</span>
                    all under one roof.
                </motion.p>

                {/* CTA Button */}
                <a
                    href="/plans"
                    className="relative inline-block px-6 py-3 font-medium rounded-full text-white border border-white overflow-hidden group"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                        Explore Plans
                    </span>
                </a>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 z-0" />
        </section>
    );
}
