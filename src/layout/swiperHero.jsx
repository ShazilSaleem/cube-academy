import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Shadow from "../assets/shadow.jsx";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";

const images = [img1, img2, img3, img4, img1];

const StorySection = ({ heading, paragraph, button }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 5,
        py: 18,
        background: "#fdf8f7",
      }}
    >
      <Box sx={{ maxWidth: 400, marginLeft: "100px", position: "relative" }}>
        <Shadow
          style={{
            position: "absolute",
            top: "-370px",
            left: "-40%",
          }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Urbanist, sans-serif" }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{ color: "#555", my: 2, fontFamily: "Urbanist, sans-serif" }}
        >
          {paragraph}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2B82C0",
            color: "white",
            borderRadius: 2,
            textTransform: "none",
            marginTop: "20px",
            fontFamily: "Urbanist, sans-serif",
            px: 3,
            "&:hover": { backgroundColor: "#8C1A1C" },
          }}
        >
          {button} →
        </Button>
      </Box>

      {/* Right Side: Scrollable Images */}
      <Box sx={{ width: "60%" }}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          style={{ paddingBottom: 20 }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "200px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt={`Building ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default StorySection;
