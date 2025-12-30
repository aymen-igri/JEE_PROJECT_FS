import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create new account",
    description: "Create a new account, submit an application if you are a doctor.",
};

export default function RegisterLayout({children} : {children: React.ReactNode}) {
    return <>{children}</>
}