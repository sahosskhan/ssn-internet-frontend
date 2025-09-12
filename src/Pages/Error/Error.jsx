import React from "react";
import { useNavigate } from "react-router-dom";

const Error = ({ code = 404, title = "Page not found", subtitle = "Looks like you took a wrong turn." }) => {
  const navigate = useNavigate ? useNavigate() : null;

  const goBack = () => {
    if (navigate) return navigate(-1);
    if (window.history.length > 1) return window.history.back();
    return (window.location.href = "/");
  };

  const goHome = () => {
    if (navigate) return navigate("/");
    window.location.href = "/";
  };

  const extraStyles = `
    @keyframes floatY {
      0% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
      100% { transform: translateY(0); }
    }
    @keyframes slowRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .float-y { animation: floatY 4s ease-in-out infinite; }
    .float-y-slow { animation: floatY 6s ease-in-out infinite; }
    .rotate-slow { animation: slowRotate 18s linear infinite; }
  `;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-white p-6 relative">
      {/* Inject custom CSS */}
      <style>{extraStyles}</style>

      {/* Background animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 w-80 h-80 rounded-2xl bg-[rgba(78,227,194,0.08)] blur-3xl rotate-slow"></div>
        <div className="absolute right-8 -top-12 w-64 h-64 rounded-full bg-[rgba(137,166,255,0.08)] blur-2xl float-y"></div>
        <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-3xl bg-[rgba(255,255,255,0.03)] border border-white/3 rotate-slow"></div>
      </div>

      {/* Main glass card */}
      <div className="relative z-10 w-full max-w-2xl px-8 py-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl text-center">
        <h1 className="text-7xl font-extrabold text-red-400 drop-shadow-lg">{code}</h1>
        <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-300">{subtitle}</p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button
            onClick={goHome}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#07101a] font-semibold shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400/30"
          >
            Home
          </button>
          <button
            onClick={goBack}
            className="px-5 py-2 rounded-full bg-white/6 border border-white/10 text-white font-medium hover:bg-white/10 transition focus:outline-none focus:ring-4 focus:ring-white/10"
          >
            Go Back
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} SSN Internet</p>
      </div>
    </div>
  );
};

export default Error;
