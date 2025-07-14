import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock, Star, Play, Calendar } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Courses</h1>
          <p className="text-xl text-gray-600">
            Learn from India&apos;s best teachers with live and recorded courses
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          <Button variant="default" className="mb-2">All Courses</Button>
          <Button variant="outline" className="mb-2">Live Classes</Button>
          <Button variant="outline" className="mb-2">Recorded</Button>
          <Button variant="outline" className="mb-2">Free</Button>
          <Button variant="outline" className="mb-2">Premium</Button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Live
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                  ₹2,999
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Complete JEE Mathematics Mastery
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Master JEE Mathematics with comprehensive coverage of all topics including calculus, algebra, and geometry.
              </p>
              
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="h-4 w-4 mr-1" />
                  45 Lessons
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  60 Hours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  234 Students
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                    AS
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Anita Sharma</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700 ml-1">4.9 (156)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 relative">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Recorded
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                  ₹1,999
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                NEET Physics Complete Course
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive NEET Physics preparation with detailed explanations and practice problems.
              </p>
              
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="h-4 w-4 mr-1" />
                  38 Lessons
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  48 Hours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  189 Students
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                    RK
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Rajesh Kumar</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700 ml-1">4.7 (89)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 relative">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Free
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                  Free
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                English Grammar Fundamentals
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Build a strong foundation in English grammar with this comprehensive free course.
              </p>
              
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="h-4 w-4 mr-1" />
                  25 Lessons
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  20 Hours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  567 Students
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                    PG
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Priya Gupta</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700 ml-1">4.8 (203)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Start Learning</Button>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 relative">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Popular
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                  ₹3,999
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Class 10 CBSE Complete Package
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Complete Class 10 CBSE preparation covering all subjects with board exam focus.
              </p>
              
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="h-4 w-4 mr-1" />
                  120 Lessons
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  150 Hours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  892 Students
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                    MT
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Multiple Teachers</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700 ml-1">4.9 (456)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-blue-600 relative">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Live
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                  ₹1,599
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Python Programming Bootcamp
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn Python programming from scratch with hands-on projects and real-world applications.
              </p>
              
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="h-4 w-4 mr-1" />
                  30 Lessons
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  40 Hours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  145 Students
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                    VS
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Vikash Singh</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700 ml-1">4.6 (78)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-teal-500 to-green-600 relative">
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Recorded
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                  ₹2,499
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Organic Chemistry Mastery
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Master organic chemistry with detailed mechanisms and reaction patterns for JEE and NEET.
              </p>
              
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center text-sm text-gray-700">
                  <BookOpen className="h-4 w-4 mr-1" />
                  42 Lessons
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Clock className="h-4 w-4 mr-1" />
                  55 Hours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Users className="h-4 w-4 mr-1" />
                  298 Students
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                    DR
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dr. Rohit Agarwal</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700 ml-1">4.9 (312)</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
