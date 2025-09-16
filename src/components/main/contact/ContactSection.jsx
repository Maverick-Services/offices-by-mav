"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Left: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-[Inter]">
                        Let’s Connect
                    </h2>
                    <p className="text-lg text-gray-300 max-w-md">
                        Have questions or want to explore our services? Get in touch with us
                        today — we’ll get back within 24 hours.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <a href="mailto:info@officesbymav.com" className="hover:text-gray-100">
                                info@officesbymav.com
                            </a>
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <span>+91 98765 43210</span>
                        </div> */}
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <span>UAE | INDIA | US</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full"
                >
                    <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                    <ContactForm />
                </motion.div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>
        </section>
    );
}
