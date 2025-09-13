import { Server, Tv, Film, Globe, CreditCard, Headphones, Wifi, UserCheck, Shield, Rocket } from "lucide-react";

const Service = () => {
    return (
        <div>
  <section id="services" className="py-16 bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-lg sm:text-xl  text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover our wide range of digital services designed to keep you connected, entertained, and secured.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* FTP Servers */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl animate-wave shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">FTP Servers</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="http://10.16.100.244" className="hover:text-teal-400">📂 ICCFTP</a></li>
              <li><a href="http://172.16.50.4" className="hover:text-teal-400">📂 DhakaFilx</a></li>
              <li><a href="http://circleftp.net" className="hover:text-teal-400">📂 CircleFTP</a></li>
              <li><a href="http://172.27.27.84" className="hover:text-teal-400">📂 WowFTP</a></li>
              <li><a href="http://dhakamovie.com" className="hover:text-teal-400">📂 DhakaFTP</a></li>
            </ul>
          </div>

          {/* Live TV */}
          <div className="bg-white/10 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Tv className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">Live TV</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://bongobd.com" className="hover:text-teal-400">📺 BongoBD</a></li>
              <li><a href="https://iptv.race.net.bd/" className="hover:text-teal-400">📺 BDIX TV</a></li>
              <li><a href="http://tv.roarzone.info" className="hover:text-teal-400">📺 Roarzone TV</a></li>
              <li><a href="https://toffeelive.com/en/live" className="hover:text-teal-400">📺 Toffee</a></li>
              <li><a href="http://tv.roarzone.info" className="hover:text-teal-400">📺 SSN TV</a></li>
            </ul>
          </div>

          {/* OTT Services */}
          <div className="bg-white/10 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Film className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">OTT Platforms</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.chorki.com" className="hover:text-teal-400">🎬 Chorki</a></li>
              <li><a href="https://bongobd.com" className="hover:text-teal-400">🎬 Bongo</a></li>
              <li><a href="https://www.hoichoi.tv" className="hover:text-teal-400">🎬 Hoicoi</a></li>
              <li><a href="https://www.bioscopeplus.com/" className="hover:text-teal-400">🎬 Bioscope+</a></li>
              <li><a href="https://toffeelive.com" className="hover:text-teal-400">🎬 Toffee</a></li>
            </ul>
          </div>

          {/* Smart Bill Payment */}
          <div className="bg-white/10 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">Smart Bill Payment</h3>
            </div>
            <p className="text-sm text-gray-300">
              Pay your internet bills anytime with our seamless online billing system.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white/10 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">24/7 Support</h3>
            </div>
            <p className="text-sm text-gray-300">
              Our dedicated team is always available to help you with any issue.
            </p>
          </div>

          {/* FTTH Technology */}
          <div className="bg-white/10 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">FTTH Technology</h3>
            </div>
            <p className="text-sm text-gray-300">
              Enjoy blazing-fast fiber-to-the-home internet for uninterrupted browsing.
            </p>
          </div>

          {/* Self Care Portal */}
          <div className="bg-white/10 backdrop-blur-md p-6  animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">Self Care Portal</h3>
            </div>
            <p className="text-sm text-gray-300">
              Manage your account, usage, and payments with ease from one place.
            </p>
          </div>

          {/* Security & Privacy */}
          <div className="bg-white/10 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">Secure & Private</h3>
            </div>
            <p className="text-sm text-gray-300">
              We ensure your online activities remain safe with advanced encryption.
            </p>
          </div>

          {/* BDIX Extra Speed */}
          <div className="bg-white/10 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold">BDIX Boost</h3>
            </div>
            <p className="text-sm text-gray-300">
              Extra speed on Facebook, YouTube, and local BDIX content for smooth streaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  
        </div>
    );
};

export default Service;