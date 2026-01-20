"use client"

import { User } from "lucide-react";

export default function OfficesList({setSelectedOffice, offices}: {setSelectedOffice: any, offices: any[]}) {
  return(
    <div className="space-y-4">
        {offices.map((office) => (
          <div
            key={office.id}
            onClick={() => setSelectedOffice(office)}
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
                <div className="w-24">
                  <p className="text-white font-semibold">{office.id.substring(0, 8)}...</p>
                </div>
                <div className="w-30">
                  <p className="text-white">{office.name ? office.name.substring(0, 10) : "N/A"}...</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{office.phone}</p>
                </div>
                <div className="w-32">
                  <p className="text-white">{office.status}</p>
                </div>
                <div className="w-72">
                  <p className="text-white">{office.createdBy ? office.createdBy.substring(0, 20) : "N/A"}...</p>
                </div>
                <div className="w-24">
                  <p className="text-white">{office.createdAt ? office.createdAt.substring(0, 10) : "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}