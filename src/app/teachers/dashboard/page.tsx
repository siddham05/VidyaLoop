'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MessageCircle, 
  Bell, 
  TrendingUp,
  CreditCard,
  Settings,
  User,
  PlusCircle,
  Eye,
  Clock,
  Star,
  IndianRupee,
  BarChart3,
  Video,
  FileText,
  Award,
  Play,
  Download,
  Share2,
  MoreVertical,
  Filter,
  Search,
  ChevronRight,
  Target,
  Zap,
  Globe,
  Plus,
  Edit3,
  Upload,
  CheckCircle,
  AlertCircle,
  Trophy
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Teacher Center</h1>
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Verified Educator</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Content
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, Dr. Priya Sharma! 👋</h2>
              <p className="text-purple-100 mb-4">Ready to inspire minds today? Your students are waiting for your next amazing lesson.</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">847 Active Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span className="font-medium">4.9 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span className="font-medium">Top Educator</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+12% this month</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">2,847</h3>
            <p className="text-gray-600">Total Students</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+3 new</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">24</h3>
            <p className="text-gray-600">Active Courses</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <IndianRupee className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+18% vs last month</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">₹2,84,500</h3>
            <p className="text-gray-600">Monthly Earnings</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+0.2 this week</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'courses', label: 'My Courses', icon: BookOpen },
                { id: 'batches', label: 'Live Batches', icon: Users },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp },
                { id: 'earnings', label: 'Earnings', icon: IndianRupee }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <Button className="h-24 flex flex-col items-center justify-center space-y-2 bg-purple-600 hover:bg-purple-700">
                      <Video className="h-6 w-6" />
                      <span className="text-sm font-medium">Go Live</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                      <Upload className="h-6 w-6 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">Upload Video</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2" asChild>
                      <Link href="/teachers/batches/create">
                        <Users className="h-6 w-6 text-green-600" />
                        <span className="text-sm font-medium text-green-700">Create Batch</span>
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                      <FileText className="h-6 w-6 text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">Create Test</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                      <MessageCircle className="h-6 w-6 text-pink-600" />
                      <span className="text-sm font-medium text-pink-700">Student Chat</span>
                    </Button>
                  </div>
                </div>

                {/* Recent Activity & Upcoming */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Today&apos;s Schedule</h3>
                    <div className="space-y-4">
                      {[
                        { time: '10:00 AM', title: 'JEE Mathematics', students: 45, type: 'live', color: 'red' },
                        { time: '2:00 PM', title: 'NEET Physics', students: 38, type: 'live', color: 'green' },
                        { time: '6:00 PM', title: 'Class 12 Chemistry', students: 52, type: 'scheduled', color: 'blue' }
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full bg-${session.color}-500`}></div>
                            <div>
                              <h4 className="font-medium text-gray-900">{session.title}</h4>
                              <p className="text-sm text-gray-600">{session.time} • {session.students} students</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {session.type === 'live' && (
                              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                Live Now
                              </span>
                            )}
                            <Button size="sm" variant="outline">
                              {session.type === 'live' ? 'Join' : 'Start'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Enrollments</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Arjun Reddy', course: 'JEE Crash Course', time: '2 hours ago', avatar: 'AR' },
                        { name: 'Sneha Patel', course: 'NEET Biology', time: '5 hours ago', avatar: 'SP' },
                        { name: 'Rohit Sharma', course: 'Class 12 Physics', time: '1 day ago', avatar: 'RS' },
                        { name: 'Kavya Singh', course: 'Foundation Math', time: '1 day ago', avatar: 'KS' }
                      ].map((student, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            {student.avatar}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{student.name}</h4>
                            <p className="text-sm text-gray-600">{student.course} • {student.time}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">My Courses</h3>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Course
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'JEE Mathematics Mastery', students: 342, rating: 4.8, price: '₹12,999', status: 'active' },
                    { title: 'NEET Physics Complete', students: 256, rating: 4.9, price: '₹10,999', status: 'active' },
                    { title: 'Class 12 Chemistry', students: 189, rating: 4.7, price: '₹8,999', status: 'draft' }
                  ].map((course, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          course.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {course.status === 'active' ? 'Active' : 'Draft'}
                        </span>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Students</span>
                          <span className="font-medium">{course.students}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Rating</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Price</span>
                          <span className="font-medium text-green-600">{course.price}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit3 className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'batches' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Live Batches</h3>
                  <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/teachers/batches/create">
                      <Users className="h-4 w-4 mr-2" />
                      Create Batch
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    { name: 'JEE 2026 Batch', students: 45, schedule: 'Mon, Wed, Fri - 6:00 PM', fees: '₹5,000/month', status: 'active' },
                    { name: 'NEET Foundation', students: 38, schedule: 'Tue, Thu, Sat - 4:00 PM', fees: '₹4,500/month', status: 'active' },
                    { name: 'Class 12 Boards', students: 52, schedule: 'Daily - 5:00 PM', fees: '₹3,500/month', status: 'active' }
                  ].map((batch, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">{batch.name}</h4>
                        <span className="bg-green-100 text-green-700 px-2 py-1 text-xs font-medium rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Students</span>
                          <span className="font-medium">{batch.students}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Schedule</span>
                          <span className="text-sm font-medium">{batch.schedule}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Fees</span>
                          <span className="font-medium text-green-600">{batch.fees}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Video className="h-4 w-4 mr-1" />
                          Start Class
                        </Button>
                        <Button size="sm" variant="outline">
                          <Users className="h-4 w-4 mr-1" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Analytics</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Student Engagement</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Average Watch Time</span>
                        <span className="font-bold text-blue-600">42 minutes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Completion Rate</span>
                        <span className="font-bold text-green-600">87%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Attendance Rate</span>
                        <span className="font-bold text-purple-600">94%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Revenue Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">This Month</span>
                        <span className="font-bold text-green-600">₹2,84,500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Growth</span>
                        <span className="font-bold text-emerald-600">+18%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Top Course</span>
                        <span className="font-bold text-blue-600">JEE Math</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Earnings Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-600 font-medium">Available Balance</span>
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-green-700">₹45,670</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-600 font-medium">Pending Payout</span>
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-blue-700">₹12,450</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-600 font-medium">Total Earned</span>
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-2xl font-bold text-purple-700">₹8,45,230</p>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="h-4 w-4 mr-2" />
                  Withdraw Earnings
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Congratulations! 🎉</h3>
                <p className="text-yellow-100">You&apos;ve been awarded &quot;Top Educator of the Month&quot; for outstanding performance!</p>
              </div>
            </div>
            <Button variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white">
              <Share2 className="h-4 w-4 mr-2" />
              Share Achievement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
