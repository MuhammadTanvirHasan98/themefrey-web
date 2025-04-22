import exImg from "../assets/experience-img.png";
import exBg from "../assets/experience-bg.png";

function Experience() {
  const stats = [
    {
      value: "12+",
      label: "of years experience",
    },
    {
      value: "1200+",
      label: "satisfied client's",
    },
    {
      value: "28+",
      label: "of skill's attorneys",
    },
  ];

  return (
    <section
      className={`w-full  py-16 md:py-24`}
      style={{
        backgroundImage: `url(${exBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 transform transition-all duration-500 hover:scale-105">
          Our Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center transition-all duration-500 hover:scale-105">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={exImg}
                alt="Experience"
                className="absolute inset-0 w-full h-full object-cover rounded-full transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="text-white transition-all duration-500">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              We are working with many years of experience
            </h3>
            <p className="text-white/90 mb-8">
              We are working with so many client's & various type of Company's
              that's give us good reviews
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-purple-500 transition-colors duration-300"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#5403cd] to-purple-500 rounded-3xl p-4 md:p-6 transform transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                <h4 className="text-purple-800 text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </h4>
                <p className="text-purple-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
