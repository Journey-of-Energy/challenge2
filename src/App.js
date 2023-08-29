import React from "react";
import Hero from "./Components/Hero";
import Box from "@mui/joy/Box";
import BmiExplain from "./Components/BmiExplain";
import { Portal } from "@mui/material";
import CardRow from "./Components/CardRow";
import Limitations from "./Components/Limitations";

function App() {
  return (
    <div>
      <Box
        sx={{
          overflow: "hidden",
          //"*": { boxSizing: "border-box" },

          //bgcolor: "blue",
          width: "100vw",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Hero />
        <BmiExplain />
        <CardRow />
        <Limitations />
      </Box>
    </div>
  );
}

export default App;
