import { Button, Typography } from "@mui/material";
import React from "react";

function GetStarted() {
  return (
    <div
      style={{
        background: "#272937",
        padding: 20,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        Get Started Now
      </Typography>
      <Typography color="gray">
        Sign up now and embark on a transformative travel experience with Agbero
      </Typography>
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button variant="contained">Get Started</Button>
        <Button variant="contained" color="secondary">
          Learn more
        </Button>
      </div>
      <Button sx={{ marginTop: 2 }} variant="text">
        Contact Us
      </Button>
    </div>
  );
}

export default GetStarted;
