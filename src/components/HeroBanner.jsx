import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <motion.div 
            className="relative w-full h-[380px] flex items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/4608979/pexels-photo-4608979.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <motion.div 
                className="z-10 text-center p-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h1 className="text-5xl font-bold mb-4 pt-24">Explore the World with Our Exclusive Packages</h1>
                <p className="text-lg max-w-2xl mx-auto mb-6">From breathtaking beaches to adventurous mountain escapes, we offer the best travel experiences tailored just for you.</p>
            </motion.div>
        </motion.div>
    );
};

export default HeroBanner;
