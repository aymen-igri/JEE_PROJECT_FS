"use client";

import { Ysabeau_SC } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import NotificationsPage from "./notification";

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["700", "700"], // Add the weights you need
});

export default function Header() {

  const [openNotif, setOpenNotif] = useState(false);

  return (
    <div>
      <div>
        {openNotif && (
          <NotificationsPage />
        )}
      </div>
      <div className="flex justify-around">
        <Link href={'/admin/dashboard'}
          className="text-3xl font-mono text-white"
          style={{ paddingTop: "50px" }}
        >
          Integrity
        </Link>
        <div className="flex flex-row justify-between items-center gap-10">
          <Link href={'/admin/dashboard'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Home
          </Link>
          <Link href={'/admin/users'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Users
          </Link>
          <Link href={'/admin/offices'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Offices
          </Link>
          <Link href={'/admin/applications'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Applications
          </Link>
          <Link href={'/admin/subscriptions'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Subscribtions
          </Link>
          <Link href={'/admin/logs'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Logs
          </Link>
          <Link href={'/admin/profile'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
