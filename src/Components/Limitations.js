import React from "react";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";
import GenderIcon from "../Sources/images/icon-gender.svg";
import AgeIcon from "../Sources/images/icon-age.svg";
import MuscleIcon from "../Sources/images/icon-muscle.svg";
import PregnancyIcon from "../Sources/images/icon-pregnancy.svg";
import RaceIcon from "../Sources/images/icon-race.svg";
import Vector from "../Sources/images/pattern-curved-line-right.svg";

function Limitations() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        overflow: "hidden",
        px: { lg: "18rem", md: "4rem", sm: "3rem", xs: "1rem" },
        //bgcolor: "yellow",
        mb: "4rem",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            gap: "12px",
            display: { lg: "none", md: "block", sm: "block", xs: "block" },
          }}
        >
          <Typography
            sx={{
              color: "#253347",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "110%",
              letterSpacing: "-1.6px",
              mb: "24px",
            }}
          >
            Limitations of BMI
          </Typography>
          <Typography
            sx={{
              color: "#5E6E85",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "center",
              mb: "1rem",
            }}
          >
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: {
              lg: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              sm: "repeat(3, 1fr)",
              xs: "repeat(5, 1fr)",
            },
            gridTemplateColumns: {
              lg: "repeat(10, 1fr)",
              md: "repeat(10, 1fr)",
              sm: "repeat(10, 1fr)",
              xs: "1fr",
            },
            width: "100%",
            height: "100%",
            //gap: "24px",
            rowGap: "24px",
            columnGap: "24px",
            pt: "2rem",
            pb: "4rem",
          }}
        >
          <Box
            sx={{
              flexDirection: "column",

              display: { lg: "block", md: "none", sm: "none", xs: "none" },
              gridColumn: "1/span 4",
            }}
          >
            <Typography
              sx={{
                color: "#253347",
                textAlign: "left",
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "110%",
                letterSpacing: "-1.6px",
                mb: "24px",
              }}
            >
              Limitations of BMI
            </Typography>
            <Typography
              sx={{
                color: "#5E6E85",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
              }}
            >
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </Typography>
          </Box>
          <Box
            sx={{
              gridRow: "2",
              gridColumn: "3",
              display: { lg: "block", md: "none", sm: "none", xs: "none" },
            }}
          >
            <img src={Vector} alt="Vector"></img>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
              padding: "24px",
              bgcolor: "#fff",
              gridColumn: {
                lg: "6/span 3",
                md: "1/span 5",
                sm: "1/span 5",
                xs: "1",
              },
              gridRow: { lg: "1", md: "1", sm: "1", xs: "1" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "2rem",
                gap: "1rem",
                mb: "1rem",
              }}
            >
              <img src={GenderIcon} alt="GenderIcon"></img>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "-1px",
                  color: "#253347",
                }}
              >
                Gender
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "150%",
                color: "#5e6e85",
              }}
            >
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
              padding: "24px",
              bgcolor: "#fff",
              gridColumn: {
                lg: "4/span 3",
                md: "6/span 5",
                sm: "6/span 5",
                xs: "1",
              },
              gridRow: { lg: "2", md: "1", sm: "1", xs: "2" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "2rem",
                gap: "1rem",
                mb: "1rem",
              }}
            >
              <img src={AgeIcon} alt="AgeIcon"></img>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "-1px",
                  color: "#253347",
                }}
              >
                Age
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "150%",
                color: "#5e6e85",
              }}
            >
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
              padding: "24px",
              bgcolor: "#fff",
              gridColumn: {
                lg: "7/span 3",
                md: "1/span 5",
                sm: "1/span 5",
                xs: "1",
              },
              gridRow: { lg: "2", md: "2", sm: "2", xs: "3" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "2rem",
                gap: "1rem",
                mb: "1rem",
              }}
            >
              <img src={MuscleIcon} alt="MuscleIcon"></img>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "-1px",
                  color: "#253347",
                }}
              >
                Muscle
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "150%",
                color: "#5e6e85",
              }}
            >
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
              padding: "24px",
              bgcolor: "#fff",
              gridColumn: {
                lg: "2/span 3",
                md: "6/span 5",
                sm: "6/span 5",
                xs: "1",
              },
              gridRow: { lg: "3", md: "2", sm: "2", xs: "4" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "2rem",
                gap: "1rem",
                mb: "1rem",
              }}
            >
              <img src={PregnancyIcon} alt="PregnancyIcon"></img>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "-1px",
                  color: "#253347",
                }}
              >
                Pregnancy
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "150%",
                color: "#5e6e85",
              }}
            >
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
              padding: "24px",
              bgcolor: "#fff",
              gridColumn: {
                lg: "5/span 3",
                md: "3/span 6",
                sm: "3/span 6",
                xs: "1",
              },
              gridRow: { lg: "3", md: "3", sm: "3", xs: "5" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                //bgcolor: "yellow",
                textAlign: "center",
                //alignItems: "center",
                height: "2rem",
                mb: "1rem",
              }}
            >
              <img src={RaceIcon} alt="RaceIcon"></img>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "-1px",
                  color: "#253347",
                }}
              >
                Race
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "150%",
                color: "#5e6e85",
              }}
            >
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Limitations;
