"use client";
import { useState } from "react";

const met = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "cutoffs") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/met/cutoffs`;
    } else if (selectedOption === "predictor") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/met/predictor`;
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Do you want cutoff or branch predictor?
      </h1>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-[#252525] text-white text-2xl p-3 mb-4 rounded-lg"
      >
        <option value="" className="rounded-lg">
          --Please choose an option--
        </option>
        <option value="cutoffs">MET Cutoffs</option>
        <option value="predictor">MET Branch Predictor</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-[#E39FF6] text-[#121212] text-2xl px-6 py-3 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default met;
