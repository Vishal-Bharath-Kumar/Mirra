import React from "react";
import { motion } from "framer-motion";

const deals = [
  {
    id: 1,
    title: "Maldives Beach Getaway",
    price: "₹8999",
    image: "https://images.pexels.com/photos/30920614/pexels-photo-30920614/free-photo-of-serene-tropical-beach-in-the-maldives.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Paris Romantic Escape",
    price: "₹129999",
    image: "https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Tokyo Cherry Blossom Tour",
    price: "₹110000",
    image: "https://images.pexels.com/photos/4012908/pexels-photo-4012908.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Bali Adventure",
    price: "₹75000",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const TrendingDeals = () => {
return (
    <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Deals & Offers</h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deals.map((deal) => (
                <motion.div
                    key={deal.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                >
                    <img src={deal.image} alt={deal.title} className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">{deal.title}</h3>
                        <p className="text-lg text-gray-600">{deal.price}</p>
                        <button className="mt-3 w-full bg-[#9faa0b] text-white py-2 rounded-xl hover:bg-[#8e900a] transition-all">
                            Book Now
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);
};

export default TrendingDeals;
