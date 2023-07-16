import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  root: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    ["@media (min-width : 1200px)"]: {
      padding: "6vh 6vw",
    },
  },
  container: {
    width: "100%",
    padding: 10,
    display: "flex",
    // alignItems: "center",

    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ["@media (min-width : 1200px)"]: {
    padding: "8vh 6vw",
  },
});
const array = [
  {
    label: "Easily book rides",
    description:
      "Book your rides effortlessly and conveniently with Agbero's intuitive and user-friendly booking feature. Book rides for commercial vehicles also",
  },
  {
    label: "Easily accept ride requests",
    description:
      "As a driver, you can easily get notified by the app immediately you get a trip request. Trip fare is automated by the system",
  },
  {
    label: "Easily book seats for commercial trips",
    description:
      "Book seats for commercial travels and secure and make payments on for each seat(s) ",
  },
  {
    label: "Get real-time tracking ",
    description:
      "Efficiently share your location to anyone and experience peace of mind and optimal convenience with Agbero's reliable and accurate real-time tracking.",
  },
  {
    label: "Easily book rides",
    description:
      "Book your rides effortlessly and conveniently with Agbero's intuitive and user-friendly booking feature.",
  },
  {
    label: "Multiple Payment Methods",
    description:
      "Whether you prefer cash, credit card, or mobile wallets, Agbero has you covered. Enjoy flexibility and convenience as you pay for your rides seamlessly, without the hassle of carrying cash.",
  },
];
function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" textAlign="center" fontWeight={600}>
          How does Agbero work
        </Typography>
        <Typography variant="caption" textAlign="center">
          Read on to explore the limitless advantages that will revolutionize
          the way you navigate and travel
        </Typography>
      </div>
      <div className={classes.container}>
        {array.map((cur, i) => (
          <Box
            key={i}
            sx={{
              padding: 2,
              borderRadius: 2,
              width: { xs: "100%", md: "30%" },
              minHeight: 300,
              display: "flex",
              flexDirection: "column",

              marginTop: { xs: 2, md: 0 },
            }}
          >
            <img
              src="/img/abt.png"
              style={{
                height: 70,
                width: 70,
                objectFit: "contain",
                marginLeft: "-2%",
              }}
            />
            <Typography fontWeight={600}>{cur.label}</Typography>
            <Typography variant="caption">{cur.description}</Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}

export default About;
