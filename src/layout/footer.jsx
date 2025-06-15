import React from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#333", color: "#ccc", py: 4, mt: 4 }}
    >
      <Container>
        <Stack spacing={4} direction={{ xs: "column", md: "row" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="#fff"
              sx={{ fontFamily: "Urbanist, sans-serif", fontWeight: "bold", fontSize:"24px" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              Manchester Office:
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              First Floor
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              Parkway Two
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              Manchester
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              M14 7HR
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              Telephone: 0161 55 22 666
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}
            >
              Email:{" "}
              <Link href="mailto:contact@cubeaccountants.com" color="inherit">
                contact@cubeaccountants.com
              </Link>
            </Typography>
          </Box>

          {/* Disclaimer Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="#fff"
              sx={{ fontFamily: "Urbanist, sans-serif", fontWeight: "bold", fontSize:"24px" }}
            >
              Disclaimer
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif",fontSize:"20px" }}
            >
              Cube Accountants takes no responsibility for information taken
              from our website without prior professional consultation with us.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Urbanist, sans-serif",fontSize:"20px" }}
            >
              Cube Accountants Limited is a company registered in England and
              Wales. Company No: 09408587.
            </Typography>
          </Box>

          {/* Useful Links Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="#fff"
              sx={{ fontFamily: "Urbanist, sans-serif", fontWeight: "bold", fontSize:"24px" }}
            >
              Useful Links
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              About Us
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              Careers
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              Contact Us
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              Services
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              Forms & Templates
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              Privacy Policy
            </Typography>
            <Typography sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"20px" }}>
              Terms & Conditions
            </Typography>
          </Box>

          {/* Follow Us Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
              color="#fff"
              sx={{ fontFamily: "Urbanist, sans-serif", fontWeight: "bold", fontSize:"24px" }}
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ fontFamily: "Urbanist, sans-serif" }}
              >
                <Twitter />
              </IconButton>
            </Box>
            <Box sx={{ mt: 2 }}>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                sx={{ backgroundColor: "#25D366", color: "white" }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
