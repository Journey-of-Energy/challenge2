import React from "react";
import Hero from "./Components/Hero";
import Box from "@mui/joy/Box";
import BmiExplain from "./Components/BmiExplain";
import { Portal } from "@mui/material";

function App() {
  return (
    <div>
      <Box
        sx={{
          //overflow: "hidden",
          "*": { padding: "0" },
          "*": { margin: "0" },
          "*": { boxSizing: "border-box" },
          // bgcolor: "yellow",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Portal sx={{ overflow: "hidden" }}>
          <Hero />
          <BmiExplain />
        </Portal>
      </Box>
    </div>
  );
}

export default App;
