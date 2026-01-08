"use client"

import { User } from "lucide-react";

export default function SPsList({setSelectedSP, SPs}: {setSelectedSP: any, SPs: any[]}) {
  return(
    <div className="space-y-4">
        {SPs.map((SP) => (
          <div
            key={SP.id}
            onClick={() => setSelectedSP(SP)}
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
                <div className="w-74">
                  <p className="text-white font-semibold">{SP.id.substring(0, 23)}...</p>
                </div>
                <div className="w-57">
                  <p className="text-white">{SP.name}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{SP.price}</p>
                </div>
                <div className="w-53">
                  <p className="text-white">{SP.isActive ? "Active" : "Inactive"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}