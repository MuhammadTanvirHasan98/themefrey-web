import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamBG from "../assets/team-bg.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Mahi Raian",
      role: "UI / UX",
      specialization: "Designer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Siddikee Shawon",
      role: "Developer",
      specialization: "Mern Stack",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Muhammad Tanvir Hasan",
      role: "Developer",
      specialization: "Mern Stack",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Homayra Anjum Tamanna",
      role: "Developer",
      specialization: "Front End",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Tawhid Islam",
      role: "Developer",
      specialization: "Front End",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage: `url(${teamBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Our Team</h2>
          <p className="text-purple-100">Meet our expert team members</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-56 h-56 bg-white rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              {/* Card Content - will move up on hover */}
              <div className="flex flex-col items-center justify-center h-full px-4 transition-all duration-300 transform group-hover:-translate-y-6 group-hover:scale-95">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-800 to-purple-500 mb-4 flex items-center justify-center group-hover:w-5 group-hover:h-5 transition-all duration-300 "></div>
                <h3 className="text-purple-700 font-medium text-center transition-all duration-300 group-hover:text-sm">
                  {member.name}
                </h3>
                <p className="text-purple-800 text-3xl font-bold text-center transition-all duration-300 group-hover:text-lg">
                  {member.role}
                </p>
                <p className="text-purple-600 text-center transition-all duration-300 group-hover:text-xs">
                  {member.specialization}
                </p>
              </div>

              {/* Social Media Icons - will appear from bottom on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-purple-800 text-white py-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 rounded-t-2xl ">
                <p className="text-center text-sm mb-2">Follow</p>
                <div className="flex justify-center space-x-4">
                  <FaFacebook className="text-white hover:text-purple-300 transition-colors text-2xl" />
                  <FaInstagram className="text-white hover:text-purple-300 transition-colors text-2xl" />
                  <FaLinkedin className="text-white hover:text-purple-300 transition-colors text-2xl" />
                  <FaTwitter className="text-white hover:text-purple-300 transition-colors text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
