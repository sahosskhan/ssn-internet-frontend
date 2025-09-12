import { Link } from "react-router-dom";


const careers = [
  {
    title: "Network Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Responsible for maintaining and optimizing our network infrastructure. Must have knowledge of routers, switches, and internet protocols.",
  },
  {
    title: "Customer Support Specialist",
    location: "Remote",
    type: "Full-time",
    description:
      "Provide assistance to our customers via chat, email, and phone. Excellent communication skills are a must.",
  },
  {
    title: "Marketing Executive",
    location: "Chittagong, Bangladesh",
    type: "Full-time",
    description:
      "Plan and execute marketing campaigns, social media promotions, and customer engagement strategies.",
  },
];

const CareerPage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join Our Team
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At SSN Internet, we value talented, creative, and motivated individuals.
          Explore current openings and become a part of our growing team.
        </p>
      </section>

      {/* Job Listings */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {careers.map((job, idx) => (
            <div
              key={idx}
              className="bg-[#1a1c2b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="mb-1">
                <span className="font-bold">Location:</span> {job.location}
              </p>
              <p className="mb-3">
                <span className="font-bold">Type:</span> {job.type}
              </p>
              <p className="mb-4">{job.description}</p>
              <Link to='https://www.facebook.com/sahosskhan/'>
              <button
                className="px-4 py-2 bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] font-bold rounded-full hover:scale-105 transition-transform"
              >
                Apply Now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

   
    </div>
  );
};

export default CareerPage;
