import React from "react";
import styles from "./testimonial.module.css";
import Image from "next/image";
import Client1 from "../../../public/Images/client1.png";
import Client2 from "../../../public/Images/client2.png";
import Client3 from "../../../public/Images/client3.png";
import { Row, Col } from "antd";

function Testimonial() {
  const testimonials = [
    {
      name: "Hiroshi Murakami",
      position: "DOS, IPS",
      description:
        "Najam has been an excellent developer across multiple projects, handling front-end, back-end, and app development with precision. His work is high-quality, delivered on time, and always meets expectations. Highly recommend him for any development needs!",
      image: Client1,
    },
    {
      name: "Ghias Ali",
      position: "CTO, Trisage Solutions",
      description:
        "Working with Najam has been a great experience! His expertise in web and app development, along with his commitment to quality and timely delivery, makes him stand out. A reliable and skilled developer—highly recommend!",
      image: Client2,
    },
    {
      name: "Ethan Walker",
      position: "Manager, TechNova",
      description:
        "Najam is an exceptional developer with a strong command over front-end and back-end technologies. His attention to detail and problem-solving skills ensure every project is delivered flawlessly. Highly recommended for any development work!",
      image: Client3,
    },
  ];

  return (
    <div id="testimonials" className="myContainer">
      <div className={styles.testimonial_main}>
        <div>
          <p className="text">What my Clients say</p>
          <h3 className="title">Testimonials.</h3>
        </div>

        {/* testimonial */}

        <Row className={styles.testimonial_section}>
          {testimonials.map((testimonial, index) => (
            <Col
              key={index}
              xl={7}
              lg={7}
              className={styles.testimonial_single}
            >
              <p className={styles.testimonial_icon}></p>
              <p className={styles.description}>{testimonial.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span className={styles.name}>{testimonial.name}</span>
                  <p style={{ margin: "0" }}>{testimonial.position}</p>
                </div>
                <div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.image}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* testimonial */}
      </div>
    </div>
  );
}

export default Testimonial;
