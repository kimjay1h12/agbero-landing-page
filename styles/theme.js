import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 5,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingTop: 40,
        },
      },
      defaultProps: {
        fontWeight: 700,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          textTransform: "capitalize",
          borderRadius: 10,
        },
        text: {
          textTransform: "capitalize",
        },
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#8F32AB",
      contrastText: "#fff",
    },

    secondary: {
      main: "#8F32AB1A",
      contrastText: "#fff",
    },
  },
});

export default theme;
