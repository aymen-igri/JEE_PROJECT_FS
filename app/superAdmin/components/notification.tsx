"use client"

import { Bell } from "lucide-react"

export default function NotificationsPage() {
    return (
        <div
            className="absolute top-25 right-10 bg-black text-white border border-white rounded-lg shadow-lg p-4 w-80 z-50"
          >
            <ul>
              <li className="border-b border-white py-2">
                Notification 1
              </li>
              <li className="border-b border-white py-2">
                Notification 2
              </li>
              <li className="py-2">Notification 3</li>
            </ul>
        </div>
    )
}