import React, { useEffect } from "react";
import styles from "./about.module.css";
import Image from "next/image";
import One from "../../../public/Images/one.png";
import Two from "../../../public/Images/two.png";
import Three from "../../../public/Images/three.png";
import Four from "../../../public/Images/four.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { Row, Col } from "antd";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div id="about" className="myContainer">
      <div className={styles.about_main}>
        <div>
          <p className="text">Introduction</p>
          <h2 className="title">Overview.</h2>
          <p className={styles.text2}>
            I'm a Passionate Full Stack Developer with expertise in JavaScript,
            TypeScript, React, Next.js, and Node.js—turning ideas into powerful,
            high-performing digital experiences. From crafting sleek, intuitive
            frontends to architecting scalable, efficient backends, I thrive on
            solving complex challenges and delivering seamless user
            interactions. A fast learner and a creative problem-solver, I
            collaborate closely with clients to build innovative, future-ready
            solutions that make an impact.
          </p>
        </div>
        <Row className={styles.sections_main}>
          <Col
            data-aos="fade-right"
            data-aos-delay="0"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={One} />
            <span className={styles.section_text}>Web Developer</span>
          </Col>
          <Col
            data-aos="fade-right"
            data-aos-delay="300"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={Two} />
            <span className={styles.section_text}>Database Engineer</span>
          </Col>
          <Col
            data-aos="fade-right"
            data-aos-delay="600"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={Three} />
            <span className={styles.section_text}>Backend Developer</span>
          </Col>
          <Col
            data-aos="fade-right"
            data-aos-delay="900"
            xl={5}
            lg={5}
            md={11}
            sm={10}
            className={styles.sections}
          >
            <Image style={{ width: "5rem", height: "5rem" }} src={Four} />
            <span className={styles.section_text}>Dev Ops</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
