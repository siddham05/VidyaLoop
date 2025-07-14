import mongoose, { Schema, Document } from 'mongoose';

// User Schema
export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'teacher' | 'student' | 'parent' | 'admin';
  image?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { 
    type: String, 
    enum: ['teacher', 'student', 'parent', 'admin'], 
    required: true 
  },
  image: { type: String },
  isVerified: { type: Boolean, default: false }
}, {
  timestamps: true
});

// Teacher Profile Schema
export interface ITeacherProfile extends Document {
  userId: mongoose.Types.ObjectId;
  shareableCode: string;
  bio: string;
  qualifications: string[];
  experience: number;
  subjects: string[];
  languages: string[];
  location: {
    city: string;
    state: string;
    country: string;
  };
  teachingMode: ('online' | 'offline' | 'both');
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  totalReviews: number;
  isProfileComplete: boolean;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  verificationDocuments: {
    type: string;
    url: string;
  }[];
}

const TeacherProfileSchema = new Schema<ITeacherProfile>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  shareableCode: { type: String, unique: true, required: true },
  bio: { type: String, required: true },
  qualifications: [{ type: String }],
  experience: { type: Number, required: true },
  subjects: [{ type: String, required: true }],
  languages: [{ type: String }],
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default: 'India' }
  },
  teachingMode: { 
    type: String, 
    enum: ['online', 'offline', 'both'], 
    required: true 
  },
  priceRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  rating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  isProfileComplete: { type: Boolean, default: false },
  verificationStatus: { 
    type: String, 
    enum: ['pending', 'verified', 'rejected'], 
    default: 'pending' 
  },
  verificationDocuments: [{
    type: { type: String },
    url: { type: String }
  }]
}, {
  timestamps: true
});

// Course Schema
export interface ICourse extends Document {
  teacherId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  category: string;
  subject: string;
  curriculum: string;
  type: 'live' | 'recorded';
  price: number;
  duration: number; // in hours
  thumbnail: string;
  videos: {
    title: string;
    url: string;
    duration: number;
  }[];
  students: mongoose.Types.ObjectId[];
  rating: number;
  totalReviews: number;
  isPublished: boolean;
}

const CourseSchema = new Schema<ICourse>({
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  subject: { type: String, required: true },
  curriculum: { type: String, required: true },
  type: { type: String, enum: ['live', 'recorded'], required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  thumbnail: { type: String },
  videos: [{
    title: { type: String, required: true },
    url: { type: String, required: true },
    duration: { type: Number, required: true }
  }],
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  rating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false }
}, {
  timestamps: true
});

// Batch Schema
export interface IBatch extends Document {
  teacherId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  subject: string;
  grade: string;
  schedule: {
    days: string[];
    time: string;
    duration: number;
  };
  mode: 'online' | 'offline';
  location?: string;
  fees: number;
  maxStudents: number;
  currentStudents: mongoose.Types.ObjectId[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
}

const BatchSchema = new Schema<IBatch>({
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  subject: { type: String, required: true },
  grade: { type: String, required: true },
  schedule: {
    days: [{ type: String, required: true }],
    time: { type: String, required: true },
    duration: { type: Number, required: true }
  },
  mode: { type: String, enum: ['online', 'offline'], required: true },
  location: { type: String },
  fees: { type: Number, required: true },
  maxStudents: { type: Number, required: true },
  currentStudents: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export const TeacherProfile = mongoose.models.TeacherProfile || mongoose.model<ITeacherProfile>('TeacherProfile', TeacherProfileSchema);
export const Course = mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);
export const Batch = mongoose.models.Batch || mongoose.model<IBatch>('Batch', BatchSchema);
