"use client"

import { User } from "lucide-react";

export default function InvoiceList({setSelectedInvoice, invoices}: {setSelectedInvoice: any, invoices: any[]}) {
  return(
    <div className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            onClick={() => setSelectedInvoice(invoice)}
            className="bg-[#4d0000] rounded-lg p-6 flex items-center justify-between hover:bg-[#7F0000] transition-colors"
          >
            {/* User Icon */}
            <div className="flex items-center gap-6 flex-1">
              <div className="flex gap-8 flex-1">
                <div className="w-5">
                  <p className="text-white font-semibold">
                    <User />
                  </p>
                </div>
                <div className="w-74">
                  <p className="text-white font-semibold">{invoice.id.substring(0, 23)}...</p>
                </div>
                <div className="w-44">
                  <p className="text-white">{invoice.invoiceNumber}...</p>
                </div>
                <div className="w-64">
                  <p className="text-white">{invoice.paymentId}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{invoice.endDate}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{invoice.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}