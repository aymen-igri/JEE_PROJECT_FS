# Integrity Healthcare Frontend

A modern, responsive healthcare management system frontend built with Next.js 16, React 19, and TypeScript, providing intuitive interfaces for doctors, secretaries, admins, and super admins.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [User Interfaces](#user-interfaces)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Authentication](#authentication)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)

## Overview

The Integrity Healthcare Frontend is a comprehensive web application that provides role-specific dashboards and management interfaces for a complete healthcare practice management system. Built with modern React patterns and Next.js App Router, it offers a seamless user experience across all devices.

### Project Information

- **Version**: 1.0.0
- **Created by**: Aymen Igri, Fahd, Mostafa
- **Repository**: https://github.com/aymen-igri/JEE_PROJECT_FS.git

### Key Capabilities

- **Role-Based Dashboards**: Customized interfaces for Super Admin, Admin, Doctor, and Secretary
- **Medical Cabinet Management**: Create and manage multiple medical practices
- **Patient Management**: Comprehensive patient records and medical history
- **Appointment Scheduling**: Interactive calendar and scheduling system
- **Consultation Management**: Complete medical consultation workflow
- **Billing & Receipts**: Payment processing and receipt generation
- **Subscription Management**: SaaS subscription plan management
- **Real-time Updates**: Dynamic data fetching and updates
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Accessibility**: WCAG 2.1 compliant interfaces

## Technology Stack

### Core Framework
- **Next.js**: 16.1.1 (App Router)
- **React**: 19.2.3
- **React DOM**: 19.2.3
- **TypeScript**: 5.9.3

### Styling
- **Tailwind CSS**: 4.1.18
- **PostCSS**: 8.5.6
- **Autoprefixer**: 10.4.23

### UI Components
- **Lucide React**: 0.562.0 (Icon library)
- **React Chart.js 2**: 5.3.1 (Charts and graphs)
- **clsx**: 2.1.1 (Utility for constructing className strings)

### Development Tools
- **ESLint**: 9.x (Code linting)
- **TypeScript**: Type safety and IntelliSense

## Features

### 1. Authentication & Authorization

- **Login System**: Email/username and password authentication
- **Session Management**: Secure session handling with cookies
- **Role-Based Access**: Automatic redirection based on user role
- **Protected Routes**: Route guards for authenticated pages
- **Logout Functionality**: Clean session termination

### 2. Super Admin Dashboard

#### Features
- **System Overview**: Total users, active subscriptions, revenue metrics
- **User Management**: Create and manage admin accounts
- **Doctor Applications**: Review and approve/reject doctor applications
- **Subscription Plans**: Create and manage subscription plans
- **Activity Logs**: System-wide audit trail
- **Statistics**: Comprehensive system analytics

#### Pages
- `/superAdmin/dashboard` - Main dashboard
- `/superAdmin/users` - User management
- `/superAdmin/applications` - Doctor applications
- `/superAdmin/subscriptions` - Subscription management
- `/superAdmin/logs` - Activity logs
- `/superAdmin/profile` - Profile settings

### 3. Admin Dashboard

#### Features
- **Cabinet Overview**: Monitor all cabinets in the system
- **Doctor Management**: Approve doctors, change status
- **Medicament Management**: Add/edit/deactivate medications
- **Application Review**: Process doctor applications
- **User Statistics**: View user metrics and trends

#### Pages
- `/admin/dashboard` - Main dashboard
- `/admin/users` - User management
- `/admin/applications` - Review applications
- `/admin/offices` - Cabinet management
- `/admin/subscriptions` - View subscriptions
- `/admin/profile` - Profile settings

### 4. Doctor Dashboard

#### Features
- **Cabinet Management**: Create and manage multiple cabinets
- **Patient Overview**: View all linked patients
- **Appointment Calendar**: View and manage appointments
- **Consultation Management**: Create and manage consultations
- **Prescription Writing**: Create prescriptions with medicament search
- **Diagnostic Management**: Add and edit diagnoses
- **Cabinet Statistics**: Practice metrics and analytics
- **Subscription Management**: View and renew subscriptions

#### Pages
- `/dashboard` - Doctor home (redirects to cabinet selection if multiple)
- `/(protected)/cabinet/create` - Create new cabinet
- `/(protected)/doctor/account` - Profile management

### 5. Secretary Interface

#### Features
- **Patient Management**: Register and manage patients
- **Appointment Scheduling**: Create and reschedule appointments
- **Patient Search**: Find and link patients to doctors
- **Billing Processing**: Create bills and receipts
- **Payment Management**: Process payments and print receipts

### 6. Public Pages

#### Features
- **Landing Page**: System introduction and features
- **Login Page**: User authentication
- **Registration**: Doctor application submission
- **Doctor Application**: Multi-step form with document upload

## Project Structure

```
JEE_PROJECT_FS/
├── app/                          # Next.js App Router
│   ├── (protected)/             # Protected route group
│   │   ├── cabinet/            # Cabinet management
│   │   │   └── create/        # Create cabinet
│   │   └── doctor/            # Doctor-specific pages
│   │       └── account/       # Doctor account page
│   ├── actions/                 # Server Actions
│   │   ├── appointments.ts     # Appointment actions
│   │   ├── auth.ts            # Authentication actions
│   │   ├── documents.actions.ts
│   │   └── patients.ts        # Patient actions
│   ├── admin/                   # Admin dashboard
│   │   ├── layout.tsx         # Admin layout
│   │   ├── dashboard/         # Admin dashboard
│   │   ├── applications/      # Doctor applications
│   │   ├── users/             # User management
│   │   ├── offices/           # Cabinet management
│   │   ├── subscriptions/     # Subscription view
│   │   ├── logs/              # Activity logs
│   │   └── profile/           # Admin profile
│   ├── api/                     # API route handlers
│   │   ├── auth/              # Auth endpoints
│   │   ├── appointements/     # Appointment endpoints
│   │   ├── cabinets/          # Cabinet endpoints
│   │   ├── consultations/     # Consultation endpoints
│   │   ├── patients/          # Patient endpoints
│   │   └── documents/         # Document endpoints
│   ├── auth/                    # Public auth pages
│   │   ├── register/          # Doctor registration
│   │   └── layout.tsx         # Auth layout
│   ├── dashboard/               # Doctor dashboard
│   │   └── layout.tsx         # Dashboard layout
│   ├── login/                   # Login page
│   │   └── page.tsx           # Login form
│   ├── superAdmin/             # Super Admin dashboard
│   │   ├── layout.tsx         # Super Admin layout
│   │   ├── dashboard/         # Super Admin dashboard
│   │   ├── applications/      # Application management
│   │   ├── users/             # All users management
│   │   ├── subscriptions/     # Subscription management
│   │   ├── logs/              # System logs
│   │   └── profile/           # Super Admin profile
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/                  # React components
│   ├── doctor/                 # Doctor-specific components
│   │   └── DoctorAccount.tsx  # Doctor account component
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx         # App header
│   │   ├── Footer.tsx         # App footer
│   │   ├── Navigation.tsx     # Navigation menu
│   │   └── Body.tsx           # Main body wrapper
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx         # Button component
│   │   ├── input.tsx          # Input component
│   │   └── form/              # Form components
├── features/                    # Feature-specific components
│   ├── appointments/           # Appointment features
│   │   └── AppointmentList.tsx
│   ├── consultations/          # Consultation features
│   │   └── ConsultationList.tsx
│   ├── documents/              # Document features
│   │   └── DocumentList.tsx
│   ├── patients/               # Patient features
│   │   └── PatientList.tsx
│   └── shared/                 # Shared features
│       └── PermissionGuard.tsx # Permission checking
├── lib/                        # Utility libraries
│   ├── api/                    # API client
│   │   ├── client.ts          # HTTP client
│   │   ├── endpoints.ts       # API endpoints
│   │   ├── fetcher.ts         # Data fetching utilities
│   │   ├── server.ts          # Server-side API calls
│   │   └── apiService.ts      # API service layer
│   ├── auth/                   # Authentication utilities
│   │   ├── session.ts         # Session management
│   │   └── permissions.ts     # Permission checking
│   ├── config/                 # Configuration
│   │   ├── roles.ts           # Role definitions
│   │   └── site.ts            # Site configuration
│   ├── db/                     # Database utilities
│   │   ├── prisma.ts          # Prisma client (if used)
│   │   └── queries/           # Database queries
│   ├── hooks/                  # Custom React hooks
│   │   └── useAuth.ts         # Auth hook
│   ├── utils/                  # Utility functions
│   │   ├── constants.ts       # App constants
│   │   ├── date.ts            # Date utilities
│   │   └── validators.ts      # Validation functions
│   ├── validators/             # Schema validators
│   │   ├── appointment.schema.ts
│   │   ├── auth.schema.ts
│   │   ├── common.schema.ts
│   │   └── patient.schema.ts
│   └── api.ts                  # Main API module
├── public/                     # Static assets
├── services/                   # Service layer
│   └── authService.ts         # Authentication service
├── types/                      # TypeScript types
│   ├── api.ts                 # API types
│   ├── auth.ts                # Auth types
│   ├── index.ts               # Exported types
│   └── Users.ts               # User types
├── .env                        # Environment variables
├── .env.local                  # Local environment (gitignored)
├── eslint.config.mjs           # ESLint configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher (or yarn/pnpm)
- **Backend API**: Running on http://localhost:8080

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aymen-igri/JEE_PROJECT_FS.git
cd JEE_PROJECT_FS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080

# Optional: If you have other environment-specific configs
NODE_ENV=development
```

**Important**: Make sure the `.env` file has the correct API URL with `http://` protocol:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will start on **http://localhost:3000**

### 5. Verify Installation

Open your browser and navigate to:
- http://localhost:3000 - Landing page
- http://localhost:3000/login - Login page

## Configuration

### Environment Variables

```env
# API Base URL - MUST include http:// or https://
NEXT_PUBLIC_API_URL=http://localhost:8080

# Node Environment
NODE_ENV=development

# Optional: Custom Port
PORT=3000
```

### Next.js Configuration

Edit `next.config.ts` for custom configurations:

```typescript
const nextConfig: NextConfig = {
  // Your configurations
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
};
```

### Tailwind CSS

Configuration in `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
} satisfies Config;
```

## User Interfaces

### Super Admin Interface

**Access**: `/superAdmin/*`

**Features**:
- System dashboard with key metrics
- Create and manage admin accounts
- Review doctor applications
- Manage subscription plans
- View system-wide activity logs
- User statistics and analytics

### Admin Interface

**Access**: `/admin/*`

**Features**:
- Admin dashboard with cabinet overview
- Manage doctors and change their status
- Review and process doctor applications
- Manage medicament database
- View subscription status
- Cabinet management and oversight

### Doctor Interface

**Access**: `/dashboard/*` and `/(protected)/*`

**Features**:
- Personal dashboard with practice metrics
- Create and manage multiple cabinets
- Patient management and medical records
- Appointment calendar
- Consultation management
- Prescription writing
- Diagnostic management
- Subscription management

### Secretary Interface

**Access**: Via doctor dashboard with secretary role

**Features**:
- Patient registration and management
- Appointment scheduling
- Patient search and linking
- Billing and receipt generation
- Payment processing

## API Integration

### API Client Setup

The application uses a centralized API client located in `lib/api/`:

```typescript
// lib/api/client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export const apiClient = {
  get: (url: string) => fetch(`${API_BASE_URL}${url}`, { credentials: 'include' }),
  post: (url: string, data: any) => fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  }),
  // ... other methods
};
```

### API Endpoints

All API endpoints are defined in `lib/api/endpoints.ts`:

```typescript
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    ME: '/api/auth/me',
  },
  DOCTOR: {
    ALL: '/api/doctor/all',
    ME: '/api/doctor/me',
    UPDATE: '/api/doctor/me',
  },
  // ... other endpoints
};
```

### Making API Calls

```typescript
// Server Component
import { apiClient } from '@/lib/api/server';

async function getData() {
  const response = await apiClient.get('/api/endpoint');
  return response.json();
}

// Client Component
'use client';
import { apiClient } from '@/lib/api/client';

async function handleSubmit(data: FormData) {
  const response = await apiClient.post('/api/endpoint', data);
  // handle response
}
```

## Styling

### Tailwind CSS Classes

The project uses Tailwind CSS for styling with custom configurations:

```typescript
// Common utility classes
className="flex items-center justify-between p-4 bg-white rounded-lg shadow"

// Responsive design
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Custom colors (if defined in config)
className="bg-primary text-white hover:bg-primary-dark"
```

### Global Styles

Global styles are defined in `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }
}
```

### Component Styling

Components use a combination of Tailwind classes and custom styles:

```tsx
<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Cards */}
  </div>
</div>
```

## Authentication

### Login Flow

1. User enters credentials on `/login` page
2. Credentials sent to backend API
3. Backend validates and creates session
4. Session cookie stored in browser
5. User redirected to role-specific dashboard

### Protected Routes

Protected routes use middleware or layout checks:

```typescript
// middleware.ts or layout.tsx
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';

export default async function ProtectedLayout({ children }) {
  const session = await getSession();
  
  if (!session) {
    redirect('/login');
  }
  
  return <>{children}</>;
}
```

### Role-Based Access

```typescript
import { hasRole } from '@/lib/auth/permissions';

if (!hasRole(session.user, 'DOCTOR')) {
  redirect('/unauthorized');
}
```

## Development

### Running in Development Mode

```bash
npm run dev
```

Features:
- Hot Module Replacement (HMR)
- Fast Refresh for instant updates
- Detailed error messages
- Source maps for debugging

### Code Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Development Tools

- **React DevTools**: Browser extension for React debugging
- **Next.js DevTools**: Built-in Next.js debugging
- **TypeScript IntelliSense**: VS Code integration

## Build

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm start
```

## Troubleshooting

### Common Issues

#### 1. API Connection Error
```
Error: Failed to fetch
```
**Solution**: 
- Check that backend is running on http://localhost:8080
- Verify `.env` file has correct `NEXT_PUBLIC_API_URL`
- Ensure URL includes `http://` protocol

#### 2. CORS Error
```
Access to fetch at 'http://localhost:8080' has been blocked by CORS policy
```
**Solution**: 
- Verify backend CORS configuration allows `http://localhost:3000`
- Ensure `credentials: 'include'` in fetch requests

#### 3. Session/Authentication Issues
```
Unauthorized - 401
```
**Solution**:
- Clear browser cookies
- Check that session cookie is being sent
- Verify backend session configuration

#### 4. Build Errors
```
Type error: Cannot find module
```
**Solution**:
- Run `npm install` to ensure all dependencies are installed
- Check import paths are correct
- Verify TypeScript configuration

#### 5. Environment Variables Not Working
```
undefined when accessing process.env.NEXT_PUBLIC_API_URL
```
**Solution**:
- Restart dev server after changing `.env` files
- Ensure variable names start with `NEXT_PUBLIC_` for client-side access
- Check `.env.local` is not gitignored and exists

### Debug Mode

Enable verbose logging:

```typescript
// Add to components
console.log('Debug info:', { data, error, loading });

// Network debugging
fetch(url, options)
  .then(res => {
    console.log('Response:', res);
    return res.json();
  })
  .catch(err => console.error('Error:', err));
```

### Performance Optimization

1. **Image Optimization**: Use Next.js `<Image>` component
2. **Code Splitting**: Use dynamic imports
3. **Caching**: Implement proper caching strategies
4. **Bundle Analysis**: 
```bash
npm run build
npx @next/bundle-analyzer
```

## Best Practices

### Component Organization
- Keep components small and focused
- Use TypeScript for type safety
- Implement proper error boundaries
- Use React hooks appropriately

### State Management
- Use React state for local state
- Consider Context API for global state
- Use Server Components where possible

### Performance
- Implement proper loading states
- Use React.memo() for expensive renders
- Optimize images and assets
- Lazy load components when appropriate

### Security
- Never expose sensitive data client-side
- Validate all user inputs
- Use HTTPS in production
- Implement proper CSRF protection

## Scripts

```json
{
  "dev": "next dev",              // Start development server
  "build": "next build",          // Create production build
  "start": "next start",          // Start production server
  "lint": "next lint"             // Run ESLint
}
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository from https://github.com/aymen-igri/JEE_PROJECT_FS.git
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Feel free to open issues for bugs, feature requests, or questions.

## License

This project currently has no license. All rights reserved by the authors.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built with ❤️ for modern healthcare management**
