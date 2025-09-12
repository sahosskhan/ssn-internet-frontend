
import Extra from "./Extra";
import Popups from "./Popups";

const Home = () => {
  const packages = [
    {
      name: "Earth",
      speed: "12 Mbps",
      price: "৳500 / month",
      desc: "Basic plan for browsing, online classes & light use.",
      ribbon: "Starter",
      gradient: "from-green-300 to-lime-400",
      titleColor: "text-green-300",
    },
    {
      name: "Venus",
      speed: "35 Mbps",
      price: "৳1000 / month",
      desc: "Perfect for families and HD streaming. Includes free Talktime, Bongo, Chorki & Real IP.",
      ribbon: "Popular",
      gradient: "from-yellow-300 to-indigo-400",
      titleColor: "text-yellow-300",
    },
    {
      name: "Comets",
      speed: "50 Mbps",
      price: "৳1250 / month",
      desc: "Great for gamers and multi-device users. Includes all extra benefits at no extra cost.",
      ribbon: "Best Value",
      gradient: "from-indigo-400 to-purple-500",
      titleColor: "text-indigo-300",
    },
    {
      name: "Moon",
      speed: "550 Mbps",
      price: "৳2000 / month",
      desc: "For businesses & heavy streamers. Lightning fast internet with all premium features included.",
      ribbon: "Ultra Speed",
      gradient: "from-pink-400 to-red-400",
      titleColor: "text-pink-300",
    },
  ];

  const badges = [
    { label: "Free Talktime", icon: "https://i.ibb.co.com/ns4ZKQvW/1415896117.png" },
    { label: "Free Chorki", icon: "https://i.ibb.co.com/GQsrqg7P/image.png" },
    { label: "Free Bongo", icon: "https://i.ibb.co.com/YFPnMbsP/Untitled-design.png" },
    { label: "Telemedicine", icon: "https://i.ibb.co.com/rGHX9RN1/image.png" },
    { label: "Real IP", icon: "https://i.ibb.co.com/xSw43nW4/image.png" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">
      {/* Hero Heading */}
      <section className="w-full py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400 animate-pulse">
            Stay Connected with SSN Internet
          </span>
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg sm:text-xl  mx-auto leading-relaxed">
          Experience blazing fast internet up to{" "}
          <span className="text-teal-300 font-semibold">100 Mbps</span>.  
          Get <b>Free Talktime, Chorki, Bongo, Neeramoy Telemedicine, and Real IP</b> —  
          all with 24/7 dedicated support.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {badges.map((badge, i) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full 
                         bg-white/10 border border-white/20 backdrop-blur-md 
                         hover:bg-white/20 transition transform hover:scale-110 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img src={badge.icon} alt={badge.label} className="w-4 h-4 object-contain" />
              {badge.label}
            </span>
          ))}
        </div>
      </section>

      {/* Recommended Packages Heading */}
      <section className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Recommended Internet Packages
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl  max-w-2xl mx-auto">
          Choose the best package that fits your lifestyle — fast, reliable, and full of extra benefits.
        </p>
      </section>

      {/* Package Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
             className={`relative flex flex-col justify-between bg-white/10 border border-white/20 
             rounded-2xl p-6 shadow-lg backdrop-blur-xl 
             transition hover:scale-[1.03] hover:shadow-2xl 
             animate-wave min-h-[340px]`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Ribbon */}
              <div
                className={`absolute top-3 right-[-28px] rounded-xl rotate-45 bg-gradient-to-r ${pkg.gradient} 
                            text-[#0b1320] text-[10px] font-bold px-10 py-1 shadow-md`}
              >
                {pkg.ribbon}
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-xl font-bold ${pkg.titleColor}`}>{pkg.name}</h3>
                <div className="text-3xl font-extrabold mt-2">{pkg.speed}</div>
                <div className="text-gray-300 mb-2">{pkg.price}</div>
                <p className="text-sm text-gray-400">{pkg.desc}</p>
              </div>

              {/* Button fixed bottom */}
             {/* Button */}
               <button
                className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] 
                           font-bold shadow-md transition-all duration-500 
                           hover:from-indigo-500 hover:to-teal-400 hover:text-white hover:shadow-2xl hover:-translate-y-1"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
      <Extra/>
      <Popups/>
    </div>
  );
};

export default Home;
