const srmCutoffs = () => {
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
export default srmCutoffs;
