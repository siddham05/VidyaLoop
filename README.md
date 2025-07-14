# VidyaLoop - Empowering Every Teacher to Teach, Grow & Earn

VidyaLoop is India's first all-in-one digital platform designed exclusively for teachers. It enables educators to create public teaching profiles, manage tuition batches, sell courses, apply for jobs, chat with students, and track earnings.

## 🚀 Features

### For Teachers
- **Verified Public Profile** - Create a professional teaching profile with shareable code
- **Course Management** - Sell live or recorded courses with video content
- **Batch Management** - Post and manage tuition batches
- **Job Marketplace** - Apply for teaching positions and home tuition opportunities
- **Student Communication** - Real-time chat with students and parents
- **Payment Wallet** - Secure earnings tracking and payouts
- **Rating System** - Build reputation through student reviews
- **Resume Builder** - Digital badges and professional profiles

### For Students & Parents
- **Teacher Discovery** - Search by subject, location, mode, language, and rating
- **Course Enrollment** - Access to live and recorded courses
- **Progress Tracking** - Monitor learning progress and performance
- **Secure Payments** - Multiple payment options including UPI, cards, and net banking

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Payment Processing**: Razorpay (India-focused)
- **Real-time Features**: Socket.io
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB database
- Google OAuth credentials (optional)
- Razorpay account (for payments)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in the environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Key Features

- **Authentication** - Google OAuth and email/password with role-based access
- **Teacher Profiles** - Verified profiles with shareable codes and ratings
- **Course Management** - Live/recorded courses with video upload
- **Batch Management** - Tuition batch scheduling and student tracking
- **Payment Integration** - Razorpay for Indian market with UPI support
- **Real-time Chat** - Student-teacher messaging system
- **Mobile-first Design** - Responsive design optimized for Indian users

## 🌍 Indian Market Focus

- Multi-language support (Hindi, English, regional languages)
- Curriculum alignment (CBSE, ICSE, State boards)
- Local payment methods (UPI, NetBanking, Cards)
- Academic calendar alignment with Indian education system

## 📱 Technology Features

- Server-side rendering with Next.js 15
- TypeScript for type safety
- Tailwind CSS for responsive design
- MongoDB for scalable data storage
- Real-time updates with Socket.io
- Secure authentication with NextAuth.js

---

**VidyaLoop** - Transforming education, one teacher at a time! 🎓✨

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
