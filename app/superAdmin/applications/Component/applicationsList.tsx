"use client"

import { User } from "lucide-react";

export default function ApplicationList({setSelectedApp, applications}: {setSelectedApp: any, applications: any[]}) {
  return(
    <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application.doctorApplication.id}
            onClick={() => setSelectedApp(application)}
            className="bg-[#4d0000] rounded-lg p-6 flex items-center justify-between hover:bg-[#7F0000] transition-colors"
          >
            {/* User Icon */}
            <div className="flex items-center gap-6 flex-1">
              <div className="flex gap-8 flex-1">
                <div className="w-5">
                  <p className="text-white font-semibold">
                    <User />
                  </p>
                </div>
                <div className="w-45">
                  <p className="text-white font-semibold">{application.doctorApplication.id.substring(0, 8)}...</p>
                </div>
                <div className="w-31">
                  <p className="text-white truncate">{application.doctorApplication.fullName ? application.doctorApplication.fullName : "N/A"}</p>
                </div>
                <div className="w-35">
                  <p className="text-white truncate">{application.doctorApplication.CIN}</p>
                </div>
                <div className="w-44">
                  <p className="text-white">{application.doctorApplication.phone}</p>
                </div>
                <div className="w-44">
                  <p className="text-white truncate">{application.doctorApplication.specialty}</p>
                </div>
                <div className="w-43">
                  <p className="text-white">{application.doctorApplication.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}