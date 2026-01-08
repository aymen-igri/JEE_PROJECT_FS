"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function SelectedInvoice({
  selectedInvoice,
  setSelectedInvoice,
}:{
  selectedInvoice: any,
  setSelectedInvoice: any
}) {

  const [loading, setLoading] = useState(false);
  
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedInvoice(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[80%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedInvoice(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6 mt-8">

          <div className="w-full space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">ID:</span>
              <span className="text-white font-semibold">
                {selectedInvoice.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Cabinet ID:</span>
              <span className="text-white">{selectedInvoice.cabinet.id}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Subscription plan:</span>
              <span className="text-white">{selectedInvoice.subscriptionPlan.name}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Start date:</span>
              <span className="text-white">{selectedInvoice.startDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">End date:</span>
              <span className="text-white">{selectedInvoice.endDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Status:</span>
              <span className="text-white">{selectedInvoice.status}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Auto Renew:</span>
              <span className="text-white">{selectedInvoice.autoRenew}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Last Payment Date:</span>
              <span className="text-white">{selectedInvoice.lastPaymentDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Next Payment Date:</span>
              <span className="text-white">{selectedInvoice.nextPaymentDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedInvoice.gracePeriodEndDate}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedInvoice.cancelledAt}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedInvoice.cancelledBy}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedInvoice.createdAt}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Grace Period End Date:</span>
              <span className="text-white">{selectedInvoice.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
