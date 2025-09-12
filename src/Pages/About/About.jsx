import { Phone, Mail } from "lucide-react";

const About = () => {
  const collaborations = [
    { name: "ICC", logo: "https://i.ibb.co.com/8LVTL8p9/image.png" },
    { name: "Orbit", logo: "https://i.ibb.co.com/hxMRyLCS/image.png" },
    { name: "Skyview", logo: "https://i.ibb.co.com/3m8K5ygL/image.png" },
    { name: "Carnival", logo: "https://i.ibb.co.com/DDvpSrzj/image.png" },
    { name: "Link3", logo: "https://i.ibb.co.com/CKx2txJM/bi-Mvjh56l-Vhl1-VI48-YHPk-Uxc-LCoc1-WIorc4t5-CO9-CH63fy7-FFhuqoh-Wmg-Wb-YB3-T04i-P0.png" },
    { name: "BDCOM", logo: "https://i.ibb.co.com/Zzg7dqjf/image.png" },
  ];

  const team = [
    {
      name: "MD. Saiful Alam Khan",
      position: "CEO",
      number: "+880123456789",
      email: "ceo@ssn.com",
      image: "https://i.ibb.co.com/mFHrvH5W/image.png",
    },
    {
      name: "K.M. Yeamin Saiful Khan",
      position: "CTO",
      number: "+880987654321",
      email: "yeamin@ssn.com",
      image: "https://i.ibb.co.com/mFHrvH5W/image.png",
    },
    {
      name: "KM Yeardin Saiful Khan",
      position: "CMO",
      number: "+880112233445",
      email: "yeardin@ssn.com",
      image: "https://i.ibb.co.com/c9JZvdK/image.png",
    },
    {
      name: "MD. Sahoss Khan",
      position: "Web Developer",
      number: "+8801778030482",
      email: "sahoss@ssn.com",
      image: "https://i.ibb.co.com/DPhL6jBf/image.png",
    },
    {
      name: "MD. Alamin Islam",
      position: "Network Engineer",
      number: "+8801778030482",
      email: "alamin@ssn.com",
      image: "https://i.ibb.co.com/TD9Mw3cf/image.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
          About SSN Internet
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeIn delay-200">
          Delivering lightning-fast internet with reliable FTTH technology, 24/7 support, and secure service to homes and businesses across Bangladesh.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto animate-fadeIn delay-400">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-200 text-sm sm:text-lg leading-relaxed">
            SSN Internet was founded with a simple vision: to bring high-speed, reliable, and secure internet connectivity to every home and business in Bangladesh. 
            Starting in the bustling town of Kushtia, our team faced many challenges, from establishing infrastructure to ensuring customer satisfaction. 
            Through persistence and innovation, we adopted the latest FTTH technology to provide seamless connectivity, allowing our customers to enjoy uninterrupted browsing, streaming, and communication. 

            Over the years, we have expanded our reach across multiple districts, connecting urban centers as well as rural communities. Our commitment to 24/7 customer support ensures that every subscriber receives timely assistance, while our secure systems protect privacy and data integrity. 

            Looking ahead, SSN Internet aims to continue its journey as a leading internet provider, focusing on smart solutions, digital inclusion, and sustainable growth. Our vision is to empower individuals and businesses with fast, reliable, and secure internet, bridging the digital divide and fostering innovation across the country.
          </p>
        </div>
      </section>

      {/* Collaborations & Partnerships Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto animate-fadeIn delay-600">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">Our Collaborations & Partners</h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-6 sm:gap-10">
            {collaborations.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center min-w-[140px] sm:min-w-[180px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 sm:w-20 h-16 sm:h-20 object-contain mb-2"
                />
                <h3 className="text-white font-semibold text-center text-sm sm:text-base">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              display: flex;
              animation: marquee 20s linear infinite;
            }
          `}
        </style>
      </section>

      {/* Team Section - Responsive Table/Card Hybrid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto animate-fadeIn delay-800">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Our team of experts works tirelessly to provide the best internet experience for our customers.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg divide-y divide-gray-700">
            <thead>
              <tr className="text-left text-gray-200">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Position</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {team.map((member, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/20 transition-colors duration-300 text-gray-100"
                >
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
                    />
                    {member.name}
                  </td>
                  <td className="px-6 py-4">{member.position}</td>
                  <td className="px-6 py-4">{member.number}</td>
                  <td className="px-6 py-4">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {team.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-gray-300 text-sm">{member.position}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-gray-400 text-sm">
                <div className="flex items-center gap-2"><Phone size={16} /> {member.number}</div>
                <div className="flex items-center gap-2"><Mail size={16} /> {member.email}</div>
              </div>
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
          .animate-fadeIn.delay-800 { animation-delay: 0.8s; }
        `}
      </style>
    </div>
  );
};

export default About;
