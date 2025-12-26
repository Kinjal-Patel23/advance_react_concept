import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-black border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-white tracking-wide">
                            Kaye<span className="text-emerald-400">lux</span>
                        </h2>
                        <p className="text-sm text-zinc-400 mt-3">
                            Premium beauty products crafted for modern lifestyles.
                            Quality, care, and confidence in every product.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li className="hover:text-white cursor-pointer transition">
                                Home
                            </li>
                            <li className="hover:text-white cursor-pointer transition">
                                Products
                            </li>
                            <li className="hover:text-white cursor-pointer transition">
                                Categories
                            </li>
                            <li className="hover:text-white cursor-pointer transition">
                                Contact
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li className="hover:text-white cursor-pointer transition">
                                Help Center
                            </li>
                            <li className="hover:text-white cursor-pointer transition">
                                Shipping & Returns
                            </li>
                            <li className="hover:text-white cursor-pointer transition">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer transition">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Email: support@beautystore.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Mon - Sat: 9AM - 6PM</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800 text-center py-4 text-sm text-zinc-500">
                    © {new Date().getFullYear()} BeautyStore. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
