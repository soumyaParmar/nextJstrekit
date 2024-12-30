'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Tent, MapPin, Calendar, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/30 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Tent className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">TrekIt Himalaya</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
              <Link href="/events" className="text-gray-700 hover:text-primary transition">Events</Link>
              <Link href="/treks" className="text-gray-700 hover:text-primary transition">Treks</Link>
              <Link href="/camping" className="text-gray-700 hover:text-primary transition">Camping</Link>
              <button 
                onClick={() => setShowContact(true)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
              >
                Contact Us
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary transition">Home</Link>
              <Link href="/events" className="block px-3 py-2 text-gray-700 hover:text-primary transition">Events</Link>
              <Link href="/treks" className="block px-3 py-2 text-gray-700 hover:text-primary transition">Treks</Link>
              <Link href="/camping" className="block px-3 py-2 text-gray-700 hover:text-primary transition">Camping</Link>
              <button 
                onClick={() => setShowContact(true)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="sm:max-w-[425px]">
          <ContactForm onClose={() => setShowContact(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}