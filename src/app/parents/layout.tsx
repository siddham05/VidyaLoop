'use client';

import { ParentNavigation } from '@/components/parent-navigation';

export default function ParentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <ParentNavigation />
      <main>{children}</main>
    </div>
  );
}
