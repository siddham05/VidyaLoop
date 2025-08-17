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
  Settings, 
  LogOut, 
  BookOpen, 
  Users, 
  Briefcase,
  MessageCircle,
  Wallet,
  Star,
  BarChart3,
  GraduationCap,
  Menu,
  Home
} from 'lucide-react';
import { useState } from 'react';

export function TeacherNavigation() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navigationItems = [
    { href: '/teachers/dashboard', label: 'Dashboard', icon: Home },
    { href: '/teachers/courses', label: 'My Courses', icon: BookOpen },
    { href: '/teachers/batches', label: 'My Batches', icon: Users },
    { href: '/teachers/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/teachers/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-gradient-to-r from-brand-primary to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/teachers/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="text-white">
                <span className="text-xl font-bold">VidyaLoop</span>
                <span className="text-xs block text-blue-100">Teacher Portal</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} />
                    <AvatarFallback className="bg-blue-500 text-white">
                      {session?.user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{session?.user?.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {session?.user?.email}
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      Teacher
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                {/* Teacher-specific menu items */}
                <DropdownMenuItem asChild>
                  <Link href="/teachers/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Teacher Profile</span>
                      <span className="text-xs text-muted-foreground">Manage your educator profile</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teachers/analytics" className="flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Teaching Analytics</span>
                      <span className="text-xs text-muted-foreground">View student performance & insights</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teachers/earnings" className="flex items-center">
                    <Wallet className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Earnings & Payouts</span>
                      <span className="text-xs text-muted-foreground">Track income & payment history</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teachers/live-classes" className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Live Classes</span>
                      <span className="text-xs text-muted-foreground">Schedule & conduct live sessions</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teachers/reviews" className="flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Student Reviews</span>
                      <span className="text-xs text-muted-foreground">View ratings & feedback</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teachers/messages" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Student Messages</span>
                      <span className="text-xs text-muted-foreground">Chat with students & resolve doubts</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/teachers/settings" className="flex items-center">
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
                  Log out
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
              className="text-white hover:bg-white hover:bg-opacity-20"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-600">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
            
            <div className="border-t border-blue-500 pt-4">
              <div className="flex items-center px-3 py-2">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} />
                  <AvatarFallback className="bg-brand-primary text-white">
                    {session?.user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">{session?.user?.name}</p>
                  <p className="text-sm text-blue-200">{session?.user?.email}</p>
                </div>
              </div>
              
              <button
                onClick={() => signOut()}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-blue-100 hover:text-white"
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
