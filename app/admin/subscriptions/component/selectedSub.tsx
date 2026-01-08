"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function SelectedSub({
  selectedSub,
  setSelectedSub,
}:{
  selectedSub: any,
  setSelectedSub: any
}) {

  const [loading, setLoading] = useState(false);
  
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedSub(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[80%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedSub(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6 mt-8">

          <div className="w-full space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">ID:</span>
              <span className="text-white font-semibold">
                {selectedSub.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Cabinet ID:</span>
              <span className="text-white">{selectedSub.cabinet.id}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Subscription plan:</span>
              <span className="text-white">{selectedSub.subscriptionPlan.name}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Start date:</span>
              <span className="text-white">{selectedSub.startDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">End date:</span>
              <span className="text-white">{selectedSub.endDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Status:</span>
              <span className="text-white">{selectedSub.status}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Auto Renew:</span>
              <span className="text-white">{selectedSub.autoRenew}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Last Payment Date:</span>
              <span className="text-white">{selectedSub.lastPaymentDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Next Payment Date:</span>
              <span className="text-white">{selectedSub.nextPaymentDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedSub.gracePeriodEndDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedSub.cancelledAt}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedSub.cancelledBy}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedSub.createdAt}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedSub.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
