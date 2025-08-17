import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Star, IndianRupee, MessageCircle, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text mb-6">
              Empowering Every Teacher to
              <span className="text-brand-primary block">Teach, Grow & Earn</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              India&apos;s first all-in-one digital platform designed exclusively for teachers. 
              Create profiles, manage batches, sell courses, and build your teaching empire.
            </p>
            <div className="flex flex-col sm:flex-row text-brand-primary gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-brand-primary hover:bg-blue-700">
                Start Teaching Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">
                Find Teachers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
              Everything You Need to Succeed as a Teacher
            </h2>
            <p className="text-xl text-gray-600">
              From profile creation to payment tracking, we&apos;ve got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-primary">Verified Profile</h3>
              <p className="text-gray-600">
                Create a verified public teaching profile with shareable code to build trust and credibility
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Batch Management</h3>
              <p className="text-gray-600">
                Post and manage tuition batches, track student progress, and organize your teaching schedule
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-primary">Course Creation</h3>
              <p className="text-gray-600">
                Sell live or recorded courses, upload videos, and reach students across India
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-accent">Secure Wallet</h3>
              <p className="text-gray-600">
                Track your earnings, get secure payouts, and manage your finances with built-in wallet
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Student Chat</h3>
              <p className="text-gray-600">
                Connect with students and parents through secure messaging and real-time chat
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-accent">Ratings & Reviews</h3>
              <p className="text-gray-600">
                Build reputation through student reviews and showcase your teaching excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Teaching Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teachers who are already growing their income with VidyaLoop
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VL</span>
                </div>
                <span className="text-xl font-bold text-brand-primary">VidyaLoop</span>
              </div>
              <p className="text-gray-600">
                Empowering every teacher to teach, grow & earn across India
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-brand-primary">For Teachers</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/signup" className="hover:text-white">Create Profile</Link></li>
                <li><Link href="/courses" className="hover:text-white">Sell Courses</Link></li>
                <li><Link href="/batches" className="hover:text-white">Manage Batches</Link></li>
                <li><Link href="/jobs" className="hover:text-white">Find Jobs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-brand-secondary">For Students</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/browse" className="hover:text-white">Find Teachers</Link></li>
                <li><Link href="/courses" className="hover:text-white">Browse Courses</Link></li>
                <li><Link href="/tutoring" className="hover:text-white">Home Tutoring</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-brand-accent">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 VidyaLoop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
