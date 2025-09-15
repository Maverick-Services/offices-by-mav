"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Discover() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-30"
            style={{ backgroundImage: "url('/upcoming-2.jpeg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto text-center px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Inter]"
                >
                    Empower Your Real Estate Office
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/80 mb-10 font-[Inter]"
                >
                    Streamline property management, enhance client engagement, and grow your office with our tailored real estate solutions. Trusted by offices nationwide.
                </motion.p>

                {/* Button */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="inline-flex items-center gap-2 bg-gray-50 text-black px-8 py-4 rounded-full font-medium shadow-md hover:bg-gray-200 transition font-[Inter]"
                >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                </motion.a>
            </div>
        </section>
    );
}
