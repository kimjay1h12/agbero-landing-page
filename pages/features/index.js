import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MainLayout from "../../layouts/Mainlayouts";
import Animator from "../../components/Animator";
import About from "../../components/Section/About";
import SectionLeftRightCard from "../../components/Section/SectionCard";
import Download from "../../components/Section/Download";
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
      justifyContent: "space-between",
      alignItems: "center",

      ["@media (min-width : 1200px)"]: {
        marginTop: "-6%",
      },
      "& .left": {
        width: "100%",
        padding: "0px 6vw",
        display: "none",
        ["@media (min-width : 1200px)"]: {
          width: "50%",
          padding: "0px 6vw",
          display: "block",
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
    <MainLayout route="features">
      <div className={classes.root}>
        <header>
          <Animator direction="right" variant="slide" timeout={500} delay={500}>
            <div className="right">
              <Typography variant="h4" color="white" fontWeight={600} mt={3}>
                What makes us standout
              </Typography>
              <div
                style={{
                  marginTop: "5vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="caption" color="white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus.
                </Typography>
              </div>
            </div>
          </Animator>
          <div className="left">
            <img
              src="/img/download.png"
              height={500}
              style={{ objectFit: "contain" }}
            />
          </div>
        </header>
        <div className={classes.section}>
          <div
            style={{
              marginTop: 30,

              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: 30,
            }}
          >
            <Box
              sx={{
                background: "#9261DB",
                padding: 1,
                borderRadius: 2,
                minWidth: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Typography>Rides</Typography>
            </Box>
            <Box
              sx={{
                background: "#9261DB",
                padding: 1,
                borderRadius: 2,
                minWidth: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Typography>Real-time Tracking</Typography>
            </Box>
            <Box
              sx={{
                background: "#9261DB",
                padding: 1,
                borderRadius: 2,
                minWidth: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Typography>Easy Payment</Typography>
            </Box>
          </div>

          <About />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              background: "#8F32AB26",
            }}
          >
            <Typography color="#8F32AB" fontWeight={600}>
              Rider App Features
            </Typography>
          </div>
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/1.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Simple Sign Up Process
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/2.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Easy ride booking to anywhere in Nigeria
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/3.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Cheap fare estimation
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/4.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Real-time location tracking
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/5.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  In-app navigation
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/6.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Multiple payment methods
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <Download />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 70,
              background: "#8F32AB26",
            }}
          >
            <Typography color="#8F32AB" fontWeight={600}>
              Driver App Features
            </Typography>
          </div>
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/1.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Easy Driver Verification Process
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/2.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Receive Ride Notifications
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/3.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Accept Rides
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/4.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Payment to Wallet
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/5.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Swift Withdrawal to Bank
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/6.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Complete Earnings History
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            isLeft
            imageUrl="/features/6.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Private Travel Mode
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <SectionLeftRightCard
            imageUrl="/features/6.png"
            imgheight="100%"
            text={
              <div>
                <Typography variant="h4" fontWeight={600}>
                  Commercial Travel Mode
                </Typography>
                <div style={{ marginTop: 27 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue.
                  </Typography>
                </div>
              </div>
            }
          />
          <Download />
          <SignUp />
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
