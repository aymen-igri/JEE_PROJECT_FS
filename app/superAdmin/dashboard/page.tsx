import { Ysabeau_SC } from "next/font/google";
import DoctorAdministration from "./components/doctorAdministration";
import StyleBack from "./components/styleback";
import Actions from "./components/actions";
import SearchDoctor from "./components/search";
import SecretaryAdministration from "./components/secretaryAdministration";

const ysabeauSC = Ysabeau_SC({
  subsets: ["latin"],
  weight: ["400", "700"], // Add the weights you need
});

export default function SuperAdminDashboardPage() {
  return (
    <div>
      <StyleBack />
      <div className="flex flex-col justify-center items-center relative mt-20 z-10">
        <h2 className={"text-5xl text-white" + " " + ysabeauSC.className}>
          INTEGRITY ADMINSTRATION
        </h2>
        <p
          className={
            "text-3xl text-white w-70 text-center mt-45" +
            " " +
            ysabeauSC.className
          }
        >
          Because we can all live with some Integrity
        </p>
      </div>
      <div className="mt-60">
        <DoctorAdministration />
      </div>
      <div className="flex flex-row justify-around items-center mt-15">
        <Actions />
        <SearchDoctor />
      </div>
      <div className="mt-30">
        <SecretaryAdministration />
      </div>
      <div className="flex flex-row justify-around items-center mt-15">
        {/* should be replaced */}
        <Actions />
        <SearchDoctor />
      </div>
    </div>
  );
}
