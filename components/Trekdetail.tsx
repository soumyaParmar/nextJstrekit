'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { Mountain, Clock, Dumbbell, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Trekdetail = ({trek}:{trek:any}) => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div 
        className="h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${trek.image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            {trek.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 -mt-20 relative z-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center">
              <Dumbbell className="w-5 h-5 mr-2 text-primary" />
              <span>{trek.difficulty}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              <span>{trek.duration}</span>
            </div>
            <div className="flex items-center">
              <Mountain className="w-5 h-5 mr-2 text-primary" />
              <span>{trek.elevation}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-primary" />
              <span>{trek.price}</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              <span>Next Available Date: {trek.nextDate}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span>Location: {trek.location}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            {trek.fullDescription.split('\n').map((paragraph:string, index:number) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          <Button size="lg" className="w-full md:w-auto">
            Book This Trek
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default Trekdetail