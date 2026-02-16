import React, { useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Work1 from "../../../public/Images/work1.png";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./styling/work.module.css";

/**Components */

import Sections from "./sections";

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="myContainer">
      <div className={styles.laptop}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                color: "#bfbfbf",
              }}
            >
              December 2024 -
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                "& .MuiTimelineConnector-root": {
                  backgroundColor: "white",
                },
                "& .MuiTimelineDot-root": {
                  backgroundColor: "white",
                },
              }}
            >
              <TimelineConnector />
              <TimelineDot>
                <Image
                  src={Work1}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                data-aos="fade"
                data-aos-delay="0"
                variant="h6"
                component="span"
              >
                <Sections
                  position="Junior MERN Stack Developer"
                  company="Trisage Solutions"
                  point1="Developing and maintaining web applications using React.js , Node.js and other related technologies."
                  point2="Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
                  point3="Implementing responsive design and ensuring cross-browser compatibility."
                  point4="Participating in code reviews and providing constructive feedback to other developers."
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className={styles.mobile}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          className={styles.mobile_main}
        >
          <div>
            <Sections
              position="Associate MERN Stack Developer"
              company="IPS"
              point1="Developing and maintaining web applications using React.js , Node.js and other related technologies."
              point2="Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
              point3="Implementing responsive design and ensuring cross-browser compatibility."
              point4="Participating in code reviews and providing constructive feedback to other developers."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
