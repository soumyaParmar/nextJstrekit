'use client';

import { motion } from 'framer-motion';
import CampingSiteCard from './components/CampingSiteCard';
import { campingSites } from './data/campingSites';

export default function Camping() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Camping Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover perfect camping spots in {"nature's"} most beautiful locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campingSites.map((site, index) => (
            <CampingSiteCard key={site.id} site={site} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}