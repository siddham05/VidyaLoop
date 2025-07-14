'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Video, 
  Users, 
  BookOpen,
  Play,
  Plus,
  Filter,
  Search,
  Star,
  Eye,
  Download
} from 'lucide-react';

export default function ClassesPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const upcomingClasses = [
    {
      id: 1,
      title: 'Advanced Calculus - Derivatives',
      subject: 'Mathematics',
      teacher: 'Dr. Priya Sharma',
      date: '2025-07-15',
      time: '10:00 AM - 11:30 AM',
      duration: '90 minutes',
      type: 'Live Class',
      mode: 'Online',
      students: 15,
      maxStudents: 20,
      materials: ['Worksheet', 'Practice Problems'],
      status: 'scheduled',
      meetingLink: 'https://meet.vidyaloop.com/class-123',
      description: 'Deep dive into derivatives with practical examples and problem-solving techniques.'
    },
    {
      id: 2,
      title: 'Organic Chemistry - Reactions',
      subject: 'Chemistry',
      teacher: 'Prof. Rajesh Kumar',
      date: '2025-07-15',
      time: '2:00 PM - 3:00 PM',
      duration: '60 minutes',
      type: 'Doubt Session',
      mode: 'Online',
      students: 8,
      maxStudents: 15,
      materials: ['Notes', 'Reference Book'],
      status: 'scheduled',
      meetingLink: 'https://meet.vidyaloop.com/class-124',
      description: 'Clearing doubts on organic reaction mechanisms and nomenclature.'
    },
    {
      id: 3,
      title: 'English Literature - Shakespeare',
      subject: 'English',
      teacher: 'Ms. Anjali Gupta',
      date: '2025-07-16',
      time: '11:00 AM - 12:00 PM',
      duration: '60 minutes',
      type: 'Discussion',
      mode: 'Online',
      students: 12,
      maxStudents: 18,
      materials: ['Romeo & Juliet Text', 'Analysis Sheet'],
      status: 'scheduled',
      meetingLink: 'https://meet.vidyaloop.com/class-125',
      description: 'Interactive discussion on themes and characters in Romeo and Juliet.'
    }
  ];

  const pastClasses = [
    {
      id: 4,
      title: 'Physics - Newton\'s Laws',
      subject: 'Physics',
      teacher: 'Dr. Vikram Singh',
      date: '2025-07-14',
      time: '3:00 PM - 4:30 PM',
      duration: '90 minutes',
      type: 'Lecture',
      mode: 'Online',
      students: 18,
      recording: 'https://recordings.vidyaloop.com/physics-newtons-laws-140725',
      materials: ['Lecture Notes', 'Assignment'],
      rating: 4.8,
      attendance: '95%'
    },
    {
      id: 5,
      title: 'Mathematics - Trigonometry',
      subject: 'Mathematics',
      teacher: 'Dr. Priya Sharma',
      date: '2025-07-13',
      time: '10:00 AM - 11:30 AM',
      duration: '90 minutes',
      type: 'Lecture',
      mode: 'Online',
      students: 16,
      recording: 'https://recordings.vidyaloop.com/math-trigonometry-130725',
      materials: ['Formula Sheet', 'Practice Problems'],
      rating: 4.9,
      attendance: '88%'
    }
  ];

  const liveClasses = [
    {
      id: 6,
      title: 'Biology - Cell Structure (LIVE)',
      subject: 'Biology',
      teacher: 'Dr. Meera Patel',
      startedAt: '9:30 AM',
      duration: '60 minutes',
      timeLeft: '15 minutes',
      students: 22,
      maxStudents: 25,
      isLive: true,
      meetingLink: 'https://meet.vidyaloop.com/live-biology-cell'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Classes</h1>
            <p className="text-gray-600">Manage your learning schedule and access class materials</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Search Classes
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Join Class
            </Button>
          </div>
        </div>

        {/* Live Classes Alert */}
        {liveClasses.length > 0 && (
          <div className="mb-6">
            {liveClasses.map((liveClass) => (
              <div key={liveClass.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-700 font-medium">LIVE NOW</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{liveClass.title}</h3>
                      <p className="text-sm text-gray-600">
                        by {liveClass.teacher} • {liveClass.timeLeft} remaining
                      </p>
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Video className="mr-2 h-4 w-4" />
                    Join Live Class
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-8 border-b border-gray-200">
            {[
              { id: 'upcoming', label: 'Upcoming', count: upcomingClasses.length },
              { id: 'past', label: 'Past Classes', count: pastClasses.length },
              { id: 'recordings', label: 'Recordings', count: pastClasses.length },
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
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-sm ${
                  viewMode === 'grid' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-r border-gray-300`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-sm ${
                  viewMode === 'list' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        {activeTab === 'upcoming' && (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {upcomingClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="p-6">
                  {/* Class Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{cls.title}</h3>
                      <p className="text-sm text-gray-600">by {cls.teacher}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      cls.type === 'Live Class' 
                        ? 'bg-blue-100 text-blue-800'
                        : cls.type === 'Doubt Session'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {cls.type}
                    </span>
                  </div>

                  {/* Subject Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      <BookOpen className="mr-1 h-3 w-3" />
                      {cls.subject}
                    </span>
                  </div>

                  {/* Class Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      {cls.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-2 h-4 w-4" />
                      {cls.time} ({cls.duration})
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Video className="mr-2 h-4 w-4" />
                      {cls.mode}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 h-4 w-4" />
                      {cls.students}/{cls.maxStudents} students
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cls.description}</p>

                  {/* Materials */}
                  {cls.materials && cls.materials.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-700 mb-2">Materials:</p>
                      <div className="flex flex-wrap gap-1">
                        {cls.materials.map((material, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-orange-100 text-orange-800"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Video className="mr-2 h-4 w-4" />
                      Join Class
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="mr-1 h-3 w-3" />
                        Materials
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Classes */}
        {activeTab === 'past' && (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {pastClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="p-6">
                  {/* Class Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{cls.title}</h3>
                      <p className="text-sm text-gray-600">by {cls.teacher}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Completed
                    </span>
                  </div>

                  {/* Subject Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      <BookOpen className="mr-1 h-3 w-3" />
                      {cls.subject}
                    </span>
                  </div>

                  {/* Class Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      {cls.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-2 h-4 w-4" />
                      {cls.time} ({cls.duration})
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 h-4 w-4" />
                      {cls.students} students attended
                    </div>
                  </div>

                  {/* Class Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{cls.rating}</span>
                      </div>
                      <p className="text-xs text-gray-700">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{cls.attendance}</p>
                      <p className="text-xs text-gray-700">Attendance</p>
                    </div>
                  </div>

                  {/* Materials */}
                  {cls.materials && cls.materials.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-700 mb-2">Materials:</p>
                      <div className="flex flex-wrap gap-1">
                        {cls.materials.map((material, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-orange-100 text-orange-800"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {cls.recording && (
                      <Button className="w-full">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Recording
                      </Button>
                    )}
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="mr-1 h-3 w-3" />
                        Materials
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="mr-1 h-3 w-3" />
                        Summary
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recordings Tab */}
        {activeTab === 'recordings' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Class Recordings</h3>
                <p className="text-sm text-gray-600">Access recordings of your past classes</p>
              </div>
              <div className="divide-y divide-gray-200">
                {pastClasses.map((cls) => (
                  <div key={cls.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{cls.title}</h4>
                        <p className="text-sm text-gray-700">
                          {cls.teacher} • {cls.date} • {cls.duration}
                        </p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-600">{cls.rating}</span>
                          <span className="text-sm text-gray-600 mx-2">•</span>
                          <span className="text-sm text-gray-600">{cls.students} students</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                        <Button size="sm">
                          <Play className="mr-1 h-3 w-3" />
                          Watch
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
