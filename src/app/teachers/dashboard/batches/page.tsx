'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreateBatchModal from '@/components/CreateBatchModal';
import { formatNumberWithCommas } from '@/lib/utils';
import Link from 'next/link';

interface BatchData {
  name: string;
  subject: string;
  class: string;
  board: string;
  description: string;
  maxStudents: number;
  fees: number;
  duration: string;
  mode: 'online' | 'offline' | 'hybrid';
  location: string;
  city: string;
  area: string;
  landmark: string;
  platform: string;
  meetingDuration: string;
  recordingAvailable: string;
  timezone: string;
  hybridSchedule: { [key: string]: string };
  schedule: {
    days: string[];
    time: string;
  };
  topics: string[];
}

import { 
  Plus, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  Home,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  Search,
  Filter,
  BookOpen,
  IndianRupee,
  Star,
  Play,
  MessageCircle,
  Settings,
  TrendingUp,
  Award,
  CheckCircle,
  AlertTriangle,
  Download,
  Share2,
  Bell,
  Target,
  Zap,
  Globe
} from 'lucide-react';

interface Batch {
  id: string;
  name: string;
  subject: string;
  class: string;
  board: string;
  students: number;
  maxStudents: number;
  fees: number;
  duration: string;
  schedule: {
    days: string[];
    time: string;
  };
  mode: 'online' | 'offline' | 'hybrid';
  location?: string;
  status: 'active' | 'upcoming' | 'completed' | 'paused';
  rating: number;
  totalEarnings: number;
  nextClass: string;
}

const mockBatches: Batch[] = [
  {
    id: '1',
    name: 'JEE Mathematics Mastery',
    subject: 'Mathematics',
    class: 'Class 11-12',
    board: 'CBSE',
    students: 15,
    maxStudents: 20,
    fees: 5000,
    duration: '6 months',
    schedule: {
      days: ['Mon', 'Wed', 'Fri'],
      time: '6:00 PM - 8:00 PM'
    },
    mode: 'online',
    status: 'active',
    rating: 4.8,
    totalEarnings: 75000,
    nextClass: 'Today, 6:00 PM'
  },
  {
    id: '2',
    name: 'NEET Chemistry Crash Course',
    subject: 'Chemistry',
    class: 'Class 12',
    board: 'CBSE',
    students: 8,
    maxStudents: 15,
    fees: 3500,
    duration: '3 months',
    schedule: {
      days: ['Tue', 'Thu', 'Sat'],
      time: '4:00 PM - 6:00 PM'
    },
    mode: 'hybrid',
    location: 'Sector 18, Noida',
    status: 'active',
    rating: 4.6,
    totalEarnings: 28000,
    nextClass: 'Tomorrow, 4:00 PM'
  },
  {
    id: '3',
    name: 'Class 10 Foundation Math',
    subject: 'Mathematics',
    class: 'Class 10',
    board: 'CBSE',
    students: 12,
    maxStudents: 25,
    fees: 2500,
    duration: '4 months',
    schedule: {
      days: ['Mon', 'Wed', 'Fri'],
      time: '3:00 PM - 4:30 PM'
    },
    mode: 'offline',
    location: 'Connaught Place, Delhi',
    status: 'upcoming',
    rating: 4.9,
    totalEarnings: 30000,
    nextClass: 'Dec 1, 3:00 PM'
  },
  {
    id: '4',
    name: 'Physics Olympiad Prep',
    subject: 'Physics',
    class: 'Class 11-12',
    board: 'All Boards',
    students: 6,
    maxStudents: 10,
    fees: 8000,
    duration: '8 months',
    schedule: {
      days: ['Sat', 'Sun'],
      time: '10:00 AM - 1:00 PM'
    },
    mode: 'online',
    status: 'active',
    rating: 5.0,
    totalEarnings: 48000,
    nextClass: 'Saturday, 10:00 AM'
  }
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  upcoming: 'bg-blue-100 text-blue-800',
  completed: 'bg-gray-100 text-gray-800',
  paused: 'bg-yellow-100 text-yellow-800'
};

const modeIcons = {
  online: Video,
  offline: Home,
  hybrid: MapPin
};

export default function MyBatchesPage() {
  const [batches, setBatches] = useState(mockBatches);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterMode, setFilterMode] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingBatch, setEditingBatch] = useState<Batch | null>(null);

  const filteredBatches = batches.filter(batch => {
    const matchesSearch = batch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         batch.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         batch.class.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || batch.status === filterStatus;
    const matchesMode = filterMode === 'all' || batch.mode === filterMode;
    
    return matchesSearch && matchesStatus && matchesMode;
  });

  const totalStudents = batches.reduce((sum, batch) => sum + batch.students, 0);
  const totalEarnings = batches.reduce((sum, batch) => sum + batch.totalEarnings, 0);
  const averageRating = batches.reduce((sum, batch) => sum + batch.rating, 0) / batches.length;

  const handleCreateBatch = (batchData: BatchData) => {
    const newBatch = {
      ...batchData,
      id: (batches.length + 1).toString(),
      students: 0,
      status: 'upcoming' as const,
      rating: 0,
      totalEarnings: 0,
      nextClass: 'Not scheduled'
    };
    setBatches([...batches, newBatch]);
    setIsCreateModalOpen(false);
  };

  const handleEditBatch = (batchData: BatchData) => {
    setBatches(batches.map(batch => 
      batch.id === editingBatch?.id 
        ? { ...batch, ...batchData }
        : batch
    ));
    setEditingBatch(null);
  };

  const openEditModal = (batch: Batch) => {
    setEditingBatch(batch);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8 px-6 rounded-xl mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Live Batches</h1>
            <p className="text-purple-100 mb-4">
              Create and manage live teaching batches for your students
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">{totalStudents} Total Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">{batches.length} Active Batches</span>
              </div>
              <div className="flex items-center space-x-2">
                <IndianRupee className="h-5 w-5" />
                <span className="font-medium">₹{formatNumberWithCommas(totalEarnings)} Earned</span>
              </div>
            </div>
          </div>
          <Button 
            className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-6"
            asChild
          >
            <Link href="/teachers/batches/create">
              <Plus className="h-5 w-5 mr-2" />
              Create New Batch
            </Link>
          </Button>
        </div>
      </div>

      {/* Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+12% this month</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalStudents}</h3>
          <p className="text-gray-600">Active Students</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <Target className="h-4 w-4 mr-1" />
            <span>Goal: 150 students</span>
          </div>
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
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <Award className="h-4 w-4 mr-1" />
            <span>Top Rated Educator</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <IndianRupee className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+18% growth</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">₹{formatNumberWithCommas(totalEarnings)}</h3>
          <p className="text-gray-600">Total Earnings</p>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <Zap className="h-4 w-4 mr-1" />
            <span>Best month yet!</span>
          </div>
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
                placeholder="Search your batches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
              </select>
            </div>
            
            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="all">All Modes</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </div>

      {/* Batches Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBatches.map((batch) => {
          const ModeIcon = modeIcons[batch.mode];
          
          return (
            <div key={batch.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Batch Header */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{batch.name}</h3>
                    <p className="text-sm text-gray-600">{batch.subject} • {batch.class}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[batch.status]}`}>
                      {batch.status === 'active' && <CheckCircle className="h-3 w-3 mr-1" />}
                      {batch.status === 'upcoming' && <Clock className="h-3 w-3 mr-1" />}
                      {batch.status === 'paused' && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                    </span>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-lg font-bold text-blue-900">{batch.students}</p>
                    <p className="text-xs text-blue-600">Students</p>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <IndianRupee className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-lg font-bold text-emerald-900">₹{batch.fees}</p>
                    <p className="text-xs text-emerald-600">Monthly Fee</p>
                  </div>
                </div>

                {/* Batch Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ModeIcon className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-gray-700 capitalize">{batch.mode} Mode</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{batch.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      {batch.schedule.days.join(', ')} • {batch.schedule.time}
                    </span>
                  </div>
                  
                  {batch.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-700">{batch.location}</span>
                    </div>
                  )}
                </div>

                {/* Next Class Alert */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-900">Next Class</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">{batch.nextClass}</p>
                </div>

                {/* Performance Metrics */}
                <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">₹{formatNumberWithCommas(batch.totalEarnings)}</p>
                    <p className="text-xs text-gray-600">Total Earned</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{batch.students}/{batch.maxStudents}</p>
                    <p className="text-xs text-gray-600">Capacity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{batch.duration}</p>
                    <p className="text-xs text-gray-600">Duration</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {batch.status === 'active' && (
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4 mr-2" />
                      Start Class
                    </Button>
                  )}
                  {batch.status === 'upcoming' && (
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => openEditModal(batch)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredBatches.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No batches found</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {searchTerm || filterStatus !== 'all' || filterMode !== 'all'
              ? "Try adjusting your search criteria or filters to find the batches you're looking for."
              : "Start your teaching journey by creating your first batch. Inspire students and build your education empire!"}
          </p>
          <Button 
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 px-8"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Your First Batch
          </Button>
        </div>
      )}

      {/* Create Batch Modal */}
      <CreateBatchModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateBatch}
      />

      {/* Edit Batch Modal */}
      <CreateBatchModal
        isOpen={!!editingBatch}
        onClose={() => setEditingBatch(null)}
        onSubmit={handleEditBatch}
        editData={undefined}
      />
    </div>
  );
}
