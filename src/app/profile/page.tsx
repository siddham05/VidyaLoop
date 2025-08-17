import { Button } from '@/components/ui/button';
import { 
  Edit, Star, MapPin, Users, CheckCircle, Award, 
  Phone, Mail, Calendar, Clock, Video, Home, 
  Briefcase, GraduationCap, TrendingUp, MessageCircle,
  Share2, Download, Settings
} from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                AS
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-blue-800">Anita Sharma</h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-red-500" />
                  <span className="text-gray-700">Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-gray-700">4.9 (156 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-blue-500" />
                  <span className="text-gray-700">234 Students Taught</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Experienced Mathematics teacher with 8+ years of expertise in Class 10-12 and JEE preparation. 
                Passionate about making complex concepts simple and achievable for students.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">Shareable Code:</span>
                  <code className="px-2 py-1 bg-blue-50 border border-blue-200 rounded text-sm font-mono text-blue-700">VL-AS-8901</code>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    <Share2 className="h-3 w-3 mr-1" />
                    Copy Link
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">anita.sharma@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">+91 98765 43210</span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="text-gray-600 border-gray-300">
                  <Settings className="h-4 w-4 mr-1" />
                  Settings
                </Button>
                <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
                  <Edit className="h-4 w-4" />
                  <span>Edit Profile</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-blue-700 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">
                I am a dedicated Mathematics educator with over 8 years of teaching experience. I specialize in 
                making complex mathematical concepts accessible and engaging for students. My teaching methodology 
                focuses on building strong fundamentals while preparing students for competitive exams like JEE 
                Main and Advanced. I have successfully guided over 200 students to achieve their academic goals.
              </p>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-green-700 mb-4">
                <GraduationCap className="h-5 w-5 inline mr-2" />
                Qualifications
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800">M.Sc. Mathematics</h3>
                    <p className="text-sm text-blue-600">University of Mumbai, 2015</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800">B.Ed. (Mathematics)</h3>
                    <p className="text-sm text-green-600">SNDT Women&apos;s University, 2013</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-purple-800">B.Sc. Mathematics</h3>
                    <p className="text-sm text-purple-600">St. Xavier&apos;s College, Mumbai, 2011</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                <Briefcase className="h-5 w-5 inline mr-2" />
                Teaching Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r-lg">
                  <h3 className="font-medium text-blue-800">Senior Mathematics Faculty</h3>
                  <p className="text-sm text-blue-600">Aakash Institute, Mumbai (2020 - Present)</p>
                  <p className="text-sm text-gray-700 mt-1">Teaching JEE Main & Advanced Mathematics to 11th and 12th grade students.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                  <h3 className="font-medium text-green-800">Mathematics Teacher</h3>
                  <p className="text-sm text-green-600">FIITJEE, Mumbai (2018 - 2020)</p>
                  <p className="text-sm text-gray-700 mt-1">Specialized in Algebra and Calculus for competitive exam preparation.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r-lg">
                  <h3 className="font-medium text-purple-800">Home Tutor</h3>
                  <p className="text-sm text-purple-600">Independent (2016 - 2018)</p>
                  <p className="text-sm text-gray-700 mt-1">Provided personalized mathematics tutoring for CBSE and ICSE students.</p>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-orange-700 mb-4">
                <MessageCircle className="h-5 w-5 inline mr-2" />
                Recent Reviews
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      R
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-green-800">Rahul Patel</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Excellent teacher! Made calculus so easy to understand. Thanks to her guidance, 
                        I scored 95% in JEE Main mathematics.
                      </p>
                      <p className="text-xs text-green-600 mt-2">2 weeks ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-purple-800">Priya Sharma</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Very patient and explains concepts clearly. My daughter&apos;s confidence in math 
                        has improved significantly.
                      </p>
                      <p className="text-xs text-purple-600 mt-2">1 month ago</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-blue-800">Amit Kumar</h4>
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Great teaching methodology. Provides good practice problems and regular assessments.
                      </p>
                      <p className="text-xs text-blue-600 mt-2">1 month ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50">View All Reviews</Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-blue-700 mb-4">
                <TrendingUp className="h-5 w-5 inline mr-2" />
                Quick Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="text-sm text-blue-700">Teaching Experience</span>
                  <span className="font-medium text-blue-800">8+ Years</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-sm text-green-700">Students Taught</span>
                  <span className="font-medium text-green-800">234</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                  <span className="text-sm text-purple-700">Success Rate</span>
                  <span className="font-medium text-purple-800">95%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                  <span className="text-sm text-orange-700">Response Time</span>
                  <span className="font-medium text-orange-800">&lt; 2 hours</span>
                </div>
              </div>
            </div>

            {/* Subjects & Expertise */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Subjects & Expertise</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Primary Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Mathematics
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Algebra
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Calculus
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Exam Preparation</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      JEE Main
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      JEE Advanced
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      CBSE Boards
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Class Levels</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Class 10
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                      Class 11
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      Class 12
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-green-700 mb-4">
                <Calendar className="h-5 w-5 inline mr-2" />
                Availability
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="text-sm text-blue-700 flex items-center">
                    <Video className="h-4 w-4 mr-1" />
                    Teaching Mode
                  </span>
                  <span className="text-sm font-medium text-blue-800">Online & Offline</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-sm text-green-700 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Preferred Time
                  </span>
                  <span className="text-sm font-medium text-green-800">4:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                  <span className="text-sm text-purple-700 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Days Available
                  </span>
                  <span className="text-sm font-medium text-purple-800">Mon - Sat</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                  <span className="text-sm text-emerald-700">Rate (per hour)</span>
                  <span className="text-sm font-medium text-emerald-800">₹800 - ₹1,200</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Session
                </Button>
                <Button variant="outline" className="w-full text-green-600 border-green-200 hover:bg-green-50">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Top Rated Teacher</h3>
                    <p className="text-xs text-gray-600">2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">100+ Students Milestone</h3>
                    <p className="text-xs text-gray-600">2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Excellence in Teaching</h3>
                    <p className="text-xs text-gray-600">Aakash Institute, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
