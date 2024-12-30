import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import "../styles/Service.css";

const Services = () => {
  // Ref for the section
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 }); // Trigger when 20% of the section is visible

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardHover = {
    hover: { scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <section
      id="services"
      className="jewelry-services text-center py-5"
      ref={sectionRef}
    >
      <Container>
        {/* Section Title */}
        <motion.h1
          className="title mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          Jewelry Retouching Services
        </motion.h1>
        <motion.p
          className="subtitle mb-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Making Your Jewelry Photos Look Amazing and Detailed
        </motion.p>

        {/* Section Description */}
        <motion.div
          className="description-wrapper"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p className="description text-start" variants={fadeIn}>
            We specialize in high-end jewelry retouching that enhances the
            beauty and detail of your jewelry pieces.
          </motion.p>
          <motion.p className="description text-start" variants={fadeIn}>
            Whether you're a retailer, designer, or manufacturer, our expert
            team ensures that your images stand out with unmatched clarity and
            sophistication.
          </motion.p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          className="key-points mb-5 text-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {[
            "We perfect every detail to highlight the true beauty of your high-end jewelry.",
            "Our high-quality retouching brings out the finest details and brilliance in your pieces.",
            "We ensure your jewelry photos look stunning and professionally polished.",
          ].map((point, index) => (
            <motion.div
              key={index}
              className="list-group-item"
              variants={fadeIn}
            >
              <span className="icon write">✔</span>
              <span className="content">{point}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Categories Grid */}
        <Row className="mt-5">
          {[
            "Rings",
            "Earrings",
            "Bracelets",
            "Reception",
            "Bangles",
            "Charms",
          ].map((service, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <motion.div
                className="service-item-wrapper"
                whileHover="hover"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardHover}
              >
                <Card className="service-item shadow-sm">
                  <Card.Img
                    variant="top"
                    src={`./images/S-${index + 1}.png`}
                    alt={service}
                    className="img-fluid mb-2"
                  />
                  <Card.Body>
                    <Card.Title className="service-title">{service}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
