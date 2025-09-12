import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Extra = () => {
  // FAQ data
  const faqData = [
    { q: "আপনার সেবার কভারেজ কি আছে?", a: "আমাদের সেবা দেশের অনেক অঞ্চলে পাওয়া যায়।" },
    { q: "সার্ভিস রিস্টোরেশন কতো সময় লাগে?", a: "সাধারণত ২৪ ঘণ্টার মধ্যে।" },
    { q: "পেমেন্ট অপশন কি কি?", a: "বিকাশ, নগদ, ব্যাংক ট্রান্সফার সবই পাওয়া যায়।" },
    { q: "কাস্টমার সাপোর্ট কতো সময় কাজ করে?", a: "২৪/৭ আমাদের টিম সাহায্য করে।" },
    { q: "ফ্রি ইন্সটলেশন আছে কি?", a: "হ্যাঁ, নির্দিষ্ট এলাকায় ফ্রি ইন্সটলেশন।" },
    { q: "প্যাকেজ পরিবর্তন সম্ভব কি?", a: "হ্যাঁ, যেকোনো সময় প্যাকেজ পরিবর্তন করতে পারবেন।" },
    { q: "ইন্টারনেট স্পিড কত?", a: "আপনার এলাকার জন্য নির্ধারিত ১২-২০ Mbps।" },
    { q: "কানেকশন স্থাপনের জন্য কি লাগবে?", a: "একটি ঠিকানা এবং আইডি ভেরিফিকেশন যথেষ্ট।" },
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
        <h2 className="text-5xl font-bold text-center text-white mb-10">Why Choose Us As Your ISP</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center text-white font-semibold hover:scale-[1.05] transition shadow-lg"
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
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg"
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
