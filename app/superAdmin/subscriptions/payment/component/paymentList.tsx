"use client"

import { User } from "lucide-react";

export default function PaymentList({setSelectedPayment, payments}: {setSelectedPayment: any, payments: any[]}) {
  return(
    <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            onClick={() => setSelectedPayment(payment)}
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
                  <p className="text-white font-semibold">{payment.id.substring(0, 23)}...</p>
                </div>
                <div className="w-44">
                  <p className="text-white">{payment.invoiceNumber}...</p>
                </div>
                <div className="w-64">
                  <p className="text-white">{payment.paymentId}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{payment.endDate}</p>
                </div>
                <div className="w-42">
                  <p className="text-white">{payment.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}