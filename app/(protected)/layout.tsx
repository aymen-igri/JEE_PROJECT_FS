// app/(protected)/layout.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtectedLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/doctor/check-cabinet', {
                    credentials: 'include',
                });

                // Not authenticated - redirect to login
                if (response.status === 401) {
                    router.push('/login');
                    return;
                }

                // Authenticated but no cabinet - redirect to create cabinet
                if (response.status === 403) {
                    const data = await response.json();
                    router.push(data.redirectUrl || '/cabinet/create');
                    return;
                }

                if (!response.ok) {
                    throw new Error('Auth check failed');
                }

                // All good, user has cabinet
                setIsChecking(false);
            } catch (error) {
                console.error('Auth check error:', error);
                router.push('/login');
            }
        };

        checkAuth();
    }, [router]);

    if (isChecking) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}