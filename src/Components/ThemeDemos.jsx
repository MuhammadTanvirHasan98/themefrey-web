import theme1 from "../assets/theme1.png";
import theme2 from "../assets/theme2.png";
import theme3 from "../assets/theme3.png";
import theme4 from "../assets/theme4.png";
import theme5 from "../assets/theme5.png";
import theme6 from "../assets/theme6.png";
import theme7 from "../assets/theme7.png";
import theme8 from "../assets/theme8.png";
import theme9 from "../assets/theme9.png";
import theme10 from "../assets/theme10.png";
import theme11 from "../assets/theme11.png";
import theme12 from "../assets/theme12.png";
import themeDemoBG from "../assets/demo-bg.png";
import { useState } from "react";

const ThemeDemos = () => {
  const [activeFilter, setActiveFilter] = useState("WEB");

  const themes = [
    {
      id: 1,
      image: theme1,
      category: "Resturent website",
      type: "Template",
      filter: "WEB",
    },
    {
      id: 2,
      image: theme2,
      category: "Interior Design",
      type: "Template",
      filter: "WEB",
    },
    {
      id: 3,
      image: theme3,
      category: "Food Delivery",
      type: "Template",
      filter: "WEB",
    },
    {
      id: 4,
      image: theme4,
      category: "NFT Marketplace",
      type: "Template",
      filter: "WEB",
    },
    {
      id: 5,
      image: theme5,
      category: "Blog & Magazine",
      type: "Template",
      filter: "WEB",
    },
    {
      id: 6,
      image: theme6,
      category: "Fashion Store",
      type: "Template",
      filter: "WEB",
    },
    {
      id: 7,
      image: theme7,
      category: "E-commerce App",
      type: "App",
      filter: "APP",
    },
    {
      id: 8,
      image: theme8,
      category: "Social Media App",
      type: "App",
      filter: "APP",
    },
    {
      id: 9,
      image: theme9,
      category: "Fitness Tracker",
      type: "App",
      filter: "APP",
    },
    {
      id: 10,
      image: theme10,
      category: "Education App",
      type: "App",
      filter: "APP",
    },
    {
      id: 11,
      image: theme11,
      category: "Travel Booking App",
      type: "App",
      filter: "APP",
    },
    {
      id: 12,
      image: theme12,
      category: "Music Streaming App",
      type: "App",
      filter: "APP",
    },
  ];

  const filteredThemes = themes.filter(
    (theme) => activeFilter === "ALL" || theme.filter === activeFilter
  );

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${themeDemoBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">Theme Demos</h2>

          <div className="inline-flex bg-white rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeFilter === "WEB"
                  ? "bg-purple-500 text-white"
                  : "text-purple-700"
              }`}
              onClick={() => setActiveFilter("WEB")}
            >
              WEB
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeFilter === "APP"
                  ? "bg-purple-500 text-white"
                  : "text-purple-700"
              }`}
              onClick={() => setActiveFilter("APP")}
            >
              APP
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md h-80 flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-t-2xl h-full">
                <img
                  src={theme.image || "/placeholder.svg"}
                  alt={theme.category}
                  className="w-full h-full p-4 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-purple-500 text-white py-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-t-2xl">
                <p className="text-center font-medium">{theme.category}</p>
                <p className="text-center text-sm text-purple-100">
                  {theme.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-purple-500 transition-colors duration-300"
            onClick={() => setActiveFilter("ALL")}
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThemeDemos;
