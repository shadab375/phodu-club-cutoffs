"use client";
import { useState } from "react";
import Image from "next/image";

export default function srmjee() {
  const [selectedOption, setSelectedOption] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("/srm-ktr.jpg");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "cutoffs") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/srmjee/cutoffs`;
    } else if (selectedOption === "predictor") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/srmjee/predictor`;
    } else if (selectedOption === "versus") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/srmjee/versus`;
    }
  };

  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="text-white flex flex-col items-center justify-center flex-grow">
        <div
          className="absolute inset-0"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        >
          <Image
            src={backgroundImage}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center text-white z-10">
          Cutoff or Predictor?
        </h1>
        <select
          value={selectedOption}
          onChange={handleChange}
          onClick={() => {}}
          className=" text-white text-2xl p-3 mb-4 rounded-md"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(18, 18, 18, 0.7)",
          }}
        >
          <option value="">Please choose an option</option>
          <option value="cutoffs">SRMJEEE Cutoffs</option>
          <option value="predictor">SRMJEEE Branch Predictor</option>
          <option value="versus">SRMJEEE Marks vs Rank</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-[#E39FF6] text-[#121212] text-2xl px-6 py-3 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110 z-10 rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="flex justify-center items-center py-4 font-poppins z-10">
        <p className="text-lg font-semibold">
          Made with <span style={{ color: "#e39ff6" }}>💜</span> by
          <span className="font-bold text-white">
            {" "}
            phodu<span style={{ color: "#E39FF6" }}>.club</span>
          </span>
        </p>
      </div>
    </div>
  );
}
