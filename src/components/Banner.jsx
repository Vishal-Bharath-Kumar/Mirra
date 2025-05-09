import { motion } from 'framer-motion';
const Banner = () => {
  return (
    <>
     <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/28914432/pexels-photo-28914432/free-photo-of-peaceful-boats-on-lake-with-mountain-background.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    className="text-center text-white px-6"
                >
                    <h1 className="text-5xl font-extrabold drop-shadow-lg mt-28">Explore the World with <span className="text-[#9faa0b]">96 Holidays</span></h1>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">Your perfect vacation starts here! Discover amazing destinations, breathtaking landscapes, and unforgettable experiences tailored just for you.</p>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                        className="mt-6 px-6 py-3 bg-[#9faa0b] text-white font-semibold rounded-full shadow-lg hover:bg-[#9faa0b] transition-all"
                    >
                        View Packages
                    </motion.button>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Banner