"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function SkyLimitSection() {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            className={`w-full relative flex flex-col items-center justify-center text-center bg-neutral-900 text-white px-6 py-24 overflow-hidden ${inter.className}`}
        >
            {/* Animated Floating Dots */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                    initial={{
                        x: Math.random() * 100 - 50 + '%',
                        y: Math.random() * 100 - 50 + '%',
                    }}
                    animate={{
                        y: [0, Math.random() * 30 - 15, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                    style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                />
            ))}

            {/* Subtle Moving Particles */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px, 70px 70px',
                }}
            />

            {/* Subtle Background Pattern */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Gentle Light Orbs */}
            <motion.div
                className="absolute w-40 h-40 rounded-full blur-3xl opacity-10 bg-blue-400"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    left: '20%',
                    top: '30%',
                }}
            />
            <motion.div
                className="absolute w-40 h-40 rounded-full blur-3xl opacity-10 bg-amber-400"
                animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    right: '25%',
                    bottom: '40%',
                }}
            />

            {/* Heading */}
            <motion.h1
                className="relative text-3xl md:text-5xl font-bold mb-4 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                The Sky&apos;s The Limit
            </motion.h1>

            {/* Subheading */}
            <motion.p
                className="relative text-sm md:text-lg text-gray-300 mb-8 max-w-2xl z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
                Building Your Foundation, Building Your Environment
            </motion.p>

            {/* CTA Button */}
            <motion.a
                href="/projects"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative px-6 py-3 border border-white text-sm md:text-base font-semibold tracking-wide uppercase rounded-sm overflow-hidden group z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Gradient Overlay on Hover */}
                <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-300"
                    initial={{ x: "-100%" }}
                    animate={{ x: hovered ? "0%" : "-100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Button Text */}
                <Link
                    href={"#projects"}
                >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                        View Projects
                    </span>
                </Link>
            </motion.a>

            {/* Subtle Glow Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: [
                        'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
                        'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)',
                        'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
                    ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}