import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";
import Calculator from "./Calculator";

function Hero() {
  return (
    <>
      {/* //
    // */}
      <Box
        sx={{
          width: { md: "70vw", xs: "100vw" },
          height: "45rem",
          position: "absolute",
          top: "0",
          left: "24px",
          zIndex: "-20",
          borderRadius: "0px 0px 32px 32px",
          backgroundImage:
            "linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",

          display: "flex",
          justifyContent: { md: "flex-start", xs: "center" },
        }}
      >
        <Box
          sx={{
            width: "64px",
            height: "64px",
            bgcolor: "tomato",
            mt: { md: "5rem", xs: "2rem" },
            mb: "1.5rem",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: { lg: "80vw", md: "90vw", xs: "100vw" },
          height: "100%",
          display: "flex",

          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "Flex",
              maxWidth: { md: "32rem", xs: "42rem" },
              flexDirection: "column",
              alignSelf: "center",
              height: "17rem",
              justifyContent: { md: "space-between", xs: "space-around" },
              mr: "2rem",
              textAlign: { md: "left", xs: "center" },
              mb: { md: "0", xs: "2rem" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { md: "64px", xs: "48px", letterSpacing: "-2.4px" },
                color: "#253347",
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: "110%",
                px: { md: "8px", xs: "26%" },
              }}
            >
              Body Mass Index Calculator
            </Typography>
            <Typography>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Typography>
          </Box>

          <Box
            sx={{ boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)" }}
          >
            <Calculator />
          </Box>
        </Box>
      </Box>

      {/* //
      // */}
    </>
  );
}

export default Hero;
