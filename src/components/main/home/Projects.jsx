"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["italic", "normal"],
});

const inter = Inter({ subsets: ["latin"] });

const upcomingProjects = [
    { title: "Godrej Sora", image: "/upcoming-1.jpeg" },
    { title: "Godrej Sora", image: "/upcoming-2.jpeg" },
    { title: "Godrej Sora", image: "/upcoming-3.jpeg" },
];

const currentProjects = [
    { title: "AIPL JOY", image: "/aipl.webp" },
    { title: "DLF DAHLIAS GURGAON", image: "/dlf-gurgaon.webp" },
    { title: "ELDECO TERRA GRANDE", image: "/eldeco.webp" },
    { title: "DHOLERA SMART CITY", image: "/dholera.webp" },
    { title: "M3M SMARTWORLD", image: "/m3m.webp" },
    { title: "MAX ESTATE 360 GURGAON", image: "/max-gurgaon.webp" },
    { title: "MAX 128 NOIDA", image: "/max-noida.webp" },
];

// Variants for container + cards
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // staggered entry
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("upcoming");

    const renderCards = (projects) => (
        <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-900"
                >
                    <div className="relative aspect-video overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <section
            id="projects"
            className="relative text-white py-16 px-4 md:px-8"
            style={{
                backgroundColor: "#000",
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
            }}
        >
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${playfair.className} text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight`}
            >
                Projects
            </motion.h1>

            {/* Tabs */}
            <div className="relative flex justify-center gap-10 mb-12 flex-wrap">
                {["upcoming", "trending"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative pb-3 px-4 text-xl md:text-2xl font-semibold transition-all ${activeTab === tab
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white rounded-full"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <AnimatePresence mode="wait">
                    {activeTab === "upcoming" ? (
                        <motion.div
                            key="upcoming"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-16"
                        >
                            {/* Cards Grid */}
                            {renderCards(upcomingProjects)}

                            {/* Video + Title */}
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-16 md:py-18">
                                {/* Title Block */}
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col items-center gap-4 justify-center h-full text-center md:text-left space-y-6"
                                >
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className={`${playfair.className} italic text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-100`}
                                    >
                                        Project Sora
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className={`${inter.className} text-lg md:text-xl text-gray-300 max-w-md leading-relaxed`}
                                    >
                                        Discover the elegance and vision of Godrej’s upcoming luxury
                                        living concept. A blend of modern architecture and timeless
                                        design.
                                    </motion.p>
                                </motion.div>

                                {/* Video */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex justify-center h-full"
                                >
                                    <video
                                        className="rounded-3xl shadow-2xl w-full max-w-[400px] max-h-[500px] aspect-[9/16] object-cover border-4 border-white/20"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/upcoming-video.mp4" type="video/mp4" />
                                    </video>
                                </motion.div>
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div
                            key="trending"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            {renderCards(currentProjects)}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}



// "use client";
// import { motion } from "framer-motion";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//     subsets: ["latin"],
//     weight: ["700", "900"],
// });

// export default function ProjectsSection() {
//     return (
//         <section
//             className="relative text-white py-20 px-6"
//             style={{
//                 backgroundColor: "#000",
//                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
//                 backgroundSize: "40px 40px",
//             }}
//         >
//             {/* Main Heading */}
//             <motion.h1
//                 initial={{ opacity: 0, y: -30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`${playfair.className} text-center text-6xl md:text-7xl font-bold mb-16 tracking-tight`}
//             >
//                 Projects
//             </motion.h1>

//             {/* Upcoming Projects */}
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                     {/* Left side title */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="flex flex-col items-center"
//                     >
//                         <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
//                             Upcoming <span className="text-gray-300">Project</span>
//                         </h2>
//                         {/* Project name */}
//                         <p
//                             className={`${playfair.className} mt-4 text-2xl md:text-3xl italic text-gray-200`}
//                         >
//                             Godrej Sora
//                         </p>
//                     </motion.div>

//                     {/* Right side framed portrait video */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="flex justify-center"
//                     >
//                         <video
//                             className="rounded-3xl shadow-2xl w-[220px] md:w-[280px] max-h-[65vh] aspect-[9/16] object-cover border-4 border-white/20"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                         >
//                             <source src="/upcoming-video.mp4" type="video/mp4" />
//                         </video>
//                     </motion.div>
//                 </div>

//                 {/* Upcoming Projects Gallery */}
//                 <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
//                     {[
//                         { src: "/upcoming-1.jpeg", name: "Godrej Sora" },
//                         { src: "/upcoming-2.jpeg", name: "Godrej Sora" },
//                         { src: "/upcoming-3.jpeg", name: "Godrej Sora" },
//                     ].map((project, i) => (
//                         <motion.div
//                             key={i}
//                             whileHover={{ scale: 1.05 }}
//                             className="relative overflow-hidden rounded-xl shadow-lg group"
//                         >
//                             <img
//                                 src={project.src}
//                                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                             />
//                             {/* Project name overlay on hover */}
//                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
//                                 <p className={`${playfair.className} text-white text-lg font-semibold`}>
//                                     {project.name}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>

//             {/* Current Projects */}
//             <div className="max-w-7xl mx-auto mt-24">
//                 <motion.h2
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-3xl md:text-4xl font-bold text-center mb-12"
//                 >
//                     Current <span className="text-gray-300">Projects</span>
//                 </motion.h2>

//                 {/* Square grid instead of masonry */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {[
//                         "/featured-1.jpeg",
//                         "/featured-2.jpeg",
//                         "/featured-3.jpeg",
//                         "/featured-4.jpeg",
//                         "/featured-5.jpeg",
//                     ].map((src, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.1 }}
//                             className="overflow-hidden rounded-xl shadow-lg"
//                         >
//                             <div className="aspect-square">
//                                 <img
//                                     src={src}
//                                     alt="Current project"
//                                     className="w-full h-full object-cover rounded-xl"
//                                 />
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }
