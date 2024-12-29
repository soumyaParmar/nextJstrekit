'use client';

import { motion } from 'framer-motion';
import { Tent, Wifi, Utensils, DollarSign, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const amenityIcons = {
  Wifi: <Wifi className="w-4 h-4" />,
  Restaurant: <Utensils className="w-4 h-4" />,
  default: <Tent className="w-4 h-4" />
};

interface CampingSite {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  amenities: string[];
  description: string;
}

interface Props {
  site: CampingSite;
  index: number;
}

export default function CampingSiteCard({ site, index }: Props) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div 
          className="h-48 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${site.image})` }}
        />
        <CardHeader>
          <CardTitle>{site.title}</CardTitle>
          <CardDescription className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {site.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{site.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {site.amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                {(amenityIcons as any)[amenity] || amenityIcons.default}
                <span className="ml-1">{amenity}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-primary font-semibold">
              <DollarSign className="w-4 h-4 mr-1" />
              {site.price}
            </div>
            <Button>Book Now</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}