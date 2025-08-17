'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Play, Users, Calendar, Clock, Star, Video,
  Bell, User, Search, Filter, ChevronDown,
  ArrowLeft, Bookmark, Share2, Download,
  Mic, MicOff, Camera, CameraOff, Settings,
  MessageCircle, Hand, Monitor, PhoneOff,
  ThumbsUp, Heart, Volume2, VolumeX,
  Maximize, Minimize, MoreVertical, Eye,
  BookOpen, FileText, PenTool, Grid,
  List, SortAsc, TrendingUp, Award, Send
} from 'lucide-react';
import Link from 'next/link';

export default function StudentLiveClassesPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLiveClassActive, setIsLiveClassActive] = useState(false);

  const liveClasses = [
    {
      id: 1,
      title: 'JEE Physics - Rotational Motion Deep Dive',
      instructor: 'Dr. Priya Sharma',
      subject: 'Physics',
      startTime: '2:00 PM',
      duration: '1.5 hours',
      studentsCount: 2847,
      isLive: true,
      thumbnail: '⚛️',
      difficulty: 'Advanced',
      rating: 4.9,
      description: 'Complete understanding of rotational motion concepts with problem-solving techniques',
      tags: ['JEE Main', 'JEE Advanced', 'Mechanics'],
      enrollmentStatus: 'enrolled'
    },
    {
      id: 2,
      title: 'Mathematics - Integration Techniques Masterclass',
      instructor: 'Prof. Rajesh Gupta',
      subject: 'Mathematics',
      startTime: '4:00 PM',
      duration: '2 hours',
      studentsCount: 1923,
      isLive: false,
      thumbnail: '📐',
      difficulty: 'Intermediate',
      rating: 4.8,
      description: 'Master all integration techniques with real JEE problems',
      tags: ['Calculus', 'JEE Main', 'Problem Solving'],
      enrollmentStatus: 'enrolled'
    },
    {
      id: 3,
      title: 'Organic Chemistry - Reaction Mechanisms',
      instructor: 'Dr. Meera Patel',
      subject: 'Chemistry',
      startTime: '6:30 PM',
      duration: '1 hour',
      studentsCount: 1456,
      isLive: false,
      thumbnail: '🧪',
      difficulty: 'Advanced',
      rating: 4.9,
      description: 'Understanding complex organic reaction mechanisms step by step',
      tags: ['Organic Chemistry', 'NEET', 'JEE Main'],
      enrollmentStatus: 'available'
    },
    {
      id: 4,
      title: 'Physics Doubt Clearing Session',
      instructor: 'Dr. Vikash Kumar',
      subject: 'Physics',
      startTime: '8:00 PM',
      duration: '1 hour',
      studentsCount: 756,
      isLive: false,
      thumbnail: '❓',
      difficulty: 'All Levels',
      rating: 4.7,
      description: 'Interactive doubt solving session for all physics topics',
      tags: ['Doubt Session', 'Interactive', 'Q&A'],
      enrollmentStatus: 'enrolled'
    }
  ];

  const upcomingClasses = [
    {
      date: 'Today',
      classes: [
        { time: '2:00 PM', title: 'Physics - Rotational Motion', instructor: 'Dr. Priya Sharma', isLive: true },
        { time: '4:00 PM', title: 'Math - Integration', instructor: 'Prof. Rajesh Gupta', isLive: false },
        { time: '6:30 PM', title: 'Chemistry - Organic', instructor: 'Dr. Meera Patel', isLive: false }
      ]
    },
    {
      date: 'Tomorrow',
      classes: [
        { time: '10:00 AM', title: 'Math - Differential Equations', instructor: 'Prof. Rajesh Gupta', isLive: false },
        { time: '2:00 PM', title: 'Physics - Electromagnetism', instructor: 'Dr. Priya Sharma', isLive: false },
        { time: '5:00 PM', title: 'Chemistry - Inorganic', instructor: 'Dr. Ankit Singh', isLive: false }
      ]
    }
  ];

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
                <Link href="/students/courses" className="text-gray-600 hover:text-gray-900">My Courses</Link>
                <Link href="/students/live-classes" className="text-blue-600 font-medium">Live Classes</Link>
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

      {/* Hero Section with Live Class Alert */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <span className="font-medium">🔴 LIVE NOW</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">📺 Live Interactive Classes</h1>
            <p className="text-xl text-red-100 mb-6">Join thousands of students learning from India&apos;s top educators</p>
            
            {/* Live Class Card */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">⚛️</div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">JEE Physics - Rotational Motion</h3>
                    <p className="text-red-100">Dr. Priya Sharma • 2,847 students watching</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-red-500 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-bold">LIVE</span>
                </div>
              </div>
              <Button 
                className="w-full bg-white text-red-600 hover:bg-red-50 font-bold py-3 text-lg"
                onClick={() => setIsLiveClassActive(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Join Live Class Now
              </Button>
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
                  placeholder="Search live classes..."
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
                  <option value="all">All Classes</option>
                  <option value="live">Live Now</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="enrolled">My Classes</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Subject:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Subjects</option>
                  <option>Physics</option>
                  <option>Mathematics</option>
                  <option>Chemistry</option>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Classes Section */}
          <div className="lg:col-span-3">
            {/* Live Classes Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🔴 Live & Upcoming Classes</h2>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {liveClasses.map((class_item) => (
                    <div key={class_item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{class_item.thumbnail}</div>
                            <div className="flex items-center space-x-2">
                              {class_item.isLive && (
                                <span className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                  <span>LIVE</span>
                                </span>
                              )}
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                class_item.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                                class_item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {class_item.difficulty}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-gray-900 mb-2">{class_item.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{class_item.instructor}</p>
                          <p className="text-gray-500 text-sm mb-4">{class_item.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{class_item.startTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{class_item.studentsCount.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{class_item.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {class_item.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                <Heart className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                                <Share2 className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                                <Bookmark className="h-4 w-4" />
                              </button>
                            </div>
                            
                            <Button 
                              className={`${
                                class_item.isLive 
                                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                                  : class_item.enrollmentStatus === 'enrolled'
                                  ? 'bg-blue-600 hover:bg-blue-700'
                                  : 'bg-green-600 hover:bg-green-700'
                              }`}
                              onClick={() => class_item.isLive && setIsLiveClassActive(true)}
                            >
                              {class_item.isLive ? (
                                <>
                                  <Video className="h-4 w-4 mr-2" />
                                  Join Live
                                </>
                              ) : class_item.enrollmentStatus === 'enrolled' ? (
                                <>
                                  <Bell className="h-4 w-4 mr-2" />
                                  Set Reminder
                                </>
                              ) : (
                                <>
                                  <Play className="h-4 w-4 mr-2" />
                                  Enroll Free
                                </>
                              )}
                            </Button>
                          </div>
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
                          <th className="text-left p-4 font-medium text-gray-900">Class</th>
                          <th className="text-left p-4 font-medium text-gray-900">Instructor</th>
                          <th className="text-left p-4 font-medium text-gray-900">Time</th>
                          <th className="text-left p-4 font-medium text-gray-900">Students</th>
                          <th className="text-left p-4 font-medium text-gray-900">Status</th>
                          <th className="text-left p-4 font-medium text-gray-900">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {liveClasses.map((class_item) => (
                          <tr key={class_item.id} className="hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <div className="text-2xl">{class_item.thumbnail}</div>
                                <div>
                                  <p className="font-medium text-gray-900">{class_item.title}</p>
                                  <p className="text-sm text-gray-500">{class_item.subject}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 text-gray-600">{class_item.instructor}</td>
                            <td className="p-4 text-gray-600">{class_item.startTime}</td>
                            <td className="p-4 text-gray-600">{class_item.studentsCount.toLocaleString()}</td>
                            <td className="p-4">
                              {class_item.isLive ? (
                                <span className="flex items-center space-x-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                  <span>LIVE</span>
                                </span>
                              ) : (
                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                                  Upcoming
                                </span>
                              )}
                            </td>
                            <td className="p-4">
                              <Button 
                                size="sm" 
                                className={class_item.isLive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}
                                onClick={() => class_item.isLive && setIsLiveClassActive(true)}
                              >
                                {class_item.isLive ? 'Join' : 'Remind Me'}
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 My Schedule</h3>
              <div className="space-y-4">
                {upcomingClasses.map((day, dayIndex) => (
                  <div key={dayIndex}>
                    <h4 className="font-medium text-gray-900 mb-2">{day.date}</h4>
                    <div className="space-y-2">
                      {day.classes.map((class_item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                          <div className={`w-2 h-2 rounded-full ${
                            class_item.isLive ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{class_item.time}</p>
                            <p className="text-xs text-gray-600">{class_item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Classes Attended</span>
                  <span className="text-sm font-bold text-blue-600">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Hours Learned</span>
                  <span className="text-sm font-bold text-green-600">89h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Attendance Rate</span>
                  <span className="text-sm font-bold text-purple-600">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Live Streak</span>
                  <span className="text-sm font-bold text-orange-600">8 days 🔥</span>
                </div>
              </div>
            </div>

            {/* Featured Teachers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⭐ Top Educators</h3>
              <div className="space-y-3">
                {[
                  { name: 'Dr. Priya Sharma', subject: 'Physics', rating: 4.9, avatar: 'PS' },
                  { name: 'Prof. Rajesh Gupta', subject: 'Mathematics', rating: 4.8, avatar: 'RG' },
                  { name: 'Dr. Meera Patel', subject: 'Chemistry', rating: 4.9, avatar: 'MP' }
                ].map((teacher, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {teacher.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{teacher.name}</p>
                      <p className="text-xs text-gray-600">{teacher.subject}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-600">{teacher.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Class Modal */}
      {isLiveClassActive && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-6xl h-5/6 flex flex-col">
            {/* Live Class Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-red-100 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-700 font-bold text-sm">LIVE</span>
                </div>
                <h3 className="font-semibold text-gray-900">JEE Physics - Rotational Motion</h3>
                <span className="text-gray-600">• 2,847 watching</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Notes
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsLiveClassActive(false)}
                >
                  <Minimize className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsLiveClassActive(false)}
                >
                  ✕
                </Button>
              </div>
            </div>

            {/* Live Class Content */}
            <div className="flex-1 flex">
              {/* Video Area */}
              <div className="flex-1 bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <Video className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">Live Class Video Stream</p>
                  <p className="text-gray-300">Dr. Priya Sharma is teaching...</p>
                </div>
              </div>

              {/* Chat Sidebar */}
              <div className="w-80 border-l border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900">Live Chat</h4>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {[
                    { user: 'Arjun K.', message: 'Great explanation!', time: '2:34' },
                    { user: 'Priya S.', message: 'Can you repeat the formula?', time: '2:35' },
                    { user: 'Rohit M.', message: 'This is so helpful', time: '2:36' }
                  ].map((chat, index) => (
                    <div key={index} className="text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-blue-600">{chat.user}</span>
                        <span className="text-gray-500 text-xs">{chat.time}</span>
                      </div>
                      <p className="text-gray-700">{chat.message}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask a question..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Class Controls */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <MicOff className="h-4 w-4 mr-2" />
                    Muted
                  </Button>
                  <Button variant="outline" size="sm">
                    <CameraOff className="h-4 w-4 mr-2" />
                    Camera Off
                  </Button>
                  <Button variant="outline" size="sm">
                    <Hand className="h-4 w-4 mr-2" />
                    Raise Hand
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Monitor className="h-4 w-4 mr-2" />
                    Share Screen
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                    <PhoneOff className="h-4 w-4 mr-2" />
                    Leave Class
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
