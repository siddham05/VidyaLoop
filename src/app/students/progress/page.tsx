'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Award, 
  Target, 
  BookOpen,
  Play,
  CheckCircle,
  Star,
  Calendar,
  Users,
  Trophy,
  Zap
} from 'lucide-react';

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const overallStats = {
    totalHours: 127,
    coursesCompleted: 3,
    currentStreak: 12,
    averageScore: 85
  };

  const courseProgress = [
    {
      id: 1,
      title: 'Mathematics Class 10 CBSE',
      progress: 75,
      totalLessons: 40,
      completedLessons: 30,
      timeSpent: 45,
      lastAccessed: '2 hours ago',
      grade: 'A',
      nextMilestone: 'Chapter 8: Trigonometry'
    },
    {
      id: 2,
      title: 'Physics Class 12 CBSE',
      progress: 60,
      totalLessons: 35,
      completedLessons: 21,
      timeSpent: 38,
      lastAccessed: '1 day ago',
      grade: 'B+',
      nextMilestone: 'Chapter 5: Electromagnetic Induction'
    },
    {
      id: 3,
      title: 'English Literature',
      progress: 90,
      totalLessons: 25,
      completedLessons: 23,
      timeSpent: 32,
      lastAccessed: '3 hours ago',
      grade: 'A+',
      nextMilestone: 'Final Project: Essay Writing'
    }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 3.5, completed: 4 },
    { day: 'Tue', hours: 2.8, completed: 3 },
    { day: 'Wed', hours: 4.2, completed: 5 },
    { day: 'Thu', hours: 3.1, completed: 2 },
    { day: 'Fri', hours: 5.0, completed: 6 },
    { day: 'Sat', hours: 2.5, completed: 3 },
    { day: 'Sun', hours: 1.8, completed: 2 }
  ];

  const achievements = [
    { id: 1, title: '7-Day Streak', description: 'Completed lessons for 7 consecutive days', earned: true, date: '2025-07-25' },
    { id: 2, title: 'Quiz Master', description: 'Scored 90+ in 5 consecutive quizzes', earned: true, date: '2025-07-28' },
    { id: 3, title: 'Speed Learner', description: 'Completed 10 lessons in a single day', earned: false, progress: 60 },
    { id: 4, title: 'Perfect Score', description: 'Achieved 100% in any assessment', earned: true, date: '2025-07-30' },
    { id: 5, title: 'Dedication Award', description: 'Study for 100+ hours total', earned: true, date: '2025-07-20' },
    { id: 6, title: 'Course Completion', description: 'Complete any full course', earned: false, progress: 90 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Progress</h1>
          <p className="text-gray-600">Track your learning journey and achievements</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700">Total Hours</p>
                <p className="text-2xl font-semibold text-gray-900">{overallStats.totalHours}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700">Courses Completed</p>
                <p className="text-2xl font-semibold text-gray-900">{overallStats.coursesCompleted}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700">Current Streak</p>
                <p className="text-2xl font-semibold text-gray-900">{overallStats.currentStreak} days</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700">Average Score</p>
                <p className="text-2xl font-semibold text-gray-900">{overallStats.averageScore}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'courses', label: 'Course Progress' },
            { id: 'activity', label: 'Weekly Activity' },
            { id: 'achievements', label: 'Achievements' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-700 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Progress Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            {courseProgress.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600">
                      {course.completedLessons} of {course.totalLessons} lessons completed
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      course.grade === 'A+' ? 'bg-green-100 text-green-800' :
                      course.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      Grade: {course.grade}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{course.timeSpent} hours total</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Last accessed {course.lastAccessed}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Next: {course.nextMilestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Weekly Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Weekly Learning Activity</h3>
            <div className="grid grid-cols-7 gap-4">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-gray-700 mb-2">{day.day}</div>
                  <div className="relative">
                    <div className="w-12 h-24 bg-gray-200 rounded mx-auto mb-2 relative overflow-hidden">
                      <div 
                        className="absolute bottom-0 w-full bg-green-500 rounded transition-all duration-300"
                        style={{ height: `${(day.hours / 5) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600">{day.hours}h</div>
                    <div className="text-xs text-gray-500">{day.completed} lessons</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                  Study Hours
                </div>
                <span>•</span>
                <span>Total this week: {weeklyActivity.reduce((sum, day) => sum + day.hours, 0)} hours</span>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`rounded-lg p-6 ${
                achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {achievement.earned ? (
                      <Trophy className={`h-5 w-5 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                    ) : (
                      <Target className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className={`font-medium ${achievement.earned ? 'text-green-900' : 'text-gray-900'}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${achievement.earned ? 'text-green-700' : 'text-gray-600'}`}>
                      {achievement.description}
                    </p>
                    {achievement.earned ? (
                      <p className="text-xs text-green-600 mt-1">Earned on {achievement.date}</p>
                    ) : (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-blue-600 h-1 rounded-full" 
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview Tab (default) */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Course Progress */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Progress</h3>
              <div className="space-y-4">
                {courseProgress.slice(0, 3).map((course) => (
                  <div key={course.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{course.title}</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 ml-4">{course.progress}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Latest Achievements</h3>
              <div className="space-y-3">
                {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                  <div key={achievement.id} className="flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-xs text-gray-600">Earned on {achievement.date}</p>
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
