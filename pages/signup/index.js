import {
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import MainLayout from "../../layouts/Mainlayouts";
import SectionLeftRightCard from "../../components/Section/SectionCard";
import Download from "../../components/Section/Download";

function Page() {
  return (
    <MainLayout>
      <div>
        <SectionLeftRightCard
          isLeft
          imgheight="100%"
          imageUrl="/img/sign.png"
          text={
            <div>
              <div>
                <Typography variant="h2" fontWeight={600}>
                  1 of 3 steps completed
                  <CheckBoxIcon
                    sx={{ marginLeft: 1, fontSize: 40, color: "#752FCD" }}
                  />
                </Typography>
              </div>
              <div style={{ marginTop: 10 }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{ color: "#752FCD" }}
                    value="female"
                    control={<Radio sx={{ color: "#752FCD" }} />}
                    label="Get Started"
                  />
                  <FormControlLabel
                    disabled
                    value="male"
                    control={<Radio />}
                    label="Download the Agbero App"
                  />
                  <FormControlLabel
                    disabled
                    value="other"
                    control={<Radio />}
                    label="Complete sign up process"
                  />
                </RadioGroup>
              </div>
            </div>
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",

            background: `url(${"/img/signbg.png"})`,
            minHeight: "80vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography variant="h4" ml={4} fontWeight={600} maxWidth={500}>
            To continue with the Sign Up process download the Agbero Mobile App
          </Typography>
        </div>
        <Download />
      </div>
    </MainLayout>
  );
}

export default Page;
