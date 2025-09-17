"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-16 pb-10 relative overflow-hidden">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff10,_transparent_50%)] opacity-30 animate-pulse"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left - Logo & About */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center items-start"
                >
                    <Image
                        src="/logo-white.png" // 🔥 replace with your logo file (white/transparent)
                        alt="OfficesByMav Logo"
                        width={120}
                        height={50}
                        className="aspect-auto mb-4"
                    />
                    <p className="text-sm text-gray-400 max-w-xs">
                        Delivering premium{" "}
                        <span className="text-white">real estate</span>,{" "}
                        <span className="text-white">coworking</span>, and{" "}
                        <span className="text-white">corporate services</span> across the
                        globe.
                    </p>
                </motion.div>

                {/* Middle - Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <h3 className="text-white font-semibold mb-4 text-lg">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            { href: "/", label: "Real Estate" },
                            { href: "/virtual-office", label: "Virtual Office" },
                            { href: "/corporate-services", label: "Corporate Services" },
                            { href: "/coworking", label: "Coworking Spaces" },
                            { href: "/contact", label: "Contact" },
                        ].map((link, idx) => (
                            <motion.li
                                key={idx}
                                whileHover={{ x: 5, color: "#fff" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a
                                    href={link.href}
                                    className="transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right - Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-white font-semibold mb-4 text-lg">
                        Get in Touch
                    </h3>
                    <div className="flex items-center gap-2 mb-3 group">
                        <Mail className="w-4 h-4 text-white group-hover:text-gray-300 transition-colors" />
                        <a
                            href="mailto:info@officesbymav.com"
                            className="hover:text-white text-sm transition-colors duration-200"
                        >
                            info@officesbymav.com
                        </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm group">
                        <MapPin className="w-4 h-4 text-white mt-1 group-hover:text-gray-300 transition-colors" />
                        <p className="text-gray-400 group-hover:text-white transition-colors">
                            US | Australia | India | UAE
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                &copy; {2024} Created by Maverick.
            </motion.div>
        </footer>
    );
}
