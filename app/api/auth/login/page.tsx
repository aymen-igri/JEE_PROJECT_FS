'use client'

import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Login submitted:', { email, password });
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0A3D4A',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ padding: '2rem' }}>
                <h1 style={{ color: 'white', fontSize: '1.875rem', fontFamily: 'monospace' }}>
                    Integrity
                </h1>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '4rem'
                }}>

                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h2 style={{
                            color: 'white',
                            fontSize: '3.75rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem'
                        }}>
                            Log In
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', marginBottom: '3rem' }}>
                            Don&#39;t have an account? <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>sign up</span>
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    borderBottom: '2px solid #2196F3',
                                    color: 'white',
                                    padding: '0.5rem 0.25rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    borderBottom: '2px solid #2196F3',
                                    color: 'white',
                                    padding: '0.5rem 0.25rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            style={{
                                backgroundColor: '#1976D2',
                                color: 'white',
                                padding: '0.75rem 2rem',
                                borderRadius: '9999px',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: 'none',
                                cursor: 'pointer',
                                marginTop: '2rem'
                            }}
                        >
                            Continue →
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '1px', height: '8rem', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem' }}>or</span>
                        <div style={{ width: '1px', height: '8rem', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px' }}>

                        <button
                            onClick={() => handleSocialLogin('Google')}
                            style={{
                                width: '100%',
                                backgroundColor: 'white',
                                color: '#4285F4',
                                padding: '1rem 1.5rem',
                                borderRadius: '9999px',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                border: 'none',
                                cursor: 'pointer',
                                marginBottom: '1rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>🔵</span>
                            Continue with Google
                        </button>

                        <button
                            onClick={() => handleSocialLogin('Facebook')}
                            style={{
                                width: '100%',
                                backgroundColor: '#4267B2',
                                color: 'white',
                                padding: '1rem 1.5rem',
                                borderRadius: '9999px',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                border: 'none',
                                cursor: 'pointer',
                                marginBottom: '1rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>📘</span>
                            Continue with Facebook
                        </button>

                        <button
                            onClick={() => handleSocialLogin('GitHub')}
                            style={{
                                width: '100%',
                                backgroundColor: '#24292E',
                                color: 'white',
                                padding: '1rem 1.5rem',
                                borderRadius: '9999px',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>⚫</span>
                            Continue with GitHub
                        </button>

                    </div>
                </div>
            </div>

            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms of Use</a>
                    {' · '}
                    <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</a>
                    <br />
                    <span style={{ display: 'block', marginTop: '0.5rem' }}>
            This site is protected by reCAPTCHA Enterprise. {' '}
                        <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Google&#39;s Privacy Policy</a>
                        {' and '}
                        <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms of Service</a>
                        {' apply.'}
          </span>
                </p>
            </div>
        </div>
    );
}