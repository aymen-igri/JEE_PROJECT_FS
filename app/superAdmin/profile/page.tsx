"use client";

import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  Edit2,
  MoreVertical,
  LogOut,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import EditProfile from "./component/EditProfile";

export default function ProfilePage() {
  const router = useRouter();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [data, setdata] = useState({
    level: 1,
    CIN: "",
    address: "",
    createdAt: "",
    dateOfBirth: "",
    email: "",
    fullName: "",
    gender: "",
    phone: "",
    profilePhoto: null,
    status: "",
    updatedAt: "",
    userId: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superAdmin/me`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setdata(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showMenu]);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );
      if (response.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="w-full px-12 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-[#4d0000] rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 bg-[#7F0000] rounded-full flex items-center justify-center">
                <User size={64} className="text-gray-300" />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#9F0000] hover:bg-[#8F0000] p-2 rounded-full transition-colors">
                <Edit2 size={16} className="text-white" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {data.fullName}
                  </h1>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Shield size={20} className="text-red-400" />
                    <span className="text-red-400 font-semibold">
                      Super Admin
                    </span>
                  </div>
                </div>
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="mt-4 md:mt-0 bg-[#9F0000] hover:bg-[#8F0000] text-white p-2 rounded-lg transition-colors mx-auto md:mx-0"
                  >
                    <MoreVertical size={20} />
                  </button>

                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#2d0000] border border-[#7F0000] rounded-lg shadow-lg py-1 z-10">
                      <button
                        onClick={() => {
                          setShowEditProfile(true);
                          setShowMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-white hover:bg-[#4d0000] transition-colors flex items-center gap-2"
                      >
                        <Edit2 size={16} />
                        Edit Profile
                      </button>
                      <button
                        onClick={() => {
                          handleLogout();
                          setShowMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-white hover:bg-[#4d0000] transition-colors flex items-center gap-2"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-400">
                <span className="bg-[#7F0000] px-3 py-1 rounded-full">
                  ID: {data.userId}
                </span>
                <span className="bg-[#7F0000] px-3 py-1 rounded-full">
                  Joined: {data.createdAt.split("T")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="gap-6 mb-6">
          <div className="bg-[#4d0000] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Mail size={24} className="text-red-400" />
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Email</span>
                <span className="text-white">{data.email}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-400">Phone</span>
                <span className="text-white">{data.phone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Location</span>
                <span className="text-white">{data.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditProfile && (
        <EditProfile
          setShowEditProfile={setShowEditProfile}
          currentData={data}
          onUpdateSuccess={fetchUserData}
        />
      )}
    </div>
  );
}
