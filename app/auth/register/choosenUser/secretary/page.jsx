"use client";

import { useState } from "react";
import { Wix_Madefor_Display } from "next/font/google";
import { useRouter } from "next/navigation";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SecretarySignUp() {
  const [fullName, setFullName] = useState("");
  const [CIN, setCIN] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#043045]">
      <div className="mb-6">
        <h2
          className="text-3xl font-mono text-white"
          style={{ paddingTop: "50px", paddingLeft: "50px" }}
        >
          Integrity
        </h2>
      </div>
      <div className="text-center space-y-2" style={{ marginBottom: "50px" }}>
        <h1 className={`text-7xl font-bold text-white ${wixDisplay.className}`}>
          Almost there
        </h1>
        <p className="text-lg text-white/70">Fill out this forum</p>
      </div>
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div className="flex items-center justify-center w-full">
        <form className="w-full max-w-3xl space-y-15">
          <div className="space-y-8">
            <div className="flex flex-row space-x-4">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 w-full focus:outline-none focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                placeholder={fullName ? "" : "Full Name"}
                required
                disabled={loading}
              />
              <input
                type="text"
                value={CIN}
                onChange={(e) => setCIN(e.target.value)}
                className={`bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 w-full focus:outline-none focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                placeholder={CIN ? "" : "CIN"}
                required
                disabled={loading}
              />
            </div>
            <div className="flex flex-row space-x-4">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 focus:outline-none w-[25%] focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
              >
                <option value="HOMME">Male</option>
                <option value="FEMME">Female</option>
              </select>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className={`bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 focus:outline-none w-[25%] focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                placeholder={dateOfBirth ? "" : "Date of Birth"}
                required
                disabled={loading}
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 focus:outline-none w-full focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                placeholder={phone ? "" : "Phone"}
                required
                disabled={loading}
              />
            </div>
            <div className="">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`bg-transparent border-b-2 border-blue-500 text-white px-0 py-3 focus:outline-none w-full focus:border-blue-400 transition-colors placeholder:text-white/60 ${wixDisplay.className}`}
                placeholder={address ? "" : "Address"}
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end mb-5">
            <button
              type="submit"
              className={`flex items-center gap-3 text-white hover:opacity-80 transition-opacity group ${
                wixDisplay.className
              } px-5 py-3 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{
                backgroundColor: "#015877",
                borderRadius: "43px",
                marginLeft: "150px",
              }}
              disabled={loading}
            >
              <span className="text-lg">
                {loading ? "Loading..." : "Continue"}
              </span>
              {!loading && (
                <div className="w-14 h-4 group-hover:translate-x-1 transition-transform">
                  <svg
                    width="56"
                    height="16"
                    viewBox="0 0 56 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      y1="8"
                      x2="55"
                      y2="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <line
                      x1="54.5"
                      y1="8"
                      x2="47"
                      y2="2"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <line
                      x1="54.5"
                      y1="8"
                      x2="47"
                      y2="14"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
