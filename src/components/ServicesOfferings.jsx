import React from "react";
import { motion } from "framer-motion";
import { FaPlane, FaMapMarkedAlt, FaHotel, FaUserTie, FaGift } from "react-icons/fa";

const services = [
  { id: 1, title: "Itinerary Planning", description: "Tailored travel plans to suit your dream destinations.", icon: <FaMapMarkedAlt size={40} /> },
  { id: 2, title: "Flight & Hotel Booking", description: "Seamless booking for a hassle-free vacation.", icon: <FaHotel size={40} /> },
  { id: 3, title: "Local Travel Guides", description: "Experienced guides to enhance your journey.", icon: <FaUserTie size={40} /> },
  { id: 4, title: "Exclusive Deals", description: "Special offers & memberships for premium travelers.", icon: <FaGift size={40} /> },
];

const destinations = [
  "Paris, France",
  "Tokyo, Japan",
  "Bali, Indonesia",
  "New York, USA",
  "Dubai, UAE",
  "Sydney, Australia",
];

const ServicesOfferings = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Our Services & Offerings 
        </motion.h2>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.id}
                    className="p-6 bg-white rounded-xl shadow-lg text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="text-[#9faa0b]">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mt-3">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                </motion.div>
            ))}
        </div>

        {/* Destinations Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800"> Top Destinations We Specialize In</h3>
          <motion.ul
            className="mt-6 text-lg text-gray-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {destinations.map((destination, index) => (
              <motion.li
                key={index}
                className="p-4 bg-blue-100 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {destination}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Special Deals Section */}
        <motion.div
          className="mt-16 bg-[#002147] text-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl font-bold"> Exclusive Deals & Memberships</h3>
          <p className="text-lg mt-2">Sign up for our travel memberships and get access to VIP perks & special discounts!</p>
          <motion.button
            className="mt-4 bg-[#9faa0b] text-white-600 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-[#9faa0b] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOfferings;
