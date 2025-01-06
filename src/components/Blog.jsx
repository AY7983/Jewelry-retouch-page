import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import "../styles/Blogs.css"; // Assuming you're going to style it separately

const blogs = [
  {
    title: "Expert Necklace Photo Retouching: Enhance the Beauty of Your Jewelry",
    description: "Necklace Photo Retouching: Transform Your Jewelry Photos into Stunning Works of Art",
    category: "jewelry-editing",
    image: "./images/b-2.webp", // Replace with actual image path
  },
  {
    title: "Professional Bangle Photo Retouching: Perfect Your Jewelry Photography",
    description: "Transform your bangle images with expert retouching, shine, and color to create captivating, high-quality jewelry photos",
    category: "photo-editing",
    image: "./images/h-1.webp", // Replace with actual image path
  },
  {
    title: "Expert Ring Photo Retouching: Perfect Your Jewelry Shots nicely",
    description: "Enhance your ring images with professional retouching, improving details, and colors for flawless, high-quality jewelry photos",
    category: "jewelry-editing",
    image: "./images/b-3.webp", // Replace with actual image path
  },
];

const Blogs = () => {
  return (
    <section className="blogs" id="blog">
      <h1>Our Blogs</h1>

      <div className="blog-list">
        {blogs.map((blog, index) => {
          // useInView for each blog item
          const { ref, inView } = useInView({
            triggerOnce: true, // Trigger only once when the element comes into view
            threshold: 0.2, // Trigger when 20% of the element is in view
          });

          return (
            <motion.div
              key={index}
              ref={ref} // Attach the ref to the motion.div
              className="blog-item"
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below
              animate={{
                opacity: inView ? 1 : 0, // Animate opacity when in view
                y: inView ? 0 : 50, // Slide to its original position when in view
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Delay staggered animation based on index
              }}
            >
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <span className="category">{blog.category}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
