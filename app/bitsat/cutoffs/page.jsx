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
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="text-white px-6 py-3">
        Please note that the BITSAT maximum marks in AY 2023-2024 was 390,
        whereas the maximum marks until 2021 was 450.
      </div>
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
                    Cut-off Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {data.map((row, i) => (
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