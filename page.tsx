import React from "react";

export default function Calendar() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto ">
      {/* bulan */}
      <div className="flex items-center justify-center mb-6">
        <button className="px-3 py-1 bg-gray-200  text-black rounded hover:bg-gray-300">
          &#8592;
        </button>
        <h2 className="text-lg text-amber-900 font-semibold mx-4">
          November 2025
        </h2>
        <button className="px-3 py-1 bg-gray-200 text-black  rounded hover:bg-gr-300">
          &#8594;
        </button>
      </div>

      {/* kalender */}
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-red-800 text-white">
            <th className="py-2">Sun</th>
            <th className="py-2">Mon</th>
            <th className="py-2">Tue</th>
            <th className="py-2">Wed</th>
            <th className="py-2">Thu</th>
            <th className="py-2">Fri</th>
            <th className="py-2">Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 text-red-600">26</td>
            <td className="py-2 bg-gray-100 text-amber-950">27</td>
            <td className="py-2 bg-gray-100 text-amber-950">28</td>
            <td className="py-2 bg-gray-100 text-amber-950">29</td>
            <td className="py-2 bg-gray-100 text-amber-950">30</td>
            <td className="py-2 bg-gray-100 text-amber-950">31</td>
            <td className="py-2 bg-gray-100 text-amber-950">1</td>
          </tr>
          <tr>
            <td className="py-2 text-red-600">2</td>
            <td className="py-2 bg-gray-100 text-amber-950">3</td>
            <td className="py-2 bg-gray-100 text-amber-950">4</td>
            <td className="py-2 bg-gray-100 text-amber-950">5</td>
            <td className="py-2 bg-gray-100 text-amber-950">6</td>
            <td className="py-2 bg-gray-100 text-amber-950">7</td>
            <td className="py-2 bg-gray-100 text-amber-950">8</td>
          </tr>
          <tr>
            <td className="py-2 text-red-600">9</td>
            <td className="py-2 bg-gray-100 text-amber-950">10</td>
            <td className="py-2 bg-gray-100 text-amber-950">11</td>
            <td className="py-2 bg-gray-100 text-amber-950">12</td>
            <td className="py-2 bg-gray-100 text-amber-950">13</td>
            <td className="py-2 bg-gray-100 text-amber-950">14</td>
            <td className="py-2 bg-gray-100 text-amber-950">15</td>
          </tr>
          <tr>
            <td className="py-2 text-red-600">16</td>
            <td className="py-2 bg-gray-100 text-amber-950">17</td>
            <td className="py-2 bg-gray-100 text-amber-950">18</td>
            <td className="py-2 bg-gray-100 text-amber-950">19</td>
            <td className="py-2 bg-gray-100 text-amber-950">20</td>
            <td className="py-2 bg-gray-100 text-amber-950">21</td>
            <td className="py-2 bg-gray-100 text-amber-950">22</td>
          </tr>
          <tr>
            <td className="py-2 text-red-600">23</td>
            <td className="py-2 bg-gray-100 text-amber-950">24</td>
            <td className="py-2 bg-gray-100 text-amber-950">25</td>
            <td className="py-2 bg-gray-100 text-amber-950">26</td>
            <td className="py-2 bg-gray-100 text-amber-950">27</td>
            <td className="py-2 bg-gray-100 text-amber-950">28</td>
            <td className="py-2 bg-gray-100 text-amber-950">29</td>
          </tr>
          <tr>
            <td className="py-2 text-red-600">30</td>
            <td className="py-2 bg-gray-100 text-amber-950">1</td>
            <td className="py-2 bg-gray-100 text-amber-950">2</td>
            <td className="py-2 bg-gray-100 text-amber-950 ">3</td>
            <td className="py-2 bg-gray-100 text-amber-950">4</td>
            <td className="py-2 bg-gray-100 text-amber-950">5</td>
            <td className="py-2 bg-gray-100 text-amber-950">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
