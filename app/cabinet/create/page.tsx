'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { Wix_Madefor_Display } from 'next/font/google';

const wixFont = Wix_Madefor_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});

export default function CreateCabinet() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        address: '',
        phone: '',
        defaultConsultPrice: '',
        logo: null as File | null
    });
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prev => ({ ...prev, logo: file }));
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError(null);

        try {
            let logoUrl = null;
            if (formData.logo) {
                const logoFormData = new FormData();
                logoFormData.append('file', formData.logo);

                const uploadResponse = await fetch('http://localhost:8081/api/office/upload-logo', {
                    method: 'POST',
                    credentials: 'include',
                    body: logoFormData,
                });

                if (uploadResponse.ok) {
                    const uploadData = await uploadResponse.json();
                    logoUrl = uploadData.url;
                } else {
                    throw new Error('Failed to upload logo');
                }
            }

            const response = await fetch('http://localhost:8081/api/office/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    specialty: formData.specialty,
                    address: formData.address,
                    phone: formData.phone,
                    defaultConsultPrice: parseFloat(formData.defaultConsultPrice),
                    logo: logoUrl,
                    status: 'Active'
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to create cabinet: ${errorText}`);
            }

            const data = await response.json();
            router.push('/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{backgroundColor: '#0a3d4f', minHeight: '100vh'}} className={`${wixFont.className} w-full flex flex-col py-8 px-8`}>
            <style jsx>{`
                .form-label {
                    color: white;
                    font-size: 0.875rem;
                    font-weight: 300;
                }

                .form-input-underline {
                    background: transparent;
                    border: none;
                    border-bottom: 4px solid #5a9ec0;
                    padding-bottom: 0.75rem;
                    color: white;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.3s;
                }

                .form-input-underline:focus {
                    border-bottom-color: #6bb8d4;
                }

                .logo-upload-box {
                    width: 11rem;
                    height: 11rem;
                    background: linear-gradient(135deg, #2ec4ab 0%, #1fa896 100%);
                    border-radius: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    overflow: hidden;
                }

                .logo-upload-box:hover {
                    transform: scale(1.05);
                    box-shadow: 0 15px 40px rgba(46, 196, 171, 0.4);
                }

                .plus-icon-h {
                    width: 4rem;
                    height: 1.25rem;
                    background: #0a3d4f;
                    border-radius: 0.375rem;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
                }

                .plus-icon-v {
                    width: 1.25rem;
                    height: 4rem;
                    background: #0a3d4f;
                    border-radius: 0.375rem;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
                }
            `}</style>

            {/* Header */}
            <div className="w-full max-w-7xl mx-auto mb-16">
                <h1 className="text-white text-2xl font-light tracking-[0.2em]">Integrity</h1>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-4xl mx-auto flex-1">
                {/* Title */}
                <h2 className="text-white text-5xl md:text-6xl text-center mb-3 font-light tracking-wide">
                    Create your Office
                </h2>

                {/* Subtitle */}
                <p className="text-white/60 text-center mb-32 text-sm tracking-wide">
                    Please insert your office infos
                </p>

                {error && (
                    <div className="bg-red-500 text-white p-4 rounded-xl mb-8 text-center font-medium">
                        {error}
                    </div>
                )}

                {/* Logo Upload */}
                <div style={{marginTop:'50px',marginBottom:'50px'}} className="flex items-center justify-center gap-6 mb-32">
                    <label className="form-label">Logo:</label>
                    <label htmlFor="logo-upload" className="cursor-pointer block">
                        <div className="logo-upload-box py-[50px]">
                            {logoPreview ? (
                                <img
                                    src={logoPreview}
                                    alt="Logo preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="plus-icon-h absolute" />
                                    <div className="plus-icon-v absolute" />
                                </div>
                            )}
                        </div>
                    </label>
                    <input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                    />
                </div>

                {/* Form Grid */}
                <div className="w-full space-y-16 px-8">
                    {/* Row 1 */}
                    <div style={{marginBottom:'25px'}} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        <div className="flex items-baseline gap-4">
                            <label className="form-label whitespace-nowrap">Cabinet name:</label>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="form-input-underline"
                                    style={{width: '15rem'}}
                                />
                            </div>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <label className="form-label whitespace-nowrap">Speciality:</label>
                            <div style={{width: '13rem'}} className="flex-1 relative">
                                <input
                                    type="text"
                                    required
                                    value={formData.specialty}
                                    onChange={(e) => handleInputChange('specialty', e.target.value)}
                                    className="form-input-underline pr-8"
                                    style={{width: '13rem'}}
                                />
                                <Lock style={{marginLeft:'12rem'}} className="absolute right- top-4 w-4 h-4 text-white/40" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div style={{marginBottom:'25px'}} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        <div className="flex items-baseline gap-4">
                            <label className="form-label whitespace-nowrap">Address:</label>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    required
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    className="form-input-underline"
                                    style={{width: '17rem'}}
                                />
                            </div>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <label className="form-label whitespace-nowrap">Phone:</label>
                            <div className="flex-1">
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="form-input-underline"
                                    style={{width: '16rem'}}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Consultation Price */}
                    <div style={{marginBottom:'25px'}} className="flex items-baseline gap-4 max-w-md">
                        <label className="form-label whitespace-nowrap">Consultation Price</label>
                        <input
                            type="number"
                            required
                            step="0.01"
                            value={formData.defaultConsultPrice}
                            onChange={(e) => handleInputChange('defaultConsultPrice', e.target.value)}
                            className="form-input-underline"
                            style={{width: '10rem'}}
                        />
                        <span className="text-white/60 text-sm font-light">MAD</span>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-16 mb-12">
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        style={{
                            background: 'linear-gradient(135deg, #2ec4ab 0%, #1fa896 100%)',
                            boxShadow: '0 8px 24px rgba(46, 196, 171, 0.3)'
                        }}
                        className="hover:scale-105 disabled:opacity-50 disabled:scale-100 text-white px-20 py-3.5 rounded-xl text-base font-medium tracking-wide transition-all duration-300"
                    >
                        {isSubmitting ? 'Creating...' : 'Create Office'}
                    </button>
                </div>

                {/* Terms */}
                <div className="text-white/30 text-center text-xs mt-16 leading-relaxed">
                    <p>
                        <span>* By signing up, you agree to our </span>
                        <a href="/terms" className="underline hover:text-white/50 transition-colors">
                            Terms of Use
                        </a>
                        <span> and acknowledge you've read our </span>
                        <a href="/privacy" className="underline hover:text-white/50 transition-colors">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}