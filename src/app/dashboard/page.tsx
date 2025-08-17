'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      const userRole = (session.user as any).role;
      
      // Redirect based on user role
      switch (userRole) {
        case 'teacher':
          router.replace('/teachers/dashboard');
          break;
        case 'student':
          router.replace('/students/dashboard');
          break;
        case 'parent':
          router.replace('/parents/dashboard');
          break;
        default:
          router.replace('/teachers/dashboard');
      }
    } else {
      // Not authenticated, redirect to login
      router.replace('/auth/login');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
        <p className="mt-4 text-brand-text">Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}