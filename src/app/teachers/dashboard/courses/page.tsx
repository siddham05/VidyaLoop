'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  BookOpen,
  Users,
  Star,
  IndianRupee,
  Eye,
  Edit,
  Trash2,
  Play,
  Upload,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
  AlertTriangle,
  Video,
  FileText,
  BarChart3,
  Download,
  Share2,
  MessageCircle,
  Settings,
  Target,
  Zap,
  Globe
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  subject: string;
  level: string;
  description: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  enrollments: number;
  rating: number;
  totalVideos: number;
  duration: string; // total duration
  status: 'published' | 'draft' | 'archived';
  type: 'live' | 'recorded' | 'hybrid';
  totalEarnings: number;
  lastUpdated: string;
  completionRate: number;
  reviews: number;
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete JEE Mathematics Mastery',
    subject: 'Mathematics',
    level: 'Class 11-12',
    description: 'Comprehensive JEE Mathematics course covering all topics with problem-solving techniques',
    thumbnail: '/api/placeholder/300/200',
    price: 12999,
    originalPrice: 19999,
    enrollments: 2847,
    rating: 4.9,
    totalVideos: 180,
    duration: '120 hours',
    status: 'published',
    type: 'recorded',
    totalEarnings: 3699653,
    lastUpdated: '2 days ago',
    completionRate: 87,
    reviews: 423
  },
  {
    id: '2',
    title: 'NEET Physics Complete Course',
    subject: 'Physics',
    level: 'Class 11-12',
    description: 'Master NEET Physics with detailed explanations and practice problems',
    thumbnail: '/api/placeholder/300/200',
    price: 10999,
    originalPrice: 15999,
    enrollments: 1956,
    rating: 4.8,
    totalVideos: 145,
    duration: '95 hours',
    status: 'published',
    type: 'hybrid',
    totalEarnings: 2151444,
    lastUpdated: '1 week ago',
    completionRate: 92,
    reviews: 287
  },
  {
    id: '3',
    title: 'Advanced Chemistry for NEET',
    subject: 'Chemistry',
    level: 'Class 12',
    description: 'In-depth chemistry concepts for NEET preparation with organic and inorganic focus',
    thumbnail: '/api/placeholder/300/200',
    price: 8999,
    enrollments: 1234,
    rating: 4.7,
    totalVideos: 98,
    duration: '78 hours',
    status: 'draft',
    type: 'recorded',
    totalEarnings: 1110666,
    lastUpdated: '3 days ago',
    completionRate: 85,
    reviews: 156
  },
  {
    id: '4',
    title: 'Foundation Mathematics',
    subject: 'Mathematics',
    level: 'Class 9-10',
    description: 'Build strong mathematical foundation for board exams and competitive preparation',
    thumbnail: '/api/placeholder/300/200',
    price: 5999,
    originalPrice: 8999,
    enrollments: 3421,
    rating: 4.6,
    totalVideos: 120,
    duration: '85 hours',
    status: 'published',
    type: 'live',
    totalEarnings: 2052579,
    lastUpdated: '5 days ago',
    completionRate: 78,
    reviews: 512
  }
];

const statusColors = {
  published: 'bg-green-100 text-green-800',
  draft: 'bg-yellow-100 text-yellow-800',
  archived: 'bg-gray-100 text-gray-800'
};

const typeColors = {
  live: 'bg-red-100 text-red-800',
  recorded: 'bg-blue-100 text-blue-800',
  hybrid: 'bg-purple-100 text-purple-800'
};

export default function TeacherCoursesPage() {
  const [courses, setCourses] = useState(mockCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
    const matchesType = filterType === 'all' || course.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalStudents = courses.reduce((sum, course) => sum + course.enrollments, 0);
  const totalEarnings = courses.reduce((sum, course) => sum + course.totalEarnings, 0);
  const averageRating = courses.reduce((sum, course) => sum + course.rating, 0) / courses.length;
  const publishedCourses = courses.filter(c => c.status === 'published').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-6 rounded-xl mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Course Studio</h1>
            <p className="text-indigo-100 mb-4">
              Create, manage, and track your educational courses
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">{publishedCourses} Published</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">{totalStudents.toLocaleString()} Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <IndianRupee className="h-5 w-5" />
                <span className="font-medium">₹{(totalEarnings / 100000).toFixed(1)}L Earned</span>
              </div>
            </div>
          </div>
          <Button 
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-6"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Course
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+3 this month</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{publishedCourses}</h3>
          <p className="text-gray-600">Published Courses</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+15% growth</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalStudents.toLocaleString()}</h3>
          <p className="text-gray-600">Total Enrollments</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">Excellent</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{averageRating.toFixed(1)}</h3>
          <p className="text-gray-600">Average Rating</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <IndianRupee className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+22% this quarter</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">₹{(totalEarnings / 100000).toFixed(1)}L</h3>
          <p className="text-gray-600">Total Revenue</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search your courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="live">Live</option>
              <option value="recorded">Recorded</option>
              <option value="hybrid">Hybrid</option>
            </select>

            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
              >
                <BarChart3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
              >
                <FileText className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* Course Thumbnail */}
            <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[course.status]}`}>
                  {course.status === 'published' && <CheckCircle className="h-3 w-3 mr-1" />}
                  {course.status === 'draft' && <Clock className="h-3 w-3 mr-1" />}
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors[course.type]}`}>
                  {course.type === 'live' && <Video className="h-3 w-3 mr-1" />}
                  {course.type === 'recorded' && <Play className="h-3 w-3 mr-1" />}
                  {course.type === 'hybrid' && <Globe className="h-3 w-3 mr-1" />}
                  {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-12 w-12 mx-auto mb-2 opacity-80" />
                  <p className="text-sm font-medium">{course.totalVideos} Videos</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Course Info */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.subject} • {course.level}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{course.description}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-blue-900">{course.enrollments.toLocaleString()}</p>
                  <p className="text-xs text-blue-600">Students</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <Star className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-yellow-900">{course.rating}</p>
                  <p className="text-xs text-yellow-600">Rating</p>
                </div>
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <IndianRupee className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-emerald-900">₹{course.price.toLocaleString()}</p>
                  <p className="text-xs text-emerald-600">Price</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Revenue</span>
                  <span className="font-bold text-green-600">₹{(course.totalEarnings / 100000).toFixed(1)}L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="font-medium text-gray-900">{course.completionRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Updated</span>
                  <span className="text-sm text-gray-500">{course.lastUpdated}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  <Eye className="h-4 w-4 mr-2" />
                  View Course
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {searchTerm || filterStatus !== 'all' || filterType !== 'all'
              ? "Try adjusting your search criteria or filters to find the courses you're looking for."
              : "Start creating amazing courses to educate and inspire students worldwide!"}
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-8">
            <Plus className="h-5 w-5 mr-2" />
            Create Your First Course
          </Button>
        </div>
      )}
    </div>
  );
}
