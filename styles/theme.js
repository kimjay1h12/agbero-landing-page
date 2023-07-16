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
          borderRadius: 4,
          background: "#8F32AB",
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
    info: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

export default theme;
