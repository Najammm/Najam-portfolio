import React from "react";
import styles from "./project.module.css";
import { Row, Col } from "antd";
import Link from "next/link";

/**Images */

import Image from "next/image";
import Project1 from "../../../public/Images/project1.png";
import Project2 from "../../../public/Images/project2.png";
import Project3 from "../../../public/Images/project3.png";

function Project() {
  const data = [
    {
      name: "Yoder Smoker",
      description:
        "A premium e-commerce platform showcasing high-performance, American-made grills and smokers. It enables customers to explore detailed product information, and purchase quality barbecue equipment with a smooth and reliable experience.",
      tags: ["Wordpress", "CustomCoding", "Plugins"],
      projectImage: Project1,
    },
    {
      name: "Trisage Solutions",
      description:
        "A professional technology solutions platform delivering innovative web, mobile, and custom software services. It helps businesses build scalable digital products and streamline operations through efficient, high-quality development solutions.",
      tags: ["Wordpress", "Ecommerce", "Business"],
      projectImage: Project2,
    },
    {
      name: "Soniq",
      description:
        "A leading Australian consumer electronics brand offering a range of quality technology products and digital signage solutions. The platform enables customers and businesses to explore advanced hardware and integrated technology",
      tags: ["React", "Nextjs", "TailwindCSS"],
      projectImage: Project3,
    },
  ];

  return (
    <div id="project" className="myContainer">
      <div className={styles.project_main}>
        <div>
          <p className="text">My work</p>
          <h3 className="title">Projects.</h3>
          <p className={styles.text2}>
            These projects highlight my expertise and experience through
            real-world applications of my work. Each project includes a concise
            overview along with links to live demos and code repositories. They
            showcase my ability to tackle complex challenges, adapt to various
            technologies, and efficiently manage development projects.
          </p>
        </div>
        <Row className={styles.projects_section}>
          {data.map((project, index) => (
            <Col
              key={index}
              xl={7}
              lg={7}
              md={11}
              className={styles.projects_container}
            >
              <Link
                className={styles.project_links}
                href={
                  project.name === "Yoder Smoker"
                    ? "https://www.yodersmokers.com/"
                    : project.name === "Soniq"
                      ? "https://soniq.com.au/"
                      : "https://customboxdesigns.com/"
                }
                target="_blank"
              >
                <div
                  style={{
                    overflow: "hidden",
                    marginBottom: "1rem",
                    borderRadius: "30px",
                  }}
                >
                  <Image
                    className={styles.projects_img}
                    src={project.projectImage}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "30px",
                    }}
                  />
                </div>
                <div>
                  <h4 className={styles.project_name}>{project.name}</h4>
                  <p>{project.description}</p>
                  <p style={{ fontWeight: "500" }}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          color: tag === "Wordpress" ? "black" : "blue",
                          marginRight: "0.5rem",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Project;
