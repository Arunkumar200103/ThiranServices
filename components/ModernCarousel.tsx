"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const ModernCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Manickavasagar",
      role: "CEO & FOUNDER",
      image: "/manikcarusol.jpg?w=400&h=400&fit=crop"
    },
    {
      id: 2,
       name: "Arun Kumar",
      role: "SENIOR DEVELOPER",
      image: "/aruncarusol.jpg?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Sreesanth",
      role: "LEAD DESIGNER",
      image: "/sreecarusal.jpg?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Sri Raj",
      role: "Frontend Engineer",
      image: "/sricarusol.jpg?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "MARKETING HEAD",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "SENIOR DEVELOPER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Anna Rodriguez",
      role: "UX RESEARCHER",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    {
    id: 8,
     name: "Michael Steward",
      role: "CREATIVE DIRECTOR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + teamMembers.length) % teamMembers.length;
    
    if (position === 0) {
      // Center card
      return {
        transform: 'translateX(0) translateZ(0) scale(1.1)',
        opacity: 1,
        zIndex: 50,
        filter: 'grayscale(0%) brightness(1.05)'
      };
    } else if (position === 1) {
      // Right card
      return {
        transform: 'translateX(70%) translateZ(-250px) scale(0.85)',
        opacity: 0.7,
        zIndex: 30,
        filter: 'grayscale(40%)'
      };
    } else if (position === teamMembers.length - 1) {
      // Left card
      return {
        transform: 'translateX(-70%) translateZ(-250px) scale(0.85)',
        opacity: 0.7,
        zIndex: 30,
        filter: 'grayscale(40%)'
      };
    } else if (position === 2) {
      // Far right
      return {
        transform: 'translateX(140%) translateZ(-500px) scale(0.65)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'grayscale(70%)'
      };
    } else if (position === teamMembers.length - 2) {
      // Far left
      return {
        transform: 'translateX(-140%) translateZ(-500px) scale(0.65)',
        opacity: 0.4,
        zIndex: 10,
        filter: 'grayscale(70%)'
      };
    } else {
      // Hidden
      return {
        transform: 'translateX(200%) translateZ(-700px) scale(0.5)',
        opacity: 0,
        zIndex: 0,
        filter: 'grayscale(100%)'
      };
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Team Title */}
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 tracking-wider drop-shadow-lg">
          OUR TEAM
        </h2>

        {/* Carousel Container */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Cards */}
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => goToSlide(index)}
              >
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl overflow-hidden w-72 h-96 border border-gray-200/50 hover:shadow-blue-500/20 hover:shadow-3xl transition-shadow duration-300">
                  <div className="h-72 overflow-hidden relative group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 text-center bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 tracking-widest font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
              aria-label="Next slide"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-16">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-10 h-3 shadow-lg shadow-blue-500/50'
                    : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCarousel;