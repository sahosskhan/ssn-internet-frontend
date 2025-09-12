import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Extra = () => {
  // FAQ data
  const faqData = [
{ q: "Is your service coverage available?", a: "Our service is available in many regions across the country." },
{ q: "How long does service restoration take?", a: "Usually within 24 hours." },
{ q: "What are the payment options?", a: "We accept bKash, Nagad, and bank transfers." },
{ q: "When is customer support available?", a: "Our team is available 24/7." },
{ q: "Is installation free?", a: "Yes, free installation is available in certain areas." },
{ q: "Can I change my package?", a: "Yes, you can change your package anytime." },
{ q: "What is the internet speed?", a: "The speed ranges from 12–20 Mbps depending on your area." },
{ q: "What is required to set up a connection?", a: "Just an address and ID verification are enough." },

  ];

  const [openIndex, setOpenIndex] = useState(null);


  // More services
  const services = [
    "Live TV Streaming",
    "OTT Platforms",
    "FTP Server Access",
    "Smart Home Integration",
    "Cloud Storage Solutions",
    "Gaming Acceleration",
    "IoT Support",
    "Priority Support",
    "24/7 Support Team",
    "Extra BDIX Speed",
    "Smart Bill Payment System",
     "FTTH Technology",
  ];

  return (
    <div>
    

      {/* More Services Section */}
      <section className="py-16 px-6">
        <h2 className=" text-4xl md:text-5xl font-bold text-center text-white mb-10">Why Choose Us As Your ISP</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 animate-wave backdrop-blur-md rounded-2xl p-6 text-center text-white font-semibold hover:scale-[1.05] transition shadow-lg"
            >
              {s}
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6">
              <section className="text-center ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
Find answers to common questions about our plans, features, and services. Get quick help with billing, connectivity, and technical support.
        </p>
      </section>
        <div className="max-w-4xl mt-12 mx-auto grid gap-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg "
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">{item.q}</h3>
                <ChevronDown
                  className={`text-white transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === idx && (
                <p className="mt-2 text-gray-300 transition-all duration-300">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default Extra;
