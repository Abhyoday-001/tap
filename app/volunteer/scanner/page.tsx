'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CameraIcon,
  CheckCircleIcon,
  XCircleIcon,
  QrCodeIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export default function VolunteerScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [lastScan, setLastScan] = useState<{
    result: 'success' | 'error';
    message: string;
    user?: string;
    time: string;
  } | null>(null);

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning after 2 seconds
    setTimeout(() => {
      const isValid = Math.random() > 0.3; // 70% success rate
      setLastScan({
        result: isValid ? 'success' : 'error',
        message: isValid ? 'Valid ticket - Entry granted' : 'Invalid or expired ticket',
        user: isValid ? 'John Doe' : 'Unknown User',
        time: new Date().toLocaleTimeString()
      });
      setIsScanning(false);
    }, 2000);
  };

  const recentScans = [
    { id: '1', user: 'Sarah Wilson', result: 'success', time: '2:34 PM', event: 'Tech Conference' },
    { id: '2', user: 'Mike Johnson', result: 'error', time: '2:32 PM', event: 'Tech Conference' },
    { id: '3', user: 'Emily Brown', result: 'success', time: '2:30 PM', event: 'Tech Conference' },
    { id: '4', user: 'David Lee', result: 'success', time: '2:28 PM', event: 'Tech Conference' },
  ];

  return (
    <DashboardLayout role="volunteer">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">QR Code Scanner</h1>
          <p className="text-gray-600">Scan tickets and validate entries</p>
        </motion.div>

        {/* Scanner Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="relative">
                  <div className={`w-64 h-64 mx-auto rounded-2xl border-4 border-dashed flex items-center justify-center transition-all duration-300 ${
                    isScanning 
                      ? 'border-blue-500 bg-blue-50 animate-pulse' 
                      : 'border-gray-300 bg-gray-50'
                  }`}>
                    {isScanning ? (
                      <div className="text-center">
                        <BoltIcon className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-spin" />
                        <p className="text-blue-600 font-medium">Scanning...</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <QrCodeIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Ready to scan</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={handleStartScan}
                    disabled={isScanning}
                    size="lg"
                    className="px-8 py-3"
                  >
                    <CameraIcon className="w-5 h-5 mr-2" />
                    {isScanning ? 'Scanning...' : 'Start Scanner'}
                  </Button>
                </div>

                {/* Last Scan Result */}
                {lastScan && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mt-6 p-4 rounded-lg ${
                      lastScan.result === 'success' 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {lastScan.result === 'success' ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircleIcon className="w-6 h-6 text-red-600" />
                      )}
                      <div className="text-center">
                        <p className={`font-medium ${
                          lastScan.result === 'success' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {lastScan.message}
                        </p>
                        {lastScan.user && (
                          <p className="text-sm text-gray-600">User: {lastScan.user}</p>
                        )}
                        <p className="text-xs text-gray-500">Scanned at {lastScan.time}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Scans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentScans.map((scan, index) => (
                  <motion.div
                    key={scan.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        scan.result === 'success' ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <p className="font-medium text-white">{scan.user}</p>
                        <p className="text-sm text-gray-500">{scan.event}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">{scan.time}</p>
                      <p className={`text-xs ${
                        scan.result === 'success' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {scan.result === 'success' ? 'Valid' : 'Invalid'}
                      </p>
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