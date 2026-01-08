"use client"

import { User } from "lucide-react";

export default function SubsList({setSelectedSub, subs}: {setSelectedSub: any, subs: any[]}) {
  return(
    <div className="space-y-4">
        {subs.map((sub) => (
          <div
            key={sub.id}
            onClick={() => setSelectedSub(sub)}
            className="bg-[#4d0000] rounded-lg p-6 flex items-center justify-between hover:bg-[#7F0000] transition-colors"
          >
            <div className="flex items-center gap-6 flex-1">
              <div className="flex gap-8 flex-1">
                <div className="w-5">
                  <p className="text-white font-semibold">
                    <User />
                  </p>
                </div>
                <div className="w-74">
                  <p className="text-white font-semibold">{sub.id.substring(0, 23)}...</p>
                </div>
                <div className="w-36">
                  <p className="text-white">{sub.subscriptionPlan.name}...</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{sub.startDate}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{sub.endDate}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{sub.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}