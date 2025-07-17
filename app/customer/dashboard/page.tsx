'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import ActivityFeed from '@/components/ActivityFeed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CurrencyDollarIcon,
  TicketIcon,
  CreditCardIcon,
  CalendarIcon,
  QrCodeIcon,
  PlusIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export default function CustomerDashboard() {
  const stats = [
    {
      title: 'Total Spent',
      value: '$342.50',
      change: 'This month',
      icon: CurrencyDollarIcon,
      color: 'green' as const
    },
    {
      title: 'Tickets Purchased',
      value: '12',
      change: '+3 this month',
      icon: TicketIcon,
      color: 'blue' as const
    },
    {
      title: 'NFC Balance',
      value: '$45.00',
      change: 'Available balance',
      icon: CreditCardIcon,
      color: 'purple' as const
    },
    {
      title: 'Events Attended',
      value: '8',
      change: 'This year',
      icon: CalendarIcon,
      color: 'orange' as const
    }
  ];

  const activities = [
    {
      id: '1',
      type: 'payment' as const,
      message: 'Paid $45.00 for Tech Conference 2024 ticket',
      time: '2 hours ago'
    },
    {
      id: '2',
      type: 'payment' as const,
      message: 'NFC card recharged with $25.00',
      time: '1 day ago'
    },
    {
      id: '3',
      type: 'booking' as const,
      message: 'Booked ticket for Music Festival',
      time: '2 days ago'
    },
    {
      id: '4',
      type: 'scan' as const,
      message: 'QR code used for entry at Food Fair',
      time: '3 days ago'
    }
  ];

  const upcomingEvents = [
    { 
      name: 'Tech Conference 2024', 
      date: 'Dec 15, 2024', 
      time: '9:00 AM',
      location: 'Convention Center',
      ticket: 'TC2024-001',
      status: 'Confirmed'
    },
    { 
      name: 'Music Festival', 
      date: 'Dec 20, 2024', 
      time: '6:00 PM',
      location: 'City Park',
      ticket: 'MF2024-045',
      status: 'Confirmed'
    },
    { 
      name: 'Food Fair', 
      date: 'Dec 25, 2024', 
      time: '11:00 AM',
      location: 'Exhibition Hall',
      ticket: 'FF2024-123',
      status: 'Pending'
    },
  ];

  const myBookings = [
    { id: 'TC2024-001', event: 'Tech Conference 2024', date: 'Dec 15, 2024', amount: '$45.00', status: 'Active' },
    { id: 'MF2024-045', event: 'Music Festival', date: 'Dec 20, 2024', amount: '$75.00', status: 'Active' },
    { id: 'FF2024-123', event: 'Food Fair', date: 'Dec 25, 2024', amount: '$25.00', status: 'Pending' },
  ];

  return (
    <DashboardLayout role="customer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your bookings and explore upcoming events</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                  <TicketIcon className="w-6 h-6" />
                  <span>Book Tickets</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <PlusIcon className="w-6 h-6" />
                  <span>Top Up NFC</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <QrCodeIcon className="w-6 h-6" />
                  <span>My QR Code</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  <span>Explore Events</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.ticket}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{event.name}</h4>
                        <p className="text-sm text-gray-500">{event.location}</p>
                        <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                        <p className="text-xs text-gray-400 mt-1">Ticket: {event.ticket}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status}
                        </span>
                        <div className="mt-2">
                          <Button size="sm" variant="outline">
                            <QrCodeIcon className="w-4 h-4 mr-1" />
                            QR Code
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ActivityFeed activities={activities} title="Recent Activity" />
          </motion.div>
        </div>

        {/* My Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>My Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-white">{booking.event}</h4>
                      <p className="text-sm text-gray-500">Booking ID: {booking.id}</p>
                      <p className="text-sm text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">{booking.amount}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* NFC Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="gradient-bg text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">NFC Card</h3>
                  <p className="text-blue-100 mb-4">Tap to pay at any event</p>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-blue-100">Balance</p>
                      <p className="text-3xl font-bold">$45.00</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      <PlusIcon className="w-4 h-4 mr-1" />
                      Top Up
                    </Button>
                  </div>
                </div>
                <div className="w-24 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <CreditCardIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}