import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Animator from "./Animator";
import About from "./Section/About";
import Comments from "./Section/Comments";
import Counts from "./Section/Counts";
import Download from "./Section/Download";
import Features from "./Section/Features";
import GetStarted from "./Section/GetStarted";
import SectionLeftRightCard from "./Section/SectionCard";
import SignUp from "./Section/SignUp";
const imageUrl = "/img/header.png";
const useStyles = makeStyles({
  section: {
    padding: 10,
    ["@media (min-width : 1200px)"]: {
      padding: 0,
    },
  },
  root: {
    color: "#000",
    ["@media (min-width : 1200px)"]: {
      padding: 0,
    },
    "& header": {
      minHeight: "100vh",

      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",

      color: "#fff",

      "& .right": {
        width: "100%",
        padding: "0px 6vw",
        ["@media (min-width : 1200px)"]: {
          width: "50%",
          padding: "0px 6vw",
        },
      },
    },
  },
});
function HomeScreen() {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <MainLayout route="home">
      <div className={classes.root}>
        <Dialog fullScreen fullWidth open={isVisible} onClose={handleClose}>
          <DialogContent>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: 10,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ background: "#8F32AB" }}
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
            <SignUp />
          </DialogContent>
        </Dialog>
        <header>
          <Animator direction="right" variant="slide" timeout={500} delay={500}>
            <div className="right">
              <Typography variant="h4" fontWeight={600} mt={3}>
                Discover a world of convenient travels at your fingertips by
                downloading <span style={{ color: "#8F32AB" }}>Agbero </span>
                today
              </Typography>
              <div
                style={{
                  marginTop: "5vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="caption">
                  Utilize your vehicle as a means to generate income and
                  transform your rides into profitable ventures with Agbero.
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => handleOpen()}
                  sx={{ background: "#8F32AB", width: "40%", marginTop: 3 }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Animator>
        </header>
        <section className={classes.section}>
          <SectionLeftRightCard
            isLeft
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Easy Rides
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Embark on a thrilling journey like never before as you
                    explore the world with Agbero, the ultimate travel
                    companion. With its intuitive features and seamless User
                    Experience, Agbero simplifies the way you book and navigate
                    your trips with unmatched convenience. Discover an extensive
                    range of travel options, from affordable flights to
                    luxurious accommodations, all at your fingertips. Download
                    the Agbero app today and unlock a world of limitless travel
                    possibilities.
                  </Typography>
                </div>
              </div>
            }
            imageUrl="/img/frame1.png"
          />
          <SectionLeftRightCard
            text={
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="h4" fontWeight={600}>
                  Earn while you drive
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    marginTop: 27,
                  }}
                >
                  <Typography variant="caption" textAlign="end">
                    Unleash the full potential of my wheels as you turn your
                    vehicle into a money-making machine with Agbero. Seamlessly
                    blending innovation and user-friendly features, Agbero
                    revolutionizes the way you travel. From efficient
                    ride-hailing services to long distance travels, this app
                    helps to optimize your time and earn at the same time.
                    Don`&apos;`t miss out on this transformative experience –
                    download Agbero now and elevate your travel game to new
                    heights.
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ marginTop: 3 }}
                  >
                    Download{" "}
                    <DownloadForOfflineIcon
                      sx={{ fontSize: 16, marginLeft: 3 }}
                    />
                  </Button>
                </div>
              </div>
            }
            imageUrl="/img/frame2.png"
          />
          <SectionLeftRightCard
            isLeft
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Travelling made easy with{" "}
                  <span style={{ color: "#8F32AB" }}>Agbero</span>
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Stay in control of your journey with Agbero&apos;s real-time
                    tracking feature. Effortlessly track your ride as it
                    approaches your location, ensuring you&apos;re always
                    informed and ready. Experience peace of mind and optimal
                    convenience with Agbero &apos;s reliable and accurate
                    real-time tracking. Download the app now and enjoy the power
                    of staying connected every step of the way
                  </Typography>
                </div>
              </div>
            }
            imageUrl="/img/frame3.png"
          />
          <Features />
          <SignUp />
          <About />
          <Comments />
          <GetStarted />
          <Download />
          <Counts />
        </section>
      </div>
    </MainLayout>
  );
}

export default HomeScreen;
