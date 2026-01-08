"use client";

import { useState, useEffect } from "react";
import InvoiceList from "./component/invoiceList";
import SelectedInvoice from "./component/selectedInvoice";



export default function InvoicePage() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<string>("ID");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    try{
      const response = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/invoice/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setInvoices(data);
      })
      .catch((error) => {
        throw new Error("Error fetching log activities:", error);
      });
    }catch(error){
      console.error(error);
    }  
  }, []);

  const filterInvoices = invoices.filter((invoice) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();

    switch (searchType) {
      case "ID":
        return invoice.id?.toLowerCase().includes(query);
      case "Action":
        return invoice.action?.toLowerCase().includes(query);
      case "Entity type":
        return invoice.entityType?.toString().includes(query);
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
        <div className="w-64">
          <p className="text-white font-semibold">ID</p>
        </div>
        <div className="w-44">
          <p className="text-white font-semibold">Invoice number</p>
        </div>
        <div className="w-64">
          <p className="text-white font-semibold">Payment ID</p>
        </div>
        <div className="w-42">
          <p className="text-white font-semibold">Status</p>
        </div>
      </div>
      <InvoiceList setSelectedInvoice={setSelectedInvoice} invoices={filterInvoices} />
      {selectedInvoice && (
        <SelectedInvoice selectedInvoice={selectedInvoice} setSelectedInvoice={setSelectedInvoice} />
      )}
    </div>
  );
}
