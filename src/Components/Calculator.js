import React from "react";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";

function Calculator() {
  return (
    <Box
      sx={{
        width: { lg: "564px", md: "482px", sm: "686px", xs: "328px" },
        height: "448px",
        bgcolor: "#fff",
        borderRadius: "16px",
        p: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: "24px", fontFamily: "Inter", fontWeight: "600" }}
      >
        Enter your details below
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "40%",
          bgcolor: "tomato",
          display: "flex",
          gap: "24px",
        }}
      >
        <Box sx={{ width: "50%", height: "100%", bgcolor: "yellow" }}></Box>
        <Box sx={{ width: "50%", height: "100%", bgcolor: "yellow" }}></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40%",
          backgroundImage: "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
          borderRadius: "16px 999px 999px 16px",
        }}
      ></Box>
    </Box>
  );
}

export default Calculator;
