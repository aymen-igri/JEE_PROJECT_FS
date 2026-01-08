"use client";

import { useEffect, useState } from "react";
import { Menu, Search, User, Globe } from 'lucide-react';
import { Wix_Madefor_Display } from 'next/font/google';

const wixMadefor = Wix_Madefor_Display({ subsets: ['latin'] });

interface OfficeInfo {
    cabinetId: string;
    title: string;
    description: string;
    specialty: string;
    phone: string;
    address: string;
    status: string;
    doctorName: string;
    consultationPrice: string;
    createdAt: string;
    accountStatus: string;
    logoUrl?: string;
}

export default function OfficeInformation() {
    const [officeInfo, setOfficeInfo] = useState<OfficeInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchOfficeInfo();
    }, []);

    const fetchOfficeInfo = async () => {
        try {
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';
            const endpoint = `${API_BASE_URL}/api/office/info`;

            console.log('Fetching from:', endpoint);

            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                credentials: 'include'
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to fetch office information: ${response.status} - ${errorText}`);
            }

            const data = await response.json();

            setOfficeInfo({
                cabinetId: data.cabinetId,
                title: data.title || data.name || '',
                description: data.description || '',
                specialty: data.specialty || data.speciality || '',
                phone: data.phone || data.phoneNumber || '',
                address: data.address || '',
                status: data.status || '',
                doctorName: data.doctorName || 'N/A',
                consultationPrice: data.consultationPrice ? `${parseFloat(data.consultationPrice).toFixed(2)} MAD` : 'N/A',
                createdAt: data.createdAt ? new Date(data.createdAt).toLocaleDateString('en-CA') : '',
                accountStatus: data.accountStatus || data.status || '',
                logoUrl: data.logoUrl ? `${API_BASE_URL}${data.logoUrl}` : undefined
            });
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setLoading(false);
        }
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
                <div className="text-center">
                    <p className="text-red-400 text-xl mb-4">Error: {error}</p>
                    <button
                        onClick={fetchOfficeInfo}
                        className="bg-[#0c9a83] text-white px-6 py-2 rounded hover:bg-[#0a8570] transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-[#0f3d4f] ${wixMadefor.className}`}>
            {/* Header */}
            <header className={`bg-[#0c9a83] h-[60px] flex items-center justify-between px-8 ${wixMadefor.className}`} style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', position: 'relative', zIndex: 10}}>
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
                <aside className={`w-[240px] bg-[#0c9a83] min-h-[calc(100vh-60px)] pt-20 ${wixMadefor.className}`} style={{boxShadow: '4px 0 6px rgba(0, 0, 0, 0.3)', position: 'relative', zIndex: 1}}>
                    <nav className="flex flex-col">
                        <a href="#" className="px-8 py-4 text-[#43c9b3] hover:text-white transition">
                            Account info
                        </a>
                        <a href="#" className="px-8 py-4 text-white bg-[#0c9a83] border-l-4 border-[#90d5ff]">
                            Office info
                        </a>
                        <a href="#" className="px-8 py-4 text-[#43c9b3] hover:text-white transition">
                            Subscription info
                        </a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 px-12 py-8 ${wixMadefor.className}`}>
                    <h2 className="text-white text-3xl font-light mb-12">Office Informations</h2>

                    {/* Office Avatar and Title */}
                    <div className="flex flex-col items-center mb-12">
                        <div style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            backgroundColor: '#d4d4d4',
                            border: '8px solid #0c9a83',
                            marginBottom: '16px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {officeInfo?.logoUrl ? (
                                <img src={officeInfo.logoUrl} alt="Office" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            ) : (
                                <div className="text-[#0c9a83] text-5xl font-bold">
                                    {officeInfo?.title.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        <h3 className="text-white text-2xl font-light">{officeInfo?.title}</h3>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <label className="text-white text-sm mb-2 block">Description:</label>
                        <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d] max-w-3xl">
                            {officeInfo?.description}
                        </div>
                    </div>

                    {/* Specialty and Phone */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="text-white text-sm mb-2 block">Speciality:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {officeInfo?.specialty}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Phone:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {officeInfo?.phone}
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-8">
                        <label className="text-white text-sm mb-2 block">Adress:</label>
                        <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d] max-w-3xl">
                            {officeInfo?.address}
                        </div>
                    </div>

                    {/* Status and Doctor */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="text-white text-sm mb-2 block">Status:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {officeInfo?.status}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Doctor:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {officeInfo?.doctorName}
                            </div>
                        </div>
                    </div>

                    {/* Current consultation price */}
                    <div className="mb-8">
                        <label className="text-white text-sm mb-2 block">Current consultation price:</label>
                        <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d] max-w-md">
                            {officeInfo?.consultationPrice}
                        </div>
                    </div>

                    {/* Created at and Account status */}
                    <div className="grid grid-cols-2 gap-8 mb-16">
                        <div>
                            <label className="text-white text-sm mb-2 block">Created at:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {officeInfo?.createdAt}
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-sm mb-2 block">Account status:</label>
                            <div className="bg-[#043045] border-b-2 border-[#5e87ed] px-4 py-3 text-[#4d839d]">
                                {officeInfo?.accountStatus}
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