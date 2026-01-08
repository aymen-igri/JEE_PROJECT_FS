"use client";

import { useState, useEffect } from "react";
import SelectedUser from "./components/selectedUser";
import UsersList from "./components/usersList";
import { Plus } from "lucide-react";
import AddUser from "./components/addUser";

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUserType, setSelectedUserType] = useState<string>("user");
  const [searchType, setSearchType] = useState<string>("name");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAddUser, setShowAddUser] = useState(false);

  const handleGetUsersByType = async (type: string) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/api/${type}/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      console.log(response);
      if (!response.ok) {
        const error = await response.json();
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users" + error.message·);
      } else {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    handleGetUsersByType(selectedUserType);
  }, []);

  const filteredUsers = users.filter((user) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();

    switch (searchType) {
      case "name":
        return user.fullName?.toLowerCase().includes(query);
      case "email":
        return user.email?.toLowerCase().includes(query);
      case "id":
        return user.id?.toString().includes(query);
      case "gender":
        return user.gender?.toLowerCase().includes(query);
      default:
        return true;
    }
  });

  return (
    <div className="w-full px-6 py-8 mt-3">
      <div className="mb-6 flex items-center gap-4">
        <div>
          <select
            id="userType"
            value={selectedUserType}
            onChange={(e) => {
              setSelectedUserType(e.target.value);
              handleGetUsersByType(e.target.value);
            }}
            className="h-10 px-4 py-2 bg-[#4D0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#7F0000] focus:border-transparent cursor-pointer hover:bg-[#7F0000] transition-colors"
          >
            <option value="admin">Admins</option>
            <option value="doctor">Doctors</option>
            <option value="secretary">Secretaries</option>
            <option value="user">Users</option>
          </select>
        </div>

        <div className="flex-1 max-w-lg">
          <div className="flex gap-2">
            <select
              id="searchType"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="h-10 px-4 py-2 bg-[#4D0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#7F0000] focus:border-transparent cursor-pointer hover:bg-[#7F0000] transition-colors"
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="id">ID</option>
              <option value="gender">Gender</option>
            </select>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search by ${searchType}...`}
              className="h-10 flex-1 px-4 py-2 bg-[#4D0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#7F0000] focus:border-transparent placeholder-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end items-center w-full">
          <button
            onClick={() => setShowAddUser(true)}
            className="bg-[#4D0000] p-2 rounded-full hover:bg-[#7F0000] transition-colors"
          >
            <Plus className="text-white" />
          </button>
        </div>
      </div>

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
        <div className="w-72">
          <p className="text-white font-semibold">Email</p>
        </div>
        <div className="w-32">
          <p className="text-white font-semibold">Join Date</p>
        </div>
        <div className="w-24">
          <p className="text-white font-semibold">Status</p>
        </div>
      </div>
      <UsersList setSelectedUser={setSelectedUser} users={filteredUsers} />
      {selectedUser && (
        <SelectedUser
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
      {showAddUser && (
        <AddUser
          setShowAddUser={setShowAddUser}
        />
      )}
    </div>
  );
}
