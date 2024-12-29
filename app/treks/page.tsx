'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mountain, Clock, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const treks = [
  {
    id: 1,
    title: "Mount Everest Base Camp",
    difficulty: "Hard",
    duration: "14 days",
    elevation: "5,364m",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227",
    description: "Trek to the base of the world's highest mountain through stunning Himalayan landscapes.",
    slug: "everest-base-camp"
  },
  {
    id: 2,
    title: "Inca Trail to Machu Picchu",
    difficulty: "Moderate",
    duration: "4 days",
    elevation: "4,215m",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Follow ancient Incan paths through the Andes to the lost city of Machu Picchu.",
    slug: "inca-trail"
  },
  {
    id: 3,
    title: "Tour du Mont Blanc",
    difficulty: "Moderate",
    duration: "11 days",
    elevation: "2,665m",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    description: "Circle the Mont Blanc massif through France, Italy, and Switzerland.",
    slug: "mont-blanc"
  }
];

export default function Treks() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Epic Trek Adventures</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of world-class trekking experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek, index) => (
            <Link href={`/treks/${trek.slug}`} key={trek.id}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div 
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${trek.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{trek.title}</CardTitle>
                    <CardDescription>{trek.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Dumbbell className="w-4 h-4 mr-1" />
                        {trek.difficulty}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {trek.duration}
                      </div>
                      <div className="flex items-center">
                        <Mountain className="w-4 h-4 mr-1" />
                        {trek.elevation}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}