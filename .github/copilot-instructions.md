# VidyaLoop - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
VidyaLoop is India's first all-in-one digital platform designed exclusively for teachers. The platform enables educators to create public teaching profiles, manage tuition batches, sell courses, apply for jobs, chat with students, and track earnings.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Payment Processing**: Razorpay (India-focused)
- **Real-time Chat**: Socket.io
- **File Storage**: AWS S3 or Cloudinary for course videos/materials
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

## Key Features to Implement
1. **Teacher Profile Management**: Verified profiles with shareable codes
2. **Course Management**: Live and recorded course creation/selling
3. **Batch Management**: Create and manage tuition batches
4. **Job Marketplace**: Apply for teaching positions
5. **Student-Teacher Chat**: Real-time messaging system
6. **Payment Wallet**: Secure earnings tracking and payouts
7. **Rating & Review System**: Build trust through feedback
8. **Search & Discovery**: Advanced filtering by subject, location, mode, etc.
9. **Resume Builder**: Digital badges and professional profiles
10. **Progress Tracking**: For students and parents

## Code Style Guidelines
- Use TypeScript strict mode
- Follow Next.js App Router patterns
- Implement responsive design with mobile-first approach
- Use server components where possible for better performance
- Implement proper error handling and loading states
- Follow Indian UX patterns and design preferences
- Include proper SEO optimization
- Ensure accessibility compliance
- Use proper security practices for user data and payments

## API Structure
- Use Next.js API routes in the `app/api` directory
- Implement proper authentication middleware
- Follow RESTful conventions
- Include proper error handling and validation
- Implement rate limiting for sensitive endpoints

## Database Schema Considerations
- User roles: Teacher, Student, Parent, Admin
- Profile verification status and documents
- Course categories aligned with Indian education system
- Location-based data for local tuition matching
- Payment transaction history
- Chat message storage with encryption

## Indian Market Specific Features
- Support for multiple Indian languages
- Integration with Indian payment systems (UPI, Netbanking)
- Academic calendar alignment with Indian education system
- Support for Indian curricula (CBSE, ICSE, State boards)
- Local currency formatting (INR)
- Regional preferences and cultural considerations
