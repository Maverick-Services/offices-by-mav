"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        alternatePhone: "",
        state: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess("✅Thank you for your message. We will get in touch with you");
                setFormData({
                    name: "",
                    companyName: "",
                    email: "",
                    phone: "",
                    alternatePhone: "",
                    state: "",
                });
            } else {
                setError(`❌ Failed. Please try again or use Google Form.`);
            }
        } catch (error) {
            setError("❌ Error. Please try again.");
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Single Inputs */}
            <motion.input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

            <motion.input
                type="text"
                name="companyName"
                placeholder="Company Name *"
                required
                value={formData.companyName}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

            <motion.input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

            {/* Flex row for phone numbers */}
            <div className="flex gap-4">
                <motion.input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                />
                <motion.input
                    type="text"
                    name="alternatePhone"
                    placeholder="Alternate Number"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
                />
            </div>

            <motion.input
                type="text"
                name="state"
                placeholder="State *"
                required
                value={formData.state}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-black outline-none"
            />

            <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md shadow-md hover:bg-gray-900 transition"
            >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4" />
            </motion.button>

            {success && <p className="text-center text-sm mt-2">{success}</p>}
            {error && <p className="text-center text-sm mt-2">
                {error}
                <a
                    href="https://forms.gle/puYdN4h6As8eZ3ok7"
                    className="font-bold px-1 text-blue-900"
                >
                    Here
                </a>
            </p>}
        </form>
    );
}
