"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Tent, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Treks from "./treks/page";
import Camping from "./camping/page";
import Events from "./events/page";
import insta from "../public/insta.svg";
import whatsapp from "../public/whatsapp.svg";
import gmail from "../public/gmail.svg";
import Image from "next/image";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/bg.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <div className="text-center space-y-6 px-4">
            <motion.h1
              className="text-7xl text-white/50 md:text-7xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Adventure Awaits
            </motion.h1>
            <motion.p
              className="text-xl text-white/50 md:text-2xl max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover breathtaking trails, unforgettable camping spots, and
              amazing trekking experiences
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/treks">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Treks <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Mountain className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold">Expert Guides</h3>
              <p className="text-gray-600">
                Professional guides with years of experience in mountain
                trekking
              </p>
            </motion.div>

            <motion.div
              className="text-center space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Tent className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold">Quality Equipment</h3>
              <p className="text-gray-600">
                Top-notch camping gear and safety equipment provided
              </p>
            </motion.div>

            <motion.div
              className="text-center space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Users className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold">Small Groups</h3>
              <p className="text-gray-600">
                Intimate group sizes for better experience and safety
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <Treks className="!pt-0" />
        <Camping className="!pt-0" />
        <Events className="!pt-0" />
      </div>
      <div className="flex fixed bottom-5 right-0 bg-black/50 z-50 pr-1 rounded-l-full">
        <Link href="https://www.instagram.com/trekit_himalaya/profilecard/?igsh=MTJyOWtqYWhudmtrYw==">
          <Image src={insta} alt="" />
        </Link>
        <Link className="flex" href="https://wa.me/+917302019143">
          <Image src={whatsapp} height={40} alt="" />
        </Link>
        <Link href="mailto:trekithimalaya.com">
          <Image src={gmail} alt="" />
        </Link>
      </div>
    </main>
  );
}
