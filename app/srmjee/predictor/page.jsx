"use client";
import React, { useState } from "react";

const srmPredictor = () => {
  const [cutoff, setCutoff] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = sortedData.filter((item) => item[2] >= cutoff);
    setResults(filteredData);
  };

  const data = [
    ["SRM Institute of Science & Technology", "Aerospace", 51500],
    ["SRM Institute of Science & Technology", "Automobile", 54000],
    ["SRM Institute of Science & Technology", "Biomedical", 53500],
    ["SRM Institute of Science & Technology", "Biotechnical", 47700],
    ["SRM Institute of Science & Technology", "Chemical", 69000],
    ["SRM Institute of Science & Technology", "Civil", 69000],
    ["SRM Institute of Science & Technology", "Computer Science", 9500],
    [
      "SRM Institute of Science & Technology",
      "Electrical and Electronics",
      39000,
    ],
    [
      "SRM Institute of Science & Technology",
      "Electronics and Communications",
      26700,
    ],
    [
      "SRM Institute of Science & Technology",
      "Electronics and Instrumentation",
      60000,
    ],
    ["SRM Institute of Science & Technology", "Genetic", 61500],
  ];
  const sortedData = data.sort((a, b) => a[2] - b[2]);

  return (
    <div className="flex flex-col bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-white px-6 py-3"
      >
        <label className="text-2xl font-bold mb-2">
          Enter your SRMJEE rank:
        </label>
        <input
          className="bg-gray-800 text-white text-lg rounded-lg px-4 py-2 mb-4 w-64"
          type="number"
          value={cutoff}
          onChange={(e) => setCutoff(e.target.value)}
        />
        <input
          className="bg-purple-500 text-white text-lg rounded-lg px-4 py-2 cursor-pointer hover:bg-purple-600 transition-colors duration-200 ease-in-out rounded-md"
          type="submit"
          value="Submit"
        />
        <p className="text-sm mt-4 text-center">
          Disclaimer: The predictor is based on last year's cutoff data.
        </p>
      </form>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                    Cut-off Rank
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
export default srmPredictor;
