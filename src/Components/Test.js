import React from "react";
import Box from "@mui/joy/Box";

function Test() {
  return (
    <Box
      sx={{
        bgcolor: "tomato",
        width: { lg: "80vw", md: "90vw", xs: "100vw" },
        height: "20rem",
      }}
    ></Box>
  );
}

export default Test;
