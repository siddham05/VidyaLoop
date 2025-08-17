export default function StudentAssignmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Assignments</h1>
        <p className="mt-2 text-gray-600">Complete your assignments and track your progress</p>
      </div>

      {/* Assignment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-sm text-gray-600">Total Assignments</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-green-600">8</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-yellow-600">3</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-red-600">1</div>
          <div className="text-sm text-gray-600">Overdue</div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Assignments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Mathematics - Calculus Problems</h3>
                <p className="text-sm text-gray-600 mt-1">Complete exercises 1-20 from Chapter 5</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                  <span className="text-sm text-gray-500">Due: Yesterday</span>
                  <span className="text-sm text-gray-500">Score: 85/100</span>
                </div>
              </div>
              <button className="ml-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
                View
              </button>
            </div>
          </div>

          <div className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Physics - Wave Motion</h3>
                <p className="text-sm text-gray-600 mt-1">Solve numerical problems on wave interference</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    In Progress
                  </span>
                  <span className="text-sm text-gray-500">Due: Tomorrow</span>
                  <span className="text-sm text-gray-500">Progress: 60%</span>
                </div>
              </div>
              <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                Continue
              </button>
            </div>
          </div>

          <div className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Chemistry - Organic Reactions</h3>
                <p className="text-sm text-gray-600 mt-1">Write mechanisms for given organic reactions</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Overdue
                  </span>
                  <span className="text-sm text-gray-500">Due: 2 days ago</span>
                  <span className="text-sm text-gray-500">Progress: 0%</span>
                </div>
              </div>
              <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
