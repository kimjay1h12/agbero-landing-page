import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Animator from "../Animator";

const SectionLeftRightCard = ({ text, imageUrl, isLeft, imgheight }) => {
  const useStyle = makeStyles({
    root: {
      display: "flex",
      marginTop: 20,
      marginBottom: 60,
      flexDirection: isLeft ? "column-reverse" : "column",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",

      ["@media (min-width : 1200px)"]: {
        flexDirection: isLeft ? "row" : "row-reverse",
        padding: "0vh 6vw",
        gap: "10%",
        marginTop: 60,
      },
    },
    text: {
      padding: "20px",

      ["@media (min-width : 1200px)"]: {
        flex: "1 1 45%",
      },
    },
    image: {
      maxWidth: "100%",
      objectFit: "contain",
      height: imgheight ? imgheight : "300px",
      ["@media (min-width : 1200px)"]: {
        flex: "1 1 45%",
        maxWidth: "42%",
      },
    },
  });

  const imageStyles = {};
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Animator variant="zoom" timeout={200} delay={200}>
          <div className={classes.image}>{text}</div>
        </Animator>
        <Animator variant="zoom" timeout={200} delay={200}>
          <img src={imageUrl} alt="Image" className={classes.image} />
        </Animator>
      </div>
    </div>
  );
};

export default SectionLeftRightCard;
