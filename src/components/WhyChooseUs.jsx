import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaStar, FaHeadset, FaGlobe } from "react-icons/fa";

const trustPoints = [
  {
    title: "Best Price Guarantee",
    description: "We ensure unbeatable prices so you can travel affordably.",
    icon: <FaDollarSign size={40} />,
    color: "text-green-500",
  },
  {
    title: "Verified Reviews",
    description: "Thousands of happy travelers have rated us 5 stars.",
    icon: <FaStar size={40} />,
    color: "text-yellow-500",
  },
  {
    title: "24/7 Support",
    description: "Our team is available anytime, anywhere to assist you.",
    icon: <FaHeadset size={40} />,
    color: "text-blue-500",
  },
  {
    title: "Local Expertise",
    description: "We partner with local experts to provide authentic experiences.",
    icon: <FaGlobe size={40} />,
    color: "text-purple-500",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Why Choose <span className="text-[#9faa0b]">96 Holidays?</span> 
        </motion.h2>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg text-center flex flex-col items-center border-t-4 border-transparent hover:border-[#002147] transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${point.color} mb-3`}>{point.icon}</div>
              <h3 className="text-2xl font-semibold">{point.title}</h3>
              <p className="text-gray-600 mt-2">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-[#002147] text-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl font-bold">Travel with Confidence!</h3>
          <p className="text-lg mt-2">Book your next adventure with 96 Holidays and experience stress-free travel.</p>
          <motion.button
            className="mt-4 bg-[#9faa0b] text-white-600 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-[#9faa0b] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
