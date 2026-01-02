"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { User as UserType } from "@/types/Users";
import SelectedUser from "./components/selectedUser";

const mockUsers: UserType[] = [
  {
    profileImage: "/defaultProfile.png",
    id: "1",
    name: "Farhan Saletti",
    gender: "Male",
    email: "saidFarhan30@gmail.com",
    joinDate: "23-11-2025",
    status: "Normal",
    type: "Doctor",
  },
  {
    profileImage: "/defaultProfile.png",
    id: "2",
    name: "Farhan Saletti",
    gender: "Male",
    email: "saidFarhan30@gmail.com",
    joinDate: "23-11-2025",
    status: "Normal",
    type: "Doctor",
  },
  {
    profileImage: "/defaultProfile.png",
    id: "3",
    name: "Farhan Saletti",
    gender: "Male",
    email: "saidFarhan30@gmail.com",
    joinDate: "23-11-2025",
    status: "Normal",
    type: "Doctor",
  },
  {
    profileImage: "/defaultProfile.png",
    id: "4",
    name: "Farhan Saletti",
    gender: "Male",
    email: "saidFarhan30@gmail.com",
    joinDate: "23-11-2025",
    status: "Normal",
    type: "Doctor",
  },
];

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  return (
    <div className="w-full px-6 py-8 mt-3">
      <div className="flex gap-8 flex-1 ml-19">
        <div className="w-24">
          <p className="text-white font-semibold">ID</p>
        </div>
        <div className="w-48">
          <p className="text-white font-semibold">Name</p>
        </div>
        <div className="w-24">
          <p className="text-white font-semibold">Gender</p>
        </div>
        <div className="w-48">
          <p className="text-white font-semibold">Email</p>
        </div>
        <div className="w-32">
          <p className="text-white font-semibold">Join Date</p>
        </div>
        <div className="w-24">
          <p className="text-white font-semibold">Status</p>
        </div>
        <div className="w-24">
          <p className="text-white font-semibold">Status</p>
        </div>
      </div>
      <div className="space-y-4">
        {mockUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="bg-gray-900 rounded-lg p-6 flex items-center justify-between hover:bg-gray-800 transition-colors"
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
                  <p className="text-white font-semibold">{user.id}</p>
                </div>
                <div className="w-48">
                  <p className="text-white">{user.name}</p>
                </div>
                <div className="w-24">
                  <p className="text-white">{user.gender}</p>
                </div>
                <div className="w-48">
                  <p className="text-white">{user.email}</p>
                </div>
                <div className="w-32">
                  <p className="text-white">{user.joinDate}</p>
                </div>
                <div className="w-24">
                  <p className="text-white">{user.status}</p>
                </div>
                <div className="w-24">
                  <p className="text-white">{user.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <SelectedUser
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}
