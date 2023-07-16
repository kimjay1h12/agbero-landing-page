import React from "react";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { Typography } from "@mui/material";
export const GetOnAppStoreButton = () => {
  return (
    <Button
      variant="contained"
      color="info"
      startIcon={<AppleIcon />}
      size="large"
      sx={{
        background: "#000",
        width: 160,
        height: 50,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
      onClick={() => {
        // Handle click event
      }}
    >
      <Typography variant="caption">Get on App Store</Typography>
    </Button>
  );
};

export const GetOnPlayStoreButton = () => {
  return (
    <Button
      variant="contained"
      color="info"
      startIcon={<AndroidIcon />}
      sx={{
        background: "#999",
        width: 160,
        height: 50,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
      size="large"
      onClick={() => {
        // Handle click event
      }}
    >
      <Typography variant="caption">Get on Play Store</Typography>
    </Button>
  );
};
