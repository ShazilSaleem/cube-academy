import React, { useState } from "react";
import Hero from "../layout/hero.jsx";
import Footer from "../layout/footer.jsx";
import {
  Box,
  Button,
  Typography,
  Grid,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Paper,
  TextField,
  MenuItem,
} from "@mui/material";
import Podcast from "../assets/podcast.png";
import Dollar from "../assets/dollar.jsx";
import LeftArrow from "../assets/leftArrow.jsx";
import RightArrow from "../assets/rightArrow.jsx";
import Mic from "../assets/mic.jsx";
import Message from "../assets/message.jsx";
import BoxIcon from "../assets/box.jsx";
import Portfolio from "../assets/portfolio.jsx";
import Commitment from "../assets/commitment.jsx";
import Skills from "../assets/skills.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BigArrow from "../assets/bigArrow.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import BenefitCareousel from "../layout/benefitCareousel.jsx";
import BigTab from "../assets/bigTab.jsx";
import {services, benefits} from "../mocks/staticData.jsx"
import LoginForm from "../layout/loginForm.jsx";

function Scheme() {
  const isDesktop = useMediaQuery("(max-width: 1496px)");

  return (
    <div>
      <Hero
        heading="Let’s Connect and Collaborate"
        paragraph="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let’s build a successful future together."
        button="Contact us now"
      />

      <BenefitCareousel />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "100px",
          gap: 8,
          marginTop: "100px",
        }}
      >
        <Box sx={{}}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mt: 2, fontFamily: "urbanist, sans-serif" }}
          >
            Main <span style={{ color: "#2B82C0" }}>Features</span>
          </Typography>

          <List>
            {benefits.map((item, index) => (
              <ListItem key={index} sx={{ alignItems: "flex-start", pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      fontWeight="bold"
                      sx={{ fontFamily: "urbanist, sans-serif" }}
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{ color: "#555", fontFamily: "urbanist, sans-serif" }}
                    >
                      {item.description}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2B82C0",
              color: "white",
              borderRadius: 2,
              mt: 2,
              px: 3,
              "&:hover": {
                backgroundColor: "1F6BA0 ",
              },
            }}
          >
            Login Now →
          </Button>
        </Box>

        <Box>
          <BigTab />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "60px 220px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "Urbanist, sans-serif", marginBottom: "10px" }}
        >
          Specialist in your sector
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: "16px",
            fontFamily: "Urbanist, sans-serif",
            marginBottom: "40px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "20px",
                  boxShadow: "none",
                  border: "1px solid #eee",
                  "&:hover": {
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      margin: "0 auto 10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#A61E20",
                      fontSize: "40px",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      fontSize: "14px",
                      fontFamily: "Urbanist, sans-serif",
                      marginTop: "10px",
                    }}
                  >
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
     <LoginForm/>
      <Footer />
    </div>
  );
}

export default Scheme;
