'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, BookOpen, Users, Trophy, Calendar, Clock, 
  Star, MapPin, Search, Filter, Heart, Share2,
  Download, Settings, Bell, User, ChevronRight,
  TrendingUp, Target, Zap, Award, Video,
  MessageCircle, FileText, BarChart3, CheckCircle,
  ExternalLink, Bookmark, Eye, ThumbsUp, Globe,
  IndianRupee, ArrowRight, Plus, Mic, Camera,
  Headphones, Monitor, Smartphone, ChevronDown,
  Book, GraduationCap, Brain, Timer, Grid,
  List, SortAsc, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function StudentCoursesPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                VidyaLoop
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/students/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                <Link href="/students/courses" className="text-blue-600 font-medium">My Courses</Link>
                <Link href="/students/live-classes" className="text-gray-600 hover:text-gray-900">Live Classes</Link>
                <Link href="/students/doubt-chat" className="text-gray-600 hover:text-gray-900">Doubt Chat</Link>
                <Link href="/students/progress" className="text-gray-600 hover:text-gray-900">Progress</Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <MessageCircle className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link href="/students/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">📚 My Learning Journey</h1>
            <p className="text-xl text-blue-100 mb-8">Continue your path to success with our comprehensive courses</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Enrolled Courses', value: '8', icon: BookOpen },
                { label: 'Hours Learned', value: '147h', icon: Clock },
                { label: 'Certificates', value: '3', icon: Award },
                { label: 'Study Streak', value: '12 days', icon: Target }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-white" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-blue-100 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select 
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Courses</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="not-started">Not Started</option>
                </select>
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Continue Learning Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Complete JEE Physics - Mechanics',
                instructor: 'Dr. Priya Sharma',
                progress: 68,
                nextLesson: 'Rotational Motion',
                duration: '45 min',
                thumbnail: '⚛️',
                difficulty: 'Advanced',
                rating: 4.9,
                students: '15,847'
              },
              {
                title: 'JEE Mathematics - Calculus',
                instructor: 'Prof. Rajesh Gupta',
                progress: 45,
                nextLesson: 'Integration Techniques',
                duration: '52 min',
                thumbnail: '📐',
                difficulty: 'Intermediate',
                rating: 4.8,
                students: '12,234'
              },
              {
                title: 'Organic Chemistry Mastery',
                instructor: 'Dr. Meera Patel',
                progress: 82,
                nextLesson: 'Reaction Mechanisms',
                duration: '38 min',
                thumbnail: '🧪',
                difficulty: 'Advanced',
                rating: 4.9,
                students: '9,567'
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{course.thumbnail}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                      course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {course.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.instructor}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Next: {course.nextLesson}</p>
                      <p className="text-xs text-gray-500">{course.duration}</p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4 mr-1" />
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Courses Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">📖 All My Courses</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Recently Accessed</option>
                <option>Progress</option>
                <option>Name</option>
                <option>Instructor</option>
              </select>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'JEE Physics Complete Course',
                  instructor: 'Dr. Priya Sharma',
                  progress: 68,
                  totalLessons: 156,
                  completedLessons: 106,
                  duration: '48 hours',
                  price: '₹2,999',
                  thumbnail: '⚛️',
                  status: 'in-progress',
                  rating: 4.9,
                  reviews: 847,
                  lastAccessed: '2 hours ago'
                },
                {
                  title: 'JEE Mathematics Mastery',
                  instructor: 'Prof. Rajesh Gupta',
                  progress: 45,
                  totalLessons: 189,
                  completedLessons: 85,
                  duration: '52 hours',
                  price: '₹3,499',
                  thumbnail: '📐',
                  status: 'in-progress',
                  rating: 4.8,
                  reviews: 623,
                  lastAccessed: '1 day ago'
                },
                {
                  title: 'Organic Chemistry Simplified',
                  instructor: 'Dr. Meera Patel',
                  progress: 82,
                  totalLessons: 124,
                  completedLessons: 102,
                  duration: '38 hours',
                  price: '₹2,499',
                  thumbnail: '🧪',
                  status: 'in-progress',
                  rating: 4.9,
                  reviews: 456,
                  lastAccessed: '3 hours ago'
                },
                {
                  title: 'JEE Mock Test Series 2025',
                  instructor: 'Expert Panel',
                  progress: 100,
                  totalLessons: 50,
                  completedLessons: 50,
                  duration: '25 hours',
                  price: '₹1,999',
                  thumbnail: '📝',
                  status: 'completed',
                  rating: 4.7,
                  reviews: 1203,
                  lastAccessed: '1 week ago'
                },
                {
                  title: 'English & Logical Reasoning',
                  instructor: 'Prof. Anita Roy',
                  progress: 0,
                  totalLessons: 75,
                  completedLessons: 0,
                  duration: '30 hours',
                  price: '₹1,499',
                  thumbnail: '📚',
                  status: 'not-started',
                  rating: 4.6,
                  reviews: 289,
                  lastAccessed: 'Never'
                },
                {
                  title: 'JEE Advanced Physics',
                  instructor: 'Dr. Vikash Kumar',
                  progress: 23,
                  totalLessons: 98,
                  completedLessons: 23,
                  duration: '42 hours',
                  price: '₹3,999',
                  thumbnail: '🚀',
                  status: 'in-progress',
                  rating: 4.8,
                  reviews: 345,
                  lastAccessed: '2 days ago'
                }
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{course.thumbnail}</div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          course.status === 'completed' ? 'bg-green-100 text-green-700' :
                          course.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {course.status === 'completed' ? 'Completed' :
                           course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{course.instructor}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{course.rating}</span>
                        <span>({course.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.progress}% complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              course.status === 'completed' ? 'bg-green-500' : 'bg-blue-600'
                            }`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-blue-600">{course.price}</p>
                        <p className="text-xs text-gray-500">Last accessed: {course.lastAccessed}</p>
                      </div>
                      <Button className={`${
                        course.status === 'completed' ? 'bg-green-600 hover:bg-green-700' :
                        course.status === 'in-progress' ? 'bg-purple-600 hover:bg-purple-700' :
                        'bg-blue-600 hover:bg-blue-700'
                      }`}>
                        {course.status === 'completed' ? (
                          <>
                            <Award className="h-4 w-4 mr-1" />
                            Certificate
                          </>
                        ) : course.status === 'in-progress' ? (
                          <>
                            <Play className="h-4 w-4 mr-1" />
                            Continue
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" />
                            Start
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left p-4 font-medium text-gray-900">Course</th>
                      <th className="text-left p-4 font-medium text-gray-900">Instructor</th>
                      <th className="text-left p-4 font-medium text-gray-900">Progress</th>
                      <th className="text-left p-4 font-medium text-gray-900">Duration</th>
                      <th className="text-left p-4 font-medium text-gray-900">Status</th>
                      <th className="text-left p-4 font-medium text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        title: 'JEE Physics Complete Course',
                        instructor: 'Dr. Priya Sharma',
                        progress: 68,
                        duration: '48 hours',
                        status: 'in-progress',
                        thumbnail: '⚛️'
                      },
                      {
                        title: 'JEE Mathematics Mastery',
                        instructor: 'Prof. Rajesh Gupta',
                        progress: 45,
                        duration: '52 hours',
                        status: 'in-progress',
                        thumbnail: '📐'
                      },
                      {
                        title: 'Organic Chemistry Simplified',
                        instructor: 'Dr. Meera Patel',
                        progress: 82,
                        duration: '38 hours',
                        status: 'in-progress',
                        thumbnail: '🧪'
                      }
                    ].map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{course.thumbnail}</div>
                            <div>
                              <p className="font-medium text-gray-900">{course.title}</p>
                              <p className="text-sm text-gray-500">Course content</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{course.instructor}</td>
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{course.progress}%</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{course.duration}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.status === 'completed' ? 'bg-green-100 text-green-700' :
                            course.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {course.status === 'completed' ? 'Completed' :
                             course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                          </span>
                        </td>
                        <td className="p-4">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Play className="h-4 w-4 mr-1" />
                            Continue
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
