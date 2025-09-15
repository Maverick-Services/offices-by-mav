"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Building,
    Users,
    Mail,
    Landmark,
    Phone,
} from "lucide-react";

const services = [
    {
        icon: <Building2 className="w-10 h-10" />,
        title: "Office & Workspace Solutions",
        desc: "Flexible coworking spaces with modern facilities and high-speed internet, ideal for any business.",
        border: "border-blue-500",
        color: "blue",
        gradient: "from-blue-600 to-blue-400",
    },
    {
        icon: <Landmark className="w-10 h-10" />,
        title: "Company Registration",
        desc: "Look more professional by using a virtual address instead of your home address.",
        border: "border-purple-500",
        color: "purple",
        gradient: "from-purple-600 to-purple-400",
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Reception Services",
        desc: "All communications are directed to your virtual address, where a receptionist promptly responds.",
        border: "border-pink-500",
        color: "pink",
        gradient: "from-pink-600 to-pink-400",
    },
    {
        icon: <Building className="w-10 h-10" />,
        title: "Conference Room",
        desc: "Conduct meetings in fully equipped boardrooms without committing to long-term leases.",
        border: "border-green-500",
        color: "green",
        gradient: "from-green-600 to-green-400",
    },
    {
        icon: <Mail className="w-10 h-10" />,
        title: "Business & Mailing Address",
        desc: "Receive all your business mail at your virtual office, without needing physical presence.",
        border: "border-orange-500",
        color: "orange",
        gradient: "from-orange-600 to-orange-400",
    },
    {
        icon: <Phone className="w-10 h-10" />,
        title: "Call Handling & Forwarding",
        desc: "Get a dedicated business phone number with professional call answering and forwarding services to ensure you never miss a client call.",
        border: "border-teal-500",
        color: "teal",
        gradient: "from-teal-600 to-teal-400",
    },
];


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const iconVariants = {
    // Permanent floating animation
    float: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function VirtualOfficeServices() {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold mb-4"
                >
                    Shortest-Way-To-Go-Market-Solution
                </motion.h2>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    But the concept is simple... Let our experts guide you.
                </motion.p>

                {/* Grid with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -15,
                                scale: 1.03,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className={`relative bg-gray-800/70 p-8 rounded-2xl border ${service.border} shadow-xl hover:shadow-2xl transition-all overflow-hidden group cursor-pointer`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>

                            {/* Icon with permanent floating animation */}
                            <motion.div
                                variants={iconVariants}
                                animate="float"
                                className={`flex justify-center mb-4 p-3 rounded-full bg-${service.color}-500/10`}
                            >
                                <div className={`text-${service.color}-400`}>
                                    {service.icon}
                                </div>
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                                {service.desc}
                            </p>

                            {/* Hover effect line */}
                            <div className={`h-0.5 bg-${service.color}-500 mt-4 w-0 mx-auto group-hover:w-16 transition-all duration-300`} />

                            {/* Quick hover highlight effect */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none"
                                whileHover={{
                                    borderWidth: "2px",
                                    transition: { duration: 0.2 }
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}