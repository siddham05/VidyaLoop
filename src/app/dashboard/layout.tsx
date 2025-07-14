export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
              <div className="flex items-center flex-shrink-0 px-4">
                <h2 className="text-lg font-semibold text-blue-700">Teacher Dashboard</h2>
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  <a href="/dashboard" className="bg-blue-50 text-blue-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    Overview
                  </a>
                  <a href="/dashboard/profile" className="text-green-600 hover:bg-green-50 hover:text-green-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    My Profile
                  </a>
                  <a href="/dashboard/courses" className="text-purple-600 hover:bg-purple-50 hover:text-purple-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    My Courses
                  </a>
                  <a href="/dashboard/batches" className="text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    My Batches
                  </a>
                  <a href="/dashboard/students" className="text-orange-600 hover:bg-orange-50 hover:text-orange-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    Students
                  </a>
                  <a href="/dashboard/earnings" className="text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    Earnings
                  </a>
                  <a href="/dashboard/messages" className="text-pink-600 hover:bg-pink-50 hover:text-pink-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    Messages
                  </a>
                  <a href="/dashboard/reviews" className="text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    Reviews
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
