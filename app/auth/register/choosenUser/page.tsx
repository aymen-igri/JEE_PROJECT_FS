"use client";

import Link from "next/link";
import { Wix_Madefor_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function UserChoosen() {
  const router = useRouter();

  useEffect(()=>{
    const data = sessionStorage.getItem("registrationData");
    if (!data) {
        router.push("/auth/register");
    }
  },[]);

  return (
    <div style={{ backgroundColor: "#043045", height: "150vh" }}>
      <div className="mb-6">
        <h2
          className="text-3xl font-mono text-white"
          style={{ paddingTop: "50px", paddingLeft: "50px" }}
        >
          Integrity
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-around">
        <div className="w-full max-w-7xl relative">
          <div
            className="text-center space-y-2 mb-6"
            style={{ marginBottom: "50px" }}
          >
            <h1
              className={`text-7xl font-bold text-white ${wixDisplay.className}`}
            >
              Step 2
            </h1>
            <p className="text-lg text-white/70">
              What type of account you’re creating
            </p>
          </div>
          <div className="flex justify-center items-center text-white">
            <Link href="/auth/register/choosenUser/doctor">
              <div className="bg-[#0C9A83] rounded-3xl p-7 border-white border-2 flex flex-col items-center w-[350px] h-[457px] hover:shadow-2xl hover:shadow-black/30 hover:scale-105 transition-transform duration-300 active:bg-[#118675] active:duration-75">
                <p className="text-4xl font-bold mb-3">Doctor:</p>
                <div>
                  <ul className="list-disc">
                    <li>subscribe and create your virtual office</li>
                    <li>accept others to work with you</li>
                    <li>manage your patients and consultations</li>
                    <li>history over all actions in your virtual office</li>
                    <li>schedule all your appointments</li>
                    <li>schedule all your appointments</li>
                  </ul>
                  <p className="text-lg font-bold mt-5">REQUIRES:</p>
                  <ul className="list-disc">
                    <li>
                      Documents verifying exitance and legitimacy of your
                      medical office
                    </li>
                    <li>
                      Documents including your medical license, medical profile
                      and medical practice history. read{" "}
                      <span className="text-blue-300 inline hover:underline hover:cursor-pointer hover:to-blue-200">
                        terms of service
                      </span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>

            <div className="flex items-center justify-center ml-25 mr-25">
              <div className="flex flex-col items-center gap-8">
                <div
                  style={{
                    width: "2.5px",
                    height: "168px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                />
                <span className="text-white/60 text-xl">or</span>
                <div
                  style={{
                    width: "2.5px",
                    height: "168px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
            <Link href="/auth/register/choosenUser/secretary">
              <div className="bg-[#0C9A83] rounded-3xl p-7 border-white border-2 flex flex-col items-center w-[350px] h-[457px] shadow-md shadow-black/30 hover:shadow-2xl hover:shadow-black/30 hover:scale-105 transition-transform duration-300 active:bg-[#118675]">
                <p className="text-4xl font-bold mb-3">Secretary:</p>
                <div>
                  <ul className="list-disc">
                    <li>
                      be able to apply for work online on any{" "}
                      <span className="font-bold">public</span> medical office.
                    </li>
                    <li>manage over patients for a medical office.</li>
                    <li>
                      delegate patients over to a specific doctor in the office
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
