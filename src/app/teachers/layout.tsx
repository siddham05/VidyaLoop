'use client';

import { TeacherNavigation } from '@/components/teacher-navigation';

export default function TeachersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />
      <main>{children}</main>
    </div>
  );
}
