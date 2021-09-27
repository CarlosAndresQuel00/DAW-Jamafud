import React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { Button } from "@material-ui/core";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

const images = [
  {
    imgPath:
      "https://cocina-casera.com/wp-content/uploads/2018/06/caldo-bola.jpg",
  },
  {
    imgPath:
      "https://cocina-casera.com/wp-content/uploads/2018/05/Platos-tipicos-de-bolivia-8.jpg",
  },
  {
    imgPath:
      "https://cocina-casera.com/wp-content/uploads/2018/06/seco-de-carne.jpg",
  },
];

const CarouselMenu = ({ dishes }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDish = () => {
    router.replace("/createDish");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ display: "-webkit-inline-box" }}>
        {images.map((step, index) => (
          <div key={index} style={{ paddingLeft: 90, paddingRight: 90 }}>
            <Box
              component="img"
              sx={{
                height: 140,
                display: "block",
                maxWidth: 360,
                overflow: "hidden",
                width: "100%",
              }}
              src={step.imgPath}
              alt="Not found image"
            />
          </div>
        ))}
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{ maxWidth: 1088, margin: "0 auto" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <div style={{ textAlign: "start", paddingLeft: 100 }}>
        <Button
          //type="submit"
          variant="contained"
          color="primary"
          onClick={handleDish}
        >
          CREAR MENU
        </Button>
      </div>
    </>
  );
};

export default CarouselMenu;
