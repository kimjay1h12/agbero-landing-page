import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MainLayout from "../../layouts/Mainlayouts";
import SectionLeftRightCard from "../../components/Section/SectionCard";
import About from "../../components/Section/About";
import Counts from "../../components/Section/Counts";
import Download from "../../components/Section/Download";

const useStyles = makeStyles({
  root: {
    "& header": {
      minHeight: "90vh",
      marginTop: 30,
      background: `#272937`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      color: "#fff",
      ["@media (min-width : 1200px)"]: {
        marginTop: "-6%",
      },
      "& .left": {
        width: "100%",
        padding: "0px 6vw",
        ["@media (min-width : 1200px)"]: {
          width: "50%",
          padding: "0px 6vw",
        },
      },
      "& .right": {
        width: "100%",
        padding: "0px 6vw",
        ["@media (min-width : 1200px)"]: {
          width: "50%",
          padding: "0px 6vw",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
});
function Page() {
  const classes = useStyles();
  return (
    <MainLayout route="aboutus">
      <div className={classes.root}>
        <header>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 200,
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              We’re on a mission
            </Typography>
            <Typography variant="caption">
              This is where the Agbero mission or tagline comes in...
            </Typography>
          </div>
          <SectionLeftRightCard
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  At Agbero...
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Our mission is to revolutionize the way people navigate and
                    experience travel. We are dedicated to providing seamless
                    and convenient solutions through innovative technology,
                    real-time tracking, and personalized recommendations.
                  </Typography>
                  <Typography variant="caption" ml={2} mt={2}>
                    Our goal is to empower travellers, enhance their journeys,
                    and ensure unparalleled convenience at every step. We strive
                    to create a world where travel becomes effortless,
                    efficient, and filled with extraordinary experiences.
                  </Typography>
                </div>
              </div>
            }
            imageUrl="/img/frame3.png"
          />
        </header>
        <About />
        <Counts />
        <Download />
      </div>
    </MainLayout>
  );
}

export default Page;
