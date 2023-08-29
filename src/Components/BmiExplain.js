import React from "react";
import Box from "@mui/joy/Box";
import Guy from "../Sources/images/image-man-eating.webp";
import Vector from "../Sources/images/pattern-curved-line-left.svg";
import { Typography } from "@mui/material";
function BmiExplain() {
  return (
    <Box
      sx={{
        //bgcolor: "tomato",
        width: "100vw",
        height: "100%",
        overflow: "hidden",
        px: { lg: "18rem", md: "4rem", sm: "3rem", xs: "1rem" },
        //bgcolor: "yellow",
        mb: "4rem",
      }}
    >
      <Box
        sx={{
          //bgcolor: "tomato",
          height: "100%",
          py: { lg: "4rem", sm: "8rem", xs: "0rem" },
          width: "100%",
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          alignItems: "center",
          //bgcolor: "yellow",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box
          sx={{
            //bgcolor: "green",
            width: { lg: "50%", sm: "150%", xs: "100vw" },
            height: "100%",
            borderRadius: "32px",
            display: "flex",
            position: "relative",
            transform: { lg: "translateX(0)", sm: "translateX(-35%)" },
            alignSelf: { lg: "flex-end", md: "flex-start" },
            mb: { lg: "0", md: "0", sm: "0", xs: "4rem" },
            //bgcolor: "green",
          }}
        >
          <img className="GuyImg" src={Guy} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            width: { lg: "40%", sm: "100%" },
            alignSelf: "center",
            //bgcolor: "tomato",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-210px",
              right: "40px",
              zIndex: "2000",
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
          >
            <img src={Vector}></img>
          </Box>
          <Typography
            sx={{
              color: "#253347",
              fontFamily: "Inter",
              fontSize: { lg: "48px", sm: "32px", xs: "32px" },
              lineHeight: "110%",
              fontWeight: "600",
            }}
          >
            What your BMI result means
          </Typography>
          <Typography
            sx={{
              color: "#5E6E85",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BmiExplain;
