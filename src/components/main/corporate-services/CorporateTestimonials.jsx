"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "HR Manager, TechCorp Ltd.",
        text: "The corporate guest house services have been a game changer for us. Our visiting employees always feel at home, and the seamless booking process saves us valuable time.",
    },
    {
        name: "Ananya Sharma",
        role: "Operations Head, Global FinServ",
        text: "Their managed guest houses offer both comfort and professionalism. It reflects positively on our brand whenever clients stay with us.",
    },
    {
        name: "Vikram Iyer",
        role: "Director of Administration, Zenith Group",
        text: "From short stays to long-term arrangements, the flexibility and service quality have exceeded expectations. Our executives now prefer these stays over hotels.",
    },
];


// Animation variants
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        rotateX: -15
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    hover: {
        y: -15,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const quoteIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.4
        }
    }
};

const authorVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.6
        }
    }
};

export default function CorporateTestimonials() {
    return (
        <section className="w-full relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTSAwIDAgTCA2MCAwIFogIi8+PHBhdGggZD0iTSAwIDAgTCAwIDYwIFogIi8+PC9nPjwvc3ZnPg==')]"></div>
            </div>

            {/* Animated background elements */}
            <motion.div
                className="absolute top-10 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"
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
                className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                        What Our <span className="text-black">Clients</span> Say
                    </h2>
                    <motion.div
                        className="w-20 h-1 bg-black mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Trusted nationwide for professional solutions and growth support.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group perspective-1000"
                        >
                            {/* Animated quote icon */}
                            <motion.div
                                variants={quoteIconVariants}
                                className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-md"
                            >
                                <FaQuoteLeft className="text-xs" />
                            </motion.div>

                            {/* Testimonial text with staggered animation */}
                            <motion.p
                                variants={textVariants}
                                className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10"
                            >
                                "{t.text}"
                            </motion.p>

                            {/* Client info with animation */}
                            <motion.div
                                variants={authorVariants}
                                className="pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors"
                            >
                                <h4 className="font-semibold text-gray-900 text-lg">{t.name}</h4>
                                <p className="text-gray-500 text-sm">{t.role}</p>
                            </motion.div>

                            {/* Decorative elements with yellow color */}
                            <motion.div
                                className="absolute bottom-2 right-2 opacity-10 text-yellow-400"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <FaQuoteRight className="text-4xl" />
                            </motion.div>

                            {/* Hover effect border */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/20 transition-all duration-300 pointer-events-none"
                                whileHover={{
                                    borderWidth: "2px",
                                    transition: { duration: 0.2 }
                                }}
                            />

                            {/* Subtle shine effect on hover */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Animated indicators */}
                {/* <motion.div
                    className="flex justify-center items-center mt-16 space-x-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-black rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </motion.div> */}
            </div>
        </section>
    );
}