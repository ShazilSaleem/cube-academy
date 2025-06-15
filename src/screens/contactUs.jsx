import React from "react";
import Hero from "../layout/hero";
import Footer from "../layout/footer";
import Arrow from "../assets/arrow.jsx";
import Map from "../assets/map.png";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import LoginForm from "../layout/loginForm.jsx"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Google from "../assets/google.jsx";
import Linkedin from "../assets/linkedin.jsx";
import Facebook from "../assets/facebook.jsx";
import Twitter from "../assets/twitter.jsx";
import RactnagleBg from "../assets/rectanglebg.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PopUp from "../assets/popUp.jsx";

function ContactUs() {
  return (
    <div>
      <div>
        <Hero
          heading="Let’s Connect and Collaborate"
          paragraph="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let’s build a successful future together."
          button="Contact us now"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "column",
            marginLeft: "220px",
            marginBottom: "25px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Urbanist, sans-serif",
              gap: "15px",
              fontSize: "24px",
              color: "#2B82C0",
              marginLeft: "0px",
            }}
          >
            <Arrow sx={{ color: "red", marginRight: 1 }} />
            Contact Info
          </Typography>
          <Typography
            sx={{
              fontSize: "44px",
              fontWeight: "bold",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            Our Contact Details
          </Typography>
        </div>
        <Box sx={{ py: 8 }}>
          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
          >
            <Grid item xs={12} md={6}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={12}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        backgroundColor: "#2B82C0",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography
                      fontSize={"28px"}
                      fontWeight="bold"
                      fontFamily="Urbanist, sans-serif"
                    >
                      Office Location
                    </Typography>
                    <Typography
                      fontFamily="Urbanist, sans-serif"
                      color="#555"
                      fontSize={"20px"}
                    >
                      Suite Twelve, First Floor, Parkway <br /> Two, Manchester,
                      M14 7HR
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        backgroundColor: "#2B82C0",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <PhoneIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography
                      fontSize={"28px"}
                      fontWeight="bold"
                      fontFamily="Urbanist, sans-serif"
                    >
                      Phone Number
                    </Typography>
                    <Typography
                      fontFamily="Urbanist, sans-serif"
                      color="#555"
                      fontSize={"20px"}
                    >
                      Call +44 161 55 22 666<br />
                      <strong>WhatsApp:</strong> +44 751 33 20 300
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        backgroundColor: "#2B82C0",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        mb: 1,
                      }}
                    >
                      <EmailIcon sx={{ color: "white" }} />
                    </Box>
                    <Typography
                      fontSize={"28px"}
                      fontWeight="bold"
                      fontFamily="Urbanist, sans-serif"
                    >
                      Email
                    </Typography>
                    <Typography
                      fontFamily="Urbanist, sans-serif"
                      color="#555"
                      fontSize={"20px"}
                    >
                      contact@cubeacademy.co.uk
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img
                  src={Map}
                  alt="map"
                  style={{
                    width: "600px",
                    height: "450px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif", fontSize:"16px"}}
        >
          Follow us via
        </Typography>
        <Google />
        <Linkedin />
        <Facebook />
        <Twitter />
      </Box>


            <LoginForm />


      <Footer />
    </div>
  );
}

export default ContactUs;
