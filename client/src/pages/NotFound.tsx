import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#212121] text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
      >
        Back to CodePilot
      </Link>
    </div>
  );
};

export default NotFound;
