"use client";
import React, { useState } from "react";

const ComedkCutoffs = () => {
  const [score, setScore] = useState("");
  const [expectedRank, setExpectedRank] = useState("");

  const data = [
    ["1", "175"],
    ["2", "174"],
    ["3", "173"],
    ["4", "172"],
    ["5", "171"],
    ["6", "170"],
    ["7", "169"],
    ["8", "168"],
    ["9", "168/167"],
    ["10-20", "166-168"],
    ["21-30", "164-166"],
    ["31-40", "161-164"],
    ["41-50", "158-161"],
    ["51-60", "156-160"],
    ["61-70", "154-156"],
    ["71-80", "152-156"],
    ["81-90", "150-152"],
    ["91-100", "148-152"],
    ["101-110", "146-150"],
    ["111-120", "144-150"],
    ["121-130", "144-146"],
    ["131-140", "142-146"],
    ["141-150", "141-145"],
    ["151-160", "140-146"],
    ["161-170", "140-143"],
    ["171-180", "138-142"],
    ["181-190", "137-140"],
    ["191-200", "136-140"],
    ["201-210", "135-140"],
    ["211-220", "134-140"],
    ["221-230", "133-140"],
    ["231-240", "132-140"],
    ["241-250", "131-140"],
    ["251-260", "130-140"],
    ["261-270", "129-139"],
    ["271-280", "128-139"],
    ["281-290", "127-139"],
    ["291-300", "126-139"],
    ["301-310", "125-138"],
    ["311-320", "124-137"],
    ["321-330", "123-136"],
    ["331-340", "122-135"],
    ["341-350", "121-134"],
    ["351-360", "120-133"],
    ["361-370", "119-133"],
    ["371-380", "118-132"],
    ["381-390", "117-131"],
    ["391-400", "116-130"],
    ["401-410", "115-129"],
    ["410-1000", "100-130"],
    ["1001-1500", "100-120"],
    ["1501-2000", "100-115"],
    ["2001-2500", "100-110"],
    ["2501-3000", "100-105"],
    ["3001-3500", "95-100"],
    ["3501-4000", "90-100"],
    ["4001-4500", "85-90"],
    ["4501-5000", "80-85"],
    ["5001-5500", "75-80"],
    ["5501-6000", "70-75"],
    ["6000-10000", "65-70"],
    ["10001-20000", "60-65"],
    ["20001-40000", "55-60"],
    ["40001-50000", "50-55"],
    ["50001-60000", "45-50"],
  ];

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const rankData = data.find(([_, scoreRange]) => {
      const [min, max] = scoreRange.split("-").map(Number);
      return score >= min && score <= max;
    });

    if (rankData) {
      setExpectedRank(rankData[0]);
    } else {
      setExpectedRank("No matching rank found");
    }
  };

  const sortedData = data.sort((a, b) => a[2] - b[2]);
  return (
    <div className="flex flex-col bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-white px-6 py-3"
      >
        <label className="text-2xl font-bold mb-2">
          Enter your COMEDK score:
        </label>
        <input
          className="bg-gray-800 text-white text-lg rounded-lg px-4 py-2 mb-4 w-64"
          type="number"
          value={score}
          onChange={handleScoreChange}
        />
        <input
          className="bg-purple-500 text-white text-lg rounded-lg px-4 py-2 cursor-pointer hover:bg-purple-600 transition-colors duration-200 ease-in-out rounded-md"
          type="submit"
          value="Submit"
        />
        <p className="text-lg mt-4 text-center">
          Your expected rank: {expectedRank}
        </p>
        <p className="text-sm mt-4 text-center">
          Disclaimer: The predictor is based on last year's cutoff data.
        </p>
        <div className="flex items-center font-bold flex-nowrap">
          <a
            href="https://phodu.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-purple-500 whitespace-nowrap">Click here </h2>
          </a>
          <h2 className="ml-1.5 align-center">
            to find the best resources for COMEDK 2024
          </h2>
        </div>
      </form>
    </div>
  );
};
export default ComedkCutoffs;
