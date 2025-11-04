import React from "react";

export default function ProfileHeader() {
  return (
    <div className="bg-rose-100/90 rounded-2xl p-4 border-4 border-rose-300 shadow-lg mb-10 w-full">
      <div className="max-w-8xl mx-auto flex items-center justify-center gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-rose-800 rounded-xl p-4 flex items-center gap-5">
            {/* tanggal */}
            <div className="text-white text-sm pr-10  ">
              <div className="text-xl">Selasa</div>
              <div className="text-sm font-medium">4 November 2025</div>
            </div>

            {/* status */}
            <div className="bg-white rounded-md px-5 py-4 min-w-[580px] shadow-sm flex flex-col">
              <div className="text-xs text-gray-400">Status</div>
              <div className="mt-1 text-lg font-semibold text-gray-600">
                Not Present
              </div>
            </div>

            <div className="h-10 w-px bg-white/30 mx-1 rounded" />

            {/* emoji*/}
            <div className="text-6xl">🧐</div>
            <div className="h-10 w-px bg-white/30 mx-1 rounded" />

            <div className="flex flex-col gap-2 pr-10">
              <LegendItem emoji={"🤩"} label={"On Duty"} />
              <LegendItem emoji={"🤒"} label={"sick"} />
              <LegendItem emoji={"🧐"} label={"Alpha"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendItem({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="bg-white/90 rounded-full w-7 h-7 flex items-center justify-center text-xs shadow-sm">
        {emoji}
      </div>
      <div className="text-white text-xs">{label}</div>
    </div>
  );
}
