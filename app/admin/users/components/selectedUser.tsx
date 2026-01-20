"use client";

import { User } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

export default function SelectedUser({
  selectedUser,
  setSelectedUser,
}:{
  selectedUser: any,
  setSelectedUser: any
}) {

  const [loading, setLoading] = useState(false);

  const handleSuspendUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/user/suspend?id=${selectedUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to suspend user');
      }
    } catch (error) {
      console.error('Error suspending user:', error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };
  
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedUser(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[90%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedUser(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <div className="w-14 h-14 bg-[#7F0000] rounded-full flex items-center justify-center">
              <User size={30} className="text-white" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-white">
              {selectedUser.fullName}
            </h2>
            </div>
            
          </div>

          <div className="w-full space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">ID:</span>
              <span className="text-white font-semibold">
                {selectedUser.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">CIN:</span>
              <span className="text-white">{selectedUser.CIN}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Date of birth:</span>
              <span className="text-white">{selectedUser.dateOfBirth}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Gender:</span>
              <span className="text-white">{selectedUser.gender}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Address:</span>
              <span className="text-white">{selectedUser.address}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Email:</span>
              <span className="text-white">{selectedUser.email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Phone:</span>
              <span className="text-white">{selectedUser.phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Join Date:</span>
              <span className="text-white">{selectedUser.createdAt}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Status:</span>
              <span className="text-white">{selectedUser.status}</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading || selectedUser.status === 'SUSPENDED'}
                onClick={handleSuspendUser}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Suspending..." : "Suspend User"}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
