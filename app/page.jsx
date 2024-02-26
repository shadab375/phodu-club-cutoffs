"use client";
import { useState } from "react";

const Home = () => {
  const [selectedExam, setSelectedExam] = useState("");

  const handleChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedExam === "bitsat") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/bitsat`;
    } else if (selectedExam === "met") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/met`;
    } else if (selectedExam === "comedk") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/comedk`;
    } else if (selectedExam === "viteee") {
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/vit`;
    } else if (selectedExam === "srmjee") {
      window.location.href === `${process.env.NEXT_PUBLIC_BASEURL}/srmjee}`;
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Choose your exam for cutoff and branch predictor
      </h1>
      <select
        value={selectedExam}
        onChange={handleChange}
        className="bg-[#252525] text-white text-2xl p-3 mb-4"
      >
        <option value="">--Please choose an exam--</option>
        <option value="bitsat">BITSAT</option>
        <option value="met">MET (Manipal Entrance Test)</option>
        <option value="comedk">COMEDK</option>
        <option value="viteee">VITEEE</option>
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

export default Home;
