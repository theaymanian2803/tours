import React from "react";

function Stats() {
  return (
    <div className="stats shadow mx-auto w-full mb-4 bg-gray-100 text-gray-700">
      <div className="stat place-items-center">
        <div className="text-orange-900">Downloads</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc text-gray-700">
          From January 1st to February 1st
        </div>
      </div>

      <div className="stat place-items-center  text-gray-700">
        <div className="stat-title text-orange-900">Users</div>
        <div className="stat-value text-gray-700">4,200</div>
        <div className="stat-desc text-gray-700">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center  text-gray-700">
        <div className="stat-title text-orange-900">New Registers</div>
        <div className="stat-value text-gray-700">1,200</div>
        <div className="stat-desc text-gray-700">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}

export default Stats;
