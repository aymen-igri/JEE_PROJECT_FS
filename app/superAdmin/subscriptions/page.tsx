"use client";

import { useState, useEffect } from "react";
import SelectedSub from "./component/selectedSub";
import SubsList from "./component/subsList";



export default function SubscriptionPage() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [subs, setSubs] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<string>("ID");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    try{
      const response = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subscriptions/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setSubs(data);
      })
      .catch((error) => {
        throw new Error("Error fetching log activities:", error);
      });
    }catch(error){
      console.error(error);
    }  
  }, []);

  const filterSubs = subs.filter((sub) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();

    switch (searchType) {
      case "ID":
        return sub.id?.toLowerCase().includes(query);
      case "Action":
        return sub.action?.toLowerCase().includes(query);
      case "Entity type":
        return sub.entityType?.toString().includes(query);
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
              <option value="Action">Action</option>
              <option value="Entity type">Entity type</option>
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
        <div className="w-74">
          <p className="text-white font-semibold">ID</p>
        </div>
        <div className="w-36">
          <p className="text-white font-semibold">Subscription plan</p>
        </div>
        <div className="w-42">
          <p className="text-white font-semibold">Start date</p>
        </div>
        <div className="w-42">
          <p className="text-white font-semibold">End date</p>
        </div>
        <div className="w-32">
          <p className="text-white font-semibold">Status</p>
        </div>
      </div>
      <SubsList setSelectedSub={setSelectedSub} subs={filterSubs} />
      {selectedSub && (
        <SelectedSub selectedSub={selectedSub} setSelectedSub={setSelectedSub} />
      )}
    </div>
  );
}
