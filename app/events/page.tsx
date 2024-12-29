'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: "Mountain Summit Challenge",
    date: "July 15-20, 2024",
    location: "Mount Rainier, Washington",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    participants: "20 spots available",
    description: "Join us for an epic 6-day summit challenge. Professional guides, equipment included."
  },
  {
    id: 2,
    title: "Desert Canyon Trek",
    date: "August 5-8, 2024",
    location: "Grand Canyon, Arizona",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
    participants: "15 spots available",
    description: "Experience the majestic Grand Canyon in this guided 4-day trek adventure."
  },
  {
    id: 3,
    title: "Forest Camping Weekend",
    date: "September 1-3, 2024",
    location: "Redwood National Park, California",
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
    participants: "25 spots available",
    description: "A weekend camping trip among the giant redwoods. Perfect for families and beginners."
  }
];

export default function Events() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Upcoming Adventures</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our scheduled events and embark on unforgettable journeys with fellow adventure enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {event.participants}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button className="w-full">Book Now</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}