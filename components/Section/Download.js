import { Button, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Animator from "../Animator";
import { GetOnAppStoreButton, GetOnPlayStoreButton } from "../DonloadButtons";
const useStyles = makeStyles({
  root: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 20,
    ["@media (min-width : 1200px)"]: {
      flexDirection: "row",
      padding: "6vh 6vw",
    },
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    flexDirection: "column",
    ["@media (min-width : 1200px)"]: {
      flexDirection: "row",
      marginTop: 0,
      padding: "6vh 6vw",
    },
  },
});
function Download() {
  const [isInhaling, setIsInhaling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsInhaling((prevIsInhaling) => !prevIsInhaling);
    }, 3000); // Change the breathing interval as desired (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.right}>
        <div>
          <img
            src="/img/app.png"
            height={450}
            width={300}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            maxWidth: 500,
          }}
        >
          <Typography color="#8F32AB" fontWeight={600}>
            Agbero
          </Typography>
          <Typography variant="h5" fontWeight={600}>
            Download Agbero now and get on the road with just a few steps
          </Typography>
          <Typography variant="caption">
            Download Agbero now and elevate your journey to new heights with our
            wonderful new features
          </Typography>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            >
              Rider App
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                color: "#000",
                background: "#8F32AB1A",
              }}
            >
              Driver App
            </Button>
          </div>
          <div style={{ marginTop: 10 }}>
            <GetOnAppStoreButton />
            <GetOnPlayStoreButton />
          </div>
          {/* <div style={{ marginTop: 20 }}>
            <Button variant="contained" size="small">
              Rider App
            </Button>
            <Button size="small" variant="contained" color="secondary">
              Driver App
            </Button>
          </div> */}
        </div>
      </div>
      <div>
        <Animator variant="fade" timeout={500} delay={500}>
          <img
            src="/img/dwn.png"
            height={450}
            width={300}
            style={{ objectFit: "contain" }}
          />
        </Animator>
      </div>
    </div>
  );
}

export default Download;
