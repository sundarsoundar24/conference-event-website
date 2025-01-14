'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden" id="home">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-hero-img"
                style={{
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span>
                                ICDICI 2025
                            </span>
                        </motion.h1>
                        <motion.div
                            className="space-y-2 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                6th International Conference on
                            </p>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                Data Intelligence and Cognitive Informatics
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <motion.div
                                className="flex items-center text-white bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-300 hover:bg-blue-600/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar className="w-6 h-6 mr-3 text-blue-400" />
                                <span className="text-lg font-semibold">February 1-3, 2025</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center text-white bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 transition-all duration-300 hover:bg-blue-600/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                                <span className="text-lg font-semibold">Sathyabama University, Chennai</span>
                            </motion.div>
                        </motion.div>
                        <motion.p
                            className="text-xl mb-12 max-w-3xl mx-auto text-white bg-black/30 backdrop-blur-sm p-6 rounded-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Join us for cutting-edge research presentations, workshops, and networking
                            opportunities in the fields of AI, data science, and cognitive computing.
                            Explore the latest advancements and connect with leading experts in the industry.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Link href="/registration">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-400 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:shadow-lg"
                                    >
                                        Register Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </motion.div>
                            </Link>
                            <Link href="/#about">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 border-2 border-white rounded-full transition duration-300 ease-in-out transform hover:shadow-lg backdrop-blur-sm"
                                    >
                                        Learn More
                                    </Button>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

