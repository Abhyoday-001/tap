'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCardIcon, 
  TicketIcon, 
  UserIcon,
  QrCodeIcon 
} from '@heroicons/react/24/outline';

interface Activity {
  id: string;
  type: 'payment' | 'booking' | 'user' | 'scan';
  message: string;
  time: string;
  user?: string;
}

interface ActivityFeedProps {
  activities: Activity[];
  title?: string;
}

export default function ActivityFeed({ activities, title = "Recent Activity" }: ActivityFeedProps) {
  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'payment':
        return CreditCardIcon;
      case 'booking':
        return TicketIcon;
      case 'user':
        return UserIcon;
      case 'scan':
        return QrCodeIcon;
      default:
        return CreditCardIcon;
    }
  };

  const getIconColor = (type: Activity['type']) => {
    switch (type) {
      case 'payment':
        return 'text-green-600 bg-green-100';
      case 'booking':
        return 'text-blue-600 bg-blue-100';
      case 'user':
        return 'text-purple-600 bg-purple-100';
      case 'scan':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Card className="border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = getIcon(activity.type);
            const iconColor = getIconColor(activity.type);
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <motion.div 
                  className={`p-2 rounded-full ${iconColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
                  {activity.user && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">by {activity.user}</p>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}