const ComedkCutoffs = () => {
  const data = [
    ["1-10", "180-170"],
    ["11-50", "169-160"],
    ["51-150", "159-150"],
    ["151-350", "149-140"],
    ["351-800", "139-130"],
    ["801-1700", "129-120"],
    ["1701-3200", "119-110"],
    ["3201-5500", "109-100"],
    ["5501-9700", "99-90"],
    ["9701-14000", "89-80"],
    ["14001-23000", "79-70"],
    ["23001-36000", "69-60"],
    ["36001-43000", "59-50"],
    ["43001-45000", "49-40"],
    ["45001-48000", "39-30"],
  ];

  const sortedData = data.sort((a, b) => a[2] - b[2]);
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
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
              to find the best resources for COMEDK 2024
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
                    Range of the Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Score
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
export default ComedkCutoffs;
