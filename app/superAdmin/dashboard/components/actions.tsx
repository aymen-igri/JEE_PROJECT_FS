export default function Actions() {
  return (
    <div className="flex flex-col gep-4 justify-around items-center text-white text-center">
      <div className="flex flex-row justify-around items-center">
        <div className="w-30 h-30 bg-[#910707] mr-1 mb-2 flex justify-center items-center rounded-2xl">
            <p>
                DOCTOR ACCOUNTS
            </p>
        </div>
        <div className="w-30 h-30 bg-[#910707] mr-1 mb-2 flex justify-center items-center rounded-2xl">
            <p>
                DOCTOR APPLICATIONS
            </p>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center">
        <div className="w-30 h-30 bg-[#910707] mr-1 mb-2 flex justify-center items-center rounded-2xl">   
            <p>
                PATIENT ACCOUNTS
            </p>
        </div>    
        <div className="w-30 h-30 bg-[#910707] mr-1 mb-2 flex justify-center items-center rounded-2xl">
            <p>
                OFFICES
            </p>
        </div>
      </div>
    </div>
  );
}
