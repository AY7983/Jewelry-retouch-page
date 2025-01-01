import React from "react";
import "../styles/Pricing.css";

const PricingPlans = () => {
  const plans = [
    {
      name: "Premium",
      price: "$60/month",
      description: "Perfect for individuals starting out.",
      features: ["Standard image retouching", "Color correction", "Limited revisions"],
      button: "Get Started With Basic",
    },
    {
      name: "Pro",
      price: "$290/month",
      description: "Ideal for professionals and small teams.",
      features: [
        "Everything in Basic",
        "Advanced corrections",
        "Fixing specifics",
        "Generate clarity",
        "Moderate revisions",
      ],
      button: "Get Started With Pro",
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$480/month",
      description: "Best for large organizations and enterprises.",
      features: [
        "Everything in Pro",
        "Custom edits",
        "Remove elements",
        "Fix sharpness",
        "Unlimited revisions",
      ],
      button: "Get Started With Premium",
    },
  ];

  return (
    <section className="pricing-plans">
      <h2 className="section-title">Affordable Pricing Plans</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className={`plan-card ${plan.isPopular ? "popular" : ""}`} key={index}>
            {plan.isPopular && <span className="badge">Most Popular</span>}
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
