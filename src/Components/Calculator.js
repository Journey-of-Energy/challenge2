import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";
import Radio from "@mui/joy/Radio";

function Calculator() {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [loading, setLoading] = useState(false);
  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
    // console.log(`Vyška je ${height}`);
    // calculateBmi();
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
    // console.log(`Hmotnosť je ${weight}`);
    // console.log(e.target.value);
    // calculateBmi();
  };

  const calculateBmi = () => {
    const metersHeight = height / 100;
    const bmiHeight = metersHeight * metersHeight;
    const bmi = weight / bmiHeight;
    setBmi(bmi.toFixed(1));
    //   console.log(`Vyška je ${height}`);
    //   console.log(`Hmotnosť je ${weight}`);
  };

  const timer = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };
  useEffect(() => {
    calculateBmi();
  }, [weight, height]);
  return (
    <Box
      sx={{
        width: { lg: "564px", md: "482px", sm: "686px", xs: "100%" },
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
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Radio label="Metric" size="lg" />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Radio label="Imperial" size="lg" />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40%",

          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap: "24px",
        }}
      >
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            height: "100%",

            border: "1px solid #d8e2e7",
            borderRadius: "12px",
            padding: "20px 24px",
            display: "flex",
          }}
        >
          <form>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="0"
              label="Height"
            ></input>
          </form>
          <Typography
            sx={{
              color: "#345FF6",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            cm
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            height: "100%",

            border: "1px solid #d8e2e7",
            borderRadius: "12px",
            padding: "20px 24px",
            display: "flex",
          }}
        >
          <form>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              placeholder="0"
              label="Weight"
            ></input>
          </form>
          <Typography
            sx={{
              color: "#345FF6",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            kg
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40%",
          backgroundImage: "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
          borderRadius: "16px 999px 999px 16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "72px",
            color: "#fff",
            p: "32px",
          }}
        >
          {bmi > 0 ? bmi : "0"}
        </Typography>
      </Box>
    </Box>
  );
}

export default Calculator;
