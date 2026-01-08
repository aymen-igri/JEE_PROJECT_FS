"use client";

import { Ysabeau_SC } from "next/font/google";
import Link from "next/link";

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["700", "700"], // Add the weights you need
});

export default function Header() {

  return (
    <div>
      <div className="flex justify-start items-center ml-12">
        <div className="flex flex-row justify-between items-center gap-10">
          <Link href={'/superAdmin/subscriptions'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Subscription list
          </Link>
          <Link href={'/superAdmin/subscriptions/subscriptionPlan'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Subscription plans
            </Link>
            <Link href={'/superAdmin/subscriptions/payment'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Payments
          </Link>
          <Link href={'/superAdmin/subscriptions/invoice'}
            className={"text-xl text-white" + " " + ysabeauSC.className}
            style={{ paddingTop: "50px" }}
          >
            Invoices
          </Link>
        </div>
      </div>
    </div>
  );
}
