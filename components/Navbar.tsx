'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { 
  Bars3Icon, 
  XMarkIcon, 
  CreditCardIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  QrCodeIcon
} from '@heroicons/react/24/outline';

interface NavbarProps {
  role?: 'admin' | 'volunteer' | 'customer' | null;
}

export default function Navbar({ role }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getNavItems = () => {
    if (!role) {
      return [
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ];
    }

    switch (role) {
      case 'admin':
        return [
          { name: 'Dashboard', href: '/admin/dashboard', icon: Cog6ToothIcon },
          { name: 'Events', href: '/admin/events', icon: CreditCardIcon },
          { name: 'Users', href: '/admin/users', icon: UserCircleIcon },
        ];
      case 'volunteer':
        return [
          { name: 'Dashboard', href: '/volunteer/dashboard', icon: Cog6ToothIcon },
          { name: 'Scanner', href: '/volunteer/scanner', icon: QrCodeIcon },
          { name: 'Events', href: '/volunteer/events', icon: CreditCardIcon },
        ];
      case 'customer':
        return [
          { name: 'Dashboard', href: '/customer/dashboard', icon: Cog6ToothIcon },
          { name: 'Events', href: '/customer/events', icon: CreditCardIcon },
          { name: 'Bookings', href: '/customer/bookings', icon: UserCircleIcon },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CreditCardIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tapnex
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
            
            <ThemeToggle />
            
            {!role && (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
            )}
            
            {role && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild>
                  <Link href="/">Logout</Link>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {!role && (
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            )}
            
            {role && (
              <div className="pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/">Logout</Link>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}