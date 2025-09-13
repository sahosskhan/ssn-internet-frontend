import React from "react";
import { Link } from "react-router-dom";

const GetConnection = () => {
  const devices = [
    { name: "WiFi Router", desc: "High-speed dual band WiFi Router provided for client side." },
    { name: "XPON / GPON ONU", desc: "ONU device setup to connect with Fiber network." },
  ];

  const documents = [
    "1 Passport Size Photo",
    "1 NID Card Photocopy",
    "Full Name",
    "Contact Number",
  ];

  const policies = [
    "Installation, setup & cable are free of cost.",
    "Only 1st month package bill required for activation.",
    "Client must provide accurate information & documents.",
    "Company reserves the right to verify user details.",
    "Connection may take 24-48 hours depending on location.",
  ];

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen p-6">
      {/* Heading */}
      <section className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeIn">
          Get New Connection
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-200">
          Apply now for a fast, reliable and affordable internet connection with 
          free installation, setup and support.
        </p>
      </section>

         {/* Client Side Requirement Section */}
      <section className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fadeIn delay-300">
          Client Side Requirement
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn delay-400">
          {devices.map((device, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-lg float-card"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{device.name}</h3>
              <p className="text-gray-300">{device.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Free Installation */}
      <section className="max-w-4xl mx-auto mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg text-center float-card animate-fadeIn delay-600">
        <h2 className="text-3xl font-bold mb-4 text-green-400">Free Installation</h2>
        <p className="text-gray-300">
          Cable, installation & setup are absolutely free. 
          No hidden charges or service fees.
        </p>
      </section>

      {/* Bill Activation */}
      <section className="max-w-4xl mx-auto mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg text-center float-card animate-fadeIn delay-800">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Activation Policy</h2>
        <p className="text-gray-300">
          1st month package bill must be paid to activate your internet connection.
        </p>
      </section>

      {/* Documents */}
      <section className="max-w-6xl mx-auto mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg animate-fadeIn delay-1000">
        <h2 className="text-3xl font-bold mb-6 text-center">Required Documents</h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc, i) => (
            <li
              key={i}
              className="bg-white/10 p-4 rounded-2xl text-gray-200 shadow-md float-card"
            >
              ✅ {doc}
            </li>
          ))}
        </ul>
      </section>

      {/* Policies */}
      <section className="max-w-6xl mx-auto mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg animate-fadeIn delay-1200">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Policies</h2>
        <ul className="space-y-3">
          {policies.map((pol, i) => (
            <li key={i} className="bg-white/5 p-3 rounded-xl float-card">
              🔹 {pol}
            </li>
          ))}
        </ul>
      </section>

      {/* Button */}
      <section className="text-center py-12 animate-fadeIn delay-1400">
      <Link to='https://www.facebook.com/yeamin.saiful'>
        <button className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:scale-110 transition transform float-card">
          Request For New Connection
        </button>
      </Link>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
          .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
          .animate-fadeIn.delay-400 { animation-delay: 0.4s; }
          .animate-fadeIn.delay-600 { animation-delay: 0.6s; }
          .animate-fadeIn.delay-800 { animation-delay: 0.8s; }
          .animate-fadeIn.delay-1000 { animation-delay: 1s; }
          .animate-fadeIn.delay-1200 { animation-delay: 1.2s; }
          .animate-fadeIn.delay-1400 { animation-delay: 1.4s; }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .float-card {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default GetConnection;
