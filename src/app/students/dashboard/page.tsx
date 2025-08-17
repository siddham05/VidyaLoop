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
  Book, GraduationCap, Brain, Timer
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedGoal, setSelectedGoal] = useState('jee');

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
                <Link href="/students/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
                <Link href="/students/courses" className="text-gray-600 hover:text-gray-900">My Courses</Link>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  AK
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Welcome back, Arjun!</h1>
                  <p className="text-blue-100">Ready to ace your JEE preparation today?</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-4">🎯 Your Learning Goal</h2>
                <div className="flex flex-wrap gap-3 mb-4">
                  {[
                    { id: 'jee', label: 'JEE Main 2025', icon: '🎯' },
                    { id: 'neet', label: 'NEET 2025', icon: '🏥' },
                    { id: 'boards', label: 'Class 12 Boards', icon: '📚' },
                    { id: 'foundation', label: 'Foundation', icon: '🏗️' }
                  ].map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedGoal === goal.id
                          ? 'bg-white text-purple-600 shadow-lg'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {goal.icon} {goal.label}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">147</p>
                    <p className="text-blue-100 text-sm">Days Left</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">78%</p>
                    <p className="text-blue-100 text-sm">Syllabus Done</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2,847</p>
                    <p className="text-blue-100 text-sm">Study Hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">📅 Today's Schedule</h3>
              <div className="space-y-3">
                {[
                  { time: '09:00 AM', subject: 'Physics Live Class', teacher: 'Dr. Sharma', type: 'live' },
                  { time: '02:00 PM', subject: 'Math Problem Solving', teacher: 'Prof. Gupta', type: 'recorded' },
                  { time: '04:00 PM', subject: 'Chemistry Doubt Session', teacher: 'Dr. Patel', type: 'doubt' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'live' ? 'bg-red-400' : 
                      item.type === 'doubt' ? 'bg-yellow-400' : 'bg-green-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.subject}</p>
                      <p className="text-blue-100 text-xs">{item.teacher} • {item.time}</p>
                    </div>
                    {item.type === 'live' && (
                      <span className="px-2 py-1 bg-red-500 text-xs rounded-full">LIVE</span>
                    )}
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-white text-purple-600 hover:bg-blue-50">
                View Full Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Video, label: 'Join Live Class', color: 'bg-red-500', href: '/students/live-classes' },
            { icon: BookOpen, label: 'Study Material', color: 'bg-blue-500', href: '/students/materials' },
            { icon: MessageCircle, label: 'Ask Doubt', color: 'bg-green-500', href: '/students/doubt-chat' },
            { icon: BarChart3, label: 'Mock Tests', color: 'bg-purple-500', href: '/students/tests' }
          ].map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className={`${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
            >
              <action.icon className="h-8 w-8 mb-3" />
              <p className="font-semibold">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'courses', label: 'My Courses', icon: BookOpen },
              { id: 'progress', label: 'Progress', icon: TrendingUp },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'community', label: 'Community', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Current Course Progress */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Continue Learning</h2>
                  <div className="space-y-4">
                    {[
                      { 
                        subject: 'JEE Physics - Mechanics', 
                        teacher: 'Dr. Priya Sharma',
                        progress: 68,
                        nextTopic: 'Rotational Motion',
                        duration: '45 min',
                        thumbnail: '🔧'
                      },
                      { 
                        subject: 'JEE Mathematics - Calculus', 
                        teacher: 'Prof. Rajesh Gupta',
                        progress: 45,
                        nextTopic: 'Integration Techniques',
                        duration: '52 min',
                        thumbnail: '📐'
                      },
                      { 
                        subject: 'JEE Chemistry - Organic', 
                        teacher: 'Dr. Meera Patel',
                        progress: 82,
                        nextTopic: 'Reaction Mechanisms',
                        duration: '38 min',
                        thumbnail: '🧪'
                      }
                    ].map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{course.thumbnail}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{course.subject}</h3>
                            <p className="text-gray-600 text-sm">{course.teacher}</p>
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
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
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{course.nextTopic}</p>
                            <p className="text-xs text-gray-500">{course.duration}</p>
                            <Button className="mt-2 bg-purple-600 hover:bg-purple-700">
                              <Play className="h-4 w-4 mr-1" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended for You */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 Recommended for You</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'JEE Main Mock Test Series',
                        description: 'Latest pattern with detailed solutions',
                        price: '₹999',
                        rating: 4.8,
                        students: '15,847',
                        badge: 'Bestseller',
                        image: '📝'
                      },
                      {
                        title: 'Physics Crash Course',
                        description: 'Complete revision in 30 days',
                        price: '₹1,499',
                        rating: 4.9,
                        students: '8,234',
                        badge: 'New',
                        image: '⚡'
                      },
                      {
                        title: 'Math Problem Bank',
                        description: '5000+ problems with video solutions',
                        price: '₹799',
                        rating: 4.7,
                        students: '22,156',
                        badge: 'Popular',
                        image: '🔢'
                      },
                      {
                        title: 'Chemistry Lab Simulations',
                        description: 'Virtual experiments and demos',
                        price: '₹1,199',
                        rating: 4.6,
                        students: '6,789',
                        badge: 'Interactive',
                        image: '⚗️'
                      }
                    ].map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="text-4xl">{course.image}</div>
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                              {course.badge}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{course.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{course.students}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-blue-600">{course.price}</span>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Enroll Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-8">
                {/* Enrolled Courses */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">📚 My Enrolled Courses</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Complete JEE Physics',
                        instructor: 'Dr. Priya Sharma',
                        progress: 68,
                        totalLessons: 156,
                        completedLessons: 106,
                        duration: '48 hours',
                        image: '⚛️',
                        nextClass: 'Today 2:00 PM'
                      },
                      {
                        title: 'JEE Mathematics Mastery',
                        instructor: 'Prof. Rajesh Gupta',
                        progress: 45,
                        totalLessons: 189,
                        completedLessons: 85,
                        duration: '52 hours',
                        image: '📐',
                        nextClass: 'Tomorrow 10:00 AM'
                      },
                      {
                        title: 'Organic Chemistry Simplified',
                        instructor: 'Dr. Meera Patel',
                        progress: 82,
                        totalLessons: 124,
                        completedLessons: 102,
                        duration: '38 hours',
                        image: '🧪',
                        nextClass: 'Today 4:00 PM'
                      }
                    ].map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="text-4xl">{course.image}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                            <p className="text-gray-600 text-sm">{course.instructor}</p>
                            <p className="text-blue-600 text-sm font-medium">{course.nextClass}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                            <span>{course.progress}% complete</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{course.duration} total</span>
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            Continue Learning
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">🗂️ Browse by Category</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'JEE Preparation', icon: '🎯', count: '47 courses' },
                      { name: 'NEET Preparation', icon: '🏥', count: '32 courses' },
                      { name: 'Board Exams', icon: '📚', count: '28 courses' },
                      { name: 'Foundation', icon: '🏗️', count: '15 courses' },
                      { name: 'Mock Tests', icon: '📝', count: '156 tests' },
                      { name: 'Live Classes', icon: '📺', count: '12 ongoing' },
                      { name: 'Doubt Solving', icon: '❓', count: '24/7 support' },
                      { name: 'Study Material', icon: '📖', count: '500+ PDFs' }
                    ].map((category, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                        <div className="text-3xl mb-2">{category.icon}</div>
                        <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
                        <p className="text-gray-500 text-xs">{category.count}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-8">
                {/* Study Analytics */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">📊 Study Analytics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Today's Study Time</h3>
                      <p className="text-3xl font-bold text-blue-600">4h 32m</p>
                      <p className="text-blue-700 text-sm">+15% from yesterday</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">This Week</h3>
                      <p className="text-3xl font-bold text-green-600">28h 16m</p>
                      <p className="text-green-700 text-sm">Goal: 35 hours</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Streak</h3>
                      <p className="text-3xl font-bold text-purple-600">12 days</p>
                      <p className="text-purple-700 text-sm">Keep it up! 🔥</p>
                    </div>
                  </div>

                  {/* Subject-wise Progress */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject-wise Progress</h3>
                  <div className="space-y-4">
                    {[
                      { subject: 'Physics', progress: 78, color: 'bg-blue-500', chapters: '18/23' },
                      { subject: 'Chemistry', progress: 85, color: 'bg-green-500', chapters: '21/24' },
                      { subject: 'Mathematics', progress: 72, color: 'bg-purple-500', chapters: '16/22' }
                    ].map((subject, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-20 text-sm font-medium text-gray-900">{subject.subject}</div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className={`${subject.color} h-3 rounded-full transition-all`}
                              style={{ width: `${subject.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="w-16 text-sm text-gray-600">{subject.progress}%</div>
                        <div className="w-16 text-sm text-gray-500">{subject.chapters}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Test Results */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">📝 Recent Test Performance</h2>
                  <div className="space-y-4">
                    {[
                      { 
                        test: 'JEE Main Physics Mock Test #15',
                        score: 89,
                        maxScore: 120,
                        percentile: 94.2,
                        date: '2 days ago',
                        status: 'excellent'
                      },
                      { 
                        test: 'Chemistry Organic Mock Test #8',
                        score: 76,
                        maxScore: 100,
                        percentile: 87.5,
                        date: '5 days ago',
                        status: 'good'
                      },
                      { 
                        test: 'Mathematics Calculus Practice',
                        score: 42,
                        maxScore: 80,
                        percentile: 72.1,
                        date: '1 week ago',
                        status: 'needs-improvement'
                      }
                    ].map((test, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">{test.test}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            test.status === 'excellent' ? 'bg-green-100 text-green-700' :
                            test.status === 'good' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {test.percentile}%ile
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Score: {test.score}/{test.maxScore}</span>
                          <span>{test.date}</span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              test.status === 'excellent' ? 'bg-green-500' :
                              test.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${(test.score / test.maxScore) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-8">
                {/* Badges and Achievements */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">🏆 Achievements & Badges</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { icon: '🔥', title: 'Study Streak', desc: '15 Days', unlocked: true },
                      { icon: '⭐', title: 'Top Performer', desc: 'Physics', unlocked: true },
                      { icon: '🎯', title: 'Goal Achiever', desc: 'Weekly Target', unlocked: true },
                      { icon: '💡', title: 'Problem Solver', desc: '500 Questions', unlocked: true },
                      { icon: '📚', title: 'Bookworm', desc: '50 Hours', unlocked: false },
                      { icon: '🚀', title: 'Speed Demon', desc: 'Fast Learner', unlocked: false },
                      { icon: '👑', title: 'Champion', desc: 'Top 10%', unlocked: false },
                      { icon: '🎨', title: 'Creative Thinker', desc: 'Unique Solutions', unlocked: false }
                    ].map((badge, index) => (
                      <div key={index} className={`p-4 rounded-lg border text-center ${
                        badge.unlocked 
                          ? 'border-yellow-200 bg-yellow-50' 
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}>
                        <div className="text-3xl mb-2">{badge.icon}</div>
                        <h3 className="font-medium text-gray-900 text-sm">{badge.title}</h3>
                        <p className="text-gray-600 text-xs">{badge.desc}</p>
                        {badge.unlocked && (
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto mt-2" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Leaderboard */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🏅 This Week's Leaderboard</h3>
                  <div className="space-y-3">
                    {[
                      { rank: 1, name: 'Priya Singh', score: 2840, avatar: 'PS', current: false },
                      { rank: 2, name: 'Rohit Kumar', score: 2760, avatar: 'RK', current: false },
                      { rank: 3, name: 'You (Arjun)', score: 2680, avatar: 'AK', current: true },
                      { rank: 4, name: 'Sneha Patel', score: 2620, avatar: 'SP', current: false },
                      { rank: 5, name: 'Vikash Sharma', score: 2580, avatar: 'VS', current: false }
                    ].map((user, index) => (
                      <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg ${
                        user.current ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          user.rank === 1 ? 'bg-yellow-500' :
                          user.rank === 2 ? 'bg-gray-400' :
                          user.rank === 3 ? 'bg-orange-400' : 'bg-blue-500'
                        }`}>
                          {user.rank}
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${user.current ? 'text-blue-900' : 'text-gray-900'}`}>
                            {user.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{user.score.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-8">
                {/* Study Groups */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">👥 Study Groups</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: 'JEE 2025 Warriors',
                        members: 1247,
                        activity: 'Very Active',
                        description: 'Dedicated group for JEE 2025 aspirants',
                        joined: true
                      },
                      {
                        name: 'Physics Problem Solvers',
                        members: 856,
                        activity: 'Active',
                        description: 'Share and solve physics problems together',
                        joined: true
                      },
                      {
                        name: 'Math Masterminds',
                        members: 623,
                        activity: 'Moderate',
                        description: 'Mathematics discussion and doubt clearing',
                        joined: false
                      },
                      {
                        name: 'Chemistry Club',
                        members: 445,
                        activity: 'Active',
                        description: 'Explore the world of chemistry together',
                        joined: false
                      }
                    ].map((group, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{group.name}</h3>
                            <p className="text-gray-600 text-sm">{group.description}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            group.activity === 'Very Active' ? 'bg-green-100 text-green-700' :
                            group.activity === 'Active' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {group.activity}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{group.members} members</span>
                          <Button 
                            className={group.joined ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}
                          >
                            {group.joined ? 'Joined' : 'Join Group'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Discussions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">💬 Recent Discussions</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Best strategy for JEE Physics preparation?',
                        author: 'Priya S.',
                        replies: 23,
                        time: '2 hours ago',
                        group: 'JEE 2025 Warriors'
                      },
                      {
                        title: 'Doubt: Integration by parts - when to use?',
                        author: 'Rohit K.',
                        replies: 15,
                        time: '4 hours ago',
                        group: 'Math Masterminds'
                      },
                      {
                        title: 'Organic Chemistry reaction mechanisms made easy',
                        author: 'Sneha P.',
                        replies: 31,
                        time: '6 hours ago',
                        group: 'Chemistry Club'
                      },
                      {
                        title: 'Mock test analysis and improvement tips',
                        author: 'Vikash S.',
                        replies: 18,
                        time: '8 hours ago',
                        group: 'JEE 2025 Warriors'
                      }
                    ].map((discussion, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <h3 className="font-medium text-gray-900 mb-2">{discussion.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>by {discussion.author}</span>
                            <span>in {discussion.group}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                            <span>•</span>
                            <span>{discussion.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Goals */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Today's Goals</h3>
              <div className="space-y-3">
                {[
                  { task: 'Complete Physics Chapter 12', completed: true },
                  { task: 'Solve 20 Math Problems', completed: true },
                  { task: 'Watch Chemistry Video', completed: false },
                  { task: 'Take Mock Test', completed: false }
                ].map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      checked={goal.completed}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      readOnly
                    />
                    <span className={`text-sm ${goal.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {goal.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Upcoming</h3>
              <div className="space-y-3">
                {[
                  { event: 'Physics Live Class', time: 'Today 2:00 PM', type: 'live' },
                  { event: 'Math Assignment Due', time: 'Tomorrow', type: 'assignment' },
                  { event: 'Chemistry Test', time: 'Friday 10:00 AM', type: 'test' },
                  { event: 'Doubt Session', time: 'Saturday 4:00 PM', type: 'doubt' }
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      event.type === 'live' ? 'bg-red-500' :
                      event.type === 'test' ? 'bg-orange-500' :
                      event.type === 'assignment' ? 'bg-blue-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{event.event}</p>
                      <p className="text-xs text-gray-500">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current Rank</span>
                  <span className="text-sm font-bold text-purple-600">#247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Study Streak</span>
                  <span className="text-sm font-bold text-orange-600">12 days 🔥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Points</span>
                  <span className="text-sm font-bold text-blue-600">2,680</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Certificates</span>
                  <span className="text-sm font-bold text-green-600">3 earned</span>
                </div>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💪 Daily Motivation</h3>
              <blockquote className="text-sm text-gray-700 italic">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </blockquote>
              <p className="text-xs text-gray-500 mt-2">- Winston Churchill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
