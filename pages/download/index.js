import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MainLayout from "../../layouts/Mainlayouts";
import Animator from "../../components/Animator";
import Download from "../../components/Section/Download";
import GetStarted from "../../components/Section/GetStarted";
import SignUp from "../../components/Section/SignUp";
const useStyles = makeStyles({
  section: {
    padding: 10,
    ["@media (min-width : 1200px)"]: {
      padding: 0,
    },
  },
  root: {
    "& header": {
      minHeight: "100vh",

      background: `#272937`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",

      color: "#fff",
      ["@media (min-width : 1200px)"]: {
        marginTop: "-6%",
      },
      "& .left": {
        width: "100%",
        padding: "0px 6vw",
        display: "none",
        marginTop: 10,
        ["@media (min-width : 1200px)"]: {
          width: "50%",
          padding: "0px 6vw",
          display: "block",
          marginTop: 0,
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
          justifyContent: "flex-end",
          alignItems: "flex-end",
        },
      },
    },
  },
});
function Page() {
  const classes = useStyles();
  return (
    <MainLayout route="download">
      <div className={classes.root}>
        <header>
          <Animator direction="right" variant="slide" timeout={500} delay={500}>
            <div className="left">
              <img
                src="/features/1.png"
                height={600}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Animator>
          <div className="right">
            <Typography variant="h4" align="end" fontWeight={600} mt={3}>
              Agbero App is now available on App Store and Play Store
            </Typography>
            <div
              style={{
                marginTop: "5vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="caption" align="end">
                Empower your travels, download Agbero app for seamless journeys
                today
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "40%", marginTop: 3, background: "#8F32AB" }}
              >
                Download
              </Button>
            </div>
          </div>
        </header>
        <div className={classes.section}>
          <Download />
          <GetStarted />
          <SignUp />
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
