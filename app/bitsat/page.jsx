"use client";
import { useState, useEffect } from "react";

const Bitsat = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("/bits-hyderabad.jpg");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "cutoffs") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/bitsat/cutoffs`;
    } else if (selectedOption === "predictor") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/bitsat/predictor`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === "/bits-hyderabad.jpg"
          ? "/bits-pilani.jpg"
          : "/bits-hyderabad.jpg"
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

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
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
      />
      <h1 className="text-4xl font-bold mb-8 text-center text-white z-10">
        Do you want cutoff or branch predictor?
      </h1>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-[#252525] text-white text-2xl p-3 mb-4 z-10"
      >
        <option value="">--Please choose an option--</option>
        <option value="cutoffs">BITSAT Cutoffs</option>
        <option value="predictor">BITSAT Branch Predictor</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-[#E39FF6] text-[#121212] text-2xl px-6 py-3 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110 z-10"
      >
        Submit
      </button>
    </div>
  );
};

export default Bitsat;
