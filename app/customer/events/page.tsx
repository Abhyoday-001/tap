'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  UsersIcon,
  TicketIcon
} from '@heroicons/react/24/outline';

export default function CustomerEvents() {
  const events = [
    {
      id: '1',
      name: 'Tech Conference 2024',
      date: 'December 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Convention Center, Downtown',
      price: '$45.00',
      capacity: '500 people',
      available: 127,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Join industry leaders for a day of innovation, networking, and cutting-edge technology discussions.',
      category: 'Technology'
    },
    {
      id: '2',
      name: 'Music Festival',
      date: 'December 20, 2024',
      time: '6:00 PM - 12:00 AM',
      location: 'City Park Amphitheater',
      price: '$75.00',
      capacity: '2000 people',
      available: 456,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experience an unforgettable night with top artists and live performances under the stars.',
      category: 'Music'
    },
    {
      id: '3',
      name: 'Food Fair',
      date: 'December 25, 2024',
      time: '11:00 AM - 8:00 PM',
      location: 'Exhibition Hall',
      price: '$25.00',
      capacity: '800 people',
      available: 234,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover culinary delights from around the world with local and international food vendors.',
      category: 'Food'
    },
    {
      id: '4',
      name: 'Art Exhibition',
      date: 'December 28, 2024',
      time: '10:00 AM - 7:00 PM',
      location: 'Modern Art Gallery',
      price: '$30.00',
      capacity: '300 people',
      available: 89,
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore contemporary art from emerging and established artists in an immersive gallery experience.',
      category: 'Art'
    },
    {
      id: '5',
      name: 'Business Summit',
      date: 'January 5, 2025',
      time: '8:00 AM - 5:00 PM',
      location: 'Business Center',
      price: '$120.00',
      capacity: '400 people',
      available: 67,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Network with business leaders and learn about the latest trends in entrepreneurship and innovation.',
      category: 'Business'
    },
    {
      id: '6',
      name: 'Sports Tournament',
      date: 'January 10, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Sports Complex',
      price: '$35.00',
      capacity: '1500 people',
      available: 678,
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cheer for your favorite teams in this exciting multi-sport tournament featuring local athletes.',
      category: 'Sports'
    }
  ];

  const categories = ['All', 'Technology', 'Music', 'Food', 'Art', 'Business', 'Sports'];

  return (
    <DashboardLayout role="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Discover Events</h1>
          <p className="text-gray-600">Find and book tickets for amazing events</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-900 rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-white">{event.name}</CardTitle>
                  <p className="text-sm text-gray-300">{event.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <UsersIcon className="w-4 h-4 mr-2" />
                      {event.available} tickets available
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="w-5 h-5 text-green-600 mr-1" />
                      <span className="text-lg font-bold text-white">{event.price}</span>
                    </div>
                    <Button size="sm">
                      <TicketIcon className="w-4 h-4 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}