"use client"

import { User } from "lucide-react";

export default function UsersList({setSelectedUser, users}: {setSelectedUser: any, users: any[]}) {
  return(
    <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="bg-[#4d0000] rounded-lg p-6 flex items-center justify-between hover:bg-[#7F0000] transition-colors"
          >
            {/* User Icon */}
            <div className="flex items-center gap-6 flex-1">
              <div className="flex gap-8 flex-1">
                <div className="w-5">
                  <p className="text-white font-semibold">
                    <User />
                  </p>
                </div>
                <div className="w-24">
                  <p className="text-white font-semibold">{user.id.substring(0, 8)}...</p>
                </div>
                <div className="w-48">
                  <p className="text-white">{user.fullName}</p>
                </div>
                <div className="w-24">
                  <p className="text-white">{user.gender}</p>
                </div>
                <div className="w-72">
                  <p className="text-white">{user.email}</p>
                </div>
                <div className="w-32">
                  <p className="text-white">{user.createdAt ? user.createdAt.substring(0, 10) : "N/A"}</p>
                </div>
                <div className="w-24">
                  <p className="text-white">{user.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}