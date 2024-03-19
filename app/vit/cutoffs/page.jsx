const vitCutoffs = () => {
  const data = [
    [
      "VIT Vellore",
      "Computer Science Engineering",
      928,
      3681,
      15000,
      24000,
      27500,
    ],
    [
      "VIT Vellore",
      "CSE with Specializations IS, DS, IOT, BCT, CSBS",
      2800,
      9500,
      23000,
      27000,
      31000,
    ],
    [
      "VIT Chennai",
      "Computer Science Engineering",
      4000,
      14000,
      27000,
      32000,
      34000,
    ],
    [
      "VIT Chennai",
      "CSE with Specializations IS, DS, IOT, BCT, CSBS",
      7500,
      20500,
      26000,
      34000,
      42000,
    ],
    ["VIT Vellore", "ECE", 4000, 15000, 28000, 38000, 61000],
    ["VIT Chennai", "ECE", 10000, 24000, 39500, 59000, 72000],
    ["VIT Vellore", "EEE", 6000, 23000, 36000, 49000, 66000],
    ["VIT Chennai", "EEE", 13500, 34000, 51000, 61000, 80000],
    [
      "VIT Vellore",
      "Mechanical Engineering",
      30000,
      45000,
      60000,
      67000,
      92000,
    ],
    [
      "VIT Chennai",
      "Mechanical Engineering",
      35000,
      53000,
      78000,
      90000,
      120000,
    ],
    [
      "Other Campuses",
      "Remaining Branches",
      45000,
      65000,
      100000,
      120000,
      145000,
    ],
  ];
  const sortedData = data.sort((a, b) => a[2] - b[2]);
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex items-center justify-center font-bold mb-2 mt-2">
            {" "}
            <a
              href="https://phodu.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-purple-500">Click here </h2>
            </a>
            <h2 className="ml-1.5 text-white">
              to find the best resources for VITEEE 2024
            </h2>
          </div>
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
                    Category-1 Cut-off Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Category-2 Cut-off Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Category-3 Cut-off Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Category-4 Cut-off Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Category-5 Cut-off Rank
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {sortedData.map((row, i) => (
                  <tr
                    key={i}
                    className={`text-gray-100 hover:bg-gray-700 transition-colors duration-200 ease-in-out ${
                      i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                    }`}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium">{cell}</div>
                      </td>
                    ))}
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
export default vitCutoffs;
