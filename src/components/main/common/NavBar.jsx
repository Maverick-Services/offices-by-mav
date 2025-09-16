"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathName = usePathname();
  const [positions, setPositions] = useState([]);
  const refs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Real Estate", href: "/" },
    { label: "Virtual office", href: "/virtual-office" },
    { label: "Corporate services", href: "/corporate-services" },
    { label: "Coworking", href: "/coworking" },
  ];
  // console.log(menuItems.findIndex(item => item?.href == pathName))
  const [active, setActive] = useState(
    menuItems.findIndex(item => item?.href == pathName) || 0
  );

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = refs.current.map((el) => {
        if (el) {
          return { left: el.offsetLeft, width: el.offsetWidth };
        }
        return { left: 0, width: 0 };
      });
      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 md:py-4 bg-black text-white shadow-lg relative">
      {/* Logo */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/logo-white.png" // 🔥 replace with your actual logo file (SVG/PNG)
          alt="OfficesByMav Logo"
          width={120}
          height={40}
          className="object-contain"
          priority
        />
      </motion.div>


      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8 relative">
        <nav className="flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              ref={(el) => (refs.current[index] = el)}
              onClick={() => setActive(index)}
              className={`relative text-sm font-medium transition-colors ${active === index ? "text-white" : "hover:text-gray-300"
                }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Sliding Underline */}
        {positions.length > 0 && (
          <motion.span
            layoutId="underline"
            className="absolute -bottom-1 h-[2px] bg-white"
            initial={false}
            animate={{
              left: positions[active]?.left || 0,
              width: positions[active]?.width || 0,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
          />
        )}

        {/* Contact Us Button */}
        <motion.a
          href="/contact"
          className="px-5 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: menuItems.length * 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          Contact Us
        </motion.a>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="lg:hidden z-50"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black text-white shadow-lg flex flex-col items-center justify-center space-y-6 z-40"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => {
                  setActive(index);
                  setIsOpen(false);
                }}
                className={`text-lg font-medium ${active === index ? "text-white" : "hover:text-gray-300"
                  }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
