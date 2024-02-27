const metCutoffs = () => {
  const data = [
    ["MIT Manipal", "Aeronautical Engineering", 28850],
    ["MIT Manipal", "Automobile Engineering", 46461],
    ["MIT Manipal", "Bio Medical Engineering", 47120],
    ["MIT Manipal", "Bio Technology", 30017],
    ["MIT Manipal", "Chemical Engineering", 48465],
    ["MIT Manipal", "Civil Engineering", 47893],
    ["MIT Manipal", "Computer and Communication Engineering", 6360],
    ["MIT Manipal", "Computer Science and Engineering", 1602],
    [
      "MIT Manipal",
      "Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning",
      2382,
    ],
    ["MIT Manipal", "Computer Science and Financial Technology", 3737],
    ["MIT Manipal", "Cyber Physical Systems", 23818],
    ["MIT Manipal", "Data Science and Engineering", 5794],
    ["MIT Manipal", "Electrical and Electronics Engineering", 20997],
    ["MIT Manipal", "Electronics and Communication Engineering", 8820],
    ["MIT Manipal", "Electronics and Instrumentation Engineering", 34087],
    [
      "MIT Manipal",
      "Electronics Engineering with specialization in VLSI Design and Technology",
      13725,
    ],
    ["MIT Manipal", "Industrial Engineering", 45140],
    ["MIT Manipal", "Information Technology", 4765],
    ["MIT Manipal", "Mathematics and Computing", 6771],
    ["MIT Manipal", "Mechanical Engineering", 47184],
    ["MIT Manipal", "Mechatronics", 38247],
    ["MIT Bangalore", "Computer Science and Engineering", 8888],
    [
      "MIT Bangalore",
      "Computer Science and Engineering with specialization in Artificial Intelligence",
      11738,
    ],
    [
      "MIT Bangalore",
      "Computer Science and Engineering with specialization in Cyber Security",
      17427,
    ],
    [
      "MIT Bangalore",
      "Computer Science and Engineering with specialization in Data Science",
      17587,
    ],
    ["MIT Bangalore", "Electronics and Communication Engineering", 26764],
    ["MIT Bangalore", "Electronics and Computer Engineering", 29025],
    ["MIT Bangalore", "Information Technology", 20167],
    ["MIT Jaipur", "B.Tech Computer Science Engineering", 17794],
    [
      "MIT Jaipur",
      "B.Tech (Hons.) Artificial Intelligence & Machine Learning",
      24500,
    ],
    ["MIT Jaipur", "B.Tech VLSI Design", 27258],
    ["MIT Jaipur", "B.Tech Civil Engineering", 30267],
    ["MIT Jaipur", "B.Tech Computer Science and Biosciences", 31591],
    ["MIT Jaipur", "B.Tech Electrical and Computer Engineering", 34935],
    ["MIT Jaipur", "B.Tech Mechatronics", 41998],
    ["MIT Jaipur", "B.Tech Chemical Engineering", 42594],
    ["MIT Jaipur", "B.Tech Electrical and Electronics Engineering", 45001],
    ["MIT Jaipur", "B.Tech Biotechnology", 46006],
    ["MIT Jaipur", "B.Tech Mechanical Engineering", 46177],
    ["MIT Jaipur", "B.Tech Computer and Communication Engineering", 46694],
    ["MIT Jaipur", "B.Tech {Hons.} Internet of Things", 46707],
    ["MIT Jaipur", "B.Tech Information Technology", 47833],
    ["MIT Jaipur", "B.Tech Data Science", 48102],
    ["MIT Jaipur", "B.Tech Electronics & Communication Engineering", 48266],
    ["MIT Jaipur", "B.Tech Automobile Engineering", 48334],
    ["MIT Sikkim", "B.Tech Electrical and Electronics Engineering", 35047],
    ["MIT Sikkim", "B.Tech Computer Science Engineering", 35634],
    [
      "MIT Sikkim",
      "B.Tech Artificial Intelligence and Machine Learning",
      38316,
    ],
    [
      "MIT Sikkim",
      "B.Tech Internet of Things & Cyber Security Including Blockchain Technology",
      43189,
    ],
    ["MIT Sikkim", "B.Tech Electronics & Communication Engineering", 45129],
    ["MIT Sikkim", "B.Tech Data Science", 47115],
    ["MIT Sikkim", "B.Tech Information Technology", 47565],
    ["MIT Sikkim", "B.Tech Civil Engineering", 48178],
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
                    Cut-off Score
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
export default metCutoffs;
