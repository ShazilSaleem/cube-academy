import React, { useState } from "react";
import HeroImage from "../assets/heroImage.png";
import Layer from "../assets/Layer.png"; // Gradient overlay
import { Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useMediaQuery from "../hooks/useMediaQuery.js";

function Hero({ heading, paragraph, button }) {
  const isDesktop = useMediaQuery("(max-width: 1000px)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={HeroImage}
        alt="Hero"
        style={{
          height: "auto",
          maxWidth: "1903px",
          width: "100%",
          objectFit: "contain",
        }}
      />

      <img
        src={Layer}
        alt="Gradient Overlay"
        style={{
          height: "auto",
          maxWidth: "1903px",
          width: "100%",
          objectFit: "contain",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          color: "white",
          top: "50%",
          width: isDesktop ? "55%" : "35%",
          left: isDesktop ? "40%" : "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant={isDesktop ? "h5" : "h2"}
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontFamily: "Urbanist, sans-serif",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            marginBottom: "40px",
            fontSize: isDesktop ? "12px" : "19px",
            fontFamily: "Urbanist, sans-serif",
          }}
        >
          {paragraph}{" "}
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#2B82C0",
            fontFamily: "Urbanist, sans-serif",
            fontWeight: "bold",
            padding: "10px 30px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "1F6BA0 ",
            },
          }}
        >
          {button}
        </Button>
      </div>
    </div>
  );
}

export default Hero;
