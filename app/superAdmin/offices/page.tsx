"use client";

import { useState, useEffect } from "react";
import OfficesList from "./Components/officesList";
import SelectedOffice from "./Components/selectedOffice";


export default function UsersPage() {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [offices, setOffices] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<string>("name");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    try{
      const response = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/office/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array, or extract the array from the response
        setOffices(Array.isArray(data) ? data : data.offices || data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setOffices([]); // Set empty array on error
      });
    }catch(error){
      console.error(error);
      setOffices([]); // Set empty array on error
    }  
  }, []);

  const filterOffices = offices.filter((office) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();

    switch (searchType) {
      case "name":
        return office.name?.toLowerCase().includes(query);
      case "status":
        return office.status?.toLowerCase().includes(query);
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
              <option value="name">Name</option>
              <option value="status">Status</option>
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
        <div className="w-24">
          <p className="text-white font-semibold">ID</p>
        </div>
        <div className="w-30">
          <p className="text-white font-semibold">Name</p>
        </div>
        <div className="w-42">
          <p className="text-white font-semibold">Phone</p>
        </div>
        <div className="w-32">
          <p className="text-white font-semibold">Status</p>
        </div>
        <div className="w-72">
          <p className="text-white font-semibold">Founder</p>
        </div>
        <div className="w-24">
          <p className="text-white font-semibold">Creation date</p>
        </div>
      </div>
      <OfficesList setSelectedOffice={setSelectedOffice} offices={filterOffices} />
      {selectedOffice && (
        <SelectedOffice selectedOffice={selectedOffice} setSelectedOffice={setSelectedOffice} />
      )}
    </div>
  );
}
