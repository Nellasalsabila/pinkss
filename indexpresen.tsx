"use client";
import React from "react";

export default function ProgressCard() {
  return (
    <div className="bg-amber-100 rounded-2xl shadow-lg p-6 w-72 text-center flex flex-col items-center justify-between">
      <h2 className="text-amber-900 text-lg font-semibold mb-2">Status</h2>

      {/* Progress Circle */}
      <div className="relative w-32 h-32 flex items-center justify-center mb-2">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="#fde68a"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="#f59e0b"
            strokeWidth="10"
            strokeDasharray="339.292"
            strokeDashoffset="90"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div className="text-center">
          <p className="text-amber-800 text-sm font-medium mb-1"></p>
          <p className="text-3xl font-bold text-amber-900">87%</p>
          <p className="text-xs text-amber-700">Attendance</p>
        </div>
      </div>

      {/* Due Date */}
      <p className="text-sm text-amber-800 mt-2">
        Due Date: <span className="font-semibold">4/11/2025</span>
      </p>

      {/* Motivational text */}
      <p className="text-xs text-amber-900 mt-3 italic">
       Keep striving to reach 100% 💪
      </p>
    </div>
  );
}
