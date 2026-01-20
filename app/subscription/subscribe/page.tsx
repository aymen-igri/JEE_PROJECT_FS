'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';

export default function SubscriptionPage() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [autoRenew, setAutoRenew] = useState(true);

    const plans = [
        {
            id: 'casual',
            name: 'Casual',
            price: '$0',
            originalPrice: '9.99$',
            period: '/mo',
            color: 'from-[#2ec4ab] to-[#1fa896]',
            features: [
                'Create an account',
                'Apply for creating a doctor account',
                'Create your office'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: '$29.99',
            period: '/mo',
            color: 'from-[#3fa89f] to-[#2d8a82]',
            features: [
                'Create an account',
                'Apply for creating a doctor account',
                'Apply for a cabinet',
                'Create a new cabinet',
                'Any functionality related to a cabinet',
                '24/24h support stuff for any help'
            ]
        },
        {
            id: 'pro-plus',
            name: 'Pro +',
            color: 'from-[#2d7a70] to-[#1f5f58]',
            comingSoon: true
        }
    ];

    const handleSelectPlan = (planId: string) => {
        setSelectedPlan(planId);
        setError(null);
    };

    const handleContinue = async () => {
        if (!selectedPlan) {
            setError('Please select a subscription plan');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:8081/api/subscriptions/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    planId: selectedPlan,
                    autoRenew: autoRenew
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to create subscription');
            }

            const subscription = await response.json();
            console.log('Subscription created:', subscription);

            // Redirect to dashboard or success page
            router.push('/subscription/subscribe');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            console.error('Subscription error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ backgroundColor: '#0a3d4f', minHeight: '100vh' }} className="w-full flex flex-col py-8 px-4">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600&display=swap');

                * {
                    font-family: 'Wix Madefor Display', sans-serif;
                }

                .pricing-card {
                    background: linear-gradient(135deg, var(--card-from) 0%, var(--card-to) 100%);
                    border-radius: 2rem;
                    padding: 2.5rem 2rem;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                    cursor: pointer;
                    border: 3px solid transparent;
                }

                .pricing-card:hover:not(.coming-soon) {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                }

                .pricing-card.selected {
                    border-color: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 10px 50px rgba(255, 255, 255, 0.2);
                }

                .pricing-card.coming-soon {
                    cursor: not-allowed;
                    opacity: 0.85;
                }

                .card-text {
                    text-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.3);
                    font-weight: 600;
                }

                .price-strike {
                    text-decoration: line-through;
                    opacity: 0.5;
                }

                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-bottom: 0.75rem;
                }

                .checkbox-label {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    cursor: pointer;
                    color: white;
                    font-size: 0.875rem;
                    margin-top: 1rem;
                }

                .checkbox-label input[type="checkbox"] {
                    width: 1.25rem;
                    height: 1.25rem;
                    cursor: pointer;
                    accent-color: #2ec4ab;
                }
            `}</style>

            {/* Header */}
            <div className="w-full max-w-7xl mx-auto mb-12">
                <h1 className="text-white text-2xl font-light tracking-[0.2em]">Integrity</h1>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col items-center">
                {/* Title */}
                <h2 className="text-white text-5xl md:text-6xl text-center mb-3 font-light tracking-wide">
                    Get your subscription started
                </h2>

                {/* Subtitle */}
                <p className="text-white/60 text-center mb-16 text-sm tracking-wide">
                    Please post your documents here Doctor
                </p>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-500 text-white p-4 rounded-xl mb-8 text-center font-medium max-w-2xl">
                        {error}
                    </div>
                )}

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.comingSoon ? 'coming-soon' : ''}`}
                            onClick={() => !plan.comingSoon && handleSelectPlan(plan.id)}
                            style={{
                                '--card-from': plan.color.split(' ')[0].replace('from-[', '').replace(']', ''),
                                '--card-to': plan.color.split(' ')[1].replace('to-[', '').replace(']', '')
                            } as React.CSSProperties}
                        >
                            {/* Plan Name */}
                            <h3 className="text-white text-3xl mb-6 text-center card-text">
                                {plan.name}
                            </h3>

                            {plan.comingSoon ? (
                                <div className="flex-1 flex items-center justify-center">
                                    <p className="text-white text-xl card-text">
                                        Coming soon
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        {plan.originalPrice && (
                                            <div className="price-strike text-white text-lg mb-1 card-text">
                                                {plan.originalPrice}
                                            </div>
                                        )}
                                        <div className="text-white card-text">
                                            <span className="text-5xl">{plan.price}</span>
                                            <span className="text-lg">{plan.period}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-8 flex-1">
                                        {plan.features?.map((feature, index) => (
                                            <div key={index} className="feature-item">
                                                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                                <span className="text-white text-sm leading-relaxed card-text">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Auto-renew Checkbox */}
                {selectedPlan && (
                    <label className="checkbox-label mt-8">
                        <input
                            type="checkbox"
                            checked={autoRenew}
                            onChange={(e) => setAutoRenew(e.target.checked)}
                        />
                        <span>Enable auto-renewal</span>
                    </label>
                )}

                {/* Continue Button */}
                {selectedPlan && (
                    <div className="mt-8">
                        <button
                            onClick={handleContinue}
                            disabled={isSubmitting}
                            style={{
                                background: 'linear-gradient(135deg, #2ec4ab 0%, #1fa896 100%)',
                                boxShadow: '0 8px 24px rgba(46, 196, 171, 0.3)'
                            }}
                            className="hover:scale-105 disabled:opacity-50 disabled:scale-100 text-white px-20 py-3.5 rounded-xl text-base font-medium tracking-wide transition-all duration-300"
                        >
                            {isSubmitting ? 'Processing...' : 'Continue'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}