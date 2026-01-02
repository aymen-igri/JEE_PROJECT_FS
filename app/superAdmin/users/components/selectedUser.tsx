"use client";
import { User as UserType } from "@/types/Users";
import { User } from "lucide-react";
import { X } from "lucide-react";

export default function SelectedUser({
  selectedUser,
  setSelectedUser,
}: {
  selectedUser: UserType;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedUser(null)}
    >
      <div
        className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full h-[90%] mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* User Details */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
              <User size={48} className="text-gray-400" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">
              {selectedUser.name}
            </h2>
            <h2>
                {selectedUser.type}
            </h2>
            </div>
            
          </div>

          <div className="w-full space-y-4">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">ID:</span>
              <span className="text-white font-semibold">
                {selectedUser.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Gender:</span>
              <span className="text-white">{selectedUser.gender}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Email:</span>
              <span className="text-white">{selectedUser.email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Join Date:</span>
              <span className="text-white">{selectedUser.joinDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Status:</span>
              <span className="text-white">{selectedUser.status}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
