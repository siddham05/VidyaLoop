# VidyaLoop - User Role Based Folder Structure

This document outlines the organized folder structure for different user types in the VidyaLoop application.

## 📁 Folder Structure Overview

### 🎓 Teachers Portal (`/src/app/teachers/`)
- **Dashboard** (`/teachers/dashboard/`) - Main teacher dashboard with analytics and overview
- **Profile** (`/teachers/profile/`) - Teacher profile management and editing
- **Batches** (`/teachers/batches/`) - Manage teaching batches and student groups
  - **Create** (`/teachers/batches/create/`) - Create new batches
  - **[id]** (`/teachers/batches/[id]/`) - Individual batch details
- **Courses** (`/teachers/courses/`) - Course creation and management
- **Analytics** (`/teachers/analytics/`) - Performance tracking and statistics
- **Earnings** (`/teachers/earnings/`) - Revenue and payment tracking
- **Live Classes** (`/teachers/live-classes/`) - Conduct live sessions

### 👨‍🎓 Students Portal (`/src/app/students/`)
- **Dashboard** (`/students/dashboard/`) - Student dashboard with progress overview
- **Profile** (`/students/profile/`) - Student profile and personal information
- **Courses** (`/students/courses/`) - Enrolled courses and learning materials
- **Live Classes** (`/students/live-classes/`) - Attend live sessions
- **Doubt Chat** (`/students/doubt-chat/`) - Ask questions and get help
- **Progress** (`/students/progress/`) - Track learning progress and achievements
- **Assignments** (`/students/assignments/`) - Complete and submit assignments
- **Schedule** (`/students/schedule/`) - Class schedules and calendar
- **Achievements** (`/students/achievements/`) - Badges, certificates, and rewards
- **Tutors** (`/students/tutors/`) - Find and connect with tutors

### 👨‍👩‍👧‍👦 Parents Portal (`/src/app/parents/`)
- **Dashboard** (`/parents/dashboard/`) - Parent dashboard with children's overview
- **Profile** (`/parents/profile/`) - Parent profile and account settings
- **Children** (`/parents/children/`) - Manage children's accounts and information
- **Progress Tracking** (`/parents/progress-tracking/`) - Monitor children's learning progress
- **Tutor Search** (`/parents/tutor-search/`) - Find and hire tutors for children
- **Payments** (`/parents/payments/`) - Billing, payments, and transaction history
- **Communications** (`/parents/communications/`) - Messages from teachers and school
- **Reports** (`/parents/reports/`) - Detailed academic reports and analytics

## 🚀 Features by User Type

### Teacher Features
- ✅ Professional dashboard with student analytics
- ✅ Comprehensive profile with editing capabilities
- ✅ Batch management and creation
- ✅ Course development and publishing
- ✅ Earnings and performance tracking
- ✅ Live class management

### Student Features
- ✅ Learning-focused dashboard
- ✅ Personal profile management
- ✅ Course enrollment and progress tracking
- ✅ Interactive doubt resolution
- ✅ Assignment submission and grading
- ✅ Achievement and progress tracking

### Parent Features
- ✅ Child monitoring dashboard
- ✅ Multiple children management
- ✅ Progress tracking and reports
- ✅ Payment and billing management
- ✅ Communication with teachers
- ✅ Tutor search and hiring

## 🎨 Navigation Themes

### Teacher Navigation
- **Theme**: Blue-purple gradient
- **Focus**: Teaching tools and student management
- **Navigation**: Dedicated teacher navigation component

### Student Navigation
- **Theme**: Clean white header design
- **Focus**: Learning activities and progress
- **Navigation**: Simplified HTML-based navigation

### Parent Navigation
- **Theme**: Purple-pink gradient
- **Focus**: Child monitoring and communication
- **Navigation**: Parent-specific navigation component

## 📱 Responsive Design
All portals are designed to work seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## 🔐 Role-Based Access
- Each user type has access only to their specific portal
- Automatic redirection based on user role
- Secure authentication and authorization

## 🔄 Recent Updates
- Created dedicated `/teachers/` folder structure
- Enhanced `/students/` folder with additional features
- Expanded `/parents/` folder with comprehensive tools
- Updated navigation components for role-based routing
- Implemented clean separation between user types
