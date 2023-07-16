import { Box, Skeleton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
const features = [
  {
    label: "Book a ride",
    description:
      "Book your next ride with a tap of a button using Agbero, the ultimate ride-hailing app. Enjoy seamless and reliable transportation at your convenience",
    url: "/img/ft1.png",
  },
  {
    label: "Real time tracking",
    description:
      "Effortlessly track your ride as it approaches your location, ensuring you're always informed and ready. Experience peace of mind and optimal convenience with Agbero's reliable and accurate real-time tracking.",
    url: "/img/ft2.png",
  },
  {
    label: "Multiple Payment Method",
    description:
      "Whether you prefer cash, credit card, or mobile wallets, Agbero has you covered. Enjoy flexibility and convenience as you pay for your rides, without the hassle of carrying cash.",
    url: "/img/ft3.png",
  },
];
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    padding: "6vh 6vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    ["@media (min-width : 1200px)"]: {
      flexDirection: "row",
    },
  },
});
function Features() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const targetRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger your desired action here
          setLoading(false);
          setTimeout(() => {
            setLoading(true);
          }, 1000);

          console.log("Component is visible");
          // Call your action function or update state, etc.
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h5" textAlign="center" fontWeight={600}>
          The all-in-one platform for all your travels
        </Typography>
        <Typography variant="caption" textAlign="center">
          An impressive array of features ensuring unmatched travel experience
          to redefine your travel experience
        </Typography>
      </div>
      <div ref={targetRef} className={classes.container}>
        {loading
          ? features.map((cur, i) => (
              <Box
                key={i}
                sx={{
                  background: "#f7f7f7",
                  padding: 2,
                  borderRadius: 2,
                  width: { xs: "100%", md: "30%" },
                  minHeight: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: " solid 2px #560364",
                  marginTop: { xs: 2, md: 0 },
                }}
              >
                <img
                  src={cur.url}
                  style={{ height: 150, width: 150, objectFit: "contain" }}
                />
                <Typography fontWeight={600} textAlign="center">
                  {cur.label}
                </Typography>
                <Typography variant="caption" textAlign="center">
                  {cur.description}
                </Typography>
              </Box>
            ))
          : features.map((cur, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Skeleton variant="circular" width={150} height={150} />
                <Skeleton
                  sx={{ marginTop: 1, marginBottom: 1 }}
                  variant="text"
                  width={300}
                  height={20}
                />
                <Skeleton variant="rectangular" width={300} height={118} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Features;
