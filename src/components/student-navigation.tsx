'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  User, 
  MessageCircle,
  Menu,
  Bell,
  LogOut,
  BookOpen,
  Target,
  Award,
  Calendar,
  Settings,
  CreditCard,
  Download,
  Users,
  GraduationCap
} from 'lucide-react';
import { useState } from 'react';

export function StudentNavigation() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navigationItems = [
    { href: '/students/dashboard', label: 'Dashboard' },
    { href: '/students/courses', label: 'My Courses' },
    { href: '/students/live-classes', label: 'Live Classes' },
    { href: '/students/doubt-chat', label: 'Doubt Chat' },
    { href: '/students/progress', label: 'Progress' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-background border-b border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/students/dashboard" className="text-2xl font-bold text-brand-secondary">
              VidyaLoop
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-brand-secondary font-medium'
                      : 'text-brand-text hover:text-brand-secondary'
                  } transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Actions and User */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="p-2 text-gray-600 hover:text-gray-900 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Messages */}
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <MessageCircle className="h-5 w-5" />
            </button>

            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user?.image || ''} alt="Profile" />
                    <AvatarFallback className="bg-green-100 text-brand-secondary">
                      {session?.user?.name?.charAt(0) || 'S'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{session?.user?.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {session?.user?.email}
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-brand-secondary">
                      Student
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                {/* Student-specific menu items */}
                <DropdownMenuItem asChild>
                  <Link href="/students/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Student Profile</span>
                      <span className="text-xs text-muted-foreground">Manage your learning profile</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/students/assignments" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Assignments</span>
                      <span className="text-xs text-muted-foreground">View & submit assignments</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/students/progress" className="flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Learning Progress</span>
                      <span className="text-xs text-muted-foreground">Track your performance & goals</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/students/achievements" className="flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Achievements</span>
                      <span className="text-xs text-muted-foreground">View badges & certificates</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/students/schedule" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Class Schedule</span>
                      <span className="text-xs text-muted-foreground">View upcoming classes & events</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/students/tutors" className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>My Tutors</span>
                      <span className="text-xs text-muted-foreground">Connect with your teachers</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/students/downloads" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Downloads</span>
                      <span className="text-xs text-muted-foreground">Study materials & resources</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/students/settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Account Settings</span>
                      <span className="text-xs text-muted-foreground">Privacy, notifications & preferences</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-green-50 text-brand-secondary border-r-4 border-brand-secondary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center px-3 py-2">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-brand-secondary" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{session?.user?.name}</p>
                  <p className="text-sm text-gray-500">{session?.user?.email}</p>
                </div>
              </div>
              
              <button
                onClick={() => signOut()}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
