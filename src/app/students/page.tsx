'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, MessageCircle, Trophy, Clock, Star } from 'lucide-react';

export default function StudentsPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Mathematics Class 10 CBSE',
      teacher: 'Dr. Priya Sharma',
      progress: 75,
      nextClass: '2025-07-15 10:00 AM',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Physics Class 12 CBSE',
      teacher: 'Prof. Rajesh Kumar',
      progress: 60,
      nextClass: '2025-07-16 2:00 PM',
      rating: 4.6,
    },
    {
      id: 3,
      title: 'English Literature',
      teacher: 'Ms. Anjali Gupta',
      progress: 90,
      nextClass: '2025-07-17 11:00 AM',
      rating: 4.9,
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'Dr. Priya Sharma',
      time: '10:00 AM - 11:30 AM',
      date: 'Today',
      type: 'Live Class',
    },
    {
      id: 2,
      subject: 'Physics',
      teacher: 'Prof. Rajesh Kumar',
      time: '2:00 PM - 3:30 PM',
      date: 'Tomorrow',
      type: 'Doubt Session',
    },
  ];

  const assignments = [
    {
      id: 1,
      title: 'Quadratic Equations Practice',
      subject: 'Mathematics',
      dueDate: '2025-07-20',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Newton\'s Laws Assignment',
      subject: 'Physics',
      dueDate: '2025-07-18',
      status: 'submitted',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600">Track your learning progress and upcoming classes</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'courses', label: 'My Courses' },
            { id: 'schedule', label: 'Schedule' },
            { id: 'assignments', label: 'Assignments' },
            { id: 'performance', label: 'Performance' },
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

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700">Enrolled Courses</p>
                      <p className="text-2xl font-semibold text-gray-900">3</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700">Hours Learned</p>
                      <p className="text-2xl font-semibold text-gray-900">127</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-700">Achievements</p>
                      <p className="text-2xl font-semibold text-gray-900">8</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Classes */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Classes</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingClasses.map((cls) => (
                      <div key={cls.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{cls.subject}</h4>
                          <p className="text-sm text-gray-700">by {cls.teacher}</p>
                          <p className="text-sm text-gray-600">{cls.time} • {cls.date}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {cls.type}
                          </span>
                          <Button size="sm" className="mt-2 ml-2">Join Class</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">Completed assignment: Quadratic Equations</p>
                        <p className="text-xs text-gray-700">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">Attended Physics class</p>
                        <p className="text-xs text-gray-700">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">Received feedback on essay</p>
                        <p className="text-xs text-gray-700">2 days ago</p>
                      </div>
                    </div>
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
                    Message Teacher
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Schedule
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Courses
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Courses Tab */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">by {course.teacher}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">Next: {course.nextClass}</span>
                  </div>

                  <Button className="w-full">Continue Learning</Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Assignments</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Assignment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {assignments.map((assignment) => (
                    <tr key={assignment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{assignment.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{assignment.dueDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          assignment.status === 'submitted' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {assignment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button size="sm" variant={assignment.status === 'submitted' ? 'outline' : 'default'}>
                          {assignment.status === 'submitted' ? 'View' : 'Submit'}
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
  );
}
