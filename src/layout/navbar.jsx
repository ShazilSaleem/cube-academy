import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import AppLogo from "../assets/appLogo.jsx";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {


  return (
    <AppBar
      position="fixed"
      sx={{
        padding:"12px",
        backgroundColor: "white",
        boxShadow: "unset !important",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Toolbar className="navbar-toolbar">
        <AppLogo  />

        <Box sx={{ display: "flex", gap: "30px" }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            className="navbar-button"
            sx={{
              fontSize: "22px",
              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/students"
            className="navbar-button"
            sx={{
                            fontSize: "22px",

              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            Students
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/about"
            className="navbar-button"
            sx={{
                            fontSize: "22px",

              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/contact"
            className="navbar-button"
            sx={{
                            fontSize: "22px",
              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            Contact Us
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            className="navbar-button"
            sx={{
                            fontSize: "22px",

              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "black !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            Log In
          </Button>
        </Box>
        <Box>
          <Button
            color="inherit"
            component={NavLink}
            to="/partners"
            className="navbar-button"
            sx={{
                            fontSize: "22px",

              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "#821BC3 !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            Partners
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/academy"
            className="navbar-button"
            sx={{
                            fontSize: "22px",

              fontFamily: "Urbanist, sans-serif !important",
              textTransform: "none",
              color: "#2B82C0 !important",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#821BC3 !important",
              },
              "&.active": {
                color: "#2B82C0 !important", // Change active color to #2B82C0
              },
            }}
          >
            Academy
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
