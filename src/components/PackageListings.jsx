import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion as motionButton } from 'framer-motion';

const packages = [
    {
        destination: 'Maldives Paradise',
        duration: '5 Nights / 6 Days',
        price: '$2,499',
        rating: 4.8,
        highlights: ['Overwater Villas', 'Snorkeling & Diving', 'Luxury Spa'],
        image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Swiss Alps Adventure',
        duration: '7 Nights / 8 Days',
        price: '$3,199',
        rating: 4.9,
        highlights: ['Scenic Train Rides', 'Snowy Peaks', 'Cozy Chalets'],
        image: 'https://images.pexels.com/photos/1291766/pexels-photo-1291766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Bali Escape',
        duration: '6 Nights / 7 Days',
        price: '$1,899',
        rating: 4.7,
        highlights: ['Temple Tours', 'Sunset Beaches', 'Cultural Dances'],
        image: 'https://images.pexels.com/photos/889954/pexels-photo-889954.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Japan Escape',
        duration: '6 Nights / 7 Days',
        price: '$1,899',
        rating: 4.7,
        highlights: ['Temple Tours', 'Sunset Beaches', 'Cultural Dances'],
        image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
];

const topIndianStates = [
    {
        destination: 'Rajasthan',
        duration: '6 Nights / 7 Days',
        price: '$1,499',
        rating: 4.6,
        highlights: ['Royal Forts', 'Desert Safari', 'Cultural Heritage'],
        image: 'https://images.pexels.com/photos/2491830/pexels-photo-2491830.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        destination: 'Kerala',
        duration: '5 Nights / 6 Days',
        price: '$1,299',
        rating: 4.8,
        highlights: ['Backwaters', 'Beaches', 'Ayurvedic Spa'],
        image: 'https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        destination: 'Goa',
        duration: '4 Nights / 5 Days',
        price: '$999',
        rating: 4.7,
        highlights: ['Beaches', 'Nightlife', 'Water Sports'],
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        destination: 'Himachal Pradesh',
        duration: '7 Nights / 8 Days',
        price: '$1,699',
        rating: 4.9,
        highlights: ['Snow-capped Mountains', 'Adventure Sports', 'Scenic Views'],
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
];
const honeymoonPackages = [
    {
        destination: 'Santorini, Greece',
        duration: '6 Nights / 7 Days',
        price: '$3,499',
        rating: 4.9,
        highlights: ['Sunset Views', 'Luxury Resorts', 'Private Yacht Tours'],
        image: 'https://images.pexels.com/photos/326650/pexels-photo-326650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Paris, France',
        duration: '5 Nights / 6 Days',
        price: '$3,799',
        rating: 4.8,
        highlights: ['Eiffel Tower Views', 'Seine River Cruise', 'Fine Dining'],
        image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Bora Bora, Tahiti',
        duration: '7 Nights / 8 Days',
        price: '$4,299',
        rating: 5.0,
        highlights: ['Overwater Bungalows', 'Snorkeling & Diving', 'Romantic Dinners'],
        image: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Maldives Paradise',
        duration: '7 Nights / 8 Days',
        price: '$4,299',
        rating: 5.0,
        highlights: ['Overwater Bungalows', 'Snorkeling & Diving', 'Romantic Dinners'],
        image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
];
const adventurePackages = [
    {
        destination: 'Mt.Everest, Nepal',
        duration: '14 Nights / 15 Days',
        price: '$2,999',
        rating: 4.9,
        highlights: ['Trekking', 'Scenic Views', 'Camping'],
        image: 'https://images.pexels.com/photos/30400911/pexels-photo-30400911/free-photo-of-person-meditating-at-everest-base-camp-nepal.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        destination: 'Amazon Rainforest, Brazil',
        duration: '6 Nights / 7 Days',
        price: '$2,499',
        rating: 4.8,
        highlights: ['Wildlife Safari', 'Jungle Trekking', 'River Cruises'],
        image: 'https://images.pexels.com/photos/1305095/pexels-photo-1305095.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        destination: 'Grand Canyon, USA',
        duration: '5 Nights / 6 Days',
        price: '$2,299',
        rating: 4.7,
        highlights: ['Hiking', 'River Rafting', 'Helicopter Tours'],
        image: 'https://images.pexels.com/photos/1672813/pexels-photo-1672813.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        destination: 'Patagonia, Argentina',
        duration: '8 Nights / 9 Days',
        price: '$3,099',
        rating: 4.9,
        highlights: ['Glacier Hiking', 'Wildlife Spotting', 'Scenic Landscapes'],
        image: 'https://images.pexels.com/photos/30951335/pexels-photo-30951335/free-photo-of-skiers-on-snowy-ridge-in-chamonix-alps.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
];

const PackageListings = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPackages = packages.filter(pkg =>
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto py-10">
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <h2 className="text-4xl font-bold text-center mb-8">Featured Travel Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {filteredPackages.map((pkg, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <img src={pkg.image} alt={pkg.destination} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">{pkg.destination}</h3>
                            <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-lg font-bold text-yellow-500">{pkg.price}</span>
                                <div className="flex items-center ml-auto">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={`ml-1 ${i < Math.floor(pkg.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="ml-2 text-gray-500 text-sm">{pkg.rating}</span>
                                </div>
                            </div>
                            <ul className="text-sm text-gray-600 mt-4">
                                {pkg.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center">◾ {highlight}</li>
                                ))}
                            </ul>
                            <motionButton.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                View Details
                            </motionButton.button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <h2 className="text-4xl font-bold text-center mt-12 mb-8">Top Indian States for Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {topIndianStates.map((pkg, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <img src={pkg.image} alt={pkg.destination} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">{pkg.destination}</h3>
                            <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-lg font-bold text-yellow-500">{pkg.price}</span>
                                <div className="flex items-center ml-auto">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={`ml-1 ${i < Math.floor(pkg.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="ml-2 text-gray-500 text-sm">{pkg.rating}</span>
                                </div>
                            </div>
                            <ul className="text-sm text-gray-600 mt-4">
                                {pkg.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center">◾ {highlight}</li>
                                ))}
                            </ul>
                            <motionButton.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                View Details
                            </motionButton.button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <h2 className="text-4xl font-bold text-center mt-12 mb-8">Top Honeymoon Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {honeymoonPackages.map((pkg, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <img src={pkg.image} alt={pkg.destination} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">{pkg.destination}</h3>
                            <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-lg font-bold text-yellow-500">{pkg.price}</span>
                                <div className="flex items-center ml-auto">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={`ml-1 ${i < Math.floor(pkg.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="ml-2 text-gray-500 text-sm">{pkg.rating}</span>
                                </div>
                            </div>
                            <ul className="text-sm text-gray-600 mt-4">
                                {pkg.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center">◾ {highlight}</li>
                                ))}
                            </ul>
                            <motionButton.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                View Details
                            </motionButton.button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <h2 className="text-4xl font-bold text-center mt-12 mb-8">Top Adventure Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {adventurePackages.map((pkg, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <img src={pkg.image} alt={pkg.destination} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">{pkg.destination}</h3>
                            <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-lg font-bold text-yellow-500">{pkg.price}</span>
                                <div className="flex items-center ml-auto">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={`ml-1 ${i < Math.floor(pkg.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="ml-2 text-gray-500 text-sm">{pkg.rating}</span>
                                </div>
                            </div>
                            <ul className="text-sm text-gray-600 mt-4">
                                {pkg.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center">◾ {highlight}</li>
                                ))}
                            </ul>
                            <motionButton.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                View Details
                            </motionButton.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default PackageListings;
