"use client";
import React, { useState } from "react";

const Predictor = () => {
  const [score, setScore] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score > 426 || score < 0) {
      alert("Please enter a valid BITSAT score");
    } else {
      const filteredData = sortedData.filter((item) => item[2] <= score);
      setResults(filteredData);
    }
  };

  const data = [
    ["Pilani", "B.E. Chemical", 224],
    ["Pilani", "B.E. Civil", 213],
    ["Pilani", "B.E. Electrical & Electronics", 272],
    ["Pilani", "B.E. Mechanical", 244],
    ["Pilani", "B.E. Computer Science", 331],
    ["Pilani", "B.E. Electronics & Instrumentation", 266],
    ["Pilani", "B.E. Electronics & Communication", 296],
    ["Pilani", "B.E. Manufacturing", 220],
    ["Pilani", "B. Pharm", 153],
    ["Pilani", "M.Sc. Biological Sciences", 212],
    ["Pilani", "M.Sc. Chemistry", 213],
    ["Pilani", "M.Sc. Economics", 257],
    ["Pilani", "M.Sc. Mathematics", 236],
    ["Pilani", "M.Sc. Physics", 235],
    ["Goa", "B.E. Chemical", 209],
    ["Goa", "B.E. Electrical & Electronics", 252],
    ["Goa", "B.E. Mechanical", 223],
    ["Goa", "B.E. Computer Science", 295],
    ["Goa", "B.E. Electronics & Instrumentation", 244],
    ["Goa", "B.E. Electronics & Communication", 267],
    ["Goa", "M.Sc. Biological Sciences", 204],
    ["Goa", "M.Sc. Chemistry", 205],
    ["Goa", "M.Sc. Economics", 239],
    ["Goa", "M.Sc. Mathematics", 221],
    ["Goa", "M.Sc. Physics", 222],
    ["Hyderabad", "B.E. Chemical", 207],
    ["Hyderabad", "B.E. Civil", 204],
    ["Hyderabad", "B.E. Electrical & Electronics", 251],
    ["Hyderabad", "B.E. Mechanical", 218],
    ["Hyderabad", "B.E. Computer Science", 284],
    ["Hyderabad", "B.E. Electronics & Instrumentation", 244],
    ["Hyderabad", "B.E. Electronics & Communication", 265],
    ["Hyderabad", "B. Pharm", 135],
    ["Hyderabad", "M.Sc. Biological Sciences", 204],
    ["Hyderabad", "M.Sc. Chemistry", 205],
    ["Hyderabad", "M.Sc. Economics", 236],
    ["Hyderabad", "M.Sc. Mathematics", 219],
    ["Hyderabad", "M.Sc. Physics", 219],
  ];

  const sortedData = data.sort((a, b) => b[2] - a[2]);

  return (
    <div className="flex flex-col bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-white px-6 py-3"
      >
        <label className="text-2xl font-bold mb-2">
          Enter your BITSAT score:
        </label>
        <input
          className="bg-gray-800 text-white text-lg rounded-lg px-4 py-2 mb-4 w-64"
          type="number"
          value={score}
          onChange={(e) => {
            const value = e.target.value;
            setScore(value);
          }}
        />
        <input
          className="bg-purple-500 text-white text-lg rounded-lg px-4 py-2 cursor-pointer hover:bg-purple-600 transition-colors duration-200 ease-in-out"
          type="submit"
          value="Submit"
        />
        <p className="text-sm mt-4 text-center">
          Disclaimer: The predictor is based on last year's cutoff data.
        </p>
        <div className="flex items-center font-bold flex-nowrap">
          <a
            href="https://phodu.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-purple-500 whitespace-nowrap">Click here </h2>
          </a>
          <h2 className="ml-1.5">to find the best resources for BITSAT 2024</h2>
        </div>
      </form>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-purple-500">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Campus
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Program
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Cut-off Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {results.map((result, index) => (
                  <tr
                    key={index}
                    className={`text-gray-100 hover:bg-gray-700 transition-colors duration-200 ease-in-out ${
                      index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{result[0]}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{result[1]}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{result[2]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Predictor;
