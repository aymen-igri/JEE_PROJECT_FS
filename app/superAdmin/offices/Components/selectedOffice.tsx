"use client";

import { User } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

export default function SelectedOffice({
  selectedOffice,
  setSelectedOffice,
}: {
  selectedOffice: any;
  setSelectedOffice: any;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedOffice(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[90%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedOffice(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">
                {selectedOffice.name}
              </h2>
            </div>
          </div>

          <div className="w-full space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">ID:</span>
              <span className="text-white font-semibold">
                {selectedOffice.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Specility:</span>
              <span className="text-white">{selectedOffice.specialty}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Phone:</span>
              <span className="text-white">{selectedOffice.phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Default consultation price:</span>
              <span className="text-white">
                {selectedOffice.defaultConsultPrice}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Founder:</span>
              <span className="text-white">{selectedOffice.createdBy}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Creation Date:</span>
              <span className="text-white">{selectedOffice.createdAt}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Status:</span>
              <span className="text-white">{selectedOffice.status}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Description:</span>
              <span className="text-white">{selectedOffice.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
