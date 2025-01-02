import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  // Function to filter and display items dynamically
  useEffect(() => {
    const allItems = document.querySelectorAll(".portfolio-item");
    allItems.forEach(item => (item.style.display = "none"));

    if (filter === "all") {
      const categories = ["clipping", "retouching", "color-correction", "model-jewelry"];
      let randomItems = [];

      for (let i = 0; i < 10; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const categoryItems = Array.from(document.querySelectorAll(`.portfolio-item.${randomCategory}`));

        if (categoryItems.length > 0) {
          const randomItem = categoryItems[Math.floor(Math.random() * categoryItems.length)];
          if (!randomItems.includes(randomItem)) randomItems.push(randomItem);
        }
      }

      randomItems.forEach(item => (item.style.display = "block"));
    } else {
      const filteredItems = document.querySelectorAll(`.portfolio-item.${filter}`);
      filteredItems.forEach(item => (item.style.display = "block"));
    }
  }, [filter]);

  const categories = [
    { label: "All", value: "all", color: "#CA0994" },
    { label: "Clipping Path", value: "clipping", color: "#CA0994" },
    { label: "Retouching", value: "retouching", color: "#CA0994" },
    { label: "Color Correction", value: "color-correction", color: "#CA0994" },
    { label: "Model Jewelry", value: "model-jewelry", color: "#CA0994" }
  ];

  const portfolioItems = {
    clipping: [
      "clippingpath1.jpg",
      "cp-2.jpg",
      "cp-3.jpg",
      "cp-4.jpg",
      "cp-5.jpg",
      "cp-6.jpg"
    ],
    retouching: [
      "retouch1.jpg",
      "retouch2.jpg",
      "retouch3.jpg",
      "retouch4.jpg",
      "retouch5.jpg",
      "retouch6.jpg"
    ],
    "color-correction": [
      "colo1.jpg",
      "colo2.jpg",
      "color3.jpg",
      "color4.jpg",
      "color5.jpg",
      "color6.jpg"
    ],
    "model-jewelry": [
      "model1.jpg",
      "model2.jpg",
      "model3.jpg",
      "model4.jpg",
      "model5.jpg",
      "model6 (2).jpg"
    ]
  };

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="portfoliocss">Portfolio</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map(({ label, value, color }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            style={{ color, fontSize: "25px" }}
          >
            {label}
            {value !== "model-jewelry" && <span className="pipe">|</span>}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="portfolio">
        {Object.entries(portfolioItems).map(([category, images]) =>
          (filter === "all" || filter === category) &&
          images.map((image, index) => (
            <motion.div
              key={index}
              className={`portfolio-item ${category}`}
              style={{ display: "none" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the item is in view
              transition={{ duration: 0.6 }}
            >
              <img
                src={`../images/${image}`}
                alt={`${category.replace("-", " ")} ${index + 1}`}
              />
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
