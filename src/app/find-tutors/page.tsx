'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Users, 
  Calendar,
  Phone,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';

export default function FindTutorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 
    'Hindi', 'History', 'Geography', 'Economics', 'Computer Science'
  ];

  const locations = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 
    'Hyderabad', 'Pune', 'Gurgaon', 'Noida', 'Online'
  ];

  const modes = ['Online', 'Home Tuition', 'Group Classes', 'Hybrid'];

  const tutors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      subjects: ['Mathematics', 'Physics'],
      qualifications: 'M.Sc Mathematics, B.Ed',
      experience: '8+ years',
      rating: 4.9,
      reviews: 156,
      location: 'Delhi',
      modes: ['Online', 'Home Tuition'],
      fee: '₹800-1200/hour',
      students: 85,
      image: '/api/placeholder/100/100',
      verified: true,
      languages: ['Hindi', 'English'],
      responseTime: '< 2 hours',
      availability: 'Available',
      specialization: 'CBSE, ICSE, JEE Preparation'
    },
    {
      id: 2,
      name: 'Prof. Rajesh Kumar',
      subjects: ['Physics', 'Chemistry'],
      qualifications: 'Ph.D Physics, 12+ years teaching',
      experience: '12+ years',
      rating: 4.8,
      reviews: 203,
      location: 'Mumbai',
      modes: ['Online', 'Group Classes'],
      fee: '₹1000-1500/hour',
      students: 120,
      image: '/api/placeholder/100/100',
      verified: true,
      languages: ['Hindi', 'English', 'Marathi'],
      responseTime: '< 1 hour',
      availability: 'Available',
      specialization: 'NEET, JEE Advanced, Class 11-12'
    },
    {
      id: 3,
      name: 'Ms. Anjali Gupta',
      subjects: ['English', 'Literature'],
      qualifications: 'M.A English Literature, B.Ed',
      experience: '6+ years',
      rating: 4.7,
      reviews: 89,
      location: 'Bangalore',
      modes: ['Online', 'Home Tuition'],
      fee: '₹600-900/hour',
      students: 65,
      image: '/api/placeholder/100/100',
      verified: true,
      languages: ['English', 'Hindi', 'Kannada'],
      responseTime: '< 3 hours',
      availability: 'Available',
      specialization: 'CBSE, ICSE, Grammar & Writing'
    },
    {
      id: 4,
      name: 'Dr. Vikram Singh',
      subjects: ['Chemistry', 'Biology'],
      qualifications: 'Ph.D Chemistry, M.Sc Biology',
      experience: '10+ years',
      rating: 4.9,
      reviews: 178,
      location: 'Chennai',
      modes: ['Online', 'Home Tuition', 'Group Classes'],
      fee: '₹900-1300/hour',
      students: 95,
      image: '/api/placeholder/100/100',
      verified: true,
      languages: ['English', 'Hindi', 'Tamil'],
      responseTime: '< 2 hours',
      availability: 'Busy',
      specialization: 'NEET, Medical Entrance, Class 11-12'
    }
  ];

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = searchQuery === '' || 
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSubject = selectedSubject === '' || tutor.subjects.includes(selectedSubject);
    const matchesLocation = selectedLocation === '' || tutor.location === selectedLocation;
    const matchesMode = selectedMode === '' || tutor.modes.includes(selectedMode);
    
    return matchesSearch && matchesSubject && matchesLocation && matchesMode;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Perfect Tutors</h1>
          <p className="text-gray-600">Discover verified teachers for personalized learning</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by tutor name or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Subject Filter */}
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Mode Filter */}
            <div>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Modes</option>
                {modes.map(mode => (
                  <option key={mode} value={mode}>{mode}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {filteredTutors.length} tutors found
            </p>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTutors.map((tutor) => (
            <div key={tutor.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-600" />
                      </div>
                      {tutor.verified && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">{tutor.name}</h3>
                        {tutor.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{tutor.qualifications}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{tutor.rating}</span>
                          <span className="text-sm text-gray-700 ml-1">({tutor.reviews})</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-600 mr-1" />
                          <span className="text-sm text-gray-600">{tutor.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">Subjects:</p>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-1">Specialization:</p>
                  <p className="text-sm text-gray-700">{tutor.specialization}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{tutor.experience}</p>
                    <p className="text-xs text-gray-700">Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{tutor.students}</p>
                    <p className="text-xs text-gray-700">Students</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{tutor.responseTime}</p>
                    <p className="text-xs text-gray-700">Response</p>
                  </div>
                </div>

                {/* Teaching Modes */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">Teaching Modes:</p>
                  <div className="flex flex-wrap gap-2">
                    {tutor.modes.map((mode, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fee and Availability */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-700">Fee Range</p>
                    <p className="text-lg font-semibold text-gray-900">{tutor.fee}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">Availability</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      tutor.availability === 'Available' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <div className={`w-2 h-2 rounded-full mr-1 ${
                        tutor.availability === 'Available' ? 'bg-green-400' : 'bg-red-400'
                      }`}></div>
                      {tutor.availability}
                    </span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-1">Languages:</p>
                  <p className="text-sm text-gray-700">{tutor.languages.join(', ')}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                  <Button variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Tutors
          </Button>
        </div>
      </div>
    </div>
  );
}
