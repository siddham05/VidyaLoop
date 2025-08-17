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
  Users,
  BarChart3,
  CreditCard,
  Settings,
  Phone,
  Calendar,
  FileText,
  Heart,
  Shield,
  Home
} from 'lucide-react';
import { useState } from 'react';

export function ParentNavigation() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navigationItems = [
    { href: '/parents/dashboard', label: 'Dashboard', icon: Home },
    { href: '/parents/children', label: 'My Children', icon: Users },
    { href: '/parents/progress-tracking', label: 'Progress', icon: BarChart3 },
    { href: '/parents/tutor-search', label: 'Find Tutors', icon: User },
    { href: '/parents/payments', label: 'Payments', icon: CreditCard },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/parents/dashboard" className="text-2xl font-bold text-white">
              VidyaLoop
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-white border-b-2 border-white'
                      : 'text-purple-100 hover:text-white'
                  } px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Actions and User */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="p-2 text-purple-100 hover:text-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Messages */}
            <button className="p-2 text-purple-100 hover:text-white">
              <MessageCircle className="h-5 w-5" />
            </button>

            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session?.user?.image || ''} alt="Profile" />
                    <AvatarFallback className="bg-pink-100 text-pink-600">
                      {session?.user?.name?.charAt(0) || 'P'}
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
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                      Parent
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                {/* Parent-specific menu items */}
                <DropdownMenuItem asChild>
                  <Link href="/parents/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Parent Profile</span>
                      <span className="text-xs text-muted-foreground">Manage your account & family info</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parents/children" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Children Management</span>
                      <span className="text-xs text-muted-foreground">Add & manage children's profiles</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parents/progress-tracking" className="flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Progress Reports</span>
                      <span className="text-xs text-muted-foreground">Track children's academic performance</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parents/communications" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Teacher Communications</span>
                      <span className="text-xs text-muted-foreground">Chat with teachers & get updates</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parents/payments" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Payment Management</span>
                      <span className="text-xs text-muted-foreground">Billing, invoices & payment history</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parents/reports" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Academic Reports</span>
                      <span className="text-xs text-muted-foreground">Download progress reports & certificates</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/parents/safety" className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>Safety & Privacy</span>
                      <span className="text-xs text-muted-foreground">Child safety settings & controls</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/parents/settings" className="flex items-center">
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-purple-100 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-purple-800 text-white'
                    : 'text-purple-100 hover:bg-purple-600 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center space-x-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            
            <div className="border-t border-purple-500 pt-4">
              <div className="flex items-center px-3 py-2">
                <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-white">{session?.user?.name}</p>
                  <p className="text-sm text-purple-200">{session?.user?.email}</p>
                </div>
              </div>
              
              <button
                onClick={() => signOut()}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-purple-100 hover:text-white hover:bg-purple-600"
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
