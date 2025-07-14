'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreateBatchModal from '@/components/CreateBatchModal';
import { formatNumberWithCommas } from '@/lib/utils';

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
  Star
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
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">My Batches</h1>
            <p className="mt-1 text-sm text-gray-600">
              Manage your teaching batches and track student progress
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button 
              className="flex items-center space-x-2"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <Plus className="h-4 w-4" />
              <span>Create New Batch</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Total Batches</dt>
                  <dd className="text-lg font-medium text-gray-900">{batches.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Total Students</dt>
                  <dd className="text-lg font-medium text-gray-900">{totalStudents}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <IndianRupee className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Total Earnings</dt>
                  <dd className="text-lg font-medium text-gray-900">₹{formatNumberWithCommas(totalEarnings)}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-700 truncate">Average Rating</dt>
                  <dd className="text-lg font-medium text-gray-900">{averageRating.toFixed(1)}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
                <input
                  type="text"
                  placeholder="Search batches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-purple-600" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Modes</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Batches Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBatches.map((batch) => {
          const ModeIcon = modeIcons[batch.mode];
          
          return (
            <div key={batch.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">{batch.name}</h3>
                    <p className="text-sm text-gray-600">{batch.subject} • {batch.class} • {batch.board}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[batch.status]}`}>
                      {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      {batch.students}/{batch.maxStudents} students
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-700">₹{batch.fees}/month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ModeIcon className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700 capitalize">{batch.mode}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">{batch.rating}</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      {batch.schedule.days.join(', ')} • {batch.schedule.time}
                    </span>
                  </div>
                  {batch.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-gray-700">{batch.location}</span>
                    </div>
                  )}
                </div>

                {/* Next Class */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Next Class</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">{batch.nextClass}</p>
                </div>

                {/* Earnings */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Total Earnings</span>
                    <span className="font-semibold text-green-600">₹{formatNumberWithCommas(batch.totalEarnings)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => openEditModal(batch)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredBatches.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-medium text-blue-700 mb-2">No batches found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filterStatus !== 'all' || filterMode !== 'all'
              ? "Try adjusting your search or filters"
              : "Get started by creating your first batch"}
          </p>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Batch
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
