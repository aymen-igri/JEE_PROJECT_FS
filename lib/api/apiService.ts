// lib/apiService.ts or utils/api.ts

const API_BASE_URL = 'http://localhost:8081/api';

export interface DoctorInfo {
    fullName: string;
    email: string;
    username: string;
    CIN: string;
    phone: string;
    address: string;
    dateOfBirth: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    specialty: string;
    licenseNumber: string;
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'SUSPENDED';
    profilePhoto: string | null;
    createdAt: string;
}

export const doctorApi = {
    // Get current doctor's info
    async getMyInfo(): Promise<DoctorInfo> {
        const response = await fetch(`${API_BASE_URL}/doctor/me`, {
            method: 'GET',
            credentials: 'include', // Important: sends session cookie
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Not authenticated');
            }
            throw new Error('Failed to fetch doctor info');
        }

        return response.json();
    },
};