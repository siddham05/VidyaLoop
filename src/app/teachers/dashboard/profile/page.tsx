'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Edit, Star, MapPin, Users, CheckCircle, Award, 
  Phone, Mail, Calendar, Clock, Video, Home, 
  Briefcase, GraduationCap, TrendingUp, MessageCircle,
  Share2, Download, Settings, ArrowLeft, Globe,
  BookOpen, IndianRupee, Target, Zap, Eye,
  Play, Upload, Camera, Shield, ChevronRight,
  ExternalLink, Copy, BarChart3, Trophy, Save,
  X, Plus, Trash2, Edit3
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  
  // Profile data state
  const [profileData, setProfileData] = useState({
    name: 'Dr. Priya Sharma',
    title: 'Senior Mathematics Faculty & Course Director',
    location: 'Mumbai, Maharashtra',
    bio: '🏆 India\'s Top Mathematics Educator | 8+ Years Experience | JEE & NEET Expert | Making Math Simple & Fun for 10,000+ Students Worldwide',
    email: 'dr.priya.sharma@vidyaloop.com',
    phone: '+91 98765 43210',
    address: 'Bandra, Mumbai, Maharashtra, India',
    skills: ['JEE Expert', 'NEET Mathematics', 'Problem Solving', 'Concept Clarity', 'Doubt Resolution'],
    about: '🚀 Passionate Mathematics educator with 8+ years of experience transforming how students learn math. I specialize in making complex concepts simple and enjoyable, helping students not just pass exams but truly understand and love mathematics.',
    aboutSecond: '🏆 My teaching methodology focuses on building strong fundamentals while preparing students for competitive exams like JEE Main, JEE Advanced, and NEET. I have successfully guided over 2,800 students to achieve their academic dreams.',
    qualifications: [
      { degree: 'Ph.D. in Mathematics', institute: 'IIT Bombay', year: '2018', grade: 'Distinction' },
      { degree: 'M.Sc. Mathematics', institute: 'University of Mumbai', year: '2015', grade: 'First Class' },
      { degree: 'B.Ed. (Mathematics)', institute: 'SNDT Women University', year: '2013', grade: 'Distinction' },
      { degree: 'B.Sc. Mathematics', institute: 'St. Xavier College, Mumbai', year: '2011', grade: 'First Class' }
    ],
    experience: [
      { 
        role: 'Senior Mathematics Faculty & Course Director', 
        company: 'VidyaLoop (Current)', 
        period: '2022 - Present',
        description: 'Leading mathematics curriculum development and teaching 2000+ students across multiple courses.'
      },
      { 
        role: 'Senior Mathematics Faculty', 
        company: 'Unacademy', 
        period: '2020 - 2022',
        description: 'Conducted live classes for JEE aspirants with average class strength of 15,000+ students.'
      },
      { 
        role: 'Mathematics Teacher', 
        company: 'Aakash Institute', 
        period: '2018 - 2020',
        description: 'Taught JEE Main & Advanced Mathematics with 95% student satisfaction rate.'
      },
      { 
        role: 'Assistant Professor', 
        company: 'Mumbai University', 
        period: '2016 - 2018',
        description: 'Conducted research in Applied Mathematics and taught undergraduate students.'
      }
    ]
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleEdit = (section: string) => {
    setEditingSection(section);
    setTempData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setEditingSection(null);
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setEditingSection(null);
  };

  const addSkill = () => {
    setTempData({
      ...tempData,
      skills: [...tempData.skills, '']
    });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...tempData.skills];
    newSkills[index] = value;
    setTempData({
      ...tempData,
      skills: newSkills
    });
  };

  const removeSkill = (index: number) => {
    setTempData({
      ...tempData,
      skills: tempData.skills.filter((_, i) => i !== index)
    });
  };

  const addQualification = () => {
    setTempData({
      ...tempData,
      qualifications: [...tempData.qualifications, { degree: '', institute: '', year: '', grade: '' }]
    });
  };

  const updateQualification = (index: number, field: string, value: string) => {
    const newQualifications = [...tempData.qualifications];
    newQualifications[index] = { ...newQualifications[index], [field]: value };
    setTempData({
      ...tempData,
      qualifications: newQualifications
    });
  };

  const removeQualification = (index: number) => {
    setTempData({
      ...tempData,
      qualifications: tempData.qualifications.filter((_, i) => i !== index)
    });
  };

  const addExperience = () => {
    setTempData({
      ...tempData,
      experience: [...tempData.experience, { role: '', company: '', period: '', description: '' }]
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newExperience = [...tempData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setTempData({
      ...tempData,
      experience: newExperience
    });
  };

  const removeExperience = (index: number) => {
    setTempData({
      ...tempData,
      experience: tempData.experience.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Profile Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/teachers/dashboard" className="inline-flex items-center text-blue-100 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="h-32 w-32 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30">
                DS
              </div>
              <button className="absolute bottom-0 right-0 bg-white text-blue-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                {editingSection === 'header' ? (
                  <div className="flex-1">
                    <input
                      type="text"
                      value={tempData.name}
                      onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                      className="text-3xl font-bold bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-3 py-2 w-full"
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      value={tempData.title}
                      onChange={(e) => setTempData({ ...tempData, title: e.target.value })}
                      className="text-lg bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-3 py-2 w-full mt-2"
                      placeholder="Your Title"
                    />
                  </div>
                ) : (
                  <h1 className="text-3xl font-bold">{profileData.name}</h1>
                )}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">
                  <Shield className="h-4 w-4 mr-1" />
                  Verified Educator
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500 text-white">
                  <Trophy className="h-4 w-4 mr-1" />
                  Top Rated
                </span>
                {editingSection !== 'header' && (
                  <button
                    onClick={() => handleEdit('header')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  {editingSection === 'header' ? (
                    <input
                      type="text"
                      value={tempData.location}
                      onChange={(e) => setTempData({ ...tempData, location: e.target.value })}
                      className="bg-white/20 text-white placeholder-white/70 border border-white/30 rounded px-2 py-1"
                      placeholder="Location"
                    />
                  ) : (
                    <span className="font-medium">{profileData.location}</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 fill-current" />
                  <span className="font-medium">4.9 (847 reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">2,847 Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">24 Courses</span>
                </div>
              </div>
              
              {editingSection === 'header' ? (
                <div className="mb-6">
                  <textarea
                    value={tempData.bio}
                    onChange={(e) => setTempData({ ...tempData, bio: e.target.value })}
                    className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-3 py-2 h-24 resize-none"
                    placeholder="Your bio..."
                  />
                  <div className="flex gap-2 mt-3">
                    <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={handleCancel} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-blue-50 text-lg mb-6 max-w-3xl">
                  {profileData.bio}
                </p>
              )}
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Educator ID:</span>
                  <code className="font-mono text-yellow-300 font-bold">VL-PS-2024</code>
                  <button className="text-yellow-300 hover:text-white">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Profile
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Public View
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-3">
              <Button 
                onClick={() => editingSection ? handleSave() : handleEdit('general')}
                className="bg-green-500 hover:bg-green-600 text-white px-6"
              >
                {editingSection ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+15% this month</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">2,847</h3>
            <p className="text-gray-600">Total Students</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <IndianRupee className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">+22% growth</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">₹8.5L</h3>
            <p className="text-gray-600">Total Earnings</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">Excellent</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-green-600 font-medium">3 new</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">24</h3>
            <p className="text-gray-600">Published Courses</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'contact', label: 'Contact Info', icon: Mail }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* About Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">About Me</h2>
                    {editingSection !== 'about' && (
                      <button
                        onClick={() => handleEdit('about')}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Edit3 className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  {editingSection === 'about' ? (
                    <div className="space-y-4">
                      <textarea
                        value={tempData.about}
                        onChange={(e) => setTempData({ ...tempData, about: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="First paragraph about you..."
                      />
                      <textarea
                        value={tempData.aboutSecond}
                        onChange={(e) => setTempData({ ...tempData, aboutSecond: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Second paragraph about you..."
                      />
                      <div className="flex gap-2">
                        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                        <Button onClick={handleCancel} variant="outline">
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {profileData.about}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {profileData.aboutSecond}
                      </p>
                    </>
                  )}
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">Skills & Expertise</h3>
                      {editingSection !== 'skills' && (
                        <button
                          onClick={() => handleEdit('skills')}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    {editingSection === 'skills' ? (
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {tempData.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
                              <input
                                type="text"
                                value={skill}
                                onChange={(e) => updateSkill(index, e.target.value)}
                                className="bg-transparent text-blue-700 text-sm font-medium border-none outline-none min-w-20"
                                placeholder="Skill name"
                              />
                              <button
                                onClick={() => removeSkill(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={addSkill}
                            className="px-3 py-1 border-2 border-dashed border-gray-300 rounded-full text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm"
                          >
                            <Plus className="h-3 w-3 inline mr-1" />
                            Add Skill
                          </button>
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button onClick={handleCancel} variant="outline">
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Teaching Specialties */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Teaching Specialties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'JEE Mathematics', desc: 'Complete syllabus with advanced problem solving', students: '1,200+' },
                      { title: 'NEET Mathematics', desc: 'Focused preparation for medical entrance', students: '800+' },
                      { title: 'Class 11-12 Boards', desc: 'CBSE, ICSE, and State board mathematics', students: '600+' },
                      { title: 'Foundation Math', desc: 'Building strong mathematical base for Class 9-10', students: '400+' }
                    ].map((specialty, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-gray-900 mb-2">{specialty.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{specialty.desc}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-medium text-sm">{specialty.students} students</span>
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8">
                {/* Qualifications */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      <GraduationCap className="h-6 w-6 inline mr-2 text-blue-600" />
                      Educational Qualifications
                    </h2>
                    {editingSection !== 'qualifications' && (
                      <button
                        onClick={() => handleEdit('qualifications')}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Edit3 className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  {editingSection === 'qualifications' ? (
                    <div className="space-y-6">
                      {tempData.qualifications.map((qual, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <input
                              type="text"
                              value={qual.degree}
                              onChange={(e) => updateQualification(index, 'degree', e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Degree"
                            />
                            <input
                              type="text"
                              value={qual.institute}
                              onChange={(e) => updateQualification(index, 'institute', e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Institute"
                            />
                            <input
                              type="text"
                              value={qual.year}
                              onChange={(e) => updateQualification(index, 'year', e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Year"
                            />
                            <input
                              type="text"
                              value={qual.grade}
                              onChange={(e) => updateQualification(index, 'grade', e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Grade/Result"
                            />
                          </div>
                          <button
                            onClick={() => removeQualification(index)}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={addQualification}
                        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
                      >
                        <Plus className="h-5 w-5 inline mr-2" />
                        Add Qualification
                      </button>
                      <div className="flex gap-2">
                        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                        <Button onClick={handleCancel} variant="outline">
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {profileData.qualifications.map((qual, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Award className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{qual.degree}</h3>
                            <p className="text-blue-600 font-medium">{qual.institute}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-sm text-gray-600">{qual.year}</span>
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                {qual.grade}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Work Experience */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      <Briefcase className="h-6 w-6 inline mr-2 text-purple-600" />
                      Professional Experience
                    </h2>
                    {editingSection !== 'experience' && (
                      <button
                        onClick={() => handleEdit('experience')}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Edit3 className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  {editingSection === 'experience' ? (
                    <div className="space-y-6">
                      {tempData.experience.map((exp, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="space-y-3 mb-3">
                            <input
                              type="text"
                              value={exp.role}
                              onChange={(e) => updateExperience(index, 'role', e.target.value)}
                              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Job Role/Title"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Company/Organization"
                              />
                              <input
                                type="text"
                                value={exp.period}
                                onChange={(e) => updateExperience(index, 'period', e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Duration (e.g., 2020 - 2022)"
                              />
                            </div>
                            <textarea
                              value={exp.description}
                              onChange={(e) => updateExperience(index, 'description', e.target.value)}
                              className="w-full border border-gray-300 rounded px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Job description and achievements..."
                            />
                          </div>
                          <button
                            onClick={() => removeExperience(index)}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={addExperience}
                        className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-purple-300 hover:text-purple-600 transition-colors"
                      >
                        <Plus className="h-5 w-5 inline mr-2" />
                        Add Experience
                      </button>
                      <div className="flex gap-2">
                        <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                        <Button onClick={handleCancel} variant="outline">
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {profileData.experience.map((exp, index) => (
                        <div key={index} className="border-l-4 border-purple-500 pl-6 pb-6">
                          <h3 className="font-semibold text-gray-900 text-lg">{exp.role}</h3>
                          <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  <Trophy className="h-6 w-6 inline mr-2 text-yellow-600" />
                  Awards & Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Top Educator 2024', org: 'VidyaLoop', desc: 'Highest rated teacher of the year' },
                    { title: 'Best Teacher Award', org: 'Unacademy', desc: '95% student satisfaction rate' },
                    { title: 'Excellence in Teaching', org: 'IIT Alumni Association', desc: 'Outstanding contribution to education' },
                    { title: 'Research Excellence', org: 'Mumbai University', desc: 'Published 15+ research papers' }
                  ].map((achievement, index) => (
                    <div key={index} className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Trophy className="h-6 w-6 text-yellow-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                          <p className="text-yellow-700 font-medium text-sm">{achievement.org}</p>
                          <p className="text-gray-600 text-sm mt-1">{achievement.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Analytics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Student Engagement</h3>
                      <p className="text-3xl font-bold text-blue-600">94%</p>
                      <p className="text-blue-700 text-sm">Average attendance rate</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Course Completion</h3>
                      <p className="text-3xl font-bold text-green-600">89%</p>
                      <p className="text-green-700 text-sm">Students complete courses</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h3 className="font-semibold text-yellow-900 mb-2">Monthly Growth</h3>
                      <p className="text-3xl font-bold text-yellow-600">+18%</p>
                      <p className="text-yellow-700 text-sm">New student enrollments</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Success Rate</h3>
                      <p className="text-3xl font-bold text-purple-600">92%</p>
                      <p className="text-purple-700 text-sm">Students achieve goals</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
                  {editingSection !== 'contact' && (
                    <button
                      onClick={() => handleEdit('contact')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Edit3 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                
                {editingSection === 'contact' ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={tempData.email}
                          onChange={(e) => setTempData({ ...tempData, email: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={tempData.phone}
                          onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <textarea
                        value={tempData.address}
                        onChange={(e) => setTempData({ ...tempData, address: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your full address..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline">
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{profileData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{profileData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">{profileData.address}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                  <Video className="h-4 w-4 mr-2" />
                  Start Live Class
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Content
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Students
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'Completed live class', time: '2 hours ago', type: 'success' },
                  { action: 'New student enrolled', time: '5 hours ago', type: 'info' },
                  { action: 'Course updated', time: '1 day ago', type: 'warning' },
                  { action: 'Achievement unlocked', time: '2 days ago', type: 'success' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' : 
                      activity.type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Love ❤️</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-700">&quot;Best math teacher ever! Made JEE prep so much easier.&quot;</p>
                  <p className="text-xs text-gray-500 mt-1">- Arjun R., JEE 2024</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-700">&quot;Crystal clear explanations. Highly recommended!&quot;</p>
                  <p className="text-xs text-gray-500 mt-1">- Priya M., NEET 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
