import CloseIcon from "@mui/icons-material/Close";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import Menu from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Backdrop,
  Badge,
  Button,
  ButtonBase,
  Dialog,
  DialogContent,
  Grow,
  Hidden,
  IconButton,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SignUp from "./Section/SignUp";
import Footer from "./Footer";

const useStyles = makeStyles({
  toolbar: {
    position: "fixed",
    backgroundColor: "#272937",
    boxShadow: "none",
    color: "#fff",
    padding: "5px 20px",
    width: "100%",
    justifyContent: "space-between",
    ["@media (min-width : 1200px)"]: {
      padding: "0px 5vw",
    },
    "& ul": {
      listStyle: "none",
      display: "flex",
      margin: 0,
      alignItems: "center",
      "& a": {
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 45px",
        textTransform: "capitalize",
        color: "#fff",
        fontSize: 13,
        textDecoration: "none",

        "&:hover ,&.active": {
          color: "#8F32AB",
        },
      },
    },
  },

  logo: {
    height: 65,
    objectFit: "contain",
    marginRight: 40,
    transition: "all 0.3s",
  },
  drawer: {
    zIndex: 1500,
    background: "#272937",
    position: "fixed",
    top: 0,
    left: 0,
    padding: 10,
    paddingTop: 10,
    width: "100vw",

    "& ul": {
      display: "flex",
      listStyle: "none",
      padding: 0,

      flexDirection: "column",
      "& a": {
        cursor: "pointer",
        width: "100%",
        display: "flex",
        alignItems: "center",
        textTransform: "capitalize",
        padding: 15,
      },
      "& .css-i4bv87-MuiSvgIcon-root": {
        color: "inherit",
      },
      "& li ": {
        "& span": {},
        "& a:hover , & a:active , & a.active": {
          background: "#fff",
          color: "#8F32AB",
          fontWeight: 700,
          cursor: "pointer",
        },
      },
    },
  },

  metric: {
    padding: 5,
    borderRadius: 20,
    background: "#fff",
    display: "flex",

    "& span": {
      display: "flex",
      padding: "5px 30px",
      borderRadius: 20,

      "&.active": {
        color: "#fff",
        background: "#fff",
      },
    },
  },
});

function AppToolbar({ route, children, background }) {
  const router = useRouter();
  const [notifications, setNotifications] = useState();

  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const login = "/login";
  const routes = [
    {
      href: "/",
      active: route === "home",

      label: "Home",
    },

    {
      href: "/features",

      active: route === "store",
      label: "Features",
    },
    {
      href: "/download",

      active: route === "download",
      label: "Download",
    },

    {
      href: "/aboutus",

      label: "About Us",
    },
  ];

  const Drawer = (
    <div className={classes.drawer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0vh 3.5vw",
        }}
      >
        <img
          style={{ marginBottom: 20 }}
          className={classes.logo}
          src="/img/logo.png"
        />
        <ButtonBase
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <CloseIcon sx={{ marginBottom: 3 }} />
        </ButtonBase>
      </div>
      <ul>
        {routes.map((cur) => (
          <li key={cur.label}>
            <a
              onClick={() => router.push(cur.href)}
              className={cur.active ? "active" : ""}
            >
              {cur.icon}
              <span>{cur.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <AppBar
      style={{
        background: "#fff",
        boxShadow: "0 5px 20px #0001",
      }}
      position="sticky"
    >
      <Hidden lgUp>
        <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} />
        <Grow in={menuOpen}>{Drawer}</Grow>
      </Hidden>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src="/img/logo.png" />
        <Hidden smDown>
          <ul>
            {routes.map((cur) => (
              <li key={cur.href}>
                <a
                  onClick={() => router.push(cur.href)}
                  className={cur.active ? "active" : ""}
                >
                  {cur.icon}
                  <span>{cur.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <MetricSwitch router={router} />
        </Hidden>
        <Hidden smUp>
          <IconButton
            sx={{ marginLeft: "auto", color: "#fff" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseOutlined /> : <Menu />}
          </IconButton>
        </Hidden>
      </Toolbar>

      {children}
      <Footer />
    </AppBar>
  );
}

const MetricSwitch = ({ router }) => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: 5,
        gap: 20,
        "& .cart:hover": {
          color: "#fff",
        },
      }}
    >
      <Dialog fullScreen fullWidth open={isVisible} onClose={handleClose}>
        <DialogContent>
          <div
            style={{ display: "flex", justifyContent: "flex-end", margin: 10 }}
          >
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              size="small"
              sx={{ background: "#8F32AB" }}
            >
              Close
            </Button>
          </div>
          <SignUp />
        </DialogContent>
      </Dialog>
      <Button
        onClick={() => handleOpen()}
        variant="contained"
        color="primary"
        size="small"
        sx={{ background: "#8F32AB" }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default AppToolbar;
