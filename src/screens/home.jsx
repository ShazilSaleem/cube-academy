import React, { useState, useRef } from "react";
import Hero from "../layout/hero";
import Footer from "../layout/footer";
import BenefitsCarousel from "../layout/benefitCareousel"; // Import the new component
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  Paper,
  TextField,
  Stack,
  MenuItem,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
} from "@mui/material";
import BigArrow from "../assets/bigArrow.jsx";
import Podcast1 from "../assets/podcast.png";
import RactnagleBg from "../assets/rectanglebg.png";
import Before from "../assets/before.jsx";
import After from "../assets/after.jsx";
import PopUp from "../assets/popUp.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import TabImage from "../assets/tabImage.png";
import Mobile from "../assets/mobile.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  CheckCircle,
  Build,
  GridView,
  Chat,
  Star,
  StarBorder,
  Person,
} from "@mui/icons-material"; // Icons
import Wave from "../assets/wave.jsx";
import Wave2 from "../assets/wave2.jsx";
import AccountsIcon from "../assets/accounts.jsx";
import AuditIcon from "../assets/audit.jsx";
import AdvisoryIcon from "../assets/advisory.jsx";
import PayrollIcon from "../assets/payroll.jsx";
import { data, testimonials } from "../mocks/staticData.jsx";
import Video from "../assets/video.png";

function Home() {
  const whatRef = useRef(null);
  const whenRef = useRef(null);
  const whereRef = useRef(null);
  const whoRef = useRef(null);
  const howRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);

    // Mapping index to respective section ref
    const sectionRefs = [teamRef, aboutRef, missionRef, faqsRef];
    sectionRefs[newValue]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const isDesktop = useMediaQuery("(max-width: 1497px)");
  const serviceIcons = {
    Accounts: <AccountsIcon />,
    Audit: <AuditIcon />,
    "Business Advisory": <AdvisoryIcon />,
    Payroll: <PayrollIcon />,
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "100px",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginLeft: "100px",
            width: "750px",
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontFamily: "Urbanist, sans-serif",
              fontWeight: "bold",
              lineHeight: "1.2",
              marginLeft: "60px",
            }}
          >
            Turning Prospects into <br />{" "}
            <span style={{ color: "#2B82C0" }}>Professionals.</span>
          </Typography>
          <Typography
            sx={{
              color: "#212121",
              fontFamily: "Urbanist, sans-serif",
              marginLeft: "60px",
              fontSize: "20px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Learn, grow, and achieve with Cube Academy <br />
            expert-led training.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2B82C0",
              fontFamily: "Urbanist, sans-serif",
              borderRadius: "8px",
              padding: "10px",
              marginLeft: "60px",
              width: "200px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1F6BA0 ",
              },
            }}
          >
            Join Academy Now
          </Button>
        </Box>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <img
            src={TabImage}
            alt="tab image"
            style={{ width: "100%", display: "block" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          position: "relative",
        }}
      >
        <Wave
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        />
        <Wave2
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%) ",
            width: "100%",
          }}
        />
        <Typography
          sx={{
            display: "block",
            textAlign: "left",
            fontFamily: "Urbanist, sans-serif",
            fontSize: "20px",
          }}
        >
          <span
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              fontFamily: "Urbanist, sans-serif",
            }}
          >
            Our Mission
          </span>
          <br /> Cube Academy’s mission is to shape the future of accounting by
          equipping aspiring professionals
          <br /> with the skills and knowledge they need to excel. Through our
          comprehensive courses, we empower
          <br /> learners to turn ambitions into careers.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: "#2B82C0",
            fontFamily: "Urbanist, sans-serif",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            marginTop: "50px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "1F6BA0 ",
            },
          }}
        >
          Learn More
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          padding: 4,
          marginTop: "200px",
          marginBottom: "150px",
        }}
      >
        <Grid container spacing={18} justifyContent="center">
          {data.map((item, index) => (
            <Grid item key={index}>
              <Box textAlign="center">
                <Box
                  sx={{
                    width: 60, // set desired width
                    height: 60, // set desired height
                    mx: "auto", // center the icon horizontally
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>{" "}
                <Typography
                  variant="body1"
                  fontWeight="600"
                  mt={1}
                  fontFamily={"Urbanist, sans-serif"}
                  fontSize={"22px"}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          sx={{
            marginTop: "40px",
            "& .MuiTabs-indicator": {
              backgroundColor: "#821BC3",
            },
            "& .MuiTab-root": {
              color: "#959595 !important",
              marginX: "18px",
              fontSize: "18px",
              fontFamily: "Urbanist, sans-serif",
              paddingBottom: "25px",
            },
            "& .Mui-selected": {
              color: "#821BC3 !important",
            },
          }}
        >
          {["What", "When", "Where", "Why", "Who", "How"].map(
            (label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  fontFamily: "Urbanist, sans-serif",
                }}
              />
            )
          )}
        </Tabs>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
          alignItems: "center",
          padding: "70px",
          marginLeft: "170px",
          marginRight: "170px",
          height: "559px",
          width: "1475px",
          backgroundColor: "#2B82C01A",
          borderRadius: "24px",
          gap: "50px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              color: "#821BC3",
              fontSize: "16px",
            }}
          >
            - What
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: "bold",
              fontSize: "48px",
              marginBottom: "10px",
            }}
          >
            What we do:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              marginBottom: "20px",
              padding: "5px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            • Our programs include certification courses, hands-on workshops,
            and personalized mentorships to help aspiring accountants build a
            strong foundation for their careers.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#2B82C0",
              fontFamily: "Urbanist, sans-serif",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#1F6BA0",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box>
          <img src={Video} alt="Video" />
        </Box>
      </Box>

      <Box sx={{ p: 4, textAlign: "center", mt: 11, mb: 15 }}>
        <Typography
          fontSize={"54px"}
          fontWeight={700}
          sx={{ fontFamily: "urbanist, sans-serif" }}
        >
          How To Join Our {""}
          <span
            style={{ color: "#2B82C0", fontFamily: "urbanist, sans-serif" }}
          >
            Network
          </span>{" "}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            mb: 4,
            fontFamily: "urbanist, sans-serif",
            fontSize: "22px",
          }}
        >
          Take the First Step Towards Your Accounting Career{" "}
        </Typography>
        <Box>
          <Stack
            spacing={35}
            direction={{ xs: "column", md: "row" }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "70px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  fontFamily: "urbanist, sans-serif ",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Browse Courses{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "urbanist, sans-serif ",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Explore our comprehensive training
                <br /> programs and find the right fit.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  fontFamily: "urbanist, sans-serif ",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Get Enrolled{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "urbanist, sans-serif ",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Receive confirmation and access
                <br /> course materials tailored to your
                <br /> goals.
              </Typography>
            </Box>{" "}
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  fontFamily: "urbanist, sans-serif ",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Achieve Certification{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "urbanist, sans-serif ",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Complete your course and step<br/> confidently into your accounting<br/> career.
              </Typography>
            </Box>
          </Stack>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "16px",
              marginTop: "80px",
              overflow: "hidden",
            }}
          >
            <BigArrow />
            <div
              style={{
                position: "absolute",
                top: 0,
                display: "flex",
                width: "100%",
                marginLeft: isDesktop ? "100px" : "400px",
                gap: "270px",
              }}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <div
                  key={index}
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    color: "#2B82C0",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                    fontFamily: "urbanist, sans-serif",
                    transition: "background-color 0.3s, color 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2B82C0";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "#2B82C0";
                  }}
                >
                  {num}.
                </div>
              ))}
            </div>
          </div>
          <Stack
            spacing={40}
            direction={{ xs: "column", md: "row" }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "70px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  fontFamily: "urbanist, sans-serif ",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Apply Online{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "urbanist, sans-serif ",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Submit a quick application to<br/> kickstart your learning journey.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  fontFamily: "urbanist, sans-serif ",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Learn and Practice{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "urbanist, sans-serif ",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Participate in interactive sessions and<br/> gain hands-on accounting experience.
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ marginTop: "80px" }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#2B82C0",
                fontFamily: "Urbanist,",
                borderRadius: "10px",
                padding: "12px 32px 12px 32px",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1F6BA0",
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Box>
      </Box>

      <BenefitsCarousel />

      <Box
        sx={{
          textAlign: "center",
          py: 8,
          px: 4,
          backgroundColor: "white",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            top: -40,
            left: "6%",
            transform: "translateX(-50%)",
          }}
        >
          <Before />
        </Box>
         <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            top:-285,
            left: "94%",
            transform: "translateX(-50%)",
          }}
        >
          <After />
        </Box>
        <Typography
          fontSize={"54px"}
          fontWeight="bold"
          sx={{ fontFamily: "urbanist, sans-serif" }}
        >
          Testimonials
        </Typography>

        <Typography
          sx={{
            color: "#555",
            maxWidth: 700,
            mx: "auto",
            mt: 1,
            mb: 4,
            fontFamily: "urbanist, sans-serif",
            fontSize:"20px"
          }}
        >
          Join us to access resources, a supportive community, and growth
          opportunities with a leading accountancy firm.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                width: 280,
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#2B82C01A",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Avatar sx={{ bgcolor: "#fff", mx: "auto", mb: 1 }}>
                <Person sx={{ color: "#A61E20" }} />
              </Avatar>

              <Typography
                fontWeight="bold"
                sx={{ fontFamily: "urbanist, sans-serif", fontSize:"20px" }}
              >
                {testimonial.name}
              </Typography>

              <Typography
                sx={{
                  color: "#333",
                  fontSize: 14,
                  mt: 1,
                  fontFamily: "urbanist, sans-serif",
                  fontWeight: 600,
                }}
              >
                {testimonial.feedback}
              </Typography>

              <Box sx={{ mt: 2 }}>
                {[...Array(5)].map((_, starIndex) =>
                  starIndex < testimonial.rating ? (
                    <Star key={starIndex} sx={{ color: "#1A1A1A" }} />
                  ) : (
                    <StarBorder key={starIndex} sx={{ color: "#1A1A1A" }} />
                  )
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            height: 4,
            backgroundColor: "#e0e0e0",
            borderRadius: 2,
            mt: 4,
            mx: "auto",
            maxWidth: 200,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100%",
              backgroundColor: "#A61E20",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
