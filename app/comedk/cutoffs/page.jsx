const ComedkCutoffs = () => {
  const data = [
    [
      "R.V. College of Engineering",
      "AI-Artificial Intelligence & Machine Learning",
      818,
    ],
    ["R.V. College of Engineering", "AS-Aerospace Engineering", 5990],
    ["R.V. College of Engineering", "BT-Biotechnology", 16564],
    [
      "R.V. College of Engineering",
      "CD-Computer Science & Engineering (Data Science)",
      531,
    ],
    ["R.V. College of Engineering", "CH-Chemical Engineering", 14115],
    ["R.V. College of Engineering", "CS-Computer Science & Engineering", 406],
    ["R.V. College of Engineering", "CV-Civil Engineering", 17203],
    [
      "R.V. College of Engineering",
      "CY-Computer Science & Engineering (Cyber Security)",
      774,
    ],
    [
      "R.V. College of Engineering",
      "EC-Electronics & Communication Engineering",
      1333,
    ],
    [
      "R.V. College of Engineering",
      "EE-Electrical & Electronics Engineering",
      2786,
    ],
    [
      "R.V. College of Engineering",
      "EI-Electronics & Instrumentation Engineering",
      3243,
    ],
    [
      "R.V. College of Engineering",
      "ET-Electronics & Telecommunication Engineering",
      2835,
    ],
    [
      "R.V. College of Engineering",
      "IM-Industrial Engineering & Management",
      15818,
    ],
    [
      "R.V. College of Engineering",
      "IS-Information Science & Engineering",
      644,
    ],
    ["R.V. College of Engineering", "ME-Mechanical Engineering", 7489],
    [
      "B M S College of Engineering",
      "AD-Artificial Intelligence & Data Science",
      2451,
    ],
    [
      "B M S College of Engineering",
      "AI-Artificial Intelligence & Machine Learning",
      2713,
    ],
    ["B M S College of Engineering", "AS-Aerospace Engineering", 10048],
    ["B M S College of Engineering", "BT-Biotechnology", 21385],
    [
      "B M S College of Engineering",
      "CB-Computer Science & Business Systems",
      2375,
    ],
    [
      "B M S College of Engineering",
      "CD-Computer Science & Engineering (Data Science)",
      1562,
    ],
    ["B M S College of Engineering", "CH-Chemical Engineering", 25950],
    ["B M S College of Engineering", "CS-Computer Science & Engineering", 1319],
    ["B M S College of Engineering", "CV-Civil Engineering", 31536],
    [
      "B M S College of Engineering",
      "EC-Electronics & Communication Engineering",
      3608,
    ],
    [
      "B M S College of Engineering",
      "EI-Electronics & Instrumentation Engineering",
      6436,
    ],
    [
      "B M S College of Engineering",
      "ET-Electronics & Telecommunication Engineering",
      5172,
    ],
    [
      "B M S College of Engineering",
      "IC-Computer Science & Engineering (IOT & Cyber Security Including Block Chain Technology)",
      1964,
    ],
    [
      "B M S College of Engineering",
      "IS-Information Science & Engineering",
      2235,
    ],
    [
      "B M S College of Engineering",
      "MD-Medical Electronics Engineering",
      31872,
    ],
    ["B M S College of Engineering", "ME-Mechanical Engineering", 12810],
    [
      "M S Ramaiah Institute of Technology",
      "AD-Artificial Intelligence & Data Science",
      2503,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "AI-Artificial Intelligence & Machine Learning",
      2535,
    ],
    ["M S Ramaiah Institute of Technology", "BT-Biotechnology", 27939],
    ["M S Ramaiah Institute of Technology", "CH-Chemical Engineering", 27454],
    [
      "M S Ramaiah Institute of Technology",
      "CI-Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      1830,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "CS-Computer Science & Engineering",
      1358,
    ],
    ["M S Ramaiah Institute of Technology", "CV-Civil Engineering", 29486],
    [
      "M S Ramaiah Institute of Technology",
      "CY-Computer Science & Engineering (Cyber Security)",
      2159,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "EC-Electronics & Communication Engineering",
      3530,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "EE-Electrical & Electronics Engineering",
      5864,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "EI-Electronics & Instrumentation Engineering",
      6810,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "ET-Electronics & Telecommunication Engineering",
      5341,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "IM-Industrial Engineering & Management",
      24423,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "IS-Information Science & Engineering",
      2242,
    ],
    [
      "M S Ramaiah Institute of Technology",
      "MD-Medical Electronics Engineering",
      31207,
    ],
    ["M S Ramaiah Institute of Technology", "ME-Mechanical Engineering", 15619],
    [
      "The National Institute of Engineering - North Campus",
      "CI-Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      7743,
    ],
    [
      "The National Institute of Engineering - North Campus",
      "CS-Computer Science & Engineering",
      6501,
    ],
    [
      "The National Institute of Engineering - North Campus",
      "IS-Information Science & Engineering",
      8946,
    ],
    [
      "The National Institute of Engineering - South Campus",
      "EC-Electronics & Communication Engineering",
      10772,
    ],
    [
      "The National Institute of Engineering - South Campus",
      "EE-Electrical & Electronics Engineering",
      19327,
    ],
    [
      "The National Institute of Engineering - South Campus",
      "ME-Mechanical Engineering",
      39676,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "AE-Aeronautical Engineering",
      26369,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "AI-Artificial Intelligence & Machine Learning",
      4405,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "AU-Automobile Engineering",
      48416,
    ],
    ["Dayananda Sagar College of Engineering", "BT-Biotechnology", 48873],
    [
      "Dayananda Sagar College of Engineering",
      "CB-Computer Science & Business Systems",
      4909,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "CD-Computer Science & Engineering (Data Science)",
      3620,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "CG-Computer Science & Design",
      5055,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "CH-Chemical Engineering",
      41727,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "CS-Computer Science & Engineering",
      3272,
    ],
    ["Dayananda Sagar College of Engineering", "CV-Civil Engineering", 60117],
    [
      "Dayananda Sagar College of Engineering",
      "CY-Computer Science & Engineering (Cyber Security)",
      4212,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "EC-Electronics & Communication Engineering",
      8701,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "EE-Electrical & Electronics Engineering",
      19208,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "EI-Electronics & Instrumentation Engineering",
      20223,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "ET-Electronics & Telecommunication Engineering",
      14202,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "IC-Computer Science & Engineering (IOT & Cyber Security Including Block Chain Technology)",
      4666,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "IS-Information Science & Engineering",
      4590,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "MD-Medical Electronics Engineering",
      48505,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "ME-Mechanical Engineering",
      37173,
    ],
    [
      "Dayananda Sagar College of Engineering",
      "RI-Robotics & Artificial Intelligence",
      6269,
    ],
  ];

  const sortedData = data.sort((a, b) => a[2] - b[2]);
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex items-center justify-center font-bold mb-2 mt-2">
            {" "}
            <a href="https://phodu.club">
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
export default ComedkCutoffs;
