import React from "react";
import NumberCount from "../NumberCount";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    background: "#8F32AB26",
    minHeight: "25vh",
    padding: 10,
    width: "100%",
    display: "flex",

    flexDirection: "column",

    marginBottom: 40,
    ["@media (min-width : 1200px)"]: {
      padding: "6vh 12vw",
    },
  },
});
function Counts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" fontWeight={600} variant="h5" mt={1.4} mb={2}>
        The Journey soo far
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NumberCount
            startNumber={0}
            endNumber={3}
            millon
            plus
            duration={3000}
          />
          <Typography align="center">Users across apps</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NumberCount startNumber={0} endNumber={33} duration={1000} />
          <Typography align="center">States Engaged</Typography>
          <Typography align="center">with drivers</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NumberCount startNumber={0} endNumber={500} plus duration={1000} />
          <Typography align="center">Trips Taken</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NumberCount startNumber={0} endNumber={4} plus duration={3000} />
          <Typography align="center">Years of existence</Typography>
        </div>
      </div>
    </div>
  );
}

export default Counts;
