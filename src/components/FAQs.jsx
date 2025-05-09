import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {   
        question: "How do I book a tour with 96 Holidays?",
        answer: "Booking a tour with us is easy! Simply browse our packages, select your preferred destination, and complete the booking process online. You can also contact our support team for assistance."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We offer flexible cancellation policies depending on the package you choose. Please check the terms and conditions of your selected tour for detailed information."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, PayPal, and bank transfers. Secure payment gateways ensure a safe and hassle-free booking experience."
    },
    {
        question: "Do you offer customized travel packages?",
        answer: "Yes! We specialize in creating personalized travel experiences. Contact us with your preferences, and we’ll design a package tailored to your needs."
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto py-10 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <button 
                            onClick={() => toggleFAQ(index)} 
                            className="flex justify-between items-center w-full p-5 text-lg font-semibold text-left bg-[#002147] text-white"
                        >
                            {faq.question}
                            <ChevronDown className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openIndex === index && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0 }}
                                className="p-5 bg-gray-100 text-gray-700"
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
