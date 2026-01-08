"use client";

import { useEffect, useState } from "react";
import { Wix_Madefor_Display } from 'next/font/google';
import { Menu, Search, User, Globe } from 'lucide-react';

const wixMadefor = Wix_Madefor_Display({ subsets: ['latin'] });

// Secretary API types
interface SecretaryInfo {
    userId: string;
    fullName: string;
    CIN: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    email: string;
    username: string;
    phone: string;
    status: string;
    createdAt: string;
}

// Mock API service - replace with your actual API
const secretaryApi = {
    getMyInfo: async (): Promise<SecretaryInfo> => {
        // Replace this with your actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    userId: "123e4567-e89b-12d3-a456-426614174000",
                    fullName: "Sarah Johnson",
                    CIN: "AB123456",
                    dateOfBirth: "1990-05-15",
                    gender: "FEMALE",
                    address: "123 Main Street, City, State 12345",
                    email: "sarah.johnson@example.com",
                    username: "sjohnson",
                    phone: "+1-555-0123",
                    status: "ACTIVE",
                    createdAt: "2024-01-15T10:30:00Z"
                });
            }, 500);
        });
    }
};

export default function SecretaryAccount() {
    const [secretaryInfo, setSecretaryInfo] = useState<SecretaryInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSecretaryInfo() {
            try {
                const data = await secretaryApi.getMyInfo();
                setSecretaryInfo(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load secretary info');
            } finally {
                setLoading(false);
            }
        }

        fetchSecretaryInfo();
    }, []);

    const getFirstName = () => {
        if (!secretaryInfo?.fullName) return '';
        const parts = secretaryInfo.fullName.split(' ');
        return parts[0];
    };

    const getLastName = () => {
        if (!secretaryInfo?.fullName) return '';
        const parts = secretaryInfo.fullName.split(' ');
        return parts.slice(1).join(' ');
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toISOString().split('T')[0];
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f3d4f] flex items-center justify-center">
                <p className="text-white text-xl">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#0f3d4f] flex items-center justify-center">
                <p className="text-red-500 text-xl">{error}</p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-[#0f3d4f] ${wixMadefor.className}`}>
            {/* Header */}
            <header className="bg-[#0c9a83] h-[60px] flex items-center justify-between px-8 shadow-md">
                <div className="flex items-center gap-6">
                    <Menu className="text-white w-6 h-6 cursor-pointer" />
                    <h1 className="text-white text-2xl font-normal">Integrity</h1>
                </div>

                <nav className="flex items-center gap-8">
                    <a href="#" className="text-[#a6f2d1] hover:text-white transition">PRODUCT</a>
                    <a href="#" className="text-[#a6f2d1] hover:text-white transition">SUPPORT</a>
                    <a href="#" className="text-[#a6f2d1] hover:text-white transition">MORE</a>
                    <a href="#" className="text-[#a6f2d1] hover:text-white transition">PRICING</a>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="w-[1px] h-8 bg-white/30"></div>
                    <Search className="text-white w-5 h-5 cursor-pointer" />
                    <User className="text-white w-5 h-5 cursor-pointer" />
                    <Globe className="text-white w-5 h-5 cursor-pointer" />
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-[240px] bg-[#0c9a83] min-h-[calc(100vh-60px)] pt-20">
                    <nav className="flex flex-col">
                        <a href="#" className="px-8 py-4 text-white bg-[#0c9a83] border-l-4 border-[#90d5ff]">
                            Account info
                        </a>
                        <a href="#" className="px-8 py-4 text-[#43c9b3] hover:text-white transition">
                            Office info
                        </a>
                        <a href="#" className="px-8 py-4 text-[#43c9b3] hover:text-white transition">
                            Subscription info
                        </a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 px-12 py-8">
                    <h2 className="text-white text-3xl font-light mb-12">Account information</h2>

                    {/* Email and Username */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="text-white text-sm mb-2 block">Email:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.email}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Username:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.username}
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-16">
                        <label className="text-white text-sm mb-2 block">Password:</label>
                        <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d] max-w-md">
                            (not shown)
                        </div>
                    </div>

                    <h2 className="text-white text-2xl font-light mb-8">Contact Information</h2>

                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="text-white text-sm mb-2 block">First name:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {getFirstName()}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Last name:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {getLastName()}
                            </div>
                        </div>
                    </div>

                    {/* Phone and CIN */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="text-white text-sm mb-2 block">Phone:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.phone}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">CIN:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.CIN}
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-8">
                        <label className="text-white text-sm mb-2 block">Address:</label>
                        <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d] max-w-3xl">
                            {secretaryInfo?.address}
                        </div>
                    </div>

                    {/* Gender and Date of Birth */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="text-white text-sm mb-2 block">Gender:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.gender}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Date of birth:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.dateOfBirth ? formatDate(secretaryInfo.dateOfBirth) : 'N/A'}
                            </div>
                        </div>
                    </div>

                    {/* Join Date and Account Status */}
                    <div className="grid grid-cols-2 gap-8 mb-16">
                        <div>
                            <label className="text-white text-sm mb-2 block">Join date:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.createdAt ? formatDate(secretaryInfo.createdAt) : 'N/A'}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Account status:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {secretaryInfo?.status}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="text-center text-[#7a8d96] text-sm mt-20">
                        Integrity 2025 ©
                    </footer>
                </main>
            </div>
        </div>
    );
}