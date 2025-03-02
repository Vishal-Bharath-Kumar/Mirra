import React from "react";
import { motion } from "framer-motion";
import CompanyLogo from "../assets/logos/96logo1.png";

const MissionVision = () => {
return (
    <div className="bg-white-900 text-white py-16 px-6">
        <div className="container mx-auto text-center">
            <motion.h2
                className="text-4xl font-bold mb-10 text-black"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Mission & Vision
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 items-center">
                {/* Mission Section */}
                <motion.div
                    className="p-6 bg-gray-800 rounded-2xl shadow-xl text-center col-span-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img
                        src="https://images.pexels.com/photos/950047/pexels-photo-950047.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                        alt="Mission"
                        className="w-full rounded-lg mb-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: '#9faa0b' }}>Our Mission</h3>
                    <p className="text-lg text-gray-300">
                        To craft **unforgettable travel experiences** that inspire and connect people with the world.
                    </p>
                </motion.div>

                {/* Company Logo Section */}
                <motion.div
                    className="text-center col-span-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.img
                        src={CompanyLogo}
                        alt="Company Logo"
                        className="w-full rounded-lg mb-4"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, loop: Infinity, ease: "linear" }}
                    />
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    className="p-6 bg-gray-800 rounded-2xl shadow-xl text-center col-span-1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img
                        src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Vision"
                        className="w-full rounded-lg mb-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    />
                    <h3 className="text-2xl font-semibold mb-2"style={{ color: '#9faa0b' }}>Our Vision</h3>
                    <p className="text-lg text-gray-300">
                        To become the **leading travel brand**, redefining journeys with sustainability and innovation.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
);
};

export default MissionVision;
