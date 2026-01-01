'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // First upload logo if exists
            let logoUrl = null;
            if (formData.logo) {
                const logoFormData = new FormData();
                logoFormData.append('file', formData.logo);

                const uploadResponse = await fetch('/api/upload', {
                    method: 'POST',
                    body: logoFormData,
                });

                if (uploadResponse.ok) {
                    const uploadData = await uploadResponse.json();
                    logoUrl = uploadData.url;
                }
            }

            // Create cabinet
            const response = await fetch('/api/office/create', {
                method: 'POST',
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
                throw new Error('Failed to create cabinet');
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
        <div className="bg-[#043045] min-h-screen w-full flex flex-col items-center py-12 px-4">
            {/* Header */}
            <div className="w-full max-w-6xl mb-8">
                <h1 className="text-white text-4xl md:text-5xl font-bold">Integrity</h1>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-4xl">
                {/* Title */}
                <h2 className="text-white text-5xl md:text-6xl text-center mb-4">
                    Create your Office
                </h2>

                {/* Subtitle */}
                <p className="text-white text-center mb-12">
                    Please insert your office infos
                </p>

                {error && (
                    <div className="bg-red-500 text-white p-4 rounded-lg mb-6 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Logo Upload Section */}
                    <div className="flex flex-col items-center mb-12">
                        <label className="text-white mb-4 text-lg">Logo:</label>
                        <label htmlFor="logo-upload" className="cursor-pointer block">
                            <div className="relative w-56 h-56 bg-[#0c9a83] rounded-3xl border-4 border-[#056e5d] flex items-center justify-center hover:bg-[#0da88e] transition-colors overflow-hidden">
                                {logoPreview ? (
                                    <Image
                                        src={logoPreview}
                                        alt="Logo preview"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="w-24 h-8 bg-[#064461] rounded-sm" />
                                        <div className="w-8 h-24 bg-[#064461] rounded-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
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

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Cabinet Name */}
                        <div>
                            <label className="text-white block mb-3 text-lg">Cabinet name:</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="w-full h-20 bg-[#043045] border-2 border-[#5e87ed] rounded-lg px-4 text-white outline-none focus:border-[#7da0ff] transition-colors"
                            />
                        </div>

                        {/* Speciality */}
                        <div>
                            <label className="text-white block mb-3 text-lg">Speciality:</label>
                            <input
                                type="text"
                                required
                                value={formData.specialty}
                                onChange={(e) => handleInputChange('specialty', e.target.value)}
                                className="w-full h-20 bg-[#043045] border-2 border-[#5e87ed] rounded-lg px-4 text-white outline-none focus:border-[#7da0ff] transition-colors"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="text-white block mb-3 text-lg">Address:</label>
                            <input
                                type="text"
                                required
                                value={formData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="w-full h-20 bg-[#043045] border-2 border-[#5e87ed] rounded-lg px-4 text-white outline-none focus:border-[#7da0ff] transition-colors"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-white block mb-3 text-lg">Phone:</label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full h-20 bg-[#043045] border-2 border-[#5e87ed] rounded-lg px-4 text-white outline-none focus:border-[#7da0ff] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Consultation Price */}
                    <div className="max-w-sm">
                        <label className="text-white block mb-3 text-lg">Consultation Price</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                required
                                step="0.01"
                                value={formData.defaultConsultPrice}
                                onChange={(e) => handleInputChange('defaultConsultPrice', e.target.value)}
                                className="w-48 h-20 bg-[#043045] border-2 border-[#5e87ed] rounded-lg px-4 text-white outline-none focus:border-[#7da0ff] transition-colors"
                            />
                            <span className="text-white text-xl font-semibold">MAD</span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-12">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#0c9a83] hover:bg-[#0da88e] disabled:bg-gray-500 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors"
                        >
                            {isSubmitting ? 'Creating...' : 'Create Cabinet'}
                        </button>
                    </div>

                    {/* Terms and Privacy */}
                    <div className="text-[#7a8d96] text-center text-sm mt-8 max-w-3xl mx-auto">
                        <p>
                            <span>* By signing up, you agree to our </span>
                            <a href="/terms" className="underline hover:text-[#9eb5be]">
                                Terms of Use
                            </a>
                            <span> and acknowledge you've read our </span>
                            <a href="/privacy" className="underline hover:text-[#9eb5be]">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}