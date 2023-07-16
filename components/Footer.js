import { Divider, Grid, Hidden, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import React from "react";
const contact = [
  {
    url: "/contact/gmail.png",
    label: "Agbero@gmail.com",
    route: "",
  },
  {
    url: "/contact/twitter.png",
    label: "@Agbero_ng",
    route: "",
  },
  {
    url: "/contact/Facebook.png",
    label: "Agberorides",
    route: "",
  },
  {
    url: "/contact/instagram.png",
    label: "Agberorides",
    route: "",
  },
];
const array = [
  {
    header: "Download",
    route1: {
      url: "/",
      label: "Android",
    },
    route2: {
      url: "/",
      label: "iOS",
    },
    route3: {
      url: "/",
      label: "Web",
    },
    route4: {
      url: "/",
      label: "",
    },
  },
  {
    header: "About Us",
    route1: {
      url: "/",
      label: "Mission",
    },
    route2: {
      url: "/",
      label: "Features",
    },
    route3: {
      url: "/",
      label: "About us",
    },
    route4: {
      url: "/",
      label: "",
    },
  },
  {
    header: "Legal",
    route1: {
      url: "/",
      label: "Terms",
    },
    route2: {
      url: "/",
      label: "Privacy Policy",
    },
    route3: {
      url: "/",
      label: "Frequently Asked Questions",
    },
    route4: {
      url: "/",
      label: "Lisences",
    },
  },
];
const useStyles = makeStyles({
  root: {
    background: "#272937",
    minHeight: 300,
    padding: 20,
    color: "#fff",
    marginTop: 30,
    ["@media (min-width : 1200px)"]: {
      padding: 40,
    },
  },

  typography: {
    color: "#fff",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "blue",
    },
  },
  left: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "column",
    ["@media (min-width : 1200px)"]: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    marginTop: 23,
    gap: 10,
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={7}>
          <div className={classes.left}>
            {array.map((cur, i) => (
              <div key={i}>
                <Typography className="typography">{cur.header}</Typography>
                <div
                  style={{
                    marginTop: 23,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <Link href={cur.route1.url}>
                    <Typography
                      align="center"
                      sx={{ cursor: "pointer" }}
                      className="typography"
                      variant="caption"
                    >
                      {cur.route1.label}
                    </Typography>
                  </Link>
                  <Link href={cur.route2.url}>
                    <Typography className="typography" variant="caption">
                      {cur.route2.label}
                    </Typography>
                  </Link>
                  <Link href={cur.route3.url}>
                    <Typography className="typography" variant="caption">
                      {cur.route3.label}
                    </Typography>
                  </Link>
                  <Link href={cur.route4.url}>
                    <Typography className="typography" variant="caption">
                      {cur.route4.label}
                    </Typography>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Hidden smDown>
          {" "}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ color: "#fff", background: "#fff", minHeight: 250 }}
          />
        </Hidden>
        <Hidden mdUp>
          <div
            style={{
              padding: 1,
              background: "#fff",
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
            }}
          ></div>
        </Hidden>

        <Grid item xs={12} md={4}>
          <div>
            <Typography>Contact Us</Typography>
            <div className={classes.right}>
              {contact.map((cur, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={cur.url}
                    style={{ height: 30, width: 30, objectFit: "contain" }}
                  />
                  <Typography ml={1}>{cur.label}</Typography>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
