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
  UsersIcon,
  PlusIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      change: '+12.5% from last month',
      icon: CurrencyDollarIcon,
      color: 'green' as const
    },
    {
      title: 'Tickets Sold',
      value: '2,847',
      change: '+8.2% from last month',
      icon: TicketIcon,
      color: 'blue' as const
    },
    {
      title: 'NFC Top-ups',
      value: '1,234',
      change: '+15.3% from last month',
      icon: CreditCardIcon,
      color: 'purple' as const
    },
    {
      title: 'Active Users',
      value: '8,492',
      change: '+5.7% from last month',
      icon: UsersIcon,
      color: 'orange' as const
    }
  ];

  const activities = [
    {
      id: '1',
      type: 'payment' as const,
      message: 'Payment of $45.00 processed for Tech Conference 2024',
      user: 'John Doe',
      time: '2 minutes ago'
    },
    {
      id: '2',
      type: 'booking' as const,
      message: 'New ticket booking for Music Festival',
      user: 'Sarah Wilson',
      time: '5 minutes ago'
    },
    {
      id: '3',
      type: 'user' as const,
      message: 'New user registration completed',
      user: 'Mike Johnson',
      time: '10 minutes ago'
    },
    {
      id: '4',
      type: 'scan' as const,
      message: 'QR code scanned at entrance gate',
      user: 'Volunteer #123',
      time: '15 minutes ago'
    }
  ];

  const revenueData = [
    { name: 'Jan', revenue: 4000, tickets: 240 },
    { name: 'Feb', revenue: 3000, tickets: 139 },
    { name: 'Mar', revenue: 2000, tickets: 980 },
    { name: 'Apr', revenue: 2780, tickets: 390 },
    { name: 'May', revenue: 1890, tickets: 480 },
    { name: 'Jun', revenue: 2390, tickets: 380 },
  ];

  const eventData = [
    { name: 'Tech Conf', entries: 1200 },
    { name: 'Music Fest', entries: 2400 },
    { name: 'Food Fair', entries: 800 },
    { name: 'Art Show', entries: 600 },
  ];

  const upcomingEvents = [
    { name: 'Tech Conference 2024', date: 'Dec 15, 2024', tickets: 450, revenue: '$22,500' },
    { name: 'Music Festival', date: 'Dec 20, 2024', tickets: 1200, revenue: '$60,000' },
    { name: 'Food Fair', date: 'Dec 25, 2024', tickets: 300, revenue: '$9,000' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your events, users, and analytics</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Revenue Analytics
                  <ChartBarIcon className="w-5 h-5 text-gray-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#667eea" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ActivityFeed activities={activities} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Event Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Event Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={eventData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="entries" fill="#667eea" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Upcoming Events
                  <Button size="sm">
                    <PlusIcon className="w-4 h-4 mr-1" />
                    Add Event
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{event.name}</h4>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{event.revenue}</p>
                        <p className="text-sm text-gray-500">{event.tickets} tickets</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                  <PlusIcon className="w-6 h-6" />
                  <span>Create Event</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <UsersIcon className="w-6 h-6" />
                  <span>Manage Users</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <ChartBarIcon className="w-6 h-6" />
                  <span>View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}