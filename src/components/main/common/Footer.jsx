"use client";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Real Estate Solutions. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors duration-200">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
