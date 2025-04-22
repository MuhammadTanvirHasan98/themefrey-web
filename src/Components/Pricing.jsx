import { Check } from "react-feather";
import pricingBG from "../assets/pricing-bg.png";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Personal License",
      price: "$25",
      features: ["Single Website.", "Lifetime Updates", "6 Months Support"],
    },
    {
      title: "Agency License",
      price: "$50",
      features: ["10 Website.", "Lifetime Updates", "12 Months Support"],
      popular: true,
    },
    {
      title: "Professional License",
      price: "$120",
      features: ["Unlimited Website.", "Lifetime Updates", "Lifetime Support"],
    },
  ];

  return (
    <section className="py-16 px-4 flex items-center">
      <div
        className="max-w-[1600px] mx-auto relative z-10 p-12 rounded-3xl"
        style={{
          backgroundImage: `url(${pricingBG})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto w-full"></div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            Package plane Pricing
          </h2>
          <p className="text-purple-100 text-xl">Choose your best plan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl group cursor-pointer ${
                plan.popular ? "border-4 border-purple-500" : ""
              }`}
            >
              {/* Title with shrink effect on hover using scale */}
              <div className="transition-transform duration-300 group-hover:scale-95">
                <h3 className="text-2xl font-bold text-purple-700 mb-6">
                  {plan.title}
                </h3>
              </div>

              {/* Price with grow effect on hover using scale */}
              <div className="mb-8 transition-transform duration-300 group-hover:scale-110">
                <p className="text-6xl font-bold text-purple-400 group-hover:text-purple-600">
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 min-h-[100px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-purple-700 mt-1">
                      <Check size={18} />
                    </span>
                    <span className="text-purple-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full mt-8 bg-purple-100 hover:bg-purple-700 text-purple-700 hover:text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:shadow-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
