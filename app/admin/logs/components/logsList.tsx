"use client"

import { User } from "lucide-react";

export default function LogsList({setSelectedActivity, activities}: {setSelectedActivity: any, activities: any[]}) {
  return(
    <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            onClick={() => setSelectedActivity(activity)}
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
                <div className="w-54">
                  <p className="text-white font-semibold">{activity.id.substring(0, 23)}...</p>
                </div>
                <div className="w-96">
                  <p className="text-white">{activity.action.substring(0, 35)}...</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{activity.entityType}</p>
                </div>
                <div className="w-32">
                  <p className="text-white">{activity.timestamp.substring(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}