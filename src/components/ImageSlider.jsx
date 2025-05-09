import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        image: "https://images.pexels.com/photos/670625/pexels-photo-670625.jpeg?auto=compress&cs=tinysrgb&w=1200",
        title: "Explore Exotic Destinations",
        description: "Discover breathtaking places with 96 Holidays. Your dream vacation starts here.",
    },
    {
        image: "https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1200",
        title: "Adventure Awaits You",
        description: "From mountain peaks to deep valleys, embark on thrilling adventures with 96 Holidays.",
    },
    {
        image: "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1200",
        title: "City Lights & Luxury",
        description: "Experience the finest cityScapes and luxury stays tailored just for you by 96 Holidays.",
    },
    {
        image: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1200",
        title: "Reconnect with Nature",
        description: "Escape the hustle and immerse yourself in nature’s serenity with 96 Holidays.",
    },
];

const ImageSlider = () => {
return (
    <div className="relative w-full h-[500px]">
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                    <motion.img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0.5, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-6">
                        <motion.h2
                            className="text-4xl font-bold"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            {slide.title}
                        </motion.h2>
                        <motion.p
                            className="mt-2 text-lg max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            {slide.description}
                        </motion.p>
                        <motion.button
                            className="mt-4 bg-[#9faa0b] px-6 py-2 text-lg font-semibold rounded-xl hover:bg-[#9faa0b]/90 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Explore Now
                        </motion.button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <style>{`
            .swiper-button-next,
            .swiper-button-prev {
                color: #9faa0b;
            }
            .swiper-pagination-bullet-active {
                background: #9faa0b !important;
            }
        `}</style>
    </div>
);
};

export default ImageSlider;
