import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Paris, France",
    review: "An unforgettable experience! The itinerary was perfectly planned, and the local guides were amazing.",
    image: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png?f=webp&w=512",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    location: "Bali, Indonesia",
    review: "I never imagined Bali could be this magical! 96 Holidays made every moment special.",
    image: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-man-avatars-flat-icons-pack-people-456323.png?f=webp&w=512",
    rating: 4.5,
  },
  {
    name: "Emily Roberts",
    location: "Tokyo, Japan",
    review: "The best travel service I have ever used. Hassle-free bookings and great accommodations!",
    image: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-girl-avatars-flat-icons-pack-people-456325.png?f=webp&w=512",
    rating: 4,
  },
  {
    name: "James Wilson",
    location: "New York, USA",
    review: "96 Holidays exceeded my expectations! They took care of everything, and I just enjoyed the journey.",
    image: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-man-avatars-flat-icons-pack-people-456318.png?f=webp&w=512",
    rating: 5,
  },
];

const Testimonials = () => {
return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
        <div className="container mx-auto text-center">
            {/* Section Heading */}
            <motion.h2
                className="text-4xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                 What Our Travelers Say 
            </motion.h2>

            {/* Swiper Carousel */}
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay, Pagination, EffectCoverflow]}
                className="w-full max-w-4xl"
                style={{ paddingBottom: '40px' }} // Adjust the padding bottom to move the dots down
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg w-80 text-center relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mx-auto mt-4 border-4 border-blue-500"
                            />
                            <h3 className="text-xl font-semibold mt-3">{testimonial.name}</h3>
                            <p className="text-gray-500">{testimonial.location}</p>
                            <p className="text-gray-700 mt-2">{testimonial.review}</p>
                            <div className="flex justify-center mt-3">
                                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                                {testimonial.rating % 1 !== 0 && <FaStar className="text-yellow-500 opacity-50" />}
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
);
};

export default Testimonials;
