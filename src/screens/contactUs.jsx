import React from 'react'
import Footer from '../layout/footer'
import Arrow from "../assets/arrow.jsx";
import Map from "../assets/map.png";
import {Box, Typography, TextField, MenuItem, Button, Paper} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Google from "../assets/google.jsx"
import Linkedin from "../assets/linkedin.jsx"
import Facebook from "../assets/facebook.jsx"
import Twitter from "../assets/twitter.jsx"
import Hero from "../layout/hero.jsx";
import LoginForm from "../layout/loginForm.jsx";
function ContactUs() {
  return (
    <div>
      <div>
        <Hero
          heading="Let’s Connect and Collaborate"
          paragraph="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let’s build a successful future together."
          button="Contact Us Now"
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
            marginLeft: "50px",
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
              color: "#821BC3",
              marginLeft: "0px",
            }}
          >
            <Arrow sx={{ color: "red", marginRight: 1 }} />
            <Typography sx={{ color: "#2B82C0", fontSize: "20px" }}>
              Contact Info
            </Typography>
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
        <img
          src={Map}
          alt="map"
          style={{
            height: "auto",
            maxWidth: "1220px",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <Box sx={{ textAlign: "center" }}>
        <Grid container justifyContent="center">
          {/* Office Location */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  backgroundColor: "#2B82C0",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ color: "white" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Office Location
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Suite Twelve, First Floor, Parkway <br /> Two, Manchester, M14
                7HR
              </Typography>
            </Box>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  backgroundColor: "#2B82C0",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhoneIcon sx={{ color: "white" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Phone Number
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Call: +44 0161 55 22 666 <br />
                <strong>WhatsApp:</strong> +44 0751 33 20 300
              </Typography>
            </Box>
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  backgroundColor: "#2B82C0",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EmailIcon sx={{ color: "white" }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginTop: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                Email
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                contact@cubeacademy.co.uk
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "55px",
          gap: "20px",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
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