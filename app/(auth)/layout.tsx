
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/doctor/me', {
                    credentials: 'include',
                });

                if (response.ok) {
                    router.push('/dashboard');
                    return;
                }
            } catch (error) {
                // Not logged in, good
            }
            setIsChecking(false);
        };

        checkAuth();
    }, [router]);

    if (isChecking) return <div>Loading...</div>;

    return <>{children}</>;
}