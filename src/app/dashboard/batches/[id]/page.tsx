'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { formatNumberWithCommas } from '@/lib/utils';
import { 
  Users, 
  Calendar, 
  Clock, 
  Video, 
  Edit,
  Trash2,
  MessageCircle,
  FileText,
  TrendingUp,
  Star,
  IndianRupee,
  Plus,
  Download,
  Bell,
  Settings
} from 'lucide-react';

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  attendance: number;
  performance: number;
  feesStatus: 'paid' | 'pending' | 'overdue';
  lastPayment: string;
}

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 9876543210',
    joinedDate: '2024-09-15',
    attendance: 92,
    performance: 85,
    feesStatus: 'paid',
    lastPayment: '2024-11-01'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+91 9876543211',
    joinedDate: '2024-09-20',
    attendance: 88,
    performance: 92,
    feesStatus: 'paid',
    lastPayment: '2024-11-01'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    email: 'amit.kumar@email.com',
    phone: '+91 9876543212',
    joinedDate: '2024-10-01',
    attendance: 95,
    performance: 78,
    feesStatus: 'pending',
    lastPayment: '2024-10-01'
  },
  {
    id: '4',
    name: 'Sneha Singh',
    email: 'sneha.singh@email.com',
    phone: '+91 9876543213',
    joinedDate: '2024-10-05',
    attendance: 85,
    performance: 90,
    feesStatus: 'overdue',
    lastPayment: '2024-09-01'
  }
];

const batchData = {
  id: '1',
  name: 'JEE Mathematics Mastery',
  subject: 'Mathematics',
  class: 'Class 11-12',
  board: 'CBSE',
  description: 'Comprehensive JEE Mathematics preparation covering all important topics with regular practice sessions and doubt clearing.',
  students: 15,
  maxStudents: 20,
  fees: 5000,
  duration: '6 months',
  startDate: '2024-09-01',
  endDate: '2025-02-28',
  schedule: {
    days: ['Mon', 'Wed', 'Fri'],
    time: '6:00 PM - 8:00 PM'
  },
  mode: 'online' as const,
  status: 'active' as const,
  rating: 4.8,
  totalEarnings: 75000,
  nextClass: 'Today, 6:00 PM',
  topics: [
    'Calculus',
    'Algebra',
    'Trigonometry',
    'Coordinate Geometry',
    'Probability',
    'Statistics'
  ],
  completedClasses: 45,
  totalClasses: 72
};

const feesStatusColors = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800'
};

export default function BatchDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [students] = useState(mockStudents);

  const averageAttendance = students.reduce((sum, student) => sum + student.attendance, 0) / students.length;
  const averagePerformance = students.reduce((sum, student) => sum + student.performance, 0) / students.length;
  // const paidStudents = students.filter(s => s.feesStatus === 'paid').length;
  const pendingPayments = students.filter(s => s.feesStatus !== 'paid').length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-blue-800">{batchData.name}</h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <p className="text-blue-600 mb-4">{batchData.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{batchData.students}/{batchData.maxStudents} students</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{batchData.schedule.days.join(', ')}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{batchData.schedule.time}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Video className="h-4 w-4" />
                <span className="capitalize">{batchData.mode}</span>
              </span>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message All
            </Button>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Batch
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Enrollment</dt>
                  <dd className="text-lg font-medium text-gray-900">{batchData.students}/{batchData.maxStudents}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Avg. Attendance</dt>
                  <dd className="text-lg font-medium text-gray-900">{averageAttendance.toFixed(1)}%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <IndianRupee className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Monthly Revenue</dt>
                  <dd className="text-lg font-medium text-gray-900">₹{formatNumberWithCommas(batchData.fees * batchData.students)}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Rating</dt>
                  <dd className="text-lg font-medium text-gray-900">{batchData.rating}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-blue-700">Course Progress</h3>
                  <span className="text-sm text-gray-600">
                    {batchData.completedClasses}/{batchData.totalClasses} classes completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(batchData.completedClasses / batchData.totalClasses) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h3 className="text-lg font-medium text-green-700 mb-4">Topics Covered</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {batchData.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-medium text-purple-700 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Completed Chapter 5: Probability</span>
                    <span className="text-xs text-gray-700 ml-auto">2 days ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">New student Amit Kumar joined</span>
                    <span className="text-xs text-gray-700 ml-auto">1 week ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Assignment deadline reminder sent</span>
                    <span className="text-xs text-gray-700 ml-auto">1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Students Tab */}
          {activeTab === 'students' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-orange-700">Student List</h3>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Attendance
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Performance
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Fees Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-700">{student.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.attendance}%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.performance}%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${feesStatusColors[student.feesStatus]}`}>
                            {student.feesStatus.charAt(0).toUpperCase() + student.feesStatus.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <MessageCircle className="h-4 w-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Class Schedule</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Regular Schedule</h4>
                  <div className="space-y-3">
                    {batchData.schedule.days.map((day) => (
                      <div key={day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{day}</span>
                        <span className="text-gray-600">{batchData.schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Upcoming Classes</h4>
                  <div className="space-y-3">
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-blue-900">Today&apos;s Class</p>
                          <p className="text-sm text-blue-700">Chapter 6: Statistics</p>
                          <p className="text-xs text-blue-600 mt-1">6:00 PM - 8:00 PM</p>
                        </div>
                        <Button size="sm">Join Now</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">Tomorrow&apos;s Class</p>
                          <p className="text-sm text-gray-600">Chapter 7: Coordinate Geometry</p>
                          <p className="text-xs text-gray-700 mt-1">6:00 PM - 8:00 PM</p>
                        </div>
                        <Button size="sm" variant="outline">Scheduled</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Batch Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-4">Attendance Overview</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average Attendance</span>
                      <span className="font-medium">{averageAttendance.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Best Attendance</span>
                      <span className="font-medium">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Lowest Attendance</span>
                      <span className="font-medium">85%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-4">Performance Overview</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average Performance</span>
                      <span className="font-medium">{averagePerformance.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Top Performer</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Needs Attention</span>
                      <span className="font-medium">78%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-4">Revenue Overview</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Revenue</span>
                      <span className="font-medium">₹{formatNumberWithCommas(batchData.fees * batchData.students)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Earnings</span>
                      <span className="font-medium">₹{formatNumberWithCommas(batchData.totalEarnings)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pending Payments</span>
                      <span className="font-medium">{pendingPayments} students</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-4">Student Feedback</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average Rating</span>
                      <span className="font-medium">{batchData.rating} ⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Reviews</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Satisfaction Rate</span>
                      <span className="font-medium">96%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Batch Settings</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Basic Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name</label>
                        <input 
                          type="text" 
                          defaultValue={batchData.name}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea 
                          rows={3}
                          defaultValue={batchData.description}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Students</label>
                        <input 
                          type="number" 
                          defaultValue={batchData.maxStudents}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Notifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Class Reminders</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Assignment Deadlines</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Fee Reminders</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Student Progress Updates</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Actions</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Send Announcement
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Export Data
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Archive Batch
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-end space-x-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
