import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";
import Radio from "@mui/joy/Radio";

function Calculator() {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [minOptimumWeight, setMinOptimumWeight] = useState();
  const [maxOptimumWeight, setMaxOptimumWeight] = useState();
  const [message, setMessage] = useState("Message");
  const [selectedValue, setSelectedValue] = useState("a");
  const [isMetric, setIsMetric] = useState(true);
  const [minStState, setMinStState] = useState("");
  const [minLbsState, setMinLbsState] = useState("");
  const [maxStState, setMaxStState] = useState("");
  const [maxLbsState, setMaxLbsState] = useState("");
  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    if (newHeight >= 0 && newHeight <= 300) {
      setHeight(newHeight);
    }

    // console.log(`Vyška je ${height}`);
    // calculateBmi();
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (selectedValue === "a") {
      setIsMetric(false);
    } else {
      setIsMetric(true);
    }
  };
  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    if (newWeight >= 0 && newWeight <= 300) {
      setWeight(newWeight);
    }
    // console.log(`Hmotnosť je ${weight}`);
    // console.log(e.target.value);
    // calculateBmi();
  };

  const calculateBmi = (arg) => {
    const metersHeight = height / 100;
    const bmiHeight = metersHeight * metersHeight;
    const internalBmi = weight / bmiHeight;
    const impBmi = parseFloat(arg);
    let convImpHeight = 0;
    let minImpWeight = 0;
    let maxImpWeight = 0;
    let minSt = 0;
    let minLbs = 0;
    let maxSt = 0;
    let maxLbs = 0;
    let minWeight = 0;
    let maxWeight = 0;
    if (arg >= 1 && isMetric === false) {
      setBmi(impBmi.toFixed(1));

      convImpHeight = parseInt(ftHeight) * 12 + parseInt(inchHeight);
      minImpWeight = (18.5 * (convImpHeight * convImpHeight)) / 703;
      minSt = Math.floor(minImpWeight / 14);
      minLbs = Math.floor(minImpWeight % 14);
      setMinStState(minSt);
      setMinLbsState(minLbs);
      maxImpWeight = (24.9 * (convImpHeight * convImpHeight)) / 703;
      maxSt = Math.floor(maxImpWeight / 14);
      maxLbs = Math.floor(maxImpWeight % 14);
      setMaxStState(maxSt);
      setMaxLbsState(maxLbs);
    } else {
      if (isMetric === true) {
        if (internalBmi === 0) {
          setBmi("");
        } else {
          setBmi(parseFloat(internalBmi.toFixed(1)));
          minWeight = (18.5 * (metersHeight * metersHeight)).toFixed(1);
          maxWeight = (24.9 * (metersHeight * metersHeight)).toFixed(1);
        }
      }
    }

    setMinOptimumWeight(minWeight);
    setMaxOptimumWeight(maxWeight);

    //   console.log(`Vyška je ${height}`);
    //   console.log(`Hmotnosť je ${weight}`);
  };

  //
  //
  //
  //IMPERIAL SYSTEM
  const [ftHeight, setFtHeight] = useState();
  const [inchHeight, setInchHeight] = useState();
  const [stWeight, setStWeight] = useState();
  const [lbsWeight, setLbsWeight] = useState();
  const [convertedHeight, setConvertedHeight] = useState();
  const [convertedWeight, setConvertedWeight] = useState();

  const handleFtChange = (e) => {
    const newFtHeight = e.target.value;
    setFtHeight(newFtHeight);
    calculateImpBmi();
  };
  const handleInchChange = (e) => {
    const newInchHeight = e.target.value;
    setInchHeight(newInchHeight);
    calculateImpBmi();
  };
  const handleStChange = (e) => {
    const newStWeight = e.target.value;
    setStWeight(newStWeight);
    calculateImpBmi();
  };
  const handleLbsChange = (e) => {
    const newLbsWeight = e.target.value;
    setLbsWeight(newLbsWeight);
    calculateImpBmi();
  };

  const convertValues = () => {
    const inch = parseInt(inchHeight);
    const lbs = parseInt(lbsWeight);
    setConvertedHeight(12 * ftHeight + inch);
    setConvertedWeight(14 * stWeight + lbs);
  };

  const calculateImpBmi = () => {
    const squaredHeight = convertedHeight * convertedHeight;
    const bmiResult = (convertedWeight / squaredHeight) * 703;
    calculateBmi(bmiResult);
  };
  //
  //
  //
  const messageSystem = () => {
    switch (true) {
      case bmi === 0:
        setMessage(
          "Enter your height and weight and you’ll see your BMI result here"
        );
        break;
      case bmi < 18.5:
        setMessage(
          `   Your current weight may be lower than what's considered healthy. Your ideal weight is between`
        );

        break;
      case bmi >= 18.5 && bmi < 24.9:
        setMessage(
          `Your BMI suggests you’re a healthy weight! Your ideal weight is between`
        );

        break;
      case bmi >= 25 && bmi <= 29.9:
        setMessage(
          `Your weight is slightly higher than the healthy range.  Your ideal weight is between`
        );
        break;
      case bmi > 30:
        setMessage(
          `Your weight is unhealthy high. Your ideal weight is between`
        );
        break;
      default:
        setMessage(
          "Enter your height and weight and you’ll see your BMI result here"
        );
    }
  };

  useEffect(() => {
    calculateBmi();
    messageSystem();
    convertValues();
    calculateImpBmi();
  }, [
    weight,
    height,
    bmi,
    message,
    isMetric,
    lbsWeight,
    stWeight,
    ftHeight,
    inchHeight,
    convertedHeight,
    convertedWeight,
  ]);
  return (
    <Box
      sx={{
        width: { lg: "564px", md: "482px", sm: "686px", xs: "100%" },
        height: "100%",
        bgcolor: "#fff",
        borderRadius: "16px",
        p: { md: "32px", xs: "24px" },
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
        overflow: "visible",
        zIndex: "8000",
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
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            label="Metric"
            size="lg"
            slotProps={{ input: { "aria-label": "A" } }}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            label="Imperial"
            size="lg"
            slotProps={{ input: { "aria-label": "B" } }}
          />
        </Box>
      </Box>
      {isMetric ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                color: "#5E6E85",
              }}
            >
              Height
            </Typography>
            <Box
              sx={{
                width: { md: "100%", xs: "100%" },
                height: "100%",
                border: "1px solid #d8e2e7",
                borderRadius: "12px",
                padding: "20px 24px",
                display: "flex",
                "&:focus-within": {
                  border: "1px solid #345FF6",
                },
              }}
            >
              <form>
                <input
                  type="number"
                  value={height}
                  min="0"
                  max="300"
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
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                color: "#5E6E85",
              }}
            >
              Weight
            </Typography>
            <Box
              sx={{
                width: { md: "100%", xs: "100%" },
                height: "100%",
                border: "1px solid #d8e2e7",
                borderRadius: "12px",
                padding: "20px 24px",
                display: "flex",
                "&:focus-within": {
                  border: "1px solid #345FF6",
                },
              }}
            >
              <form>
                <input
                  type="number"
                  min="0"
                  max="300"
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
        </Box>
      ) : (
        //
        //
        //
        //
        //Metric
        //
        //
        //
        //IMPERIAL
        //
        //
        <Box
          sx={{
            width: "100%",
            height: "100%",

            // display: "grid",
            // gridTemplateColumns: "1fr 1fr",
            // gridTemplateRows: "1fr 1fr",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                color: "#5E6E85",
              }}
            >
              Height
            </Typography>
            <Box sx={{ display: "flex", gap: "24px" }}>
              <Box
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: "100%",
                  border: "1px solid #d8e2e7",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "row",
                  "&:focus-within": {
                    border: "1px solid #345FF6",
                  },
                }}
              >
                <form>
                  <input
                    type="number"
                    value={ftHeight}
                    min="0"
                    max="300"
                    onChange={handleFtChange}
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
                  ft
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: "100%",
                  border: "1px solid #d8e2e7",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  "&:focus-within": {
                    border: "1px solid #345FF6",
                  },
                }}
              >
                <form>
                  <input
                    type="number"
                    min="0"
                    max="300"
                    value={inchHeight}
                    onChange={handleInchChange}
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
                  in
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "14px",
                color: "#5E6E85",
              }}
            >
              Weight
            </Typography>
            <Box sx={{ display: "flex", gap: "24px" }}>
              <Box
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: "100%",
                  border: "1px solid #d8e2e7",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  "&:focus-within": {
                    border: "1px solid #345FF6",
                  },
                }}
              >
                <form>
                  <input
                    type="number"
                    value={stWeight}
                    min="0"
                    max="300"
                    onChange={handleStChange}
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
                  st
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { md: "100%", xs: "100%" },
                  height: "100%",
                  border: "1px solid #d8e2e7",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  "&:focus-within": {
                    border: "1px solid #345FF6",
                  },
                }}
              >
                <form>
                  <input
                    type="number"
                    min="0"
                    max="300"
                    value={lbsWeight}
                    onChange={handleLbsChange}
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
                  lbs
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
          borderRadius: { md: "16px 999px 999px 16px", xs: "16px" },
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          p: "32px",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "50%", xs: "100%" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            Your BMI is...
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: "72px", xs: "48px" },
              color: "#fff",
              m: "0",
              p: "0",
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          >
            {bmi > 0 && bmi < 99 ? bmi : "0"}
          </Typography>
        </Box>
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              color: "#fff",
              fontWeight: "400",
              lineHeight: "150%",
            }}
          >
            {message}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "14px",
                color: "#fff",
                fontWeight: "700",
                lineHeight: "150%",
              }}
            >
              {isMetric
                ? minOptimumWeight > 0 && maxOptimumWeight > 0
                  ? `${minOptimumWeight}kg - ${maxOptimumWeight}kg`
                  : ""
                : minStState > 0 &&
                  minLbsState > 0 &&
                  maxStState > 0 &&
                  maxLbsState > 0
                ? `${minStState}st ${minLbsState} lbs - ${maxStState}st ${maxLbsState}lbs`
                : ""}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Calculator;
