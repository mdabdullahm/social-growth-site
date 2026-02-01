"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeBtn, setActiveBtn] = useState('getStarted');

    // Desktop base style
    const desktopBaseStyle = "px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 cursor-pointer relative flex items-center justify-center overflow-hidden";
    
    // Mobile base style
    const mobileBaseStyle = "w-full py-3.5 rounded-xl font-bold transition-all duration-300 active:scale-95 relative flex items-center justify-center overflow-hidden";

    // ৩ নম্বর গ্লো এনিমেশন কম্পোনেন্ট
    const ActiveGlow = ({ isMobile = false }) => (
        <>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                    background: "conic-gradient(from 0deg, transparent 60%, #3b82f6, #9333ea, #3b82f6)",
                }}
                className="absolute inset-[-300%]" 
            />
            {/* বাটন ব্যাকগ্রাউন্ড (হলুদ) */}
            <div className={`absolute inset-[2px] bg-[#EEF20F] ${isMobile ? 'rounded-[10px]' : 'rounded-full'} z-10`} />
        </>
    );

    return (
        <nav className="w-full z-50 bg-white/20 backdrop-blur-xl shadow-sm left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between h-20 items-center">
                    
                    {/* 1. Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
                            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md shadow-lg">P</span>
                            lixi
                        </Link>
                    </div>

                    {/* 2. Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 items-center text-[12px] font-bold text-gray-600 tracking-widest uppercase">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Tiktok</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Products</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Pricing</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Tools</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">About</Link>
                    </div>

                    {/* 3. Desktop Buttons with Glow Shadows */}
                    <div className="hidden lg:flex items-center space-x-5">
                        <button onClick={() => setActiveBtn('signin')} 
                            className={`${desktopBaseStyle} 
                            ${activeBtn === 'signin' 
                                ? "text-black shadow-[0_10px_20px_rgba(238,242,15,0.4)] hover:shadow-[0_15px_25px_rgba(238,242,15,0.6)] -translate-y-[2px]" 
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
                            {activeBtn === 'signin' && <ActiveGlow />}
                            <span className="relative z-20">Sign in</span>
                        </button>

                        <button onClick={() => setActiveBtn('getStarted')} 
                            className={`${desktopBaseStyle} 
                            ${activeBtn === 'getStarted' 
                                ? "text-black shadow-[0_10px_20px_rgba(238,242,15,0.4)] hover:shadow-[0_15px_25px_rgba(238,242,15,0.6)] -translate-y-[2px]" 
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}>
                            {activeBtn === 'getStarted' && <ActiveGlow />}
                            <span className="relative z-20">Get Started</span>
                        </button>
                    </div>

                    {/* 4. Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 outline-none">
                            <div className="flex flex-col justify-center items-end gap-1.5 w-8 h-8">
                                {isOpen ? (
                                    <div className="relative w-6 h-6">
                                        <span className="absolute block w-6 h-1 bg-slate-900 rotate-45 top-2.5 rounded-full"></span>
                                        <span className="absolute block w-6 h-1 bg-slate-900 -rotate-45 top-2.5 rounded-full"></span>
                                    </div>
                                ) : (
                                    <>
                                        <span className="w-7 h-1 bg-slate-900 rounded-full"></span>
                                        <span className="w-5 h-1 bg-red-600 rounded-full"></span>
                                        <span className="w-3 h-1 bg-slate-900 rounded-full"></span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. Mobile Dropdown Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${isOpen ? "max-h-screen opacity-100 shadow-2xl" : "max-h-0 opacity-0"}`}>
                <div className="px-5 py-8 flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1 text-base font-semibold text-gray-800 mb-4">
                        <Link onClick={() => setIsOpen(false)} href="/" className="py-3 px-2 border-b border-gray-50">Tiktok</Link>
                        <Link onClick={() => setIsOpen(false)} href="#" className="py-3 px-2 border-b border-gray-50">Products</Link>
                        <Link onClick={() => setIsOpen(false)} href="#" className="py-3 px-2 border-b border-gray-50">Pricing</Link>
                        <Link onClick={() => setIsOpen(false)} href="#" className="py-3 px-2">About</Link>
                    </div>
                    
                    {/* Mobile Action Buttons with Glow */}
                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={() => { setActiveBtn('signin'); setIsOpen(false); }} 
                            className={`${mobileBaseStyle} ${activeBtn === 'signin' ? "text-black shadow-[0_8px_15px_rgba(238,242,15,0.4)]" : "text-gray-700 border border-gray-200"}`}
                        >
                            {activeBtn === 'signin' && <ActiveGlow isMobile={true} />}
                            <span className="relative z-20">Sign In</span>
                        </button>

                        <button 
                            onClick={() => { setActiveBtn('getStarted'); setIsOpen(false); }} 
                            className={`${mobileBaseStyle} ${activeBtn === 'getStarted' ? "text-black shadow-[0_8px_15px_rgba(238,242,15,0.4)]" : "text-gray-700 border border-gray-200"}`}
                        >
                            {activeBtn === 'getStarted' && <ActiveGlow isMobile={true} />}
                            <span className="relative z-20">Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Bottom Linear Progress Animation */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-100 overflow-hidden">
                <motion.div
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "250%" }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />
            </div>
        </nav>
    );
};

export default Navbar;