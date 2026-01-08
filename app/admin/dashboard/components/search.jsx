import { Search } from "lucide-react";
import { User } from "lucide-react";

export default function SearchDoctor() {
  return (
    <div className="text-white w-60">
      <div className="flex flex-row justify-between items-center">
        <button>
          <Search />
        </button>
        <input
          type="text"
          placeholder="Insert email or username"
          className="bg-[#FFFFFF] rounded-2xl"
        />
      </div>
      <div className="flex flex-row justify-start items-center mt-5">
        <User className="w-20 h-20"/>
        <div className="flex flex-col justify-center items-start ml-4">
          <h3>full name</h3>
          <p>email</p>
          <p>phone</p>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center">
        <button className=" rounded-2xl bg-white text-[#910707] px-4 py-2">
          check
        </button>
      </div>
    </div>
  );
}
