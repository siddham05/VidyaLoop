'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
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
  Menu,
  GraduationCap,
  BookMarked
} from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Don't show main navigation on dashboard/student/teacher/parent pages - they have their own navigation
  if (pathname?.startsWith('/dashboard') || pathname?.startsWith('/students') || pathname?.startsWith('/teachers') || pathname?.startsWith('/parents')) {
    return null;
  }

  const getDashboardLink = () => {
    if (!session?.user?.role) return '/';
    
    switch (session.user.role) {
      case 'teacher':
        return '/teachers/dashboard';
      case 'student':
        return '/students/dashboard';
      case 'parent':
        return '/parents/dashboard';
        return '/parents';
      case 'admin':
        return '/admin';
      default:
        return '/';
    }
  };

  const getRoleIcon = () => {
    if (!session?.user?.role) return User;
    
    switch (session.user.role) {
      case 'teacher':
        return GraduationCap;
      case 'student':
        return BookMarked;
      case 'parent':
        return Users;
      default:
        return User;
    }
  };

  const getRoleColor = () => {
    if (!session?.user?.role) return 'bg-gray-100 text-gray-800';
    
    switch (session.user.role) {
      case 'teacher':
        return 'bg-blue-100 text-blue-800';
      case 'student':
        return 'bg-green-100 text-green-800';
      case 'parent':
        return 'bg-purple-100 text-purple-800';
      case 'admin':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">VidyaLoop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {status === 'authenticated' && session ? (
              <div className="flex items-center space-x-4">
                {session.user.role === 'teacher' && (
                  <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Dashboard
                  </Link>
                )}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={session.user.image || ''} alt={session.user.name || ''} />
                        <AvatarFallback>
                          {session.user.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium text-gray-900">{session.user.name}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {session.user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    {session.user.role === 'teacher' && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard/courses">
                            <BookOpen className="mr-2 h-4 w-4" />
                            My Courses
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard/batches">
                            <Users className="mr-2 h-4 w-4" />
                            My Batches
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard/jobs">
                            <Briefcase className="mr-2 h-4 w-4" />
                            Job Applications
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    {session.user.role === 'student' && (
                      <DropdownMenuItem asChild>
                        <Link href="/students">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Student Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {session.user.role === 'parent' && (
                      <DropdownMenuItem asChild>
                        <Link href="/parents">
                          <User className="mr-2 h-4 w-4" />
                          Parent Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {session.user.role === 'admin' && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin">
                          <Settings className="mr-2 h-4 w-4" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/messages">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Messages
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/wallet">
                        <Wallet className="mr-2 h-4 w-4" />
                        Wallet
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/reviews">
                        <Star className="mr-2 h-4 w-4" />
                        Reviews
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
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
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {status === 'authenticated' && session ? (
              <div className="border-t pt-4">
                <div className="flex items-center px-3 py-2">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage src={session.user.image || ''} alt={session.user.name || ''} />
                    <AvatarFallback>
                      {session.user.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{session.user.name}</p>
                    <p className="text-sm text-gray-700">{session.user.email}</p>
                  </div>
                </div>
                
                {session.user.role === 'teacher' && (
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  >
                    Dashboard
                  </Link>
                )}
                
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="border-t pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button
                  className="w-full"
                  asChild
                >
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
