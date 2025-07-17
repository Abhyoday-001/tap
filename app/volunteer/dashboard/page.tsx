'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import StatCard from '@/components/StatCard';
import ActivityFeed from '@/components/ActivityFeed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  QrCodeIcon,
  CreditCardIcon,
  TicketIcon,
  ClockIcon,
  CameraIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export default function VolunteerDashboard() {
  const stats = [
    {
      title: 'QR Scans Today',
      value: '127',
      change: '+23 from yesterday',
      icon: QrCodeIcon,
      color: 'blue' as const
    },
    {
      title: 'NFC Recharges',
      value: '45',
      change: '+12 from yesterday',
      icon: CreditCardIcon,
      color: 'green' as const
    },
    {
      title: 'Tickets Validated',
      value: '89',
      change: '+18 from yesterday',
      icon: TicketIcon,
      color: 'purple' as const
    },
    {
      title: 'Hours Worked',
      value: '6.5',
      change: 'Current shift',
      icon: ClockIcon,
      color: 'orange' as const
    }
  ];

  const activities = [
    {
      id: '1',
      type: 'scan' as const,
      message: 'QR code scanned successfully - Entry granted',
      time: '1 minute ago'
    },
    {
      id: '2',
      type: 'payment' as const,
      message: 'NFC card recharged with $25.00',
      time: '3 minutes ago'
    },
    {
      id: '3',
      type: 'scan' as const,
      message: 'Invalid QR code detected - Entry denied',
      time: '5 minutes ago'
    },
    {
      id: '4',
      type: 'booking' as const,
      message: 'Ticket validation completed',
      time: '8 minutes ago'
    }
  ];

  const assignedEvents = [
    { name: 'Tech Conference 2024', location: 'Main Hall', time: '9:00 AM - 6:00 PM', status: 'Active' },
    { name: 'Music Festival', location: 'Outdoor Stage', time: '2:00 PM - 11:00 PM', status: 'Upcoming' },
    { name: 'Food Fair', location: 'Exhibition Center', time: '10:00 AM - 8:00 PM', status: 'Upcoming' },
  ];

  const recentScans = [
    { id: 'QR001', user: 'John Doe', event: 'Tech Conference', time: '2:34 PM', status: 'Valid' },
    { id: 'QR002', user: 'Sarah Wilson', event: 'Tech Conference', time: '2:32 PM', status: 'Valid' },
    { id: 'QR003', user: 'Mike Johnson', event: 'Tech Conference', time: '2:30 PM', status: 'Invalid' },
    { id: 'QR004', user: 'Emily Brown', event: 'Tech Conference', time: '2:28 PM', status: 'Valid' },
  ];

  return (
    <DashboardLayout role="volunteer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Volunteer Dashboard</h1>
          <p className="text-gray-600">Manage QR scanning and NFC operations</p>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-24 flex flex-col items-center justify-center space-y-2 nfc-glow">
                  <CameraIcon className="w-8 h-8" />
                  <span className="font-medium">Start QR Scanner</span>
                  <span className="text-xs opacity-75">Scan tickets & payments</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <BoltIcon className="w-8 h-8" />
                  <span className="font-medium">NFC Recharge</span>
                  <span className="text-xs opacity-75">Top up customer cards</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <TicketIcon className="w-8 h-8" />
                  <span className="font-medium">Validate Tickets</span>
                  <span className="text-xs opacity-75">Manual validation</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Scans */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent QR Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan, index) => (
                    <motion.div
                      key={scan.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          scan.status === 'Valid' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <p className="font-medium text-white">{scan.user}</p>
                          <p className="text-sm text-gray-500">{scan.event}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">{scan.time}</p>
                        <p className={`text-xs ${
                          scan.status === 'Valid' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {scan.status}
                        </p>
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
            <ActivityFeed activities={activities} title="My Activity" />
          </motion.div>
        </div>

        {/* Assigned Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Assigned Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignedEvents.map((event, index) => (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-white">{event.name}</h4>
                      <p className="text-sm text-gray-500">{event.location}</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}