'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  User, 
  GraduationCap, 
  Calendar, 
  MessageCircle, 
  Bell, 
  CreditCard,
  Clock,
  Eye
} from 'lucide-react';

export default function ParentsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const children = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: 'Class 10',
      school: 'Delhi Public School',
      courses: 3,
      performance: 'Excellent',
      nextClass: '2025-07-15 10:00 AM'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      class: 'Class 8',
      school: 'Kendriya Vidyalaya',
      courses: 2,
      performance: 'Good',
      nextClass: '2025-07-15 2:00 PM'
    }
  ];

  const recentActivity = [
    {
      child: 'Aarav',
      activity: 'Completed Mathematics assignment',
      time: '2 hours ago',
      type: 'assignment'
    },
    {
      child: 'Priya',
      activity: 'Attended English class',
      time: '1 day ago',
      type: 'class'
    },
    {
      child: 'Aarav',
      activity: 'Received feedback on Physics test',
      time: '2 days ago',
      type: 'feedback'
    }
  ];

  const upcomingPayments = [
    {
      teacher: 'Dr. Priya Sharma',
      subject: 'Mathematics',
      amount: '₹2,500',
      dueDate: '2025-07-20',
      child: 'Aarav'
    },
    {
      teacher: 'Ms. Anjali Gupta',
      subject: 'English',
      amount: '₹2,000',
      dueDate: '2025-07-22',
      child: 'Priya'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-600">Monitor your children&apos;s learning progress and activities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'children', label: 'Children' },
            { id: 'teachers', label: 'Teachers' },
            { id: 'payments', label: 'Payments' },
            { id: 'reports', label: 'Reports' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-700 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <User className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700">Children</p>
                      <p className="text-2xl font-semibold text-gray-900">{children.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <GraduationCap className="h-8 w-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700">Active Courses</p>
                      <p className="text-2xl font-semibold text-gray-900">5</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-purple-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700">This Month</p>
                      <p className="text-2xl font-semibold text-gray-900">₹8,500</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Children Overview */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Children Overview</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {children.map((child) => (
                      <div key={child.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{child.name}</h4>
                            <p className="text-sm text-gray-700">{child.class} • {child.school}</p>
                            <p className="text-sm text-gray-600">{child.courses} active courses</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            child.performance === 'Excellent' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {child.performance}
                          </span>
                          <p className="text-sm text-gray-700 mt-1">Next: {child.nextClass}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                          activity.type === 'assignment' ? 'bg-green-400' :
                          activity.type === 'class' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`}></div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.child}</span> {activity.activity}
                          </p>
                          <p className="text-xs text-gray-700">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Payments */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Payments</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingPayments.map((payment, index) => (
                      <div key={index} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{payment.subject}</p>
                            <p className="text-xs text-gray-600">{payment.teacher}</p>
                            <p className="text-xs text-gray-600">For: {payment.child}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">{payment.amount}</p>
                            <p className="text-xs text-gray-600">Due: {payment.dueDate}</p>
                          </div>
                        </div>
                        <Button size="sm" className="w-full mt-2">Pay Now</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-6 space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message Teachers
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Schedule
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment History
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="mr-2 h-4 w-4" />
                    Progress Reports
                  </Button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Bell className="h-4 w-4 text-blue-500 mt-1" />
                      <div>
                        <p className="text-sm text-gray-900">New assignment uploaded</p>
                        <p className="text-xs text-gray-700">Mathematics - 30 mins ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Bell className="h-4 w-4 text-green-500 mt-1" />
                      <div>
                        <p className="text-sm text-gray-900">Payment confirmation</p>
                        <p className="text-xs text-gray-700">Physics tuition - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Bell className="h-4 w-4 text-orange-500 mt-1" />
                      <div>
                        <p className="text-sm text-gray-900">Schedule change notification</p>
                        <p className="text-xs text-gray-700">English class - 1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Children Tab */}
        {activeTab === 'children' && (
          <div className="space-y-6">
            {children.map((child) => (
              <div key={child.id} className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{child.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      child.performance === 'Excellent' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {child.performance}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Basic Information</h4>
                      <dl className="space-y-1">
                        <div>
                          <dt className="text-sm text-gray-700">Class</dt>
                          <dd className="text-sm text-gray-900">{child.class}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-700">School</dt>
                          <dd className="text-sm text-gray-900">{child.school}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-700">Active Courses</dt>
                          <dd className="text-sm text-gray-900">{child.courses}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">This Week</h4>
                      <dl className="space-y-1">
                        <div>
                          <dt className="text-sm text-gray-700">Classes Attended</dt>
                          <dd className="text-sm text-gray-900">8/10</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-700">Assignments Completed</dt>
                          <dd className="text-sm text-gray-900">3/4</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-700">Study Hours</dt>
                          <dd className="text-sm text-gray-900">12 hours</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Actions</h4>
                      <div className="space-y-2">
                        <Button size="sm" variant="outline" className="w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          View Progress
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Contact Teachers
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          <Calendar className="mr-2 h-4 w-4" />
                          View Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
