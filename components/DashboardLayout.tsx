'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
  role: 'admin' | 'volunteer' | 'customer';
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen gradient-bg neon-flicker transition-colors">
      <Navbar role={role} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}