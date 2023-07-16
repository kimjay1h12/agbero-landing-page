import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { CheckBox } from "@mui/icons-material";

import { useRouter } from "next/router";
import client from "../../api/client";
const images = [
  "/img/figma1.png",
  "/img/Google.png",
  "/img/Instagram.png",
  "/img/PayPal.png",
  "/img/Plaid.png",
];
const useStyles = makeStyles({
  root: {
    background: "#8F32AB26",
    minHeight: "70vh",

    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "column",
    padding: 10,
    gap: 10,
    ["@media (min-width : 1200px)"]: {
      flexDirection: "row",
      padding: "6vh 6vw",
      gap: 0,
    },
  },
  right: {
    width: "100%",
    background: "#fff",
    minHeighth: "50vh",
    padding: 40,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    ["@media (min-width : 1200px)"]: {
      width: "42%",
    },
  },
  left: {
    width: "100%",
    ["@media (min-width : 1200px)"]: {
      width: "42%",
    },
  },
});
function SignUp() {
  const classes = useStyles();
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSignUp = async () => {
    setLoading(true);
    const data = {
      ...formData,
      fullName: fullName.firstName + " " + fullName.lastName,
    };
    try {
      const res = (await client.post("user/register", data)).data;
      if (res) router.push("/signup");
      comsole.log("signup", res.data);
    } catch (error) {
      console.log("error signing userUp", error.response);
    }
    setLoading(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography variant="h5" fontWeight={600}>
          {" "}
          – Your gateway to seamless rides
        </Typography>
        <div
          style={{ marginTop: 20, display: "flex", flexDirection: "column" }}
        >
          <FormatQuoteIcon />
          <Typography variant="caption">
            Sign up now and embark on a transformative travel experience with
            Agbero personalized recommendations, and unmatched convenience.
            Agbero, your trusted travel companion, is here to redefine your
            journey and revolutionize the way you navigate the world.
          </Typography>
        </div>
        <div style={{ marginTop: 80 }}>
          <Typography variant="h5" fontWeight={600}>
            Trusted by Brands and Companies
          </Typography>
          <div>
            {images.map((cur) => (
              <img
                key={cur}
                src={cur}
                style={{
                  height: 20,
                  objectFit: "contain",
                  marginRight: 10,
                  marginTop: 10,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <TextField
          placeholder="First Name"
          value={fullName.firstName}
          onChange={(e) => {
            setFullName({ ...fullName, firstName: e.target.value });
          }}
          size="small"
          fullWidth
        />
        <TextField
          size="small"
          value={fullName.lastName}
          onChange={(e) => {
            setFullName({ ...fullName, lastName: e.target.value });
          }}
          fullWidth
          placeholder="Last Name"
        />
        <TextField size="small" fullWidth placeholder="Phone Number" />
        <TextField
          size="small"
          fullWidth
          type="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <TextField
          size="small"
          fullWidth
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <CheckBox />
          <Typography variant="caption">
            Subscribe to Newsletter and promo offers{" "}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption">
            Already have an account?
            <span style={{ color: "#8F32AB" }}>Sign In</span>
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              handleSignUp();
            }}
          >
            {loading ? (
              <CircularProgress size={20} style={{ color: "#fff" }} />
            ) : (
              "Sign Up"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
