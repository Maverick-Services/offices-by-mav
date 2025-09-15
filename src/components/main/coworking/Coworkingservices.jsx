"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Workspace Flexibility",
        desc: "Choose from hot desks, dedicated desks, or private cabins. Scale up or down easily as your business evolves without the burden of long leases.",
        img: "/coworking-flexibility.jpg",
    },
    {
        title: "Community & Networking",
        desc: "Join a thriving ecosystem of startups, freelancers, and enterprises. Build collaborations, share knowledge, and unlock new growth opportunities.",
        img: "/coworking-community.jpg",
    },
    {
        title: "Meeting & Event Spaces",
        desc: "Access fully equipped conference rooms, brainstorming lounges, and event areas designed to inspire creativity and impress clients.",
        img: "/coworking-meetings.jpg",
    },
    {
        title: "Amenities & Support",
        desc: "High-speed internet, IT support, mail handling, unlimited tea/coffee, and housekeeping — everything you need to stay productive and focused.",
        img: "/coworking-amenities.jpg",
    },
];

export default function Coworkingservices() {
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
