'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Plus, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  Home,
  Edit,
  BookOpen,
  IndianRupee,
  Star,
  Globe,
  Settings,
  Upload,
  FileText,
  CheckCircle,
  AlertTriangle,
  Info,
  Target,
  Award,
  Zap,
  ChevronRight,
  ChevronDown,
  X,
  Save,
  Eye,
  Share2,
  Copy,
  Play,
  PauseCircle,
  BarChart3,
  TrendingUp,
  MessageCircle,
  Shield,
  Lightbulb,
  GraduationCap,
  Monitor,
  Smartphone,
  Camera,
  Mic,
  Wifi,
  Download
} from 'lucide-react';
import Link from 'next/link';

interface BatchFormData {
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
  schedule: {
    days: string[];
    time: string;
  };
  topics: string[];
  batchImage: string;
  prerequisites: string[];
  learningOutcomes: string[];
  materials: string[];
  assessments: string[];
}

export default function CreateBatchPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BatchFormData>({
    name: '',
    subject: '',
    class: '',
    board: 'CBSE',
    description: '',
    maxStudents: 30,
    fees: 0,
    duration: '',
    mode: 'online',
    location: '',
    city: '',
    area: '',
    landmark: '',
    platform: 'Zoom',
    meetingDuration: '90',
    recordingAvailable: 'yes',
    timezone: 'Asia/Kolkata',
    schedule: {
      days: [],
      time: ''
    },
    topics: [],
    batchImage: '',
    prerequisites: [],
    learningOutcomes: [],
    materials: [],
    assessments: []
  });

  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    { id: 1, title: 'Basic Information', description: 'Core batch details' },
    { id: 2, title: 'Curriculum & Content', description: 'Topics and materials' },
    { id: 3, title: 'Schedule & Mode', description: 'Timing and delivery' },
    { id: 4, title: 'Pricing & Limits', description: 'Fees and capacity' },
    { id: 5, title: 'Review & Publish', description: 'Final verification' }
  ];

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 
    'Social Science', 'Economics', 'Accountancy', 'Business Studies', 'Computer Science'
  ];

  const classes = [
    'Class 9', 'Class 10', 'Class 11', 'Class 12', 'JEE Main', 'JEE Advanced', 
    'NEET', 'CBSE Boards', 'ICSE', 'State Boards', 'Foundation'
  ];

  const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'Cambridge', 'Other'];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleInputChange = (field: string, value: string | number | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof BatchFormData] as string[], value]
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof BatchFormData] as string[]).filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Batch created:', formData);
    // Handle batch creation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/teachers/batches" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Batches
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">Create New Batch</h1>
              <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                <Lightbulb className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Batch Studio</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? 'Hide Preview' : 'Preview'}
              </Button>
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Publish Batch
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Batch Creation Steps</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep > step.id 
                        ? 'bg-green-100 text-green-600' 
                        : currentStep === step.id 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {currentStep > step.id ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${
                        currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-xs ${
                        currentStep >= step.id ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Completion</span>
                    <span className="font-medium text-blue-600">{Math.round((currentStep / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium text-yellow-800">Pro Tip</h5>
                    <p className="text-xs text-yellow-700 mt-1">
                      Add detailed learning outcomes to attract more students and increase enrollment rates by 40%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              {/* Step Content */}
              <div className="p-8">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Information</h2>
                      <p className="text-gray-600">Let&apos;s start with the fundamentals of your batch</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Batch Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="e.g., JEE 2025 Mathematics Masterclass"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Subject</option>
                          {subjects.map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Class/Level <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.class}
                          onChange={(e) => handleInputChange('class', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Class</option>
                          {classes.map(cls => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Board <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.board}
                          onChange={(e) => handleInputChange('board', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {boards.map(board => (
                            <option key={board} value={board}>{board}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Batch Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe what makes this batch special, your teaching methodology, and what students can expect..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Batch Duration
                      </label>
                      <input
                        type="text"
                        value={formData.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 6 months, 1 year, Until JEE 2025"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Curriculum & Content */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Curriculum & Content</h2>
                      <p className="text-gray-600">Define what students will learn and achieve</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Topics to be Covered <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-3">
                        <div className="flex space-x-3">
                          <input
                            type="text"
                            id="topicInput"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter a topic (e.g., Quadratic Equations, Organic Chemistry)"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                if (input.value.trim()) {
                                  handleArrayChange('topics', input.value.trim());
                                  input.value = '';
                                }
                              }
                            }}
                          />
                          <Button 
                            type="button"
                            onClick={() => {
                              const input = document.getElementById('topicInput') as HTMLInputElement;
                              if (input.value.trim()) {
                                handleArrayChange('topics', input.value.trim());
                                input.value = '';
                              }
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formData.topics.map((topic, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                            >
                              {topic}
                              <button
                                onClick={() => removeArrayItem('topics', index)}
                                className="ml-2 hover:bg-blue-200 rounded-full p-1"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Learning Outcomes
                      </label>
                      <div className="space-y-3">
                        <div className="flex space-x-3">
                          <input
                            type="text"
                            id="outcomeInput"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="What will students achieve? (e.g., Solve JEE level problems confidently)"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                if (input.value.trim()) {
                                  handleArrayChange('learningOutcomes', input.value.trim());
                                  input.value = '';
                                }
                              }
                            }}
                          />
                          <Button 
                            type="button"
                            onClick={() => {
                              const input = document.getElementById('outcomeInput') as HTMLInputElement;
                              if (input.value.trim()) {
                                handleArrayChange('learningOutcomes', input.value.trim());
                                input.value = '';
                              }
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formData.learningOutcomes.map((outcome, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"
                            >
                              {outcome}
                              <button
                                onClick={() => removeArrayItem('learningOutcomes', index)}
                                className="ml-2 hover:bg-green-200 rounded-full p-1"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Prerequisites
                      </label>
                      <div className="space-y-3">
                        <div className="flex space-x-3">
                          <input
                            type="text"
                            id="prerequisiteInput"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="What should students know before joining? (e.g., Basic Algebra)"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                if (input.value.trim()) {
                                  handleArrayChange('prerequisites', input.value.trim());
                                  input.value = '';
                                }
                              }
                            }}
                          />
                          <Button 
                            type="button"
                            onClick={() => {
                              const input = document.getElementById('prerequisiteInput') as HTMLInputElement;
                              if (input.value.trim()) {
                                handleArrayChange('prerequisites', input.value.trim());
                                input.value = '';
                              }
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formData.prerequisites.map((prereq, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700"
                            >
                              {prereq}
                              <button
                                onClick={() => removeArrayItem('prerequisites', index)}
                                className="ml-2 hover:bg-yellow-200 rounded-full p-1"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule & Mode */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule & Delivery Mode</h2>
                      <p className="text-gray-600">Set up when and how classes will be conducted</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Class Mode <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'online', label: 'Online', icon: Monitor, desc: 'Live video classes' },
                          { id: 'offline', label: 'Offline', icon: Home, desc: 'Physical classroom' },
                          { id: 'hybrid', label: 'Hybrid', icon: Globe, desc: 'Both online & offline' }
                        ].map((mode) => (
                          <div
                            key={mode.id}
                            onClick={() => handleInputChange('mode', mode.id)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.mode === mode.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <mode.icon className={`h-6 w-6 ${
                                formData.mode === mode.id ? 'text-blue-600' : 'text-gray-400'
                              }`} />
                              <div>
                                <h3 className={`font-medium ${
                                  formData.mode === mode.id ? 'text-blue-900' : 'text-gray-900'
                                }`}>
                                  {mode.label}
                                </h3>
                                <p className="text-sm text-gray-600">{mode.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Class Days <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {days.map(day => (
                            <label key={day} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={formData.schedule.days.includes(day)}
                                onChange={(e) => {
                                  const updatedDays = e.target.checked
                                    ? [...formData.schedule.days, day]
                                    : formData.schedule.days.filter(d => d !== day);
                                  handleInputChange('schedule', { ...formData.schedule, days: updatedDays });
                                }}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700">{day}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Class Time <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="time"
                          value={formData.schedule.time}
                          onChange={(e) => handleInputChange('schedule', { ...formData.schedule, time: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {formData.mode === 'online' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Platform
                          </label>
                          <select
                            value={formData.platform}
                            onChange={(e) => handleInputChange('platform', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="Zoom">Zoom</option>
                            <option value="Google Meet">Google Meet</option>
                            <option value="Microsoft Teams">Microsoft Teams</option>
                            <option value="Custom Platform">Custom Platform</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Class Duration (minutes)
                          </label>
                          <input
                            type="number"
                            value={formData.meetingDuration}
                            onChange={(e) => handleInputChange('meetingDuration', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            min="30"
                            max="180"
                          />
                        </div>
                      </div>
                    )}

                    {formData.mode === 'offline' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Mumbai, Delhi, Bangalore"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Area/Locality <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.area}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Bandra, CP, Koramangala"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Complete Address
                          </label>
                          <textarea
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter the complete address of your coaching center"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Pricing & Limits */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing & Capacity</h2>
                      <p className="text-gray-600">Set your fees and batch size limits</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Fees (₹) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="number"
                            value={formData.fees}
                            onChange={(e) => handleInputChange('fees', parseInt(e.target.value) || 0)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="5000"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Suggested: ₹3,000 - ₹15,000 based on your subject and level
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Maximum Students <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          value={formData.maxStudents}
                          onChange={(e) => handleInputChange('maxStudents', parseInt(e.target.value) || 0)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min="1"
                          max="100"
                          placeholder="30"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Recommended: 15-30 students for optimal interaction
                        </p>
                      </div>
                    </div>

                    {/* Pricing Recommendations */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Pricing Insights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">₹8,500</div>
                          <div className="text-sm text-gray-600">Average JEE Math</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">₹6,200</div>
                          <div className="text-sm text-gray-600">Average NEET Bio</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">₹4,800</div>
                          <div className="text-sm text-gray-600">Average Class 12</div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Additional Features</h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.recordingAvailable === 'yes'}
                            onChange={(e) => handleInputChange('recordingAvailable', e.target.checked ? 'yes' : 'no')}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div>
                            <span className="font-medium text-gray-900">Recording Available</span>
                            <p className="text-sm text-gray-600">Students can access recorded classes</p>
                          </div>
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div>
                            <span className="font-medium text-gray-900">Study Materials Included</span>
                            <p className="text-sm text-gray-600">PDF notes, practice questions, etc.</p>
                          </div>
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div>
                            <span className="font-medium text-gray-900">Doubt Resolution Sessions</span>
                            <p className="text-sm text-gray-600">Weekly dedicated doubt clearing</p>
                          </div>
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div>
                            <span className="font-medium text-gray-900">Regular Assessments</span>
                            <p className="text-sm text-gray-600">Weekly tests and progress tracking</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review & Publish */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Publish</h2>
                      <p className="text-gray-600">Final review before making your batch live</p>
                    </div>

                    {/* Batch Preview Card */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{formData.name || 'Batch Name'}</h3>
                          <p className="text-blue-600 font-medium">{formData.subject} • {formData.class} • {formData.board}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">₹{formData.fees.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">per month</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{formData.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <Users className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-sm font-medium">{formData.maxStudents} Students</div>
                        </div>
                        <div className="text-center">
                          <Clock className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                          <div className="text-sm font-medium">{formData.meetingDuration}min Classes</div>
                        </div>
                        <div className="text-center">
                          <Calendar className="h-6 w-6 text-green-600 mx-auto mb-1" />
                          <div className="text-sm font-medium">{formData.schedule.days.length} Days/Week</div>
                        </div>
                        <div className="text-center">
                          {formData.mode === 'online' ? <Video className="h-6 w-6 text-orange-600 mx-auto mb-1" /> : <Home className="h-6 w-6 text-orange-600 mx-auto mb-1" />}
                          <div className="text-sm font-medium capitalize">{formData.mode}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {formData.topics.slice(0, 3).map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-white text-blue-700 text-xs rounded-full">
                            {topic}
                          </span>
                        ))}
                        {formData.topics.length > 3 && (
                          <span className="px-2 py-1 bg-white text-gray-500 text-xs rounded-full">
                            +{formData.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Checklist */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Pre-Launch Checklist</h3>
                      <div className="space-y-3">
                        {[
                          { item: 'Batch name and description added', completed: formData.name && formData.description },
                          { item: 'Subject and class level selected', completed: formData.subject && formData.class },
                          { item: 'Topics and curriculum defined', completed: formData.topics.length > 0 },
                          { item: 'Schedule and timing set', completed: formData.schedule.days.length > 0 && formData.schedule.time },
                          { item: 'Pricing and capacity configured', completed: formData.fees > 0 && formData.maxStudents > 0 }
                        ].map((check, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              check.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                            }`}>
                              {check.completed ? <CheckCircle className="h-3 w-3" /> : <div className="w-2 h-2 rounded-full bg-gray-400" />}
                            </div>
                            <span className={check.completed ? 'text-gray-900' : 'text-gray-500'}>
                              {check.item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Success Prediction */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                      <div className="flex items-start space-x-3">
                        <Target className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-900 mb-2">Success Prediction</h3>
                          <p className="text-green-700 mb-3">
                            Based on your batch configuration, we predict a <strong>85% enrollment success rate</strong> with an estimated <strong>24 students</strong> in the first month.
                          </p>
                          <div className="text-sm text-green-600">
                            💡 To increase success: Add more learning outcomes and consider competitive pricing
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="border-t border-gray-200 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    {currentStep > 1 && (
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {currentStep < steps.length ? (
                      <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                        Continue
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Publish Batch
                      </Button>
                    )}
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
