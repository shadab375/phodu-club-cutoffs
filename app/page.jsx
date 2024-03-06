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
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="text-white flex flex-col items-center justify-center flex-grow ">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Choose your exam
        </h1>
        <select
          value={selectedExam}
          onChange={handleChange}
          className="bg-[#252525] text-white text-2xl p-3 mb-4 rounded-md w-full"
        >
          <option value="">Select your exam</option>
          <option value="bitsat">BITSAT</option>
          <option value="met">MET</option>
          <option value="comedk">COMEDK</option>
          <option value="viteee">VITEEE</option>
          <option value="srmjee">SRMJEEE</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-[#E39FF6] text-[#121212] text-2xl px-5 py-2 mt-1 transition-all duration-300 hover:bg-[#C31DF4] hover:scale-110 rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="bg-[#131313] w-full">
        <div className="flex justify-center items-center my-2 py-0.5 px-1 font-poppins z-10">
          <p className="text-lg font-semibold">
            Made with <span style={{ color: "#e39ff6" }}>💜</span> by
            <span className="font-bold text-white">
              {" "}
              phodu<span style={{ color: "#E39FF6" }}>.club</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
