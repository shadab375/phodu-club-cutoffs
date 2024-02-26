"use client";
import { useState, useEffect } from "react";

const vit = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("/vit-vellore.png");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "cutoffs") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/vit/cutoffs`;
    } else if (selectedOption === "predictor") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/vit/predictor`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === "/vit-vellore.png"
          ? "/vit-chennai.jpg"
          : "/vit-vellore.png"
      );
    }, 2500); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Do you want cutoff or branch predictor?
      </h1>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-[#252525] text-white text-2xl p-3 mb-4"
      >
        <option value="">--Please choose an option--</option>
        <option value="cutoffs">VIT Cutoffs</option>
        <option value="predictor">VIT Branch Predictor</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-[#E39FF6] text-[#121212] text-2xl px-6 py-3 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110"
      >
        Submit
      </button>
    </div>
  );
};

export default vit;
