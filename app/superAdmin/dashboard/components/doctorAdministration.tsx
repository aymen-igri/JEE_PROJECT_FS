"use client"

import { Ysabeau_SC } from "next/font/google";
import { DoctorChart } from "./doctorChart";

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export default function DoctorAdministration() {
    const data = {
        denied: 10,
        accepted: 25,
        pending: 10
    }

    return(
        <div className="text-white">
            <h2 className={"text-4xl text-white ml-20" + " " + ysabeauSC.className}>
                DOCTOR ADMINISTRATION 
            </h2>
            <div className={"flex flex-row justify-around items-start mt-10 " + ysabeauSC.className}>
                <div>
                    <h4 className="text-2xl mb-4">
                        STATs:
                    </h4>
                    <h6>TOTAL DOCTORS: 45</h6>
                    <h6>ACTIVE DOCTORS: 13</h6>
                    <h6>INACTIVE DOCTORS: 5</h6>
                    <h6>INACTIVE DOCTORS: 67.5%</h6>
                </div>
                <div>
                    <h4 className="text-2xl mb-4">
                        DOCTOR CHART:
                    </h4>
                    <DoctorChart denied={data.denied} accepted={data.accepted} pending={data.pending} />
                </div>
                <div className="bg-[#910707] p-3 rounded-2xl">
                    <h4 className="text-2xl mb-4">
                        Quick Access
                    </h4>
                    <h6>Doctor administration</h6>
                    <h6>Secretary adminstration</h6>
                    <h6>Admins adminstration</h6>
                    <h6>Subscription monitor</h6>
                    <h6>Logs access</h6>
                </div>
            </div>
        </div>
    )
}