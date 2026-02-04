import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, HelpCircle } from 'lucide-react';

const faqData = [
    {
        question: "Who should use Plixi?",
        answer: "Plixi is for anyone who wants to grow their Instagram account organically. Whether you’re a business, influencer, or just someone who wants to grow their personal account, Plixi is the best Instagram growth service for you."
    },
    {
        question: "What is required to use Plixi?",
        answer: "All you need is an Instagram account. You can use Plixi on your personal account, business account, or even an influencer account. You can also use Plixi on multiple accounts at once."
    },
    {
        question: "How many followers can I get with Plixi?",
        answer: "Plixi is designed to help you grow your account organically. We don’t use bots or fake accounts to grow your account. Instead, we use a combination of organic growth strategies to help you grow your account naturally. This means that you can expect to grow your account by at least 1000 followers per month."
    },
    {
        question: "Can I use Plixi on multiple accounts?",
        answer: "Yes! You can use Plixi on as many accounts as you want. You can even use Plixi on multiple accounts at once."
    },
    {
        question: "Can I use Plixi on my business account?",
        answer: "Yes! You can use Plixi on any Instagram account you want. You can use Plixi on your personal account, business account, or even an influencer account."
    },
    {
        question: "How does Plixi work?",
        answer: "Plixi uses a combination of organic growth strategies to help you grow your Instagram account. We use a combination of strategies such as hashtag targeting, influencer targeting, and our own proprietary algorithm to help you grow your account. You can read more about how Plixi works here."
    },
    {
        question: "How do I get started with Plixi?",
        answer: "Getting started with Plixi is easy. All you need to do is create an account on our website. You can create an account here."
    },
    {
        question: "Why should I choose Plixi over other Instagram growth services?",
        answer: "You should choose to work with Plixi over similar Instagram services because our growth service is the most cost-effective and powerful one. We offer 7/24 free live chat opportunity. Also, our advanced features are great for driving engagement to your Instagram profile. You can explore our Instagram growth service comparison page to be sure about your choice."
    },
    {
        question: "Can I get free help while getting started with Plixi?",
        answer: "Our success team would love to assist you with getting Plixi setup on your Instagram account. We are also aware that setup process may be confusing; therefore, we offer free help for starting your Instagram growth campaign and optimizing your target audience. Additionally, our digital specialists would like to help you in every matter of obtaining success in digital marketing. Do not hesitate to communicate with us via live chat on 24/7!"
    },
    {
        question: "What are the benefits of using Plixi?",
        answer: "Plixi is designed to help you grow your Instagram account organically. We don’t use bots or fake accounts to grow your account. Instead, we use a combination of organic growth strategies to help you grow your account naturally."
    },
    {
        question: "Is Plixi safe to use?",
        answer: "Yes! Plixi is completely safe to use. We don’t use bots or fake accounts to grow your account. Instead, we use a combination of organic growth strategies to help you grow your account naturally."
    },
    {
        question: "How long does it take to see results with Plixi?",
        answer: "You can expect to see results with Plixi within the first 24 hours. However, it can take up to 7 days to see the full potential of the AI growth engine."
    },
    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time through the billing page on your Plixi dashboard."
    },
    {
        question: "Can I use Plixi on my personal account?",
        answer: "Yes! You can use Plixi on any Instagram account you want. You can use Plixi on your personal account, business account, or even an influencer account."
    }
];

const FAQItem = ({ item, isOpen, toggleAccordion }) => {
    return (
        <motion.div 
            initial={false}
            className="mb-4 rounded-xl overflow-hidden border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md bg-white"
        >
            <button
                onClick={toggleAccordion}
                className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none transition-colors duration-300 ${
                    isOpen 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-800 hover:bg-blue-50'
                }`}
            >
                <span className="text-base font-semibold pr-4">
                    {item.question}
                </span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-blue-600'}`}>
                    <ChevronDown size={20} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 py-5 text-gray-600 leading-relaxed text-sm border-t border-blue-50 bg-gray-50">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                        Support
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Everything you need to know about Plixi and how we help you grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Left Side: Video Container */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        // Height fixed to 650px
                        className="relative h-[650px] rounded-2xl overflow-hidden shadow-xl bg-[#79C9C5] border-4 border-white"
                    >
                         <video 
                            className="w-full h-full object-contain"
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                        >
                            <source src="https://github.com/mdabdullahm/video/raw/refs/heads/main/x-large-vecteezy_white-question-marks-on-blue-pastel-background-3d_9931427_x-large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Decorative Background Elements */}
                        <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Right Side: Scrollable FAQ List */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
                        // Height matched to video (650px) and scrollable (overflow-y-auto)
                        className="h-[650px] overflow-y-auto pr-2 custom-scrollbar"
                    >
                        <div className="space-y-1">
                            {faqData.map((item, index) => (
                                <FAQItem 
                                    key={index}
                                    item={item}
                                    isOpen={openIndex === index}
                                    toggleAccordion={() => toggleAccordion(index)}
                                />
                            ))}
                        </div>

                        {/* Contact/Footer Info inside scrollable area or sticky at bottom if preferred. Here it's at the end of scroll. */}
                        <div className="mt-8 mb-4 pt-6 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div>
                                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                        <HelpCircle size={20} className="text-blue-500" />
                                        Still have questions?
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We act fast. Email us anytime!
                                    </p>
                                </div>
                                <a 
                                    href="mailto:support@plixi.com" 
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
                                >
                                    <Mail size={18} />
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Custom Scrollbar CSS for this section */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9; 
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1; 
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8; 
                }
            `}</style>
        </section>
    );
};

export default FAQ;