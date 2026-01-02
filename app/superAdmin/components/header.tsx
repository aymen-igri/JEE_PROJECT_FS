"use client";

import { Ysabeau_SC } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Bell } from "lucide-react";
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
        <Link href={'/superAdmin/dashboard'}
          className="text-3xl font-mono text-white"
          style={{ paddingTop: "50px" }}
        >
          Integrity
        </Link>
        <div className="flex flex-row justify-between items-center gap-10">
          <Link href={'/superAdmin/dashboard'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Home
          </Link>
          <Link href={'/superAdmin/users'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Users
          </Link>
          <Link href={'/superAdmin/offices'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Offices
          </Link>
          <Link href={'/superAdmin/applications'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Applications
          </Link>
          <Link href={'/superAdmin/subscribtions'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Subscribtions
          </Link>
          <Link href={'/superAdmin/profile'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Profile
          </Link>
          <Link href={'/superAdmin/logs'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Logs
          </Link>
        </div>
        <button onClick={() => setOpenNotif(!openNotif)}>
            <Bell color="white" size={30} style={{ marginTop: "50px" }} />
        </button>
      </div>
    </div>
  );
}
