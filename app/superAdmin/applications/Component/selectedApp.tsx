"use client";

import { X } from "lucide-react";

export default function SelectedApp({
  selectedApp,
  setSelectedApp,
}:{
  selectedApp: any,
  setSelectedApp: any
}) {
  
  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-10 flex items-center justify-center z-50 text-white"
      onClick={() => setSelectedApp(null)}
    >
      <div
        className="bg-[#4d0000] rounded-lg p-8 max-w-2xl w-full h-[80%] mx-4 relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedApp(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center gap-6 mt-8">

          <div className="w-full space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">ID:</span>
              <span className="text-white font-semibold">
                {selectedApp.doctorApplication.id}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Full Name:</span>
              <span className="text-white">{selectedApp.doctorApplication.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Email:</span>
              <span className="text-white">{selectedApp.doctorApplication.email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">CIN:</span>
              <span className="text-white">{selectedApp.doctorApplication.CIN}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Phone:</span>
              <span className="text-white">{selectedApp.doctorApplication.phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Specialty:</span>
              <span className="text-white">{selectedApp.doctorApplication.specialty}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">License Number:</span>
              <span className="text-white">{selectedApp.doctorApplication.licenseNumber}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Status:</span>
              <span className="text-white">{selectedApp.doctorApplication.status}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-200">Application Date:</span>
              <span className="text-white">{selectedApp.doctorApplication.applicationDate}</span>
            </div>
            <div className="mt-6 pt-4">
              <h3 className="text-lg font-semibold text-white mb-4">Application Documents</h3>
              
              {/* Diploma Document */}
              <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
                <span className="text-gray-200">Diploma Document:</span>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-400">
                    {selectedApp.applicationFiles?.diplomaDocument?.filename || 'N/A'}
                  </span>
                  {selectedApp.applicationFiles?.diplomaDocument?.filename && (
                    <a
                      href={`http://localhost:8080/api/files/download?path=${selectedApp.applicationFiles.diplomaDocument.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>

              {/* License Document */}
              <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
                <span className="text-gray-200">License Document:</span>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-400">
                    {selectedApp.applicationFiles?.licenseDocument?.filename || 'N/A'}
                  </span>
                  {selectedApp.applicationFiles?.licenseDocument?.filename && (
                    <a
                      href={`http://localhost:8080/api/files/download?path=${selectedApp.applicationFiles.licenseDocument.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>

              {/* CV Document */}
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-200">CV Document:</span>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-400">
                    {selectedApp.applicationFiles?.cvDocument?.filename || 'N/A'}
                  </span>
                  {selectedApp.applicationFiles?.cvDocument?.filename && (
                    <a
                      href={`http://localhost:8080/api/files/download?path=${selectedApp.applicationFiles.cvDocument.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
