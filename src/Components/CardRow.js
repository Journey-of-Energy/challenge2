import React from "react";
import Box from "@mui/joy/Box";
import HealthyIcon from "../Sources/images/icon-eating.svg";
import AdequateIcon from "../Sources/images/icon-sleep.svg";
import ExerciseIcon from "../Sources/images/icon-exercise.svg";
import { Typography } from "@mui/material";

function CardRow() {
  return (
    <Box
      sx={{
        //bgcolor: "green",
        width: "100vw",
        px: { lg: "1rem", xs: "0" },

        overflowX: "hidden",
        mb: { md: "4rem", xs: "0" },
      }}
    >
      <Box
        sx={{
          //bgcolor: "tomato",
          width: "100%",
          height: "100%",
          //overflow: "hidden",
          px: { lg: "18rem", md: "4rem", sm: "3rem", xs: "2rem" },
          //bgcolor: "yellow",
          backgroundImage:
            "linear-gradient(315deg, rgba(214, 230, 254, 0.25) 0%, rgba(214, 252, 254, 0.00) 100%)",
          borderRadius: { lg: "35px", xs: "0" },
          mb: "4rem",
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          py: "2rem",
          //gap: "8rem",
        }}
      >
        <Box
          sx={{
            width: { lg: "24rem", xs: "100%" },
            height: "100%",
            display: "flex",
            flexDirection: { lg: "column", sm: "row", xs: "column" },
            gap: { lg: "0", sm: "3rem", xs: "1.6rem" },
            alignSelf: "flex-start",
            py: "1.2rem",
          }}
        >
          <Box
            sx={{
              width: "64px",
              //mb: "2rem",
              alignSelf: "top",
              display: "Flex",
              alignItems: "center",
            }}
          >
            <img src={HealthyIcon} alt="HealthyIcon" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-1.2px",
                color: "#253347",
                mb: "1.2rem",
              }}
            >
              Healthy eating
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "150%",
                color: "#5E6E85",
              }}
            >
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { lg: "24rem", xs: "100%" },
            height: "100%",
            display: "flex",

            alignSelf: "flex-start",
            py: "1.2rem",
            flexDirection: { lg: "column", sm: "row", xs: "column" },
            gap: { lg: "0", sm: "3rem", xs: "1.6rem" },
            //bgcolor: "tomato",
          }}
        >
          <Box sx={{ width: "64px", display: "flex", alignItems: "center" }}>
            <img src={ExerciseIcon} alt="ExerciseIcon" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-1.2px",
                color: "#253347",
                mb: "1.2rem",
              }}
            >
              Regular exercise
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "150%",
                color: "#5E6E85",
              }}
            >
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { lg: "24rem", xs: "100%" },
            height: "100%",
            display: "flex",
            flexDirection: { lg: "column", sm: "row", xs: "column" },
            gap: { lg: "0", sm: "3rem", xs: "1.6rem" },
            alignSelf: "flex-start",
            py: "1.2rem",
            //bgcolor: "tomato",
          }}
        >
          <Box sx={{ width: "64px", display: "flex", alignItems: "center" }}>
            <img src={AdequateIcon} alt="AdequateIcon" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-1.2px",
                color: "#253347",
                mb: "1.2rem",
              }}
            >
              Adequate sleep
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "150%",
                color: "#5E6E85",
              }}
            >
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardRow;
