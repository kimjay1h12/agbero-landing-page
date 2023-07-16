import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Animator from "../Animator";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 5,
    flexDirection: "column",
    ["@media (min-width : 1200px)"]: {
      padding: "6vh 6vw",
    },
  },
  box: {
    padding: 10,
    marginTop: 2,
    borderRadius: 3,
    border: "solid 2px #dddd",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    ["@media (min-width : 1200px)"]: {
      padding: "20px 70px",
    },
  },
});
const array = [1, 2, 3];
function Comments() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" textAlign="center" fontWeight={600}>
          {" Here’s what our Clients have to say"}
        </Typography>
      </div>
      <div style={{ width: "100%", marginTop: 40 }}>
        {array.map((cur) => (
          <Animator variant="fade" key={cur} timeout={500} delay={500}>
            <Box className={classes.box}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "45%",
                }}
              >
                <Avatar />
                <div
                  style={{
                    display: "flex",

                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" fontWeight={600}>
                    Joey Tribiany
                  </Typography>
                  <Typography variant="caption">Joey@gmail.com</Typography>
                </div>
              </div>
              <Typography variant="caption" sx={{ width: "45%" }}>
                “Agbero has truly transformed the way I travel. The convenience
                of booking rides with a tap of a button and the flexibility of
                multiple payment options have made my journeys effortless.”
              </Typography>
            </Box>
          </Animator>
        ))}
      </div>
    </div>
  );
}

export default Comments;
