import { Metadata } from "next";
import { Ysabeau_SC } from "next/font/google";
import React from "react";
import Header from "./component/header";


export const metadata: Metadata = {
  title: "Super Admin",
  description:
    "Create a new account, submit an application if you are a doctor.",
};

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["700", "700"], // Add the weights you need
});

export default function superAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  var openNotif : boolean = false;

  return (
    <div className="bg-black min-h-screen pb-10">
      <Header />
      <div>{children}</div>
    </div>
  );
}
