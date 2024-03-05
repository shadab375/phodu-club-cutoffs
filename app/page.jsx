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
      window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/srmjee`;
    }
  };

  return (
    <div
      className="text-white flex flex-col items-center justify-center"
      style={{ backgroundColor: "#131313", height: "100vh" }}
    >
      <div className="text-white flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Choose your exam
        </h1>
        <select
          value={selectedExam}
          onChange={handleChange}
          className="bg-[#252525] text-white text-2xl p-3 mb-4 rounded-md"
        >
          <option value="">Select exam</option>
          <option value="bitsat">BITSAT</option>
          <option value="met">MET (Manipal Entrance Test)</option>
          <option value="comedk">COMEDK</option>
          <option value="viteee">VITEEE</option>
          <option value="srmjee">SRMJEEE</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-[#E39FF6] text-[#121212] text-2xl px-6 py-3 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110 rounded-md"
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
};

export default Home;
