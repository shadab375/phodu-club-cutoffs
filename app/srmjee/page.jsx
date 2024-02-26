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
    }
  };

  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
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
        Do you want cutoff or branch predictor?
      </h1>
      <select
        value={selectedOption}
        onChange={handleChange}
        className=" text-white text-2xl p-3 mb-4"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(18, 18, 18, 0.7)",
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="cutoffs">SRMJEE Cutoffs</option>
        <option value="predictor">SRMJEE Branch Predictor</option>
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
