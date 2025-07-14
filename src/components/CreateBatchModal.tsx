'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Clock, MapPin, Video, Globe, Users, IndianRupee, GraduationCap, BookOpen, Plus, CalendarDays, Home } from 'lucide-react';

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

interface CreateBatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (batchData: BatchData) => void;
  editData?: BatchData;
}

export default function CreateBatchModal({ isOpen, onClose, onSubmit, editData }: CreateBatchModalProps) {
  const [formData, setFormData] = useState<BatchData>({
    name: editData?.name || '',
    subject: editData?.subject || '',
    class: editData?.class || '',
    board: editData?.board || 'CBSE',
    description: editData?.description || '',
    maxStudents: editData?.maxStudents || 20,
    fees: editData?.fees || 0,
    duration: editData?.duration || '',
    mode: editData?.mode || 'online',
    location: editData?.location || '',
    city: editData?.city || '',
    area: editData?.area || '',
    landmark: editData?.landmark || '',
    platform: editData?.platform || 'zoom',
    meetingDuration: editData?.meetingDuration || '120',
    recordingAvailable: editData?.recordingAvailable || 'yes',
    timezone: editData?.timezone || 'Asia/Kolkata',
    hybridSchedule: editData?.hybridSchedule || {},
    schedule: {
      days: editData?.schedule?.days || [],
      time: editData?.schedule?.time || ''
    },
    topics: editData?.topics || []
  });

  const [newTopic, setNewTopic] = useState('');

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi',
    'Social Science', 'Computer Science', 'Economics', 'Accountancy',
    'Business Studies', 'Political Science', 'History', 'Geography'
  ];

  const classes = [
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
    'Class 11', 'Class 12', 'Class 11-12', 'Graduation', 'Post Graduation'
  ];

  const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'Cambridge', 'Other'];

  const weekDays = [
    { id: 'Mon', label: 'Monday' },
    { id: 'Tue', label: 'Tuesday' },
    { id: 'Wed', label: 'Wednesday' },
    { id: 'Thu', label: 'Thursday' },
    { id: 'Fri', label: 'Friday' },
    { id: 'Sat', label: 'Saturday' },
    { id: 'Sun', label: 'Sunday' }
  ];

  const handleInputChange = (field: string, value: string | number | string[]) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (parent === 'hybridSchedule') {
        setFormData(prev => ({
          ...prev,
          hybridSchedule: {
            ...prev.hybridSchedule,
            [child]: value as string
          }
        }));
      } else if (parent === 'schedule') {
        setFormData(prev => ({
          ...prev,
          schedule: {
            ...prev.schedule,
            [child]: value
          }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleDayToggle = (day: string) => {
    const currentDays = formData.schedule.days;
    const updatedDays = currentDays.includes(day)
      ? currentDays.filter((d: string) => d !== day)
      : [...currentDays, day];
    
    handleInputChange('schedule.days', updatedDays);
  };

  const addTopic = () => {
    if (newTopic.trim()) {
      setFormData(prev => ({
        ...prev,
        topics: [...prev.topics, newTopic.trim()]
      }));
      setNewTopic('');
    }
  };

  const removeTopic = (index: number) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.filter((_: string, i: number) => i !== index)
    }));
  };

  // Helper function to get suggested topics based on subject
  const getSuggestedTopics = (subject: string): string[] => {
    const topicSuggestions: { [key: string]: string[] } = {
      'Mathematics': ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Trigonometry', 'Probability'],
      'Physics': ['Mechanics', 'Thermodynamics', 'Optics', 'Electricity', 'Magnetism', 'Modern Physics'],
      'Chemistry': ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry'],
      'Biology': ['Cell Biology', 'Genetics', 'Ecology', 'Human Physiology', 'Evolution', 'Botany'],
      'English': ['Grammar', 'Literature', 'Creative Writing', 'Comprehension', 'Poetry', 'Essay Writing'],
      'Hindi': ['व्याकरण', 'साहित्य', 'कविता', 'गद्य', 'निबंध लेखन', 'भाषा विज्ञान'],
      'Computer Science': ['Programming', 'Data Structures', 'Algorithms', 'Database', 'Web Development', 'Software Engineering'],
      'Economics': ['Microeconomics', 'Macroeconomics', 'Banking', 'International Trade', 'Public Finance'],
    };
    
    return topicSuggestions[subject] || [];
  };

  // Helper function to add suggested topic
  const addSuggestedTopic = (topic: string) => {
    if (!formData.topics.includes(topic)) {
      setFormData(prev => ({
        ...prev,
        topics: [...prev.topics, topic]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              {editData ? 'Edit Batch' : 'Create New Batch'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Basic Information</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Batch Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., JEE Mathematics Mastery"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Class/Level *
                    </label>
                    <select
                      required
                      value={formData.class}
                      onChange={(e) => handleInputChange('class', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Class</option>
                      {classes.map(cls => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Board
                    </label>
                    <select
                      value={formData.board}
                      onChange={(e) => handleInputChange('board', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {boards.map(board => (
                        <option key={board} value={board}>{board}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brief description of the batch..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Batch Settings</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Maximum Students *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-600" />
                      <input
                        type="number"
                        required
                        min="1"
                        max="100"
                        value={formData.maxStudents}
                        onChange={(e) => handleInputChange('maxStudents', parseInt(e.target.value))}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Fees (₹) *
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-emerald-600" />
                      <input
                        type="number"
                        required
                        min="0"
                        value={formData.fees}
                        onChange={(e) => handleInputChange('fees', parseInt(e.target.value))}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="5000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 6 months, 1 year"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Teaching Mode *
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { 
                          value: 'online', 
                          label: 'Online Classes', 
                          icon: Video,
                          description: 'Conduct classes via video conferencing platforms',
                          color: 'border-blue-200 bg-blue-50 text-blue-700',
                          iconColor: 'text-blue-500'
                        },
                        { 
                          value: 'offline', 
                          label: 'In-Person Classes', 
                          icon: Home,
                          description: 'Traditional classroom teaching at your location',
                          color: 'border-green-200 bg-green-50 text-green-700',
                          iconColor: 'text-green-500'
                        },
                        { 
                          value: 'hybrid', 
                          label: 'Hybrid (Online + Offline)', 
                          icon: MapPin,
                          description: 'Combination of online and in-person sessions',
                          color: 'border-purple-200 bg-purple-50 text-purple-700',
                          iconColor: 'text-purple-500'
                        }
                      ].map(mode => {
                        const Icon = mode.icon;
                        const isSelected = formData.mode === mode.value;
                        return (
                          <div
                            key={mode.value}
                            className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 hover:shadow-md ${
                              isSelected 
                                ? `${mode.color} border-opacity-100 shadow-sm` 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('mode', mode.value)}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0">
                                <input
                                  type="radio"
                                  name="mode"
                                  value={mode.value}
                                  checked={isSelected}
                                  onChange={(e) => handleInputChange('mode', e.target.value)}
                                  className="mt-1 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <Icon className={`h-5 w-5 ${isSelected ? mode.iconColor : 'text-gray-600'}`} />
                                  <span className={`font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                                    {mode.label}
                                  </span>
                                </div>
                                <p className={`text-sm ${isSelected ? 'text-gray-700' : 'text-gray-600'}`}>
                                  {mode.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {(formData.mode === 'offline' || formData.mode === 'hybrid') && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        <h5 className="font-medium text-gray-900">Location Details</h5>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address/Venue *
                          </label>
                          <input
                            type="text"
                            required={formData.mode === 'offline' || formData.mode === 'hybrid'}
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 123 Main Street, Building A"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            required={formData.mode === 'offline' || formData.mode === 'hybrid'}
                            value={formData.city || ''}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., New Delhi"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Area/Locality
                          </label>
                          <input
                            type="text"
                            value={formData.area || ''}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Connaught Place, Sector 18"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Landmark (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.landmark || ''}
                            onChange={(e) => handleInputChange('landmark', e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Near Metro Station"
                          />
                        </div>
                      </div>
                      
                      {formData.mode === 'hybrid' && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-200">
                          <div className="flex items-start space-x-2">
                            <Video className="h-4 w-4 text-blue-500 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-blue-900">Hybrid Mode Configuration</p>
                              <p className="text-xs text-blue-700 mt-1">
                                You can specify which days are online vs offline in the schedule section below.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {formData.mode === 'online' && (
                    <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2 mb-3">
                        <Video className="h-5 w-5 text-blue-500" />
                        <h5 className="font-medium text-gray-900">Online Class Settings</h5>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Platform
                        </label>
                        <select
                          value={formData.platform || 'zoom'}
                          onChange={(e) => handleInputChange('platform', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="zoom">Zoom</option>
                          <option value="google-meet">Google Meet</option>
                          <option value="microsoft-teams">Microsoft Teams</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Meeting Duration
                          </label>
                          <select
                            value={formData.meetingDuration || '120'}
                            onChange={(e) => handleInputChange('meetingDuration', e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="60">1 hour</option>
                            <option value="90">1.5 hours</option>
                            <option value="120">2 hours</option>
                            <option value="150">2.5 hours</option>
                            <option value="180">3 hours</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Recording Available
                          </label>
                          <select
                            value={formData.recordingAvailable || 'yes'}
                            onChange={(e) => handleInputChange('recordingAvailable', e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="yes">Yes, recordings provided</option>
                            <option value="no">No recordings</option>
                            <option value="premium">Only for premium students</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Enhanced Schedule */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <CalendarDays className="h-5 w-5 text-blue-500" />
                <h4 className="text-lg font-medium text-gray-900">Class Schedule</h4>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Class Days *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {weekDays.map(day => {
                      const isSelected = formData.schedule.days.includes(day.id);
                      return (
                        <div
                          key={day.id}
                          className={`relative cursor-pointer rounded-lg border-2 p-3 transition-all duration-200 ${
                            isSelected 
                              ? 'border-blue-500 bg-blue-50 text-blue-700' 
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                          onClick={() => handleDayToggle(day.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleDayToggle(day.id)}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className={`text-sm font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>
                              {day.label}
                            </span>
                          </div>
                          
                          {formData.mode === 'hybrid' && isSelected && (
                            <div className="mt-2">
                              <select
                                value={formData.hybridSchedule?.[day.id] || 'online'}
                                onChange={(e) => handleInputChange(`hybridSchedule.${day.id}`, e.target.value)}
                                className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                              </select>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  {formData.mode === 'hybrid' && formData.schedule.days.length > 0 && (
                    <div className="mt-3 p-3 bg-purple-50 rounded-md border border-purple-200">
                      <p className="text-sm text-purple-700">
                        <strong>Hybrid Schedule:</strong> Select online/offline for each day above
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Class Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-indigo-600" />
                      <input
                        type="text"
                        required
                        value={formData.schedule.time}
                        onChange={(e) => handleInputChange('schedule.time', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., 6:00 PM - 8:00 PM"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select
                      value={formData.timezone || 'Asia/Kolkata'}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Asia/Kolkata">India Standard Time (IST)</option>
                      <option value="UTC">UTC</option>
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="Europe/London">British Time (GMT)</option>
                    </select>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Quick Schedule Templates</h5>
                    <div className="space-y-2">
                      {[
                        { label: 'Weekdays (Mon-Fri)', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], time: '6:00 PM - 8:00 PM' },
                        { label: 'Alternate Days (Mon, Wed, Fri)', days: ['Mon', 'Wed', 'Fri'], time: '4:00 PM - 6:00 PM' },
                        { label: 'Weekends (Sat, Sun)', days: ['Sat', 'Sun'], time: '10:00 AM - 1:00 PM' },
                      ].map((template, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            handleInputChange('schedule.days', template.days);
                            handleInputChange('schedule.time', template.time);
                          }}
                          className="w-full text-left px-3 py-2 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50 hover:border-gray-300 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{template.label}</div>
                          <div className="text-gray-700">{template.days.join(', ')} • {template.time}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Topics */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <h4 className="text-lg font-medium text-gray-900">Topics to Cover</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add a topic (e.g., Calculus, Algebra)..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTopic())}
                  />
                  <Button 
                    type="button" 
                    onClick={addTopic}
                    className="px-4 py-2"
                    disabled={!newTopic.trim()}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>

                {formData.topics.length > 0 ? (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Topics ({formData.topics.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {formData.topics.map((topic: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-200"
                        >
                          {topic}
                          <button
                            type="button"
                            onClick={() => removeTopic(index)}
                            className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-700">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-sm">No topics added yet</p>
                    <p className="text-xs text-gray-600">Add topics that will be covered in this batch</p>
                  </div>
                )}

                {/* Suggested Topics based on subject */}
                {formData.subject && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Suggested topics for {formData.subject}:</p>
                    <div className="flex flex-wrap gap-2">
                      {getSuggestedTopics(formData.subject).map((topic, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => !formData.topics.includes(topic) && addSuggestedTopic(topic)}
                          disabled={formData.topics.includes(topic)}
                          className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                            formData.topics.includes(topic)
                              ? 'bg-gray-100 text-gray-600 border-gray-200 cursor-not-allowed'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 cursor-pointer'
                          }`}
                        >
                          <Plus className="h-3 w-3 inline mr-1" />
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Batch Summary Preview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h4 className="text-lg font-medium text-gray-900">Batch Summary</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">
                      {formData.subject || 'Subject'} • {formData.class || 'Class'} • {formData.board || 'Board'}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-indigo-600" />
                    <span className="text-gray-600">
                      {formData.duration || '60'} mins per session
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="h-4 w-4 text-emerald-600" />
                    <span className="text-gray-600">
                      ₹{formData.fees || '0'} per month
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {formData.mode === 'online' && <Video className="h-4 w-4 text-blue-500" />}
                    {formData.mode === 'offline' && <Home className="h-4 w-4 text-green-500" />}
                    {formData.mode === 'hybrid' && <Globe className="h-4 w-4 text-purple-500" />}
                    <span className="text-gray-600 capitalize">{formData.mode || 'Teaching mode'}</span>
                  </div>
                  
                  {formData.mode === 'offline' && formData.city && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-700" />
                      <span className="text-gray-600">{formData.city}, {formData.area}</span>
                    </div>
                  )}
                  
                  {formData.mode === 'online' && formData.platform && (
                    <div className="flex items-center space-x-2">
                      <Video className="h-4 w-4 text-gray-700" />
                      <span className="text-gray-600">{formData.platform}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-700" />
                    <span className="text-gray-600">Max {formData.maxStudents || '0'} students</span>
                  </div>
                </div>
              </div>
              
              {formData.topics.length > 0 && (
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">Topics to be covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {formData.topics.slice(0, 5).map((topic: string, index: number) => (
                      <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {topic}
                      </span>
                    ))}
                    {formData.topics.length > 5 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        +{formData.topics.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {editData ? 'Update Batch' : 'Create Batch'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
