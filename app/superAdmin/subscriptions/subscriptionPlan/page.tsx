"use client";

import { useState, useEffect } from "react";
import SPsList from "./component/SPsList";
import SelectedSP from "./component/selectedSP";
import { Plus } from "lucide-react";
import AddPlan from "./component/addPlan";

export default function SubscriptionPlanPage() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [subs, setSubs] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<string>("ID");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAddPlan, setShowAddPlan] = useState(false);

  useEffect(() => {
    try {
      const response = fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subscriptionPlan/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setSubs(Array.isArray(data) ? data : []);
        })
        .catch((error) => {
          throw new Error("Error fetching log activities:", error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const filterSubs = subs.filter((sub) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();

    switch (searchType) {
      case "ID":
        return sub.id?.toLowerCase().includes(query);
      case "Name":
        return sub.name?.toLowerCase().includes(query);
      case "Price":
        return sub.price?.toString().includes(query);
      case "Status":
        return sub.status?.toLowerCase().includes(query);
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
              <option value="Name">Name</option>
              <option value="Price">Price(MAD)</option>
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
        <div className="flex flex-row justify-end items-center w-full">
          <button
            onClick={() => setShowAddPlan(true)}
            className="bg-[#4D0000] p-2 rounded-full hover:bg-[#7F0000] transition-colors"
          >
            <Plus className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex gap-8 flex-1 ml-19">
        <div className="w-74">
          <p className="text-white font-semibold">ID</p>
        </div>
        <div className="w-57">
          <p className="text-white font-semibold">Name</p>
        </div>
        <div className="w-42">
          <p className="text-white font-semibold">Price(MAD)</p>
        </div>
        <div className="w-53">
          <p className="text-white font-semibold">Status</p>
        </div>
      </div>
      <SPsList setSelectedSP={setSelectedSub} SPs={filterSubs} />
      {selectedSub && (
        <SelectedSP selectedSP={selectedSub} setSelectedSP={setSelectedSub} />
      )}
      {showAddPlan && <AddPlan setShowAddPlan={setShowAddPlan} />}
    </div>
  );
}
