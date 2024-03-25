const ComedkCutoffs = () => {
  const data = [
    ["<2000", ">250"],
    ["2000-5000", "230–250"],
    ["5001-9000", "200–229"],
    ["9001-13000", "170–199"],
    ["13001-15000", "150–169"],
    ["15001-17000", "130–149"],
    ["17001-20000", "100–129"],
    ["20001-25000", "70–99"],
    ["25001-30000", "40–69"],
    [">30001", "<40"],
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
              to find the best resources for SRMJEE 2024
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
