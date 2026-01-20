"use client";

import { useState, useEffect } from "react";
import { Menu, Search, User, Globe, ArrowRight, ChevronDown, Calendar, Clipboard } from 'lucide-react'
import { Wix_Madefor_Display } from "next/font/google";

const wixMadefor = Wix_Madefor_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

interface Patient {
    name: string;
    dateOfBirth: string;
    sex: string;
    phone: string;
    notes: string;
    status: string;
}

interface ScheduleItem {
    title: string;
    priority: string;
    happening: string;
    startTime: string;
    endTime: string;
}

export default function DoctorDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [isOfficeOpen, setIsOfficeOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentPatients, setCurrentPatients] = useState<Patient[]>([]);
    const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
    const [loading, setLoading] = useState(true);

    const PATIENTS_PER_PAGE = 3;

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    // Fetch patients and schedule from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch current consultations
                const patientsResponse = await fetch('/api/consultations/current');
                if (patientsResponse.ok) {
                    const patientsData = await patientsResponse.json();
                    setCurrentPatients(patientsData);
                }

                // Fetch schedule
                const scheduleResponse = await fetch('/api/schedule/upcoming');
                if (scheduleResponse.ok) {
                    const scheduleData = await scheduleResponse.json();
                    setSchedule(scheduleData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Set empty arrays to show empty states
                setCurrentPatients([]);
                setSchedule([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Calculate pagination
    const totalPages = Math.ceil(currentPatients.length / PATIENTS_PER_PAGE);
    const startIndex = currentPage * PATIENTS_PER_PAGE;
    const endIndex = startIndex + PATIENTS_PER_PAGE;
    const displayedPatients = currentPatients.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(0); // Loop back to first page
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(totalPages - 1); // Loop to last page
        }
    };

    return (
        <div
            className={`min-h-screen ${wixMadefor.className}`}
            style={{
                backgroundImage: 'url(/background1.png)',
                backgroundSize: 'auto 3000px',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f5f7fa'
            }}
        >
            {/* Header */}
            <header style={{ backgroundColor: '#0c9a83', zIndex: 100 }} className="h-[60px] flex items-center justify-between px-8 shadow-md relative">
                <div className="flex items-center gap-6">
                    <button
                        onClick={toggleSidebar}
                        className="bg-transparent border-0 p-0 cursor-pointer hover:opacity-80"
                        type="button"
                    >
                        <Menu className="text-white w-6 h-6" />
                    </button>
                    <h1 className="text-white text-2xl font-normal">Integrity</h1>
                </div>

                <nav className="flex items-center gap-8">
                    <a href="#" className="text-white hover:opacity-80 transition">PRODUCT</a>
                    <a href="#" className="text-white hover:opacity-80 transition">SUPPORT</a>
                    <a href="#" className="text-white hover:opacity-80 transition">MORE</a>
                    <a href="#" className="text-white hover:opacity-80 transition">PRICING</a>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="w-[1px] h-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
                    <Search className="text-white w-5 h-5 cursor-pointer" />
                    <User className="text-white w-5 h-5 cursor-pointer" />
                    <Globe className="text-white w-5 h-5 cursor-pointer" />
                </div>
            </header>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    style={{ zIndex: 50 }}
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    left: isSidebarOpen ? 0 : -280,
                    height: '100vh',
                    width: '280px',
                    zIndex: 51,
                    transition: 'left 0.3s ease-in-out',
                    backgroundColor: '#0c9a83',
                    paddingTop: '70px'
                }}
                className="overflow-y-auto pt-5 pb-10"
            >
                <nav className="flex flex-col text-white">
                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        My dashboard
                    </a>
                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        My account
                    </a>
                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        My schedule
                    </a>
                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        Support
                    </a>
                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        My patients
                    </a>
                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        Medicine List
                    </a>

                    {/* History Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                            className="w-full px-6 py-3 hover:bg-[#0a8a73] transition text-lg flex items-center justify-between"
                        >
                            <span>History</span>
                            <ChevronDown className={`w-5 h-5 transition-transform ${isHistoryOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isHistoryOpen && (
                            <div className="pl-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Consultations
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Diagnostics
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Prescriptions
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Patients
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Actions
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="px-6 py-3 hover:bg-[#0a8a73] transition text-lg">
                        My subscriptions
                    </a>

                    {/* My Office Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsOfficeOpen(!isOfficeOpen)}
                            className="w-full px-6 py-3 hover:bg-[#0a8a73] transition text-lg flex items-center justify-between"
                        >
                            <span>My office</span>
                            <ChevronDown className={`w-5 h-5 transition-transform ${isOfficeOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOfficeOpen && (
                            <div className="pl-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Dashboard
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Overview
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Statistics
                                </a>
                                <a href="#" className="block px-6 py-2 hover:bg-[#0a8a73] transition" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Employees
                                </a>
                            </div>
                        )}
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="px-12 py-12">
                {/* Currently Consulting Section */}
                <section className="mb-16" style={{ minHeight: '500px' }}>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-normal" style={{ color: '#0f3d4f' }}>Currently consulting :</h2>
                        {currentPatients.length > PATIENTS_PER_PAGE && (
                            <div className="text-sm" style={{ color: '#0f3d4f' }}>
                                Page {currentPage + 1} of {totalPages}
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-xl" style={{ color: '#0f3d4f' }}>Loading...</div>
                        </div>
                    ) : currentPatients.length === 0 ? (
                        // Empty state for consultations
                        <div className="flex items-center justify-center" style={{ minHeight: '400px' }}>
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="rounded-full p-6" style={{ backgroundColor: '#e8f5f3' }}>
                                        <Clipboard className="w-16 h-16" style={{ color: '#0c9a83' }} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium mb-3" style={{ color: '#0f3d4f' }}>
                                    No consultations yet
                                </h3>
                                <p className="text-lg" style={{ color: '#6b7c8a' }}>
                                    Your current consultations will appear here
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-6 items-center">
                            {/* Previous Arrow (only show if more than 3 patients) */}
                            {currentPatients.length > PATIENTS_PER_PAGE && (
                                <button
                                    onClick={handlePrevPage}
                                    className="rounded-full p-4 shadow-lg transition hover:opacity-90 flex-shrink-0"
                                    style={{ backgroundColor: '#0fc9a8', transform: 'rotate(180deg)' }}
                                >
                                    <ArrowRight className="text-white w-6 h-6" />
                                </button>
                            )}

                            {/* Patient Cards */}
                            <div className="flex gap-6 overflow-hidden flex-1">
                                {displayedPatients.map((patient, index) => (
                                    <div key={index} className="rounded-2xl p-6 min-w-[320px] flex-1 shadow-lg" style={{ backgroundColor: '#2d3e50' }}>
                                        <div className="mb-4">
                                            <div className="text-xs mb-1" style={{ color: '#8a9ba8' }}>Name:</div>
                                            <div className="text-white text-base pb-2" style={{ borderBottom: '1px solid #4a5c6d' }}>{patient.name}</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-xs mb-1" style={{ color: '#8a9ba8' }}>Date of Birth:</div>
                                            <div className="text-white text-base pb-2" style={{ borderBottom: '1px solid #4a5c6d' }}>{patient.dateOfBirth}</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-xs mb-1" style={{ color: '#8a9ba8' }}>Sex:</div>
                                            <div className="text-white text-base pb-2" style={{ borderBottom: '1px solid #4a5c6d' }}>{patient.sex}</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-xs mb-1" style={{ color: '#8a9ba8' }}>Phone:</div>
                                            <div className="text-white text-base pb-2" style={{ borderBottom: '1px solid #4a5c6d' }}>{patient.phone}</div>
                                        </div>

                                        <div className="mb-4 rounded-lg p-3 min-h-[100px]" style={{ backgroundColor: '#1e2a35' }}>
                                            <div className="text-sm leading-relaxed" style={{ color: '#b0c4d0' }}>
                                                {patient.notes}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-xs mb-1" style={{ color: '#8a9ba8' }}>Status:</div>
                                            <div className="text-white text-sm">{patient.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Next Arrow (only show if more than 3 patients) */}
                            {currentPatients.length > PATIENTS_PER_PAGE && (
                                <button
                                    onClick={handleNextPage}
                                    className="rounded-full p-4 shadow-lg transition hover:opacity-90 flex-shrink-0"
                                    style={{ backgroundColor: '#0fc9a8' }}
                                >
                                    <ArrowRight className="text-white w-6 h-6" />
                                </button>
                            )}
                        </div>
                    )}
                </section>

                {/* Schedule Section */}
                <section className="rounded-t-3xl px-12 py-12 -mx-12" style={{ marginTop:'250px', minHeight: '600px' }}>
                    <h2 className="text-white text-2xl font-normal mb-8">Next in your schedule:</h2>

                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-xl text-white">Loading schedule...</div>
                        </div>
                    ) : schedule.length === 0 ? (
                        // Empty state for schedule
                        <div className="flex items-center justify-center" style={{ minHeight: '300px', paddingTop: '40px' }}>
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="rounded-full p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                                        <Calendar className="w-16 h-16 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium mb-3 text-white">
                                    No appointments yet
                                </h3>
                                <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Your upcoming schedule will appear here
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 max-w-4xl" style={{paddingTop: '40px'}} >
                            {schedule.map((item, index) => (
                                <div key={index} className="rounded-lg p-6 flex items-center justify-between" style={{ backgroundColor: '#4a9ac5',marginBottom:'40px'}}>
                                    <div className="flex items-center gap-8 flex-1">
                                        <div className="text-white text-xl font-medium min-w-[180px]">{item.title}</div>
                                        <div className="h-8 w-[1px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
                                        <div className="text-white text-sm">{item.priority}</div>
                                        <div className="h-8 w-[1px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
                                        <div className="text-white text-sm">Happening : {item.happening}</div>
                                    </div>
                                    <div className="flex items-center gap-4 text-white text-lg">
                                        <span>{item.startTime}</span>
                                        <span className="text-sm">to</span>
                                        <span>{item.endTime}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Logs Section */}
                    <div style={{marginTop:'250px',marginBottom:'250px'}} className="mt-32 flex items-center justify-between max-w-4xl">
                        <p className="text-white text-lg max-w-md">
                            Check out your logs here, Integrity gives you full access to all what's happening in your office.
                        </p>
                        <button className="border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-[#0f3d4f] transition flex items-center gap-3" style={{ backgroundColor: 'transparent' }}>
                            Go to logs
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Decorative Waves at Bottom */}
                    <div className="relative h-40 mt-32 -mx-12">
                        <svg viewBox="0 0 1200 200" className="w-full h-full absolute bottom-0">
                            <path d="M0,100 Q300,60 600,100 T1200,100 L1200,200 L0,200 Z" fill="#0fc9a8" opacity="0.3"/>
                            <path d="M0,130 Q300,90 600,130 T1200,130 L1200,200 L0,200 Z" fill="#0fc9a8" opacity="0.5"/>
                            <path d="M0,160 Q300,120 600,160 T1200,160 L1200,200 L0,200 Z" fill="#0fc9a8"/>
                        </svg>
                    </div>
                </section>
            </main>
        </div>
    );
}