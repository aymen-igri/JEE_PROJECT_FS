export default function StyleBack() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="flex flex-col gap-20 p-10 -translate-y-120 -translate-x-70 rotate-45">
        <hr className="-translate-x-[-170px] h-5 bg-radial-white blur-xl border-4 border-[#FBC0C0] rounded-t-full" />
        <hr className="-translate-x-[-60px] h-10 bg-radial-white blur-xl border-6 border-[#FBC0C0] rounded-full" />
        <hr className="-translate-x-[120px] h-20 bg-radial-white blur-2xl border-20 border-[#C5AAAA] rounded-full" />
        <hr className="-translate-x-[240px] h-10 bg-radial-white blur-xl border-6 border-[#FBC0C0] rounded-full" />
        <hr className="-translate-x-[330px] h-5 bg-radial-white blur-xl border-4 border-[#FBC0C0] rounded-full" />
      </div>

      <div className="p-[2px] absolute h-260 w-260 rounded-full bg-gradient-to-b from-[#7F0000] via-[#000000] to-[#000000] blur-2xl border-4 flex items-center justify-center -translate-x-[-105px] -translate-y-85 " />
      <div className="h-250 w-250 rounded-full bg-gradient-to-b from-[#4d0000] via-black to-black  flex items-center justify-center -translate-x-[-125px] -translate-y-85">
        <div className="h-220 w-220 rounded-full bg-black flex"></div>
      </div>
    </div>
  );
}
