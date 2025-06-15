import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";

import RactnagleBg from "../assets/rectanglebg.png";
import PopUp from "../assets/popUp.jsx";

const ConsultancyForm = () => {
  return (
    <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "684px",
          marginTop: "130px",
          marginLeft: "150px",
          marginRight: "150px",
          borderRadius: "15px",
          marginBottom: "200px",
          backgroundImage: `url(${RactnagleBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#161C2D",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "1200px",
            p: 4,
            borderRadius: 2,
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          }}
        >
          <Box sx={{ flex: 1, color: "white", pr: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#282E3D",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PopUp />
              </Box>
            </Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ lineHeight: 1.5, fontFamily: "Urbanist,sans-serif" }}
            >
              Get a free consultancy <br /> from our expert right now!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                fontFamily: "Urbanist,sans-serif",
                fontSize: "19px",
                opacity: "0.7",
              }}
            >
              With lots of unique blocks, you can easily build <br />a page
              without coding. Build your next landing
              <br /> page so quickly with Albino.
            </Typography>
          </Box>

          <Paper sx={{ p: 4, borderRadius: 2, width: 350 }}>
            <TextField
              fullWidth
              label="Name"
              placeholder="i.e. John Doe"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              placeholder="i.e. john@mail.com"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone"
              placeholder="i.e. 123-456-7890"
              margin="normal"
            />
            <TextField
              fullWidth
              select
              label="Which service do you need?"
              margin="normal"
              defaultValue=""
            >
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
            </TextField>
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: "17px",
                bgcolor: "#2B82C0",
                mt: 2,
                fontFamily: "urbanist, sans-serif",
                padding: "18px",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#1F6BA0 ",
                },
              }}
            >
              Get Free Consultancy
            </Button>
          </Paper>
        </Box>
      </Box>
  );
};

export default ConsultancyForm;
