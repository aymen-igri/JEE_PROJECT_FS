"use client";

import { Wix_Madefor_Display } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Process() {

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
      <div className="text-center space-y-2 mt-35" style={{ marginBottom: "50px" }}>
        <h1 className={`text-7xl font-bold text-white ${wixDisplay.className}`}>
          Your application is still in process mode
        </h1>
        <p className="text-lg text-white/70 mt-5">
          Please wait while we process your application.
        </p>
      </div>
      <Link href="/welcome" className="flex justify-center mr-40">
        <button
          className={`flex items-center gap-3 text-white hover:opacity-80 p-3 transition-opacity group ${wixDisplay.className} `}
          style={{
            backgroundColor: "#015877",
            borderRadius: "43px",
            marginLeft: "150px",
          }}
        >
          <span className="text-lg">Continue to the welcome page</span>
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
        </button>
      </Link>
    </div>
  );
}
