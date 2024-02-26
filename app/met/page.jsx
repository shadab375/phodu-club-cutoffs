"use client";
import { useState, useEffect } from "react";

const met = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("/mit-jaipur.jpg");

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

  useEffect(() => {
    const images = [
      "/mit-jaipur.jpg",
      "/mit-manipal.jpg",
      "/mit-bangalore.jpeg",
      "/mit-sikkim.jpeg",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBackgroundImage(images[index]);
    }, 3000); // Change image every 3 seconds

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
