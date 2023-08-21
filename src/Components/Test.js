import React from "react";
import Box from "@mui/joy/Box";

function Test() {
  return (
    <Box
      sx={{
        bgcolor: "tomato",
        width: "100vw",
        height: "20rem",
        overflow: "hidden",
        px: { lg: "24rem", md: "4rem", xs: "1rem" },
      }}
    >
      <Box
        sx={{
          bgcolor: "yellow",
          height: "2rem",
          width: "100%",
        }}
      ></Box>
    </Box>
  );
}

export default Test;
