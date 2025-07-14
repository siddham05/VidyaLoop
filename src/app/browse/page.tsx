import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Filter } from 'lucide-react';

export default function BrowseTeachers() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Teacher</h1>
          <p className="text-xl text-gray-600">
            Discover qualified educators across India for all subjects and levels
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by subject or teacher name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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
            <Button className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teacher Card 1 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AS
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Anita Sharma</h3>
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="h-4 w-4 mr-1" />
                    Mumbai, Maharashtra
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 ml-1">4.9</span>
                  <span className="text-sm text-gray-700 ml-1">(156 reviews)</span>
                </div>
                <p className="text-sm text-gray-600">
                  Mathematics teacher with 8+ years experience. Specializing in Class 10-12 and JEE preparation.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Mathematics
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    JEE
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Online
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">₹800</span>
                  <span className="text-sm text-gray-700">/hour</span>
                </div>
                <Button size="sm">View Profile</Button>
              </div>
            </div>
          </div>

          {/* Teacher Card 2 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  RK
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Rajesh Kumar</h3>
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="h-4 w-4 mr-1" />
                    Delhi, Delhi
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 ml-1">4.7</span>
                  <span className="text-sm text-gray-700 ml-1">(89 reviews)</span>
                </div>
                <p className="text-sm text-gray-600">
                  Physics expert with 12+ years teaching experience. NEET and JEE specialist.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Physics
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    NEET
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Offline
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">₹1,200</span>
                  <span className="text-sm text-gray-700">/hour</span>
                </div>
                <Button size="sm">View Profile</Button>
              </div>
            </div>
          </div>

          {/* Teacher Card 3 */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  PG
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Priya Gupta</h3>
                  <div className="flex items-center text-sm text-gray-700">
                    <MapPin className="h-4 w-4 mr-1" />
                    Bangalore, Karnataka
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 ml-1">4.8</span>
                  <span className="text-sm text-gray-700 ml-1">(203 reviews)</span>
                </div>
                <p className="text-sm text-gray-600">
                  English and Literature teacher. Specializing in CBSE, ICSE and competitive exam preparation.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    English
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                    Literature
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Both
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">₹600</span>
                  <span className="text-sm text-gray-700">/hour</span>
                </div>
                <Button size="sm">View Profile</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Teachers
          </Button>
        </div>
      </div>
    </div>
  );
}
