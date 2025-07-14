'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  EyeOff, 
  BookOpen, 
  Users, 
  GraduationCap,
  ArrowRight,
  Shield,
  Check
} from 'lucide-react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

function SignupForm() {
  const searchParams = useSearchParams();
  const roleFromUrl = searchParams.get('role') as 'teacher' | 'student' | 'parent' | null;
  
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'student' | 'parent'>(
    roleFromUrl || 'teacher'
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Role-specific fields
    // Teacher
    qualifications: '',
    experience: '',
    subjects: [] as string[],
    teachingMode: [] as string[],
    
    // Student
    class: '',
    school: '',
    board: '',
    
    // Parent
    children: [{ name: '', class: '', school: '' }],
    
    // Common
    city: '',
    state: '',
    agreeTerms: false,
    agreeMarketing: false
  });

  const roles = [
    {
      id: 'teacher' as const,
      title: 'Teacher',
      description: 'Share knowledge and earn money',
      icon: BookOpen,
      color: 'bg-blue-500',
      benefits: ['Create and sell courses', 'Flexible teaching schedule', 'Earn competitive income', 'Build your reputation']
    },
    {
      id: 'student' as const,
      title: 'Student',
      description: 'Learn from expert teachers',
      icon: GraduationCap,
      color: 'bg-green-500',
      benefits: ['Access to top teachers', 'Live and recorded classes', 'Personalized learning', 'Track your progress']
    },
    {
      id: 'parent' as const,
      title: 'Parent',
      description: 'Support your child&apos;s education',
      icon: Users,
      color: 'bg-purple-500',
      benefits: ['Monitor child progress', 'Connect with teachers', 'Secure payments', 'Regular updates']
    }
  ];

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 
    'History', 'Geography', 'Economics', 'Computer Science', 'Accountancy'
  ];

  const teachingModes = ['Online', 'Home Tuition', 'Group Classes', 'Hybrid'];
  const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE'];
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

  useEffect(() => {
    if (roleFromUrl) {
      setSelectedRole(roleFromUrl);
    }
  }, [roleFromUrl]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleArrayChange = (field: 'subjects' | 'teachingMode', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleChildChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.map((child, i) => 
        i === index ? { ...child, [field]: value } : child
      )
    }));
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [...prev.children, { name: '', class: '', school: '' }]
    }));
  };

  const removeChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index)
    }));
  };

  const validateStep1 = () => {
    return formData.firstName && formData.lastName && formData.email && 
           formData.phone && formData.password && formData.confirmPassword &&
           formData.password === formData.confirmPassword;
  };

  const validateStep2 = () => {
    if (selectedRole === 'teacher') {
      return formData.qualifications && formData.experience && 
             formData.subjects.length > 0 && formData.teachingMode.length > 0;
    } else if (selectedRole === 'student') {
      return formData.class && formData.school && formData.board;
    } else if (selectedRole === 'parent') {
      return formData.children.every(child => child.name && child.class && child.school);
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // API call to register user
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role: selectedRole,
        }),
      });

      if (response.ok) {
        // Redirect to login or verification page
        window.location.href = '/auth/login?registered=true';
      } else {
        const error = await response.json();
        alert(error.message || 'Registration failed');
      }
    } catch {
      alert('An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">VL</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">VidyaLoop</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Join VidyaLoop</h2>
          <p className="mt-2 text-gray-600">Create your account and start your learning journey</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= step 
                    ? 'bg-orange-500 border-orange-500 text-white' 
                    : 'bg-white border-gray-300 text-gray-700'
                }`}>
                  {currentStep > step ? <Check className="h-4 w-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 ${
                    currentStep > step ? 'bg-orange-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-16">
            <span className="text-xs text-gray-700">Basic Info</span>
            <span className="text-xs text-gray-700">Details</span>
            <span className="text-xs text-gray-700">Verify</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Step 1: Role Selection & Basic Info */}
          {currentStep === 1 && (
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Role & Basic Information</h3>
              
              {/* Role Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">I am a:</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    const isSelected = selectedRole === role.id;
                    
                    return (
                      <div
                        key={role.id}
                        onClick={() => setSelectedRole(role.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-orange-500 bg-orange-50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`inline-flex p-3 rounded-lg ${role.color} mb-3`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-medium text-gray-900">{role.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Basic Information Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-600" /> : <Eye className="h-4 w-4 text-gray-600" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-600" /> : <Eye className="h-4 w-4 text-gray-600" />}
                    </button>
                  </div>
                  {formData.password !== formData.confirmPassword && formData.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Button 
                  onClick={nextStep} 
                  disabled={!validateStep1()}
                  className="px-6 py-2"
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Role-specific Details */}
          {currentStep === 2 && (
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {selectedRole === 'teacher' && 'Teaching Information'}
                {selectedRole === 'student' && 'Academic Information'}
                {selectedRole === 'parent' && 'Children Information'}
              </h3>

              {/* Teacher Details */}
              {selectedRole === 'teacher' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                      <input
                        type="text"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="e.g., M.Sc Mathematics, B.Ed"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjects (select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {subjects.map((subject) => (
                        <label key={subject} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.subjects.includes(subject)}
                            onChange={() => handleArrayChange('subjects', subject)}
                            className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Mode (select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {teachingModes.map((mode) => (
                        <label key={mode} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.teachingMode.includes(mode)}
                            onChange={() => handleArrayChange('teachingMode', mode)}
                            className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{mode}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Student Details */}
              {selectedRole === 'student' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Class</label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    >
                      <option value="">Select class</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School/College</label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your school/college name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Board</label>
                    <select
                      name="board"
                      value={formData.board}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    >
                      <option value="">Select board</option>
                      {boards.map((board) => (
                        <option key={board} value={board}>{board}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              )}

              {/* Parent Details */}
              {selectedRole === 'parent' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Children Information</label>
                    {formData.children.map((child, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium text-gray-900">Child {index + 1}</h4>
                          {formData.children.length > 1 && (
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm"
                              onClick={() => removeChild(index)}
                            >
                              Remove
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                              type="text"
                              value={child.name}
                              onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Child's name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                            <select
                              value={child.class}
                              onChange={(e) => handleChildChange(index, 'class', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              required
                            >
                              <option value="">Select class</option>
                              {classes.map((cls) => (
                                <option key={cls} value={cls}>{cls}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                            <input
                              type="text"
                              value={child.school}
                              onChange={(e) => handleChildChange(index, 'school', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="School name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={addChild}
                      className="w-full"
                    >
                      Add Another Child
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button 
                  onClick={nextStep} 
                  disabled={!validateStep2()}
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Terms & Verification */}
          {currentStep === 3 && (
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Terms & Verification</h3>
              
              {/* Benefits Summary */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Welcome to VidyaLoop, {roles.find(r => r.id === selectedRole)?.title}!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roles.find(r => r.id === selectedRole)?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms and Agreements */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mr-3 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the{' '}
                    <Link href="/terms" className="text-orange-600 hover:text-orange-500">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-orange-600 hover:text-orange-500">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeMarketing"
                    checked={formData.agreeMarketing}
                    onChange={handleInputChange}
                    className="mr-3 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1"
                  />
                  <label className="text-sm text-gray-700">
                    I would like to receive updates about new courses, features, and promotional offers
                  </label>
                </div>
              </div>

              {/* Security Note */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900">Your data is secure</h5>
                    <p className="text-sm text-blue-700 mt-1">
                      We use industry-standard encryption to protect your personal information and will never share your data without your consent.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={!formData.agreeTerms || isLoading}
                    className="px-8"
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>
              </form>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="font-medium text-orange-600 hover:text-orange-500">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading signup form...</p>
        </div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
