"use client";
import { useState } from "react";
import Image from "next/image";

export default function Comedk() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "cutoffs") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/comedk/cutoffs`;
    } else if (selectedOption === "predictor") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/comedk/predictor`;
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
        className=" text-white text-2xl p-3 mb-4"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(18, 18, 18, 0.7)",
          opacity: 0.7,
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="cutoffs">COMEDK Cutoffs</option>
        <option value="predictor">COMEDK Branch Predictor</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-[#E39FF6] text-[#121212] text-2xl px-6 py-3 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110 z-10"
      >
        Submit
      </button>
      <div className="flex justify-center items-center py-4 font-poppins z-10">
        <p className="text-lg font-semibold">
          Made with <span style={{ color: "#e39ff6" }}>❤️</span> by
          <span className="font-bold text-white">
            {" "}
            phodu<span style={{ color: "#E39FF6" }}>.club</span>
          </span>
        </p>
      </div>
    </div>
  );
}
