"use client";

import { User, Mail, Phone, Calendar, MapPin, Shield, Edit2 } from "lucide-react";
import { useState } from "react";

type AdminProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  joinDate: string;
  location: string;
  profileImage: string;
  bio: string;
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock admin data - replace with actual data from API/database
  const [admin, setAdmin] = useState<AdminProfile>({
    id: "ADMIN001",
    name: "John Doe",
    email: "admin@integrity.com",
    phone: "+1 234 567 8900",
    role: "Super Admin",
    joinDate: "15-01-2024",
    location: "New York, USA",
    profileImage: "/defaultProfile.png",
    bio: "System administrator with full access to manage users, offices, and applications.",
  });

  return (
    <div className="w-full px-12 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gray-900 rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
                <User size={64} className="text-gray-400" />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Edit2 size={16} className="text-white" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {admin.name}
                  </h1>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Shield size={20} className="text-blue-500" />
                    <span className="text-blue-500 font-semibold">
                      {admin.role}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto md:mx-0"
                >
                  <Edit2 size={18} />
                  Edit Profile
                </button>
              </div>
              <p className="text-gray-400 mb-4">{admin.bio}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-400">
                <span className="bg-gray-800 px-3 py-1 rounded-full">
                  ID: {admin.id}
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">
                  Joined: {admin.joinDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Mail size={24} className="text-blue-500" />
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Email</span>
                <span className="text-white">{admin.email}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Phone</span>
                <span className="text-white">{admin.phone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Location</span>
                <span className="text-white">{admin.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Shield size={24} className="text-blue-500" />
              Account Security
            </h2>
            <div className="space-y-4">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors text-left px-4">
                Change Password
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors text-left px-4">
                Two-Factor Authentication
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors text-left px-4">
                Login History
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Admin Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">1,234</div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">56</div>
              <div className="text-gray-400 text-sm">Active Offices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">89</div>
              <div className="text-gray-400 text-sm">Pending Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">342</div>
              <div className="text-gray-400 text-sm">Total Actions</div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-900/20 border border-red-900 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Danger Zone</h2>
          <p className="text-gray-400 mb-4">
            Permanently delete your admin account and all associated data.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}