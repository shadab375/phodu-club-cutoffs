const ComedkCutoffs = () => {
  const data = [
    ["R.V. College of Engineering", "AI Artificial Intelligence", 558, 1152],
    ["R.V. College of Engineering", "BT Bio Technology", 3327, null],
    ["R.V. College of Engineering", "CE Civil", 17630, 18609],
    ["R.V. College of Engineering", "CH Chemical", 9856, null],
    ["R.V. College of Engineering", "CS Computers", 242, 365],
    ["R.V. College of Engineering", "CY CS- Cyber Security", 620, 1239],
    ["R.V. College of Engineering", "DS Comp. Sc. Engg- Data Sc.", 456, 1155],
    ["R.V. College of Engineering", "EC Electronics", 761, 1633],
    ["R.V. College of Engineering", "EE Electrical", 2663, 6888],
    ["R.V. College of Engineering", "EI Elec. Inst. Engg", 3769, 5496],
    ["R.V. College of Engineering", "ET Elec. Telecommn. Engg.", 2397, 7734],
    ["R.V. College of Engineering", "IE Info.Science", 360, 490],
    ["R.V. College of Engineering", "IM Ind. Engg. Mgmt.", 16624, null],
    ["R.V. College of Engineering", "ME Mechanical", 6023, 8574],
    ["R.V. College of Engineering", "SE Aero Space Engg.", 2507, 3770],
    [
      "M S Ramaiah Institute of Technology",
      "AD Artificial Intel, Data Sc",
      2368,
      3526,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "AI Artificial Intelligence",
      2193,
      null,
    ],
    ["M S Ramaiah Institute of Technology", "BT Bio Technology", 10522, 10748],
    [
      "M S Ramaiah Institute of Technology",
      "CA CS (AI, Machine Learning)",
      1869,
      3246,
    ],
    ["M S Ramaiah Institute of Technology", "CE Civil", 32418, null],
    ["M S Ramaiah Institute of Technology", "CH Chemical", 22268, 27033],
    ["M S Ramaiah Institute of Technology", "CS Computers", 1045, 1464],
    [
      "M S Ramaiah Institute of Technology",
      "CY CS- Cyber Security",
      2306,
      3359,
    ],
    ["M S Ramaiah Institute of Technology", "EC Electronics", 3362, 4265],
    ["M S Ramaiah Institute of Technology", "EE Electrical", 6995, 8251],
    ["M S Ramaiah Institute of Technology", "EI Elec. Inst. Engg", 8916, null],
    [
      "M S Ramaiah Institute of Technology",
      "ET Elec. Telecommn. Engg.",
      6932,
      13448,
    ],
    ["M S Ramaiah Institute of Technology", "IE Info.Science", 1769, 2533],
    [
      "M S Ramaiah Institute of Technology",
      "IM Ind. Engg. Mgmt.",
      43629,
      53693,
    ],
    ["M S Ramaiah Institute of Technology", "MD Med.Elect.", 34768, 52904],
    ["M S Ramaiah Institute of Technology", "ME Mechanical", 25690, 28640],
    [
      "Siddaganga Institute of Technology",
      "AD Artificial Intel, Data Sc",
      9641,
      null,
    ],
    ["Siddaganga Institute of Technology", "BT Bio Technology", 35793, 56834],
    [
      "Siddaganga Institute of Technology",
      "CA CS (AI, Machine Learning)",
      8392,
      8786,
    ],
    ["Siddaganga Institute of Technology", "CE Civil", 68852, 72407],
    ["Siddaganga Institute of Technology", "CH Chemical", 79285, 93580],
    ["Siddaganga Institute of Technology", "CS Computers", 5022, 5859],
    ["Siddaganga Institute of Technology", "EC Electronics", 10829, 10835],
    ["Siddaganga Institute of Technology", "EE Electrical", 22345, 28617],
    ["Siddaganga Institute of Technology", "EI Elec. Inst. Engg", 27981, 37241],
    [
      "Siddaganga Institute of Technology",
      "ET Elec. Telecommn. Engg.",
      20396,
      25668,
    ],
    ["Siddaganga Institute of Technology", "IE Info.Science", 7379, 8223],
    ["Siddaganga Institute of Technology", "IM Ind. Engg. Mgmt.", 80701, 95375],
    ["Siddaganga Institute of Technology", "ME Mechanical", 86115, 93791],
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
              to find the best resources for KCET 2024
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
                    General Cut-off Rank
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"
                  >
                    Hyd-Kar General Merit Cut off
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
