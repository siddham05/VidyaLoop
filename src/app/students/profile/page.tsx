export default function StudentProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>
        
        <div className="flex items-center space-x-6 mb-8">
          <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-2xl font-bold">AS</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Arjun Sharma</h2>
            <p className="text-gray-600">Class 11 - Science Stream</p>
            <p className="text-sm text-gray-500">Student ID: VL-ST-2024-001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-900">arjun.sharma@email.com</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone</label>
                <p className="text-gray-900">+91 98765 43210</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                <p className="text-gray-900">15th March, 2007</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Address</label>
                <p className="text-gray-900">123 Green Park, New Delhi</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Current Class</label>
                <p className="text-gray-900">Class 11</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Stream</label>
                <p className="text-gray-900">Science (PCM)</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">School</label>
                <p className="text-gray-900">Delhi Public School</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Target Exam</label>
                <p className="text-gray-900">JEE Main & Advanced</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
