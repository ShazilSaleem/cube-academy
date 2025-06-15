import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Arrow from "../assets/arrow.jsx";
import Question from "../assets/question.jsx";
import Family from "../assets/family.jsx";
import Medal from "../assets/medal.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";

export default () => {
  const isDesktop = useMediaQuery("(max-width: 1540px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "80px",
        bgcolor: "#2B82C01A",
        padding: "100px 0 100px 200px" /* Top, Right, Bottom, Left */,
        gap: "40px",
      }}
    >
      <Box sx={{ width: "800px" }}>
        <Typography
          sx={{
            fontFamily: "urbanist, sans-serif",
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
            gap: "8px",
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
            fontSize: "54px",
            marginTop: "40px",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          Why Join Cube Academy?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            marginBottom: "60px",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Read some of the benefits that our students enjoy by joining our
          network
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2B82C0",
            fontFamily: "Urbanist, sans-serif",
            borderRadius: "8px",
            padding: "13px",
            width: "200px",
            fontWeight: "bold",
            fontSize: "20px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1F6BA0",
            },
          }}
        >
          Explore all
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        <Swiper spaceBetween={300} slidesPerView={3}>
          <SwiperSlide>
            <Card
              sx={{
                width: 446,
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "15px",
                marginTop: "10px",
                height: "362px",
              }}
            >
              <CardContent>
                <Question />
                <Typography
                  fontWeight="bold"
                  fontSize={"24px"}
                  sx={{ fontFamily: "urbanist, sans-serif", marginTop: "20px" }}
                >
                  Comprehensive Training Programs{" "}
                </Typography>
                <Typography
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Learn practical accounting skills through hands-on training.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "urbanist, sans-serif",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 446,
                height: 362,
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "15px",
                marginTop: "10px",
                bgcolor: "#2B82C0",
              }}
            >
              <CardContent>
                <Family />
                <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "urbanist, sans-serif",
                    color: "white",
                    fontSize: "24px",
                    marginTop: "10px",
                  }}
                >
                  Flexible Learning Options{" "}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "urbanist, sans-serif",
                    color: "white",
                    marginTop: "20px",
                    marginBottom: "25px",
                    lineHeight: 1.5,
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Choose between online and on-site courses
                  <br /> to suit your schedule.
                </Typography>
                <Typography
                  sx={{ fontFamily: "urbanist, sans-serif", color: "white",fontWeight:"bold", fontSize:"18px" }}
                >
                  Click Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 446,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                padding: "15px",
                marginTop: "10px",
                height: "362px",
              }}
            >
              <CardContent>
                <Medal />
                <Typography
                  fontWeight="bold"
                  sx={{
                    fontFamily: "urbanist, sans-serif",
                    marginTop: "20px",
                    fontSize: "24px",
                  }}
                >
                  Expert Mentorship{" "}
                </Typography>
                <Typography
                  textAlign="left"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "25px",
                    fontFamily: "urbanist, sans-serif",
                    lineHeight: 1.5,
                    fontSize: "18px",
                    fontWeight:"bold"
                  }}
                >
                  Learn from experienced professionals in<br/> the accounting field.{" "}
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif",fontWeight:"bold", fontSize:"18px" }}>
                  Check Here...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                width: 446,
                borderRadius: "16px", // Rounded corners
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                padding: "15px",
                marginTop: "10px",
                height: "362px",
              }}
            >
              <CardContent>
                <Medal />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontFamily: "urbanist, sans-serif", marginTop: "20px", fontSize: "24px" }}
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
                    fontSize: "18px",
                    fontWeight:"bold"
                  }}
                >
                  I want you to take it to the next level. Can you use a high
                  definition screenshot I really like the colour but can you
                  change
                </Typography>
                <Typography sx={{ fontFamily: "urbanist, sans-serif", fontWeight:"bold", fontSize:"18px" }}>
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
