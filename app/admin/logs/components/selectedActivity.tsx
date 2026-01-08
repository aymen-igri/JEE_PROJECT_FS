"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function SelectedActivity({
  selectedActivity,
  setSelectedActivity,
}:{
  selectedActivity: any,
  setSelectedActivity: any
}) {

  const [loading, setLoading] = useState(false);
  
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedActivity(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[80%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedActivity(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6 mt-8">

          <div className="w-full space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">ID:</span>
              <span className="text-white font-semibold">
                {selectedActivity.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Action:</span>
              <span className="text-white">{selectedActivity.action}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Entity type:</span>
              <span className="text-white">{selectedActivity.entityType}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Entity ID:</span>
              <span className="text-white">{selectedActivity.entityId}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Details:</span>
              <span className="text-white">{selectedActivity.details}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">IP Address:</span>
              <span className="text-white">{selectedActivity.ipAddress}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Times:</span>
              <span className="text-white">{selectedActivity.timestamp}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Status:</span>
              <span className="text-white">{selectedActivity.success}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
