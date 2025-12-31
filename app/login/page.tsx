"use client"

import type React from "react"

import { useState } from "react"
import { Wix_Madefor_Display } from 'next/font/google'
import { useRouter } from 'next/navigation'
import Link from "next/link"

const wixDisplay = Wix_Madefor_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
})

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await fetch(`http://localhost:8080/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    identifier: email,
                    password: password
                })
            })

            if (!response.ok) {
                throw new Error("Login failed. Please check your credentials.")
            }

            const data = await response.json()

            localStorage.setItem("userEmail", data.email)
            localStorage.setItem("userRole", data.role)

            router.push("/success")

        } catch (err: any) {
            setError(err.message || "An error occurred during login")
        } finally {
            setLoading(false)
        }
    }

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`)
    }

    return (
        <div className="min-h-screen flex flex-col px-8 py-8" style={{ backgroundColor: "#043045" }}>
            <div className="mb-6">
                <h2 className="text-3xl font-mono text-white" style={{ paddingTop:"50px", paddingLeft:"50px" }}>Integrity</h2>
            </div>

            <div className="flex-1 flex items-center justify-center py-4">
                <div className="w-full max-w-7xl relative">

                    <div className="text-center space-y-2 mb-6" style={{ marginBottom : "50px" }} >
                        <h1 className={`text-7xl font-bold text-white ${wixDisplay.className}`}   >Log In</h1>
                        <p className="text-lg text-white/70">
                            Don't have an account? 
                            <Link href="/auth/register">
                                <span className="text-white/90 cursor-pointer hover:underline">sign up</span>
                            </Link>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-8 lg:gap-24">
                        {/* Left Side - Form */}
                        <div className="space-y-8 flex-1 max-w-xs">
                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded">
                                    {error}
                                </div>
                            )}

                            {/* Form Inputs */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`w-full bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 focus:outline-none focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                                        placeholder={email ? "" : "Email"}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={`w-full bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 focus:outline-none focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                                        placeholder={password ? "" : "Password"}
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className={`flex items-center gap-3 text-white hover:opacity-80 transition-opacity group ${wixDisplay.className} px-5 py-3 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    style={{ backgroundColor: '#015877' , borderRadius:'43px',marginLeft:'150px'}}
                                    disabled={loading}
                                >
                                    <span className="text-lg">{loading ? 'Loading...' : 'Continue'}</span>
                                    {!loading && (
                                        <div className="w-14 h-4 group-hover:translate-x-1 transition-transform">
                                            <svg
                                                width="56"
                                                height="16"
                                                viewBox="0 0 56 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1="0" y1="8" x2="48" y2="8" stroke="white" strokeWidth="2"/>
                                                <line x1="48" y1="8" x2="42" y2="2" stroke="white" strokeWidth="2"/>
                                                <line x1="48" y1="8" x2="42" y2="14" stroke="white" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center gap-8">
                                <div style={{ width: '2.5px', height: '96px', borderRadius: '10px', backgroundColor: 'white' }} />
                                <span className="text-white/60 text-xl">or</span>
                                <div style={{ width: '2.5px', height: '128px', borderRadius: '10px', backgroundColor: 'white' }} />
                            </div>
                        </div>

                        {/* Right Side - Social Login Buttons */}
                        <div className="space-y-5 flex-1 max-w-xs">
                            {/* Google Button */}
                            <button
                                onClick={() => handleSocialLogin("Google")}
                                className="w-full flex items-center gap-4 px-6 py-4 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span className="text-[#5eb3e8] font-medium text-base font-mono">Continue with Google</span>
                            </button>

                            {/* Facebook Button */}
                            <button
                                onClick={() => handleSocialLogin("Facebook")}
                                className="w-full flex items-center gap-4 px-6 py-4 rounded-full bg-[#4267B2] hover:bg-[#365899] text-white transition-colors"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                                </svg>
                                <span className="font-medium text-base font-mono">Continue with Facebook</span>
                            </button>

                            {/* GitHub Button */}
                            <button
                                onClick={() => handleSocialLogin("GitHub")}
                                className="w-full flex items-center gap-4 px-6 py-4 rounded-full bg-[#432624] hover:bg-[#3a1f1e] text-white transition-colors"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span className="font-medium text-base font-mono">Continue with GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12 text-center" style={{ paddingTop :"50px", paddingBottom:"20px"}}>
                <p className="text-white/50 text-xs leading-relaxed">
                    <a href="#" className="hover:underline">
                        Terms of Use
                    </a>
                    <a href="#" className="hover:underline ml-1">
                        Privacy Policy
                    </a>
                    <span className="ml-1">
              This site is protected by reCAPTCHA Enterprise. Google's Privacy Policy and Terms of Service apply.
            </span>
                </p>
            </div>
        </div>
    )
}