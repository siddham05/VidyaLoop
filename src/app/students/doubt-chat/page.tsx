'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Send, Paperclip, Mic, Image, Video, Phone,
  Search, Filter, MoreVertical, Bell, User,
  MessageCircle, Clock, CheckCircle, Star,
  ArrowLeft, Plus, Camera, Upload, Smile,
  ThumbsUp, Heart, BookOpen, Calculator,
  Beaker, Globe, Users, Zap, Target
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDoubtChatPage() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatList = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      subject: 'Physics',
      lastMessage: 'Great question! Let me explain rotational motion...',
      time: '2 min ago',
      unread: 2,
      online: true,
      avatar: 'PS',
      specialty: 'JEE Physics Expert'
    },
    {
      id: 2,
      name: 'Prof. Rajesh Gupta',
      subject: 'Mathematics',
      lastMessage: 'Try solving this using integration by parts',
      time: '15 min ago',
      unread: 0,
      online: true,
      avatar: 'RG',
      specialty: 'Calculus Specialist'
    },
    {
      id: 3,
      name: 'Dr. Meera Patel',
      subject: 'Chemistry',
      lastMessage: 'The reaction mechanism is quite interesting...',
      time: '1 hour ago',
      unread: 1,
      online: false,
      avatar: 'MP',
      specialty: 'Organic Chemistry'
    },
    {
      id: 4,
      name: 'Study Group: JEE 2025',
      subject: 'General',
      lastMessage: 'Arjun: Anyone solved Q.15 from mock test?',
      time: '2 hours ago',
      unread: 5,
      online: true,
      avatar: 'JE',
      specialty: '247 members'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'student',
      content: 'Hi Dr. Sharma! I\'m having trouble understanding rotational motion. Can you help?',
      time: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      sender: 'teacher',
      content: 'Of course! I\'d be happy to help. What specific part of rotational motion are you struggling with?',
      time: '10:32 AM',
      type: 'text'
    },
    {
      id: 3,
      sender: 'student',
      content: 'I don\'t understand the difference between linear and angular velocity. Also, how do we calculate moment of inertia?',
      time: '10:35 AM',
      type: 'text'
    },
    {
      id: 4,
      sender: 'teacher',
      content: 'Great questions! Let me break this down for you:',
      time: '10:36 AM',
      type: 'text'
    },
    {
      id: 5,
      sender: 'teacher',
      content: 'rotational-motion-diagram.jpg',
      time: '10:37 AM',
      type: 'image',
      imageUrl: '/api/placeholder/300/200'
    },
    {
      id: 6,
      sender: 'teacher',
      content: '1. **Linear Velocity (v)**: How fast an object moves in a straight line\n2. **Angular Velocity (ω)**: How fast an object rotates around an axis\n\nThe relationship is: v = ω × r (where r is the radius)',
      time: '10:38 AM',
      type: 'text'
    },
    {
      id: 7,
      sender: 'student',
      content: 'That makes sense! What about moment of inertia?',
      time: '10:40 AM',
      type: 'text'
    },
    {
      id: 8,
      sender: 'teacher',
      content: 'Moment of inertia (I) is the rotational equivalent of mass. It depends on:\n• The mass of the object\n• How that mass is distributed relative to the axis of rotation\n\nFor a solid cylinder: I = ½mr²\nFor a solid sphere: I = ⅖mr²',
      time: '10:42 AM',
      type: 'text'
    }
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                VidyaLoop
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/students/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                <Link href="/students/courses" className="text-gray-600 hover:text-gray-900">My Courses</Link>
                <Link href="/students/live-classes" className="text-gray-600 hover:text-gray-900">Live Classes</Link>
                <Link href="/students/doubt-chat" className="text-blue-600 font-medium">Doubt Chat</Link>
                <Link href="/students/progress" className="text-gray-600 hover:text-gray-900">Progress</Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex bg-white shadow-lg rounded-t-xl overflow-hidden">
        {/* Chat Sidebar */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">💬 Doubt Chat</h2>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Chat
              </Button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Quick Subject Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Physics', icon: '⚛️', color: 'bg-blue-100 text-blue-700' },
                { name: 'Math', icon: '📐', color: 'bg-green-100 text-green-700' },
                { name: 'Chemistry', icon: '🧪', color: 'bg-purple-100 text-purple-700' },
                { name: 'All', icon: '📚', color: 'bg-gray-100 text-gray-700' }
              ].map((subject, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${subject.color} hover:opacity-80 transition-opacity`}
                >
                  {subject.icon} {subject.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {chatList.map((chat, index) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(index)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === index ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      chat.subject === 'Physics' ? 'bg-blue-500' :
                      chat.subject === 'Mathematics' ? 'bg-green-500' :
                      chat.subject === 'Chemistry' ? 'bg-purple-500' : 'bg-orange-500'
                    }`}>
                      {chat.avatar}
                    </div>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{chat.specialty}</p>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                  
                  {chat.unread > 0 && (
                    <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  chatList[selectedChat]?.subject === 'Physics' ? 'bg-blue-500' :
                  chatList[selectedChat]?.subject === 'Mathematics' ? 'bg-green-500' :
                  chatList[selectedChat]?.subject === 'Chemistry' ? 'bg-purple-500' : 'bg-orange-500'
                }`}>
                  {chatList[selectedChat]?.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{chatList[selectedChat]?.name}</h3>
                  <div className="flex items-center space-x-2">
                    {chatList[selectedChat]?.online ? (
                      <div className="flex items-center text-green-600 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Online now
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">Last seen 1 hour ago</span>
                    )}
                    <span className="text-gray-400">•</span>
                    <span className="text-blue-600 text-sm">{chatList[selectedChat]?.specialty}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  <Video className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-md ${msg.sender === 'student' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      msg.sender === 'student'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                  >
                    {msg.type === 'image' ? (
                      <div className="space-y-2">
                        <div className="bg-gray-200 rounded-lg p-4 text-center">
                          <Image className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                          <p className="text-sm text-gray-600">{msg.content}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="whitespace-pre-line">{msg.content}</p>
                    )}
                  </div>
                  <div className={`flex items-center mt-1 space-x-1 ${
                    msg.sender === 'student' ? 'justify-end' : 'justify-start'
                  }`}>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                    {msg.sender === 'student' && (
                      <CheckCircle className="h-3 w-3 text-blue-600" />
                    )}
                  </div>
                </div>
                
                {msg.sender === 'teacher' && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-blue-500 ${
                    msg.sender === 'teacher' ? 'order-2 ml-3' : 'order-1 mr-3'
                  }`}>
                    {chatList[selectedChat]?.avatar}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold bg-blue-500">
                    {chatList[selectedChat]?.avatar}
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Image className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Calculator className="h-5 w-5" />
              </button>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your doubt here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && message.trim()) {
                      // Handle send message
                      setMessage('');
                    }
                  }}
                />
                <button className="absolute right-3 top-3 text-gray-500 hover:text-gray-700">
                  <Smile className="h-5 w-5" />
                </button>
              </div>
              
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Mic className="h-5 w-5" />
              </button>
              
              <Button
                className="bg-blue-600 hover:bg-blue-700 rounded-full px-6"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex items-center justify-center mt-3 space-x-4">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <BookOpen className="h-4 w-4" />
                <span>Share Notes</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Calculator className="h-4 w-4" />
                <span>Math Tools</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="h-4 w-4" />
                <span>Video Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Help Panel */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">💡 Quick Help Tips</h4>
              <p className="text-sm text-gray-600">Be specific with your questions • Share relevant diagrams • Mention your class/exam</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                Help Center
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Find Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
