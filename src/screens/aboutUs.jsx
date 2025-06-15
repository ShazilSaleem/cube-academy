import React, { useRef, useState } from "react";
import Footer from "../layout/footer";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import Arrow from "../assets/arrow.jsx";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Phonix1 from "../assets/phonix.png";
import Phonix2 from "../assets/phonix2.png";
import Phonix3 from "../assets/phonix3.png";
import Phonix4 from "../assets/phonix4.png";
import Mission from "../assets/mission.png";
import ValuesImage from "../assets/valuesImage.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RedCube from "../assets/redCube.jsx";
import BlueCube from "../assets/blueCube.jsx";
import Before from "../assets/before.jsx";
import After from "../assets/after.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import Hero from "../layout/hero.jsx";
import Wave from "../assets/wave.jsx";
import Wave2 from "../assets/wave2.jsx";
import {
  CheckCircle,
  Build,
  GridView,
  Chat,
  Star,
  StarBorder,
  Person,
} from "@mui/icons-material"; // Icons
import { values } from "../mocks/staticData.jsx";
function AboutUs() {
  const teamRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const faqsRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(Phonix1);
  const isDesktop = useMediaQuery("(max-width: 1712px)");
  const isScreen = useMediaQuery("(max-width: 1496px)");
  const isTab = useMediaQuery("(max-width: 1240px)");
  const isMobile = useMediaQuery("(max-width: 848px)");

  const testimonials = [
    {
      name: "David Gillroy",
      feedback:
        "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
      rating: 5,
    },
    {
      name: "Kyle Showdole",
      feedback:
        "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
      rating: 4,
    },
    {
      name: "Milla Holland",
      feedback:
        "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
      rating: 5,
    },
  ];

  return (
    <div>
      <Hero
        heading="Our Story, Your Success"
        paragraph="Discover the people, values, and vision behind our firm"
        button="Explore More"
      />
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
            textTransform: "none",
            fontSize: "16px",
            width: "200px",
            marginTop: "50px",
            "&:hover": {
              backgroundColor: "1F6BA0 ",
            },
          }}
        >
          Learn More
        </Button>
      </Box>

      <Box sx={{ mx: "auto", p: 3 }}>
        <Box
          sx={{
            mt: 10,
            alignItems: "flex-start",
            position: "relative",
            marginLeft: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 10,
              top: 115,
              left: "93%",
              transform: "translateX(-50%)",
              display: isDesktop ? "none" : "flex",
            }}
          >
            <After />
          </Box>
          <Typography
            color="#821BC3"
            sx={{
              fontFamily: "Urbanist, sans-serif ",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "90px",
                marginBottom: "10px",
              }}
            >
              <Arrow />
              <Typography
                sx={{
                  color: "#2B82C0",
                  fontFamily: "Urbanist, sans-serif ",
                  fontSize: "24px",
                }}
              >
                Our Team
              </Typography>
            </Box>
          </Typography>
          <Typography
            fontSize={"54px"}
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Urbanist, sans-serif ", marginLeft: "90px" }}
          >
            Our Fantastic Architecture
          </Typography>
          <Typography
            fontSize={"24px"}
            mx="auto"
            sx={{ fontFamily: "Urbanist, sans-serif ", marginLeft: "90px",color:"#000F2D" }}
            gutterBottom
          >
            A new dimension for the gold <br /> standard in architecture
          </Typography>
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: isScreen ? "column" : "row",
              mt: 5,
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              marginLeft: "80px",
              marginRight: isDesktop ? "40px" : "180px",
              marginBottom: "180px",
            }}
          >
            <Box>
              <img
                src={selectedImage || Phonix2}
                alt="pic-1"
                style={{
                  borderRadius: "16px",
                  height: "700px",
                  width: "500px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    color: "#00194B",
                    fontSize: "32px",
                    fontWeight: "bold",
                    fontFamily: "Urbanist, sans-serif",
                    marginTop: isScreen ? "50px" : "0px",
                    marginBottom: "10px",
                  }}
                >
                  Divin Phonix
                </Typography>
                <Typography
                  sx={{
                    color: "#2B82C0",
                    fontSize: "18px",
                    fontFamily: "Urbanist, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  Lead Engineer Of Building
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: 1.6,
                    textAlign: "left",
                    fontFamily: "Urbanist, sans-serif",
                  }}
                >
                  Can you make it pop can you make the font bigger? nor I know
                  somebody who can do this for a <br /> reasonable cost make it
                  sexy you are lucky to even be doing this for us can you pimp
                  this
                  <br />
                  powerpoint, need more geometry patterns can you punch up the
                  fun level on these icons. You <br /> might wanna give it.
                </Typography>
                <Box sx={{ display: "flex", gap: "30px", marginTop: "25px" }}>
                  <Facebook sx={{ color: "#2B82C0" }} />
                  <Twitter sx={{ color: "#2B82C0" }} />
                  <LinkedIn sx={{ color: "#2B82C0" }} />
                  <Instagram sx={{ color: "#2B82C0" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "50px",
                    justifyContent: { xs: "center", sm: "start" },
                    marginTop: isScreen ? "50px" : "120px",
                  }}
                >
                  {[Phonix2, Phonix3, Phonix4].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail-${index}`}
                      style={{
                        cursor: "pointer",
                        border:
                          selectedImage === image
                            ? "1px solid #821BC3"
                            : "none",
                        borderRadius: "8px",
                      }}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          px: 4,
          marginBottom: "200px",
          backgroundColor: "white",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", mb: 2, fontFamily: "Urbanist, sans-serif", fontSize:"56px" }}
        >
          Our{" "}
          <span
            style={{ color: "#2B82C0", fontFamily: "Urbanist, sans-serif",fontSize:"56px" }}
          >
            Values
          </span>
        </Typography>

        <Typography
          sx={{
            color: "#555",
            maxWidth: 600,
            mx: "auto",
            mb: 4,
            fontFamily: "Urbanist, sans-serif",
            fontSize:"22px"
          }}
        >
          Designed to impeccably fulfill all your unique needs and requirements.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {values.map((value, index) => (
            <Box
              key={index}
              sx={{
                width: 250,
                p: 1,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "white",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#fbe1e1",
                  mx: "auto",
                  mb: 2,
                }}
              >
                {value.icon}
              </Box>
              <Typography
                fontWeight="bold"
                sx={{ fontFamily: "Urbanist, sans-serif", fontSize:"24px"}}
              >
                {value.title}
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  fontSize: 14,
                  mt: 1,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#2B82C01A",
          padding: "55px",
          marginBottom: "150px",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontFamily: "urbanist, sans-serif",
            fontWeight: "bold",
          }}
        >
          Get benefit from our other platforms
        </Typography>
        <Stack direction="row" spacing={15} marginTop={"25px"}>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "urbanist, sans-serif",
                fontSize: "28px",
                color: "#1A1A1A",
              }}
            >
              <RedCube />
              Accountants
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#767676",
                  fontFamily: "urbanist, sans-serif",
                  fontSize: "16px",
                }}
              >
                Cube Partners connects businesses to <br />
                achieve extraordinary results. Let’s grow
                <br /> together.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "urbanist, sans-serif",
                fontSize: "28px",
                color: "#1A1A1A",
              }}
            >
              <BlueCube />
              Academy
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#767676",
                  fontFamily: "urbanist, sans-serif",
                  fontSize: "16px",
                }}
              >
                Cube Academy is a training provider which
                <br /> offers an opportunity to gain practical
                <br /> experience in finance
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Footer />
    </div>
  );
}

export default AboutUs;
