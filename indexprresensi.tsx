"use client";
export default function AttendanceCard() {
  return (
    <div className="bg-rose-100/90 text-red-950 rounded-lg shadow-lg p-10 w-80 text-center">
      <h2 className="text-lg font-semibold mb-2">Present Percentage</h2>
      <p className="text-3xl font-bold mb-4">90%</p>

      {/* status  */}
      <div className="space-y-2">
        <div className="flex justify-between items-center bg-white text-red-900 rounded-md px-3 py-2">
          <span className="font-semibold">On Duty</span>
          <span className="font-bold text-lg">0</span>
        </div>

        <div className="flex justify-between items-center bg-white text-red-600 rounded-md px-3 py-2">
          <span className="font-semibold">Sick</span>
          <span className="font-bold text-lg">2</span>
        </div>

        <div className="flex justify-between items-center bg-white text-red-900 rounded-md px-3 py-2">
          <span className="font-semibold">Alpha</span>
          <span className="font-bold text-lg">0</span>
        </div>

        <div className="flex justify-between items-center bg-white text-blue-900 rounded-md px-3 py-2">
          <span className="font-semibold">Permission</span>
          <span className="font-bold text-lg">2</span>
        </div>
      </div>

      {/* footer  */}
      <p className="text-xs mt-4 italic">
        If there are invalid data, please report them to the admin
      </p>
    </div>
  );
}
