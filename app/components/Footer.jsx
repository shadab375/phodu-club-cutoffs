import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#121212] text-white py-4 font-poppins">
      <p className="text-lg font-semibold">
        Made with <span style={{ color: "#e39ff6" }}>❤️</span> by
        <span className="font-bold text-white">
          {" "}
          phodu<span style={{ color: "#E39FF6" }}>.club</span>
        </span>
      </p>
    </div>
  );
};

export default Footer;
