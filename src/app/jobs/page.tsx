import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, IndianRupee, Calendar, BookOpen } from 'lucide-react';

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Teaching Opportunities</h1>
          <p className="text-xl text-gray-600">
            Find your perfect teaching job or post tutoring requirements
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="px-8">
            Post a Job Requirement
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Browse Job Applications
          </Button>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>All Job Types</option>
              <option>Home Tuition</option>
              <option>Online Teaching</option>
              <option>Coaching Center</option>
              <option>School Teaching</option>
            </select>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>All Subjects</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
            </select>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>All Locations</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Kolkata</option>
            </select>
            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {/* Job Card 1 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">
                    Home Tuition for Class 10 Mathematics
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Home Tuition
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Bandra, Mumbai
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    2 hours/day
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Mon, Wed, Fri
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    ₹800/hour
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">
                  Looking for an experienced Mathematics teacher for Class 10 CBSE student. 
                  Focus on board exam preparation and concept building.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Mathematics
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    CBSE
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Class 10
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                <span className="text-lg font-bold text-gray-900 mb-2">₹1,600/day</span>
                <Button>Apply Now</Button>
                <p className="text-xs text-gray-700 mt-1">Posted 2 days ago</p>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">
                    Online Physics Teacher for JEE Preparation
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Online
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Remote
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    3 hours/day
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Daily
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    ₹1,200/hour
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">
                  Seeking experienced Physics teacher for JEE Main and Advanced preparation. 
                  Should have proven track record of student success.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Physics
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    JEE Main
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    JEE Advanced
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                <span className="text-lg font-bold text-gray-900 mb-2">₹3,600/day</span>
                <Button>Apply Now</Button>
                <p className="text-xs text-gray-700 mt-1">Posted 1 day ago</p>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">
                    English Literature Teacher - Coaching Center
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Coaching Center
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Connaught Place, Delhi
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    4 hours/day
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    6 days/week
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    ₹600/hour
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">
                  Established coaching center looking for English Literature teacher for Class 11-12. 
                  Experience with competitive exams preferred.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    English Literature
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Class 11-12
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Full Time
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                <span className="text-lg font-bold text-gray-900 mb-2">₹2,400/day</span>
                <Button>Apply Now</Button>
                <p className="text-xs text-gray-700 mt-1">Posted 3 days ago</p>
              </div>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">
                    Chemistry Teacher for NEET Batch
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Batch Teaching
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Kota, Rajasthan
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    2 hours/session
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    50 students
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    ₹1,500/hour
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">
                  Premium coaching institute seeking expert Chemistry teacher for NEET preparation batch. 
                  Excellent growth opportunities and student success bonuses.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Chemistry
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    NEET
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Organic Chemistry
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                <span className="text-lg font-bold text-gray-900 mb-2">₹3,000/session</span>
                <Button>Apply Now</Button>
                <p className="text-xs text-gray-700 mt-1">Posted 1 week ago</p>
              </div>
            </div>
          </div>

          {/* Job Card 5 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 mr-3">
                    Computer Science Faculty - University Level
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    University
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Pune, Maharashtra
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    6 hours/day
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Full Time
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Research
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">
                  Leading engineering college seeking Computer Science faculty for undergraduate and postgraduate programs. 
                  PhD preferred with research publications.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Computer Science
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Data Structures
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Algorithms
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                <span className="text-lg font-bold text-gray-900 mb-2">₹80,000/month</span>
                <Button>Apply Now</Button>
                <p className="text-xs text-gray-700 mt-1">Posted 4 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
