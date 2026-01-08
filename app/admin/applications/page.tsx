"use client";

import { useState, useEffect } from "react";
import SelectedApp from "./Component/selectedApp";
import ApplicationList from "./Component/applicationsList";



export default function ApplicationsPage() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [applications, setApplications] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<string>("ID");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    try{
      const response = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctorApp/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        throw new Error("Error fetching log activities:", error);
      });
    }catch(error){
      console.error(error);
    }  
  }, []);

  const filterApplications = applications.filter((application) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();

    switch (searchType) {
      case "ID":
        return application.id?.toLowerCase().includes(query);
      case "Full Name":
        return application.fullName?.toLowerCase().includes(query);
      case "Full Name":
        return application.fullName?.toLowerCase().includes(query);
      case "CIN":
        return application.CIN?.toLowerCase().includes(query);
      case "Phone":
        return application.phone?.toLowerCase().includes(query);
      case "Specialty":
        return application.specialty?.toLowerCase().includes(query);
      case "Status":
        return application.status?.toLowerCase().includes(query);
      default:
        return true;
    }
  });

  return (
    <div className="w-full px-6 py-8 mt-3">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex-1 max-w-lg">
          <div className="flex gap-2">
            <select
              id="searchType"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="h-10 px-4 py-2 bg-[#4D0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#7F0000] focus:border-transparent cursor-pointer hover:bg-[#7F0000] transition-colors"
            >
              <option value="ID">ID</option>
              <option value="Full Name">Full Name</option>
              <option value="CIN">CIN</option>
              <option value="Phone">Phone</option>
              <option value="Specialty">Specialty</option>
              <option value="Status">Status</option>
            </select>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search by ${searchType}...`}
              className="h-10 flex-1 px-4 py-2 bg-[#4D0000] text-white rounded-lg border border-[#3d0000] focus:outline-none focus:ring-2 focus:ring-[#7F0000] focus:border-transparent placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-1 ml-19">
        <div className="w-54">
          <p className="text-white font-semibold">ID</p>
        </div>
        <div className="w-36">
          <p className="text-white font-semibold">Full Name</p>
        </div>
        <div className="w-42">
          <p className="text-white font-semibold">CIN</p>
        </div>
        <div className="w-52">
          <p className="text-white font-semibold">Phone</p>
        </div>
        <div className="w-52">
          <p className="text-white font-semibold">Specialty</p>
        </div>
        <div className="w-52">
          <p className="text-white font-semibold">Status</p>
        </div>
      </div>
      <ApplicationList setSelectedApp={setSelectedApplication} applications={filterApplications} />
      {selectedApplication && (
        <SelectedApp selectedApp={selectedApplication} setSelectedApp={setSelectedApplication} />
      )}
    </div>
  );
}
