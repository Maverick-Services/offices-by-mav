"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Monthly Guest Houses",
        desc: "Premium guest houses with annual contracts and monthly billing. Executive and luxury options tailored to your needs, considering neighborhood, quality, and facilities. Customized pricing for every client.",
        img: "/guesthouse-1.webp",
    },
    {
        title: "Location Management",
        desc: "We find, set up, and manage your corporate guest houses in prime locations. From property setup and furnishing to daily operations, we ensure a seamless experience for your executives and guests.",
        img: "/guesthouse-location.webp",
    },
    {
        title: "Visitor Handling",
        desc: "From guest reception to daily services, we handle food, housekeeping, linens, and overall guest management. Whether in Delhi, Gurgaon, or beyond, we ensure every visitor has a comfortable stay.",
        img: "/guesthouse-visitors.webp",
    },
    {
        title: "Cleaning & Hygiene Management",
        desc: "Complete upkeep of bathrooms, rooms, windows, doors, and common areas. Regular pest control, polished interiors, and spotless maintenance ensure dignity and comfort for your corporate guests.",
        img: "/guesthouse-cleaning.webp",
    },
];

export default function CorporateGuestHouse() {
    return (
        <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
                >
                    Corporate Guest House Services
                </motion.h2>

                <div className="space-y-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="md:w-1/2">
                                <motion.img
                                    src={service.img}
                                    alt={service.title}
                                    className="rounded-2xl shadow-lg w-10/12 h-72 object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 150 }}
                                />
                            </div>

                            {/* Text */}
                            <div className="md:w-1/2 text-white">
                                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
