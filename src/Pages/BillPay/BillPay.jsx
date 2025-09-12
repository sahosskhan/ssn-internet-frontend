import React from "react";

const BillPay = () => {
  const paymentMethods = [
    { name: "bKash", number: "+8801778030482", logo: "https://i.ibb.co.com/MDPPsP6b/image.png" },
    { name: "Rocket", number: "+8801778030482", logo: "https://i.ibb.co.com/KckSJ2HP/image.png" },
    { name: "Nagad", number: "+8801778030482", logo: "https://i.ibb.co.com/5Wcw71Bd/image.png" },
    { name: "SureCash", number: "+8801778030482", logo: "https://i.ibb.co.com/q3GQ4Q0P/image.png" },
    { name: "NexusPay", number: "+8801778030482", logo: "https://i.ibb.co.com/YFsjtqcf/image.png" },
  ];

  const instructions = [
    "Open your preferred mobile banking app.",
    "Select the 'Send Money' or 'Payment' option.",
    "Enter the account number of the selected payment method.",
    "Include your number and user id in the reference.",
    "Confirm the transaction and keep a screenshot for your record.",
    "Please pay your internet bill before last moment of deadline.",
  ];

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen p-6">
      
      {/* Heading */}
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Bill Payment
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
          Pay your SSN Internet bill using your preferred mobile banking method.
        </p>
      </section>

      {/* Payment Methods */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn delay-400">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition transform text-center float-card"
          >
            <img
              src={method.logo}
              alt={method.name}
              className="w-24 h-24 mx-auto rounded-xl mb-4 object-contain"
            />
            <h2 className="text-xl font-bold text-white mb-2">{method.name}</h2>
            <p className="text-gray-300 font-mono">{method.number}</p>
          </div>
        ))}
      </section>

      {/* Instructions Section */}
      <section className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg mt-12 animate-fadeIn delay-600">
        <h2 className="text-3xl md:text-4xl font-bold pb-12 text-center">Payment Instructions</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instructions.map((inst, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg float-card"
            >
              <ul className="list-disc list-inside text-gray-300">
                <li>{inst}</li>
              </ul>
            </div>
          ))}
        </div>
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

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .float-card {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BillPay;
