import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Arrow from "../assets/arrow.jsx";
import Question from "../assets/question.jsx";
import Family from "../assets/family.jsx";
import Medal from "../assets/medal.jsx"
import useMediaQuery from "../hooks/useMediaQuery.js";

export default () => {
  const isDesktop = useMediaQuery("(max-width: 1540px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        bgcolor: "#2B82C01A",
        padding: "120px",
        gap: "40px",
      }}
    >
      <Box sx={{ width: "520px" }}>
        <Typography
          sx={{
            fontFamily: "urbanist, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            color: "#2B82C0",
          }}
        >
          <Arrow />
          Student Benefits
        </Typography>

        <Typography
          sx={{
            fontFamily: "urbanist, sans-serif",
            fontWeight: "bold",
            fontSize: "42px",
            marginTop: "40px",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          Why Join Cube <br /> Academy?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            marginBottom: "60px",
            marginTop: "20px",
          }}
        >
          Read some of the benefits that our students enjoy by joining our
          network
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2B82C0",
            fontFamily: "poppins",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            "&:hover": {
              backgroundColor: "#1F6BA0 ",
            },
          }}
        >
          Explore All
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        <Swiper spaceBetween={isDesktop ? 250 : 140} slidesPerView={3}>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                marginTop: "10px",
                height: "380px",
              }}
            >
              <CardContent>
                <Question />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "Poppins, sans-serif", marginTop: "20px" }}
                >
                  Comprehensive Training Programs
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                    fontWeight: "600",
                  }}
                >
                  Learn practical accounting skills through hands-on training.
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                height: 380,
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                marginTop: "10px",
                bgcolor: "#2B82C0",
              }}
            >
              <CardContent>
                <Family />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    marginTop: "10px",
                  }}
                >
                  Flexible Learning Options
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "urbanist, sans-serif",
                    color: "white",
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontWeight: "600",
                  }}
                >
                  Choose between online and on-site courses to suit your
                  schedule.
                </Typography>
                <Typography
                  sx={{ fontFamily: "urbanist, sans-serif", color: "white" }}
                >
                  Click Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                padding: "40px",
                marginTop: "10px",
                height: "380px",
              }}
            >
              <CardContent>
                <Medal />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "Poppins, sans-serif", marginTop: "20px" }}
                >
                  Expert Mentorship
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                    fontWeight: "600",
                  }}
                >
                  Save valuable time and reduce costs with our streamlined
                  processes.
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 360,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                padding: "40px",
                marginTop: "10px",
                height: "380px",
              }}
            >
              <CardContent>
                <Medal />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "Poppins, sans-serif", marginTop: "20px" }}
                >
                  Comprehensive Support{" "}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                    fontWeight: "600",
                  }}
                >
                  Can you use a high definition screenshot I really like the
                  colour but can you change
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
