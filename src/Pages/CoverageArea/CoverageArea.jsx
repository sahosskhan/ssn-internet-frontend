import { Search, X } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const locationData = {
  "Khulna Division": {
    "Kushtia District": [
      "Kumarkhali Upazila",
      "Kushtia Sadar Upazila",
      "Khoksa Upazila",
      "Daulatpur Upazila",
      "Bheramara Upazila",
      "Mirpur Upazila",
    ],
    "Khulna District": [
      "Koyra Upazila",
      "Dumuria Upazila",
      "Terokhada Upazila",
      "Dacope Upazila",
      "Dighalia Upazila",
      "Paikgachha Upazila",
      "Phultala Upazila",
      "Batiaghata Upazila",
      "Rupsa Upazila",
    ],
    "Chuadanga District": [
      "Alamdanga Upazila",
      "Chuadanga Sadar Upazila",
      "Jibannagar Upazila",
      "Damurhuda Upazila",
    ],
    "Jhenaidah District": [
      "Kaliganj Upazila",
      "Kotchandpur Upazila",
      "Jhenaidah Sadar Upazila",
      "Maheshpur Upazila",
      "Shailkupa Upazila",
      "Harinakundu Upazila",
    ],
    "Narail District": [
      "Kalia Upazila",
      "Narail Sadar Upazila",
      "Lohagara Upazila",
    ],
    "Bagerhat District": [
      "Kachua Upazila",
      "Chitalmari Upazila",
      "Fakirhat Upazila",
      "Bagerhat Sadar Upazila",
      "Mongla Upazila",
      "Morelganj Upazila",
      "Mollahat Upazila",
      "Rampal Upazila",
      "Sharankhola Upazila",
    ],
    "Magura District": [
      "Magura Sadar Upazila",
      "Mohammadpur Upazila",
      "Shalikha Upazila",
      "Sreepur Upazila",
    ],
    "Meherpur District": [
      "Gangni Upazila",
      "Meherpur Sadar Upazila",
      "Mujibnagar Upazila",
    ],
    "Jashore District": [
      "Abhaynagar Upazila",
      "Keshabpur Upazila",
      "Chougachha Upazila",
      "Jhikargachha Upazila",
      "Bagherpara Upazila",
      "Manirampur Upazila",
      "Jashore Sadar Upazila",
      "Sharsha Upazila",
    ],
    "Satkhira District": [
      "Ashashuni Upazila",
      "Kalaroa Upazila",
      "Kaliganj Upazila",
      "Tala Upazila",
      "Debhata Upazila",
      "Shyamnagar Upazila",
      "Satkhira Sadar Upazila",
    ],
  },

  "Dhaka Division": {
    "Dhaka District": [
      "Dhanmondi Upazila",
      "Savar Upazila",
      "Dohar Upazila",
      "Keraniganj Upazila",
      "Nawabganj Upazila",
    ],
    "Faridpur District": [
      "Faridpur Sadar Upazila",
      "Boalmari Upazila",
      "Alfadanga Upazila",
      "Madhukhali Upazila",
      "Nagarkanda Upazila",
      "Saltha Upazila",
      "Bhanga Upazila",
      "Char Bhadrasan Upazila",
      "Sadarpur Upazila",
    ],
    "Rajbari District": [
      "Rajbari Sadar Upazila",
      "Goalanda Upazila",
      "Pangsha Upazila",
      "Baliakandi Upazila",
      "Kalukhali Upazila",
    ],
    "Gopalganj District": [
      "Gopalganj Sadar Upazila",
      "Muksudpur Upazila",
      "Kashiani Upazila",
      "Kotalipara Upazila",
      "Tungipara Upazila",
    ],
    "Madaripur District": [
      "Madaripur Sadar Upazila",
      "Shibchar Upazila",
      "Rajoir Upazila",
      "Kalkini Upazila",
      "Dasar Upazila",
    ],
    "Shariatpur District": [
      "Shariatpur Sadar Upazila",
      "Zajira Upazila",
      "Naria Upazila",
      "Bhedarganj Upazila",
      "Damudya Upazila",
      "Gosairhat Upazila",
    ],
    "Manikganj District": [
      "Manikganj Sadar Upazila",
      "Shibaloy Upazila",
      "Ghior Upazila",
      "Daulatpur Upazila",
      "Saturia Upazila",
      "Singair Upazila",
      "Harirampur Upazila",
    ],
    "Munshiganj District": [
      "Munshiganj Sadar Upazila",
      "Sreenagar Upazila",
      "Lohajang Upazila",
      "Sirajdikhan Upazila",
      "Tongibari Upazila",
      "Gazaria Upazila",
    ],
    "Gazipur District": [
      "Gazipur Sadar Upazila",
      "Kaliakair Upazila",
      "Kaliganj Upazila",
      "Kapasia Upazila",
      "Sreepur Upazila",
    ],
    "Narayanganj District": [
      "Narayanganj Sadar Upazila",
      "Bandar Upazila",
      "Sonargaon Upazila",
      "Araihazar Upazila",
      "Rupganj Upazila",
    ],
    "Narsingdi District": [
      "Narsingdi Sadar Upazila",
      "Belabo Upazila",
      "Monohardi Upazila",
      "Shibpur Upazila",
      "Raipura Upazila",
      "Palash Upazila",
    ],
    "Tangail District": [
      "Tangail Sadar Upazila",
      "Kalihati Upazila",
      "Ghatail Upazila",
      "Basail Upazila",
      "Gopalpur Upazila",
      "Mirzapur Upazila",
      "Bhuapur Upazila",
      "Nagarpur Upazila",
      "Madhupur Upazila",
      "Sakhipur Upazila",
      "Delduar Upazila",
      "Dhanbari Upazila",
    ],
    "Kishoreganj District": [
      "Kishoreganj Sadar Upazila",
      "Austagram Upazila",
      "Itna Upazila",
      "Karimganj Upazila",
      "Katiadi Upazila",
      "Kuliarchar Upazila",
      "Tarail Upazila",
      "Nikli Upazila",
      "Pakundia Upazila",
      "Bajitpur Upazila",
      "Mithamain Upazila",
      "Hossainpur Upazila",
      "Bhairab Upazila",
    ],
  },
"Chattogram Division": {
  "Chattogram District": [
    "Anwara Upazila",
    "Karnaphuli Upazila",
    "Chandanaish Upazila",
    "Patiya Upazila",
    "Fatikchhari Upazila",
    "Banshkhali Upazila",
    "Boalkhali Upazila",
    "Mirsharai Upazila",
    "Rauzan Upazila",
    "Rangunia Upazila",
    "Lohagara Upazila",
    "Sandwip Upazila",
    "Satkania Upazila",
    "Sitakunda Upazila",
    "Hathazari Upazila",
  ],
  "Cox's Bazar District": [
    "Ukhiya Upazila",
    "Cox's Bazar Sadar Upazila",
    "Kutubdia Upazila",
    "Chakaria Upazila",
    "Teknaf Upazila",
    "Pekua Upazila",
    "Moheshkhali Upazila",
    "Ramu Upazila",
    "Eidgaon Upazila",
  ],
  "Bandarban District": [
    "Alikadam Upazila",
    "Thanchi Upazila",
    "Naikhongchhari Upazila",
    "Bandarban Sadar Upazila",
    "Ruma Upazila",
    "Rowangchhari Upazila",
    "Lama Upazila",
  ],
  "Khagrachhari District": [
    "Khagrachhari Sadar Upazila",
    "Dighinala Upazila",
    "Panchhari Upazila",
    "Mahalchhari Upazila",
    "Matiranga Upazila",
    "Manikchhari Upazila",
    "Ramgarh Upazila",
    "Lakshmichhari Upazila",
    "Guimara Upazila",
  ],
  "Rangamati District": [
    "Kaukhali Upazila",
    "Kaptai Upazila",
    "Juraichhari Upazila",
    "Naniarchar Upazila",
    "Barkal Upazila",
    "Baghaichhari Upazila",
    "Bilaichhari Upazila",
    "Rangamati Sadar Upazila",
    "Rajsthali Upazila",
    "Longadu Upazila",
  ],
},
"Barishal Division": {
  "Barishal District": [
    "Agailjhara Upazila",
    "Bakerganj Upazila",
    "Babuganj Upazila",
    "Banaripara Upazila",
    "Gournadi Upazila",
    "Hijla Upazila",
    "Barishal Sadar Upazila",
    "Mehendiganj Upazila",
    "Muladi Upazila",
    "Uzirpur Upazila",
  ],
  "Barguna District": [
    "Barguna Sadar Upazila",
    "Amtali Upazila",
    "Taltali Upazila",
    "Patharghata Upazila",
    "Betagi Upazila",
    "Bamna Upazila",
  ],
  "Bhola District": [
    "Char Fasson Upazila",
    "Tazumuddin Upazila",
    "Daulatkhan Upazila",
    "Borhanuddin Upazila",
    "Bhola Sadar Upazila",
    "Monpura Upazila",
    "Lalmohan Upazila",
  ],
  "Jhalokathi District": [
    "Kathalia Upazila",
    "Jhalokathi Sadar Upazila",
    "Nalchiti Upazila",
    "Rajapur Upazila",
  ],
  "Patuakhali District": [
    "Patuakhali Sadar Upazila",
    "Bauphal Upazila",
    "Dashmina Upazila",
    "Galachipa Upazila",
    "Kalapara Upazila",
    "Mirzaganj Upazila",
    "Dumki Upazila",
    "Rangabali Upazila",
  ],
  "Pirojpur District": [
    "Kaukhali Upazila",
    "Nazirpur Upazila",
    "Nesarabad (Swarupkathi) Upazila",
    "Pirojpur Sadar Upazila",
    "Bhandaria Upazila",
    "Mathbaria Upazila",
    "Indurkani Upazila",
  ],
},
"Mymensingh Division": {
  "Mymensingh District": [
    "Mymensingh Sadar Upazila",
    "Trishal Upazila",
    "Gouripur Upazila",
    "Muktagacha Upazila",
    "Phulpur Upazila",
    "Tarakanda Upazila",
    "Haluaghat Upazila",
    "Bhaluka Upazila",
    "Phulbaria Upazila",
    "Gafargaon Upazila",
    "Ishwarganj Upazila",
    "Nandail Upazila",
    "Dhobaura Upazila",
  ],
  "Sherpur District": [
    "Jhenaigati Upazila",
    "Nakla Upazila",
    "Nalitabari Upazila",
    "Sherpur Sadar Upazila",
    "Sreebardi Upazila",
  ],
  "Jamalpur District": [
    "Jamalpur Sadar Upazila",
    "Baksiganj Upazila",
    "Dewanganj Upazila",
    "Islampur Upazila",
    "Madariganj Upazila",
    "Melandah Upazila",
    "Sarisbari Upazila",
  ],
  "Netrokona District": [
    "Atpara Upazila",
    "Barhatta Upazila",
    "Durgapur Upazila",
    "Khaliajuri Upazila",
    "Kalamakanda Upazila",
    "Kendua Upazila",
    "Madan Upazila",
    "Mohanganj Upazila",
    "Netrokona Sadar Upazila",
    "Purba Dhalai Upazila",
  ],
},
"Rangpur Division": {
  "Rangpur District": [
    "Rangpur Sadar Upazila",
    "Badarganj Upazila",
    "Gangachara Upazila",
    "Kaunia Upazila",
    "Mithapukur Upazila",
    "Pirganj Upazila",
    "Pirganj Upazila",
    "Taraganj Upazila",
  ],
  "Dinajpur District": [
    "Birampur Upazila",
    "Birganj Upazila",
    "Bochaganj Upazila",
    "Phulbari Upazila",
    "Chirirbandar Upazila",
    "Ghoraghat Upazila",
    "Hakimpur Upazila",
    "Kaharol Upazila",
    "Khansama Upazila",
    "Dinajpur Sadar Upazila",
    "Nawabganj Upazila",
    "Parbatipur Upazila",
    "Biral Upazila",
  ],
  "Gaibandha District": [
    "Gaibandha Sadar Upazila",
    "Phulchhari Upazila",
    "Gobindaganj Upazila",
    "Palashbari Upazila",
    "Sadullapur Upazila",
    "Saghata Upazila",
    "Sundarganj Upazila",
  ],
  "Kurigram District": [
    "Ulipur Upazila",
    "Kurigram Sadar Upazila",
    "Char Rajibpur Upazila",
    "Chilmari Upazila",
    "Nageshwari Upazila",
    "Phulbari Upazila",
    "Bhurungamari Upazila",
    "Rajarhat Upazila",
    "Raomari Upazila",
  ],
  "Nilphamari District": [
    "Nilphamari Sadar Upazila",
    "Domar Upazila",
    "Dimla Upazila",
    "Jaldhaka Upazila",
    "Kishoreganj Upazila",
    "Saidpur Upazila",
  ],
  "Panchagarh District": [
    "Debiganj Upazila",
    "Tetulia Upazila",
    "Panchagarh Sadar Upazila",
    "Atwari Upazila",
    "Boda Upazila",
  ],
  "Thakurgaon District": [
    "Thakurgaon Sadar Upazila",
    "Pirganj Upazila",
    "Baliadangi Upazila",
    "Ranishankail Upazila",
    "Haripur Upazila",
  ],
  "Lalmonirhat District": [
    "Aditmari Upazila",
    "Kaliganj Upazila",
    "Patgram Upazila",
    "Lalmonirhat Sadar Upazila",
    "Hatibandha Upazila",
  ],
},
"Rajshahi Division": {
  "Rajshahi District": [
    "Bagha Upazila",
    "Puthia Upazila",
    "Paba Upazila",
    "Bagmara Upazila",
    "Tanore Upazila",
    "Mohanpur Upazila",
    "Charghat Upazila",
    "Godagari Upazila",
    "Durgapur Upazila",
  ],
  "Natore District": [
    "Natore Sadar Upazila",
    "Bagatipara Upazila",
    "Baraigram Upazila",
    "Gurudaspur Upazila",
    "Lalpur Upazila",
    "Singra Upazila",
    "Naldanga Upazila",
  ],
  "Chapainawabganj District": [
    "Chapainawabganj Sadar Upazila",
    "Gomastapur Upazila",
    "Shibganj Upazila",
    "Nachole Upazila",
    "Bholahat Upazila",
  ],
  "Joypurhat District": [
    "Panchbibi Upazila",
    "Kalai Upazila",
    "Khetlal Upazila",
    "Akkelpur Upazila",
    "Joypurhat Sadar Upazila",
  ],
  "Naogaon District": [
    "Patnitala Upazila",
    "Dhamurhat Upazila",
    "Mahadebpur Upazila",
    "Porsha Upazila",
    "Sapahar Upazila",
    "Badalgachhi Upazila",
    "Manda Upazila",
    "Niamatpur Upazila",
    "Atrai Upazila",
    "Raninagar Upazila",
    "Naogaon Sadar Upazila",
  ],
  "Bogra District": [
    "Adamdighi Upazila",
    "Bogra Sadar Upazila",
    "Dhunat Upazila",
    "Dupchanchia Upazila",
    "Gabtali Upazila",
    "Kahaloo Upazila",
    "Nandigram Upazila",
    "Sariakandi Upazila",
    "Sherpur Upazila",
    "Shibganj Upazila",
    "Sonatala Upazila",
    "Shahjanpur Upazila",
  ],
  "Pabna District": [
    "Atgharia Upazila",
    "Ishwardi Upazila",
    "Chatmohar Upazila",
    "Pabna Sadar Upazila",
    "Faridpur Upazila",
    "Bera Upazila",
    "Bhangura Upazila",
    "Santhia Upazila",
    "Sujanagar Upazila",
  ],
  "Sirajganj District": [
    "Ullapara Upazila",
    "Kazipur Upazila",
    "Kamarhnd Upazila",
    "Chauhali Upazila",
    "Tarash Upazila",
    "Belkuchi Upazila",
    "Raiganj Upazila",
    "Shahjadpur Upazila",
    "Sirajganj Sadar Upazila",
  ],
},
"Sylhet Division": {
  "Sylhet District": [
    "Sylhet Sadar Upazila",
    "Dakshin Surma Upazila",
    "Beanibazar Upazila",
    "Balaganj Upazila",
    "Fenchuganj Upazila",
    "Golapganj Upazila",
    "Zakiganj Upazila",
    "Kanaighat Upazila",
    "Jaintiapur Upazila",
    "Goainhat Upazila",
    "Companiganj Upazila",
  ],
  "Sunamganj District": [
    "Sunamganj Sadar Upazila",
    "Bishwambharpur Upazila",
    "Tahirpur Upazila",
    "Madhyanagar Upazila",
    "Dharmapasha Upazila",
    "Jamalganj Upazila",
    "Shantiganj Upazila",
    "Dewarabazar Upazila",
    "Chatak Upazila",
    "Jagannathpur Upazila",
    "Dirai Upazila",
    "Shalla Upazila",
  ],
  "Habiganj District": [
    "Habiganj Sadar Upazila",
    "Nabiganj Upazila",
    "Bahubal Upazila",
    "Chunarughat Upazila",
    "Shaistaganj Upazila",
    "Madhabpur Upazila",
    "Lakhai Upazila",
    "Baniachang Upazila",
    "Azmiriganj Upazila",
  ],
  "Moulvibazar District": [
    "Moulvibazar Sadar Upazila",
    "Rajnagar Upazila",
    "Sreemangal Upazila",
    "Kamalgonj Upazila",
    "Kulaura Upazila",
    "Juri Upazila",
    "Barlekha Upazila",
  ],
},
};

const availableAreas = [
  { name: "Kushtia Sadar Upazila", district: "Kushtia District", division: "Khulna Division" },
  { name: "Bheramara Upazila", district: "Kushtia District", division: "Khulna Division" },
  { name: "Mirpur Upazila", district: "Kushtia District", division: "Khulna Division" },
];

const CustomSelect = ({ options, value, onChange, placeholder, disabled }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <button
        onClick={() => !disabled && setOpen(!open)}
        className={`w-full p-3 rounded-xl ${
          disabled ? "bg-gray-500/30 cursor-not-allowed" : "bg-white/30"
        } backdrop-blur-md border border-white/20 text-white flex justify-between items-center hover:bg-white/40 transition`}
      >
        {value || placeholder}
        <span className="ml-2">&#9660;</span>
      </button>

      {open && (
        <ul className="absolute top-full left-0 w-full mt-1 max-h-60 overflow-auto rounded-xl bg-white text-black border border-gray-200 shadow-lg z-50">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200 transition"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CoverageArea = () => {
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");

  const districts = division ? Object.keys(locationData[division]) : [];
  const upazilas = division && district ? locationData[division][district] : [];

  const handleSearch = () => {
    if (!division || !district || !upazila) {
      toast.error("⚠️ Please fill all fields!");
      return;
    }

    const found = availableAreas.find(
      (area) =>
        area.division === division &&
        area.district === district &&
        area.name === upazila
    );

    if (found) {
      toast.success(`🎉 Congrats! Our service is available in ${upazila}.`);
    } else {
      toast.error(`😔 Sorry! Our service is not available in ${upazila}.`);
    }
  };

  const handleClear = () => {
    setDivision("");
    setDistrict("");
    setUpazila("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Coverage Check</h2>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Want to know if our service is available in your area? Select Division, District and Upazila to search easily.
        </p>

        {/* Search Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-4 mb-4 relative">
            <CustomSelect
              options={Object.keys(locationData)}
              value={division}
              onChange={(val) => {
                setDivision(val);
                setDistrict("");
                setUpazila("");
              }}
              placeholder="Choose Division"
            />
            <CustomSelect
              options={districts}
              value={district}
              onChange={(val) => {
                setDistrict(val);
                setUpazila("");
              }}
              placeholder="Choose District"
              disabled={!division}
            />
            <CustomSelect
              options={upazilas}
              value={upazila}
              onChange={setUpazila}
              placeholder="Choose Upazila"
              disabled={!district}
            />
          </div>

          <div className="flex gap-4 mt-4 flex-wrap">
            <button
              onClick={handleSearch}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-indigo-500 font-semibold hover:scale-105 transition"
            >
              <Search className="w-5 h-5" /> Search Coverage
            </button>
            <button
              onClick={handleClear}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-500 font-semibold hover:scale-105 transition"
            >
              <X className="w-5 h-5" /> Clear Search
            </button>
          </div>
        </div>

        {/* Available Areas */}
        <h3 className="text-2xl font-semibold mb-6 relative z-0">Available Areas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-0">
          {availableAreas.map((area) => (
            <div
              key={area.name}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:scale-105 transition"
            >
              <h4 className="font-bold text-lg mb-2">{area.name}</h4>
              <p className="text-sm text-gray-300">
                {area.district}, {area.division}
              </p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden relative z-0">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365019.0!2d89.081382!3d23.905602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe860b2ef0aaf9%3A0x0!2sBheramara!5e0!3m2!1sen!2sbd!4v1694555555555!5m2!1sen!2sbd`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
