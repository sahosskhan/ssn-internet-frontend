import React, { useState } from "react";
import {
  Wifi,
  CreditCard,
  Plug,
  FileText,
  Wrench,
  ArrowUp,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

const supportData = [
  {
    type: "Network Issue",
    icon: <Wifi size={32} />,
    contact: { number: "+880123456789", email: "network@ssn.com" },
    color: "from-blue-400 to-blue-600",
  },
  {
    type: "Payment Issue",
    icon: <CreditCard size={32} />,
    contact: { number: "+880987654321", email: "payment@ssn.com" },
    color: "from-green-400 to-green-600",
  },
  {
    type: "New Connection Issue",
    icon: <Plug size={32} />,
    contact: { number: "+880112233445", email: "newconnection@ssn.com" },
    color: "from-purple-400 to-purple-600",
  },
  {
    type: "Billing Issue",
    icon: <FileText size={32} />,
    contact: { number: "+880223344556", email: "billing@ssn.com" },
    color: "from-yellow-400 to-yellow-600",
  },
  {
    type: "Technical Support",
    icon: <Wrench size={32} />,
    contact: { number: "+880334455667", email: "tech@ssn.com" },
    color: "from-red-400 to-red-600",
  },
  {
    type: "Service Upgrade",
    icon: <ArrowUp size={32} />,
    contact: { number: "+880445566778", email: "upgrade@ssn.com" },
    color: "from-pink-400 to-pink-600",
  },
  {
    type: "Complaint",
    icon: <AlertTriangle size={32} />,
    contact: { number: "+880556677889", email: "complaint@ssn.com" },
    color: "from-indigo-400 to-indigo-600",
  },
  {
    type: "Feedback/Suggestion",
    icon: <MessageCircle size={32} />,
    contact: { number: "+880667788990", email: "feedback@ssn.com" },
    color: "from-teal-400 to-teal-600",
  },
];

const faqData = [
  {
    question: "How do I report a network issue?",
    answer:
      "Select 'Network Issue' above and contact us via the number or email provided.",
  },
  {
    question: "How do I check my payment status?",
    answer:
      "Select 'Payment Issue' and contact support or check your account billing section.",
  },
  {
    question: "How can I request a new connection?",
    answer:
      "Select 'New Connection Issue' and contact our team to submit your request.",
  },
  {
    question: "How do I resolve billing errors?",
    answer: "Select 'Billing Issue' and reach out with your invoice details.",
  },
  {
    question: "How to get technical support?",
    answer:
      "Select 'Technical Support' and provide details of the issue for guidance.",
  },
  {
    question: "Can I upgrade my plan?",
    answer: "Select 'Service Upgrade' to get the available options and pricing.",
  },
  {
    question: "How do I submit a complaint?",
    answer:
      "Select 'Complaint' and describe your issue. Our team will contact you.",
  },
  {
    question: "How can I give feedback?",
    answer:
      "Select 'Feedback/Suggestion' and share your ideas or experience.",
  },
];

const Support = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen px-4 py-16">
      {/* Heading */}
      <header className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">We’re Here to Help</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Choose a support type below or send us a message. Our team is ready to
          assist you 24/7.
        </p>
      </header>

      {/* Support Cards */}
      <section className="mb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {supportData.map((item, index) => (
          <div
  key={index}
  className={`bg-gradient-to-r ${item.color} bg-opacity-40 backdrop-blur-xl rounded-2xl shadow-lg p-8 text-center transform transition hover:scale-105 animate-wave`}
  style={{ animationDelay: `${index * 0.2}s` }}
>
  <div className="flex justify-center mb-3 text-white">{item.icon}</div>
  <h3 className="text-xl font-semibold mb-2 text-white">{item.type}</h3>
  <div>
    <p className="text-white/90">📞 {item.contact.number}</p>
    <p className="text-white/90">✉️ {item.contact.email}</p>
  </div>
</div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-5xl sm:text-6xl font-semibold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="p-4 rounded-xl shadow-md bg-gradient-to-r from-blue-400 to-indigo-500 bg-opacity-40 backdrop-blur-xl text-white hover:scale-[1.02] transition-transform"
            >
              <summary className="cursor-pointer font-medium">{faq.question}</summary>
              <p className="mt-2 text-white/90">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-20 max-w-2xl mx-auto">
        <h2 className="text-5xl sm:text-6xlfont-semibold mb-12 text-center">Send Us a Message</h2>
        {submitted && (
          <p className="mb-4 text-green-400 font-medium text-center animate-fade-in">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-opacity-40 backdrop-blur-xl p-8 rounded-2xl shadow-md space-y-4"
        >
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl bg-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl bg-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-xl bg-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            ></textarea>
          </div>
            <button
                className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] 
                           font-bold shadow-md transition-all duration-500 
                           hover:from-indigo-500 hover:to-teal-400 hover:text-white hover:shadow-2xl hover:-translate-y-1"
              >
                Send Message
              </button>
       
        </form>
      </section>
      <style jsx>{`
  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-wave {
    animation: wave 4s ease-in-out infinite;
  }
`}</style>

    </div>
  );
};

export default Support;
