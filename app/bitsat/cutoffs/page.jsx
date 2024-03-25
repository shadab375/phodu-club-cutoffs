const BitsatCutoffs = () => {
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
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          {" "}
          <div className="flex items-center justify-center font-bold mb-2 mt-2">
            <a
              href="https://phodu.club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-purple-500">Click here </h2>
            </a>
            <h2 className="ml-1.5 text-white">
              to find the best resources for BITSAT 2024
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
                    Cut-off Score (out of 390)
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
export default BitsatCutoffs;
