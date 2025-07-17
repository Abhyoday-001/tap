'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TicketIcon,
  CalendarIcon,
  MapPinIcon,
  QrCodeIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

export default function CustomerBookings() {
  const bookings = [
    {
      id: 'TC2024-001',
      event: 'Tech Conference 2024',
      date: 'December 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Convention Center, Downtown',
      amount: '$45.00',
      status: 'confirmed',
      bookingDate: 'November 28, 2024',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'MF2024-045',
      event: 'Music Festival',
      date: 'December 20, 2024',
      time: '6:00 PM - 12:00 AM',
      location: 'City Park Amphitheater',
      amount: '$75.00',
      status: 'confirmed',
      bookingDate: 'November 25, 2024',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'FF2024-123',
      event: 'Food Fair',
      date: 'December 25, 2024',
      time: '11:00 AM - 8:00 PM',
      location: 'Exhibition Hall',
      amount: '$25.00',
      status: 'pending',
      bookingDate: 'November 30, 2024',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'AE2024-067',
      event: 'Art Exhibition',
      date: 'November 15, 2024',
      time: '10:00 AM - 7:00 PM',
      location: 'Modern Art Gallery',
      amount: '$30.00',
      status: 'completed',
      bookingDate: 'November 10, 2024',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'BS2024-089',
      event: 'Business Summit',
      date: 'November 20, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'Business Center',
      amount: '$120.00',
      status: 'cancelled',
      bookingDate: 'November 5, 2024',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-600" />;
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-blue-600" />;
      case 'cancelled':
        return <XCircleIcon className="w-5 h-5 text-red-600" />;
      default:
        return <ClockIcon className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { label: 'Total Bookings', value: '5', color: 'text-blue-600' },
    { label: 'Confirmed', value: '2', color: 'text-green-600' },
    { label: 'Pending', value: '1', color: 'text-yellow-600' },
    { label: 'Completed', value: '1', color: 'text-blue-600' },
  ];

  return (
    <DashboardLayout role="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your event tickets and bookings</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Bookings List */}
        <div className="space-y-6">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Event Image */}
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={booking.image}
                        alt={booking.event}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Booking Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {booking.event}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Booking ID: {booking.id}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(booking.status)}
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            {booking.date} at {booking.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPinIcon className="w-4 h-4 mr-2" />
                            {booking.location}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <TicketIcon className="w-4 h-4 mr-2" />
                            Amount: {booking.amount}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <ClockIcon className="w-4 h-4 mr-2" />
                            Booked: {booking.bookingDate}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        {booking.status === 'confirmed' && (
                          <>
                            <Button size="sm" variant="default">
                              <QrCodeIcon className="w-4 h-4 mr-1" />
                              Show QR Code
                            </Button>
                            <Button size="sm" variant="outline">
                              <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                              Download Ticket
                            </Button>
                          </>
                        )}
                        {booking.status === 'pending' && (
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        )}
                        {booking.status === 'completed' && (
                          <Button size="sm" variant="outline">
                            <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                            Download Receipt
                          </Button>
                        )}
                        {booking.status === 'cancelled' && (
                          <Button size="sm" variant="outline" disabled>
                            Cancelled
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center py-12"
          >
            <TicketIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600 mb-4">Start exploring events and book your first ticket!</p>
            <Button>
              Explore Events
            </Button>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}