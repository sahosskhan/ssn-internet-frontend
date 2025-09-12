
const packages = [
  {
    name: "Earth",
    price: 500,
    speed: "12 Mbps",
    talktime: "50 min",
    telemedicine: "Free",
    bongo: "No",
    chorki: "No",
    realIp: "No",
  },
  {
    name: "Earth Plus",
    price: 525,
    speed: "15 Mbps",
    talktime: "75 min",
    telemedicine: "Free",
    bongo: "No",
    chorki: "No",
    realIp: "No",
  },
  {
    name: "Sun",
    price: 600,
    speed: "20 Mbps",
    talktime: "100 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "No",
    realIp: "No",
  },
  {
    name: "Haumea",
    price: 650,
    speed: "25 Mbps",
    talktime: "150 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "No",
    realIp: "No",
  },
    {
    name: "Mercury",
    price:750,
    speed: "35 Mbps",
    talktime: "200 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "No",
    realIp: "No",
  },
  {
    name: "Venus",
    price: 1000,
    speed: "50 Mbps",
    talktime: "250 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "Free",
    realIp: "Free",
  },
  {
    name: "Comets",
    price: 1200,
    speed: "65 Mbps",
    talktime: "300 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "Free",
    realIp: "Free",
  },
  {
    name: "Mars",
    price: 1500,
    speed: "80 Mbps",
    talktime: "400 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "Free",
    realIp: "Free",
  },
  {
    name: "Jupiter",
    price: 1750,
    speed: "90 Mbps",
    talktime: "450 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "Free",
    realIp: "Free",
  },
  {
    name: "Moon",
    price: 2000,
    speed: "100 Mbps",
    talktime: "550 min",
    telemedicine: "Free",
    bongo: "Free",
    chorki: "Free",
    realIp: "Free",
  },
];

const features = [
  {
    key: "talktime",
    label: "Talktime",
    icon: (
      <div className="flex items-center justify-center w-6 h-6">
        <img
          src="https://i.ibb.co.com/ns4ZKQvW/1415896117.png"
          alt="Talktime"
          className="w-5 h-5 object-contain"
        />
      </div>
    ),
  },
  {
    key: "telemedicine",
    label: "Telemedicine",
    icon: (
      <div className="flex items-center justify-center w-6 h-6">
        <img
          src="https://i.ibb.co.com/rGHX9RN1/image.png"
          alt="Telemedicine"
          className="w-5 h-5 object-contain"
        />
      </div>
    ),
  },
  {
    key: "bongo",
    label: "Bongo",
    icon: (
      <div className="flex items-center justify-center w-6 h-6">
        <img
          src="https://i.ibb.co.com/YFPnMbsP/Untitled-design.png"
          alt="Bongo"
          className="w-5 h-5 object-contain"
        />
      </div>
    ),
  },
  {
    key: "chorki",
    label: "Chorki",
    icon: (
      <div className="flex items-center justify-center w-6 h-6">
        <img
          src="https://i.ibb.co.com/GQsrqg7P/image.png"
          alt="Chorki"
          className="w-5 h-5 object-contain"
        />
      </div>
    ),
  },
  {
    key: "realIp",
    label: "Real IP",
    icon: (
      <div className="flex items-center justify-center w-6 h-6">
        <img
          src="https://i.ibb.co.com/xSw43nW4/image.png"
          alt="Real IP"
          className="w-5 h-5 object-contain"
        />
      </div>
    ),
  },
];


const OurPackages = () => {
  return (
   <section className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen py-16 px-6">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Our Internet Packages
        </h2>
        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          Choose the best package that fits your lifestyle — fast, reliable, and full of extra benefits.
        </p>
      </div>

      {/* Package Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="group relative bg-[#1a2238]/80 border border-white/10 
                       rounded-2xl shadow-lg p-8 text-center transition-all duration-500 
                       hover:scale-105 hover:shadow-2xl 
                       hover:border-indigo-400/40 backdrop-blur-xl"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Package Name */}
              <h3 className="text-2xl font-bold text-teal-300 group-hover:text-indigo-300">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-extrabold mt-4 text-white">
                ৳{pkg.price}
                <span className="text-sm font-medium text-gray-400"> /month</span>
              </p>

              {/* Speed */}
              <p className="mt-2 text-lg text-indigo-200 font-semibold">{pkg.speed}</p>

              {/* Features */}
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
  {features.map((f, idx) => {
    // Determine color
    let valueColor = "text-green-400"; // default green
    if (f.key !== "talktime") {
      valueColor = pkg[f.key] === "Free" ? "text-green-400" : "text-red-500";
    }
    
    return (
      <li
        key={idx}
        className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
      >
        <span className="flex items-center gap-2 font-medium">
          {f.icon} {f.label}
        </span>
        <span className={`font-semibold ${valueColor}`}>
          {pkg[f.key]}
        </span>
      </li>
    );
  })}
</ul>

              {/* Button */}
               <button
                className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] 
                           font-bold shadow-md transition-all duration-500 
                           hover:from-indigo-500 hover:to-teal-400 hover:text-white hover:shadow-2xl hover:-translate-y-1"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPackages;
