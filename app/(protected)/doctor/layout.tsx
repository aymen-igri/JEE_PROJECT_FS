'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

export default function ProtectedLayout({
                                            children
                                        }: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            try {
                await api.get('/api/doctor/check-cabinet');
                setIsChecking(false);
            } catch (error) {
                console.error('Auth check failed:', error);
            }
        }

        checkAuth();
    }, [router]);

    if (isChecking) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div>Loading...</div>
            </div>
        );
    }

    return <>{children}</>;
}