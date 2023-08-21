import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import React from "react";
import Calculator from "./Calculator";
import Logo from "../Sources/images/logo.svg";

function Hero() {
  return (
    <>
      {/* //
    // */}
      <Box
        sx={{
          pb: { lg: "10%", xs: "20%" },
          overflowX: "hidden",
          mb: { lg: "4rem", sm: "-8rem" },
          width: "100vw",
          //bgcolor: "tomato",
          maxHeight: { lg: "50rem", md: "", sm: "", xs: "" },
        }}
      >
        <Box
          sx={{
            width: { md: "70vw", xs: "100vw" },
            height: "45rem",
            position: "absolute",
            top: "0",
            left: { lg: "24px", md: "0" },
            zIndex: "-20",
            borderRadius: "0px 0px 32px 32px",
            backgroundImage:
              "linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
          }}
        ></Box>
        <Box
          sx={{
            px: { lg: "18rem", md: "4rem", xs: "1rem" },
            display: "flex",
            flexDirection: "column",
            zIndex: "20",
          }}
        >
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
                mt: { md: "5rem", xs: "2rem" },
                mb: "1.5rem",
                justifySelf: "center",
              }}
            >
              <img src={Logo} alt="logo"></img>
            </Box>
          </Box>
          <Box
            sx={{
              //width: { lg: "80vw", md: "90vw", xs: "100vw" },
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                justifyContent: "space-between",
                //alignItems: "",
                width: "100%",
                alignItems: { lg: "flex-start", sm: "center" },
              }}
            >
              <Box sx={{ display: "flex", maxHeight: "30rem" }}>
                <Box
                  sx={{
                    display: "Flex",
                    maxWidth: { md: "32rem", xs: "42rem" },
                    flexDirection: "column",
                    alignSelf: "center",
                    height: "100%",
                    justifyContent: { md: "space-between", xs: "space-around" },
                    mr: { md: "2rem", sm: "" },
                    textAlign: { md: "left", xs: "center" },
                    mb: { md: "0", sm: "2rem", xs: "4rem" },
                    mt: "4rem",
                    //bgcolor: "tomato",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        md: "64px",
                        xs: "48px",
                        letterSpacing: "-2.4px",
                      },
                      color: "#253347",
                      fontFamily: "Inter",
                      fontWeight: "600",
                      lineHeight: "110%",
                      //px: { md: "8px", sm: "26%", xs: "23%" },
                    }}
                  >
                    Body Mass Index Calculator
                  </Typography>
                  <Typography sx={{}}>
                    Better understand your weight in relation to your height
                    using our body mass index (BM) calculator. While BMI is not
                    the sole determinant of a healthy weight, it offers a
                    valuable starting point to evaluate your overall health and
                    well-being.
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Calculator />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* //
      // */}
    </>
  );
}

export default Hero;
