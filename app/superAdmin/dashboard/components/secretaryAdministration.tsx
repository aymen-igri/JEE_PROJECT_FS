"use client"

import { Ysabeau_SC } from "next/font/google";
import { SecretaryChart } from "./secretaryChar";


const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export default function SecretaryAdministration() {
    const data = {
        denied: 10,
        accepted: 25,
        pending: 10
    }

    return(
        <div className="text-white">
            <h2 className={"text-4xl text-white ml-20" + " " + ysabeauSC.className}>
                SECRETARY ADMINISTRATION 
            </h2>
            <div className={"flex flex-row justify-around items-start mt-10 " + ysabeauSC.className}>
                <div>
                    <h4 className="text-2xl mb-4">
                        STATs:
                    </h4>
                    <h6>TOTAL SECRETARIES: 45</h6>
                    <h6>AFFECTED SECRETARIES: 13</h6>
                    <h6>UNAFFECTED SECRETARIES: 5</h6>
                    <h6>RATIO: 67.5%</h6>
                </div>
                <div>
                    <h4 className="text-2xl mb-4">
                        SECRETARY CHART:
                    </h4>
                    <SecretaryChart denied={data.denied} accepted={data.accepted} pending={data.pending} />
                </div>
            </div>
        </div>
    )
}