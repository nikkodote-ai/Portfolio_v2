import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ContactMe } from "./ContactMe";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StyledTypography = styled(Typography)({
  fontFamily: "Viaoda Libre",
  color: "white",
  position: "relative",
});

export const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const midgroundGroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const smallTextY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const bigTextY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const bigTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contactMeY = useTransform(scrollYProgress, [1, 0], ["0%", "200%"]);

  return (
    <>
      <Stack
        ref={ref}
        component="div"
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"grid"}
        sx={{
          top: {xs:"0", sm: "-8.5vh"},
          backgroundImage: {
            xs: 'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/cleaned-background.png")',
          },
          backgroundSize: "cover",
          height: { xs: "100vh", sm: "110vh" },
          position: "relative",
          overflow: "hidden",
        }}
        width="100vw"
      >

        <Box sx={{display:{xs:"none", sm: "grid"}}}>
        <StyledTypography
          sx={{
            zIndex: 15,
            fontSize: "5vw",
            position: "relative",
          }}
          component={motion.h1}
          style={{ y:smallTextY }}
        >
          NIKKO DOTE
        </StyledTypography>

        <StyledTypography
          sx={{
            zIndex: 25,
            fontSize: "9.6vw",
            position: "relative",
            // left: "-0.5%",
            whiteSpace: "nowrap",
            contain: "paint",            
          }}
          component={motion.div}
          style={{ y: bigTextY, x: bigTextX}}
        >
          SCIENTIST.DEVELOPER
        </StyledTypography>
</Box>

<Box sx={{display:{xs:"grid", sm: "none"}}} justifyContent={"center"}>
<StyledTypography
          sx={{
            zIndex: 15,
            fontSize: "10vw",
            position: "relative",
            mb: 4,
          }}
          component={motion.h1}
          style={{ y:smallTextY }}
        >
          NIKKO DOTE
        </StyledTypography>

        <StyledTypography
          sx={{
            zIndex: 25,
            fontSize: "18vw",
            position: "relative",
            // left: "-0.5%",
            whiteSpace: "nowrap",
            contain: "paint",  
            lineHeight: "1em",          
          }}
          component={motion.div}
          style={{ y: bigTextY, x: bigTextX}}
        >
          SCIENTIST
        </StyledTypography>
        <Typography
          sx={{
            zIndex: 25,
            fontSize: "26vw",
            position: "relative",
            // left: "-0.5%",
            whiteSpace: "nowrap",
            contain: "paint",  
            lineHeight: "1em",
            color: "white",
            fontFamily: "Via",
            m:-4

          }}
          component={motion.div}
          style={{ y: bigTextY, x: bigTextX}}
        >
          &
        </Typography>
        <StyledTypography
          sx={{
            zIndex: 25,
            fontSize: "18vw",
            position: "relative",
            // left: "-0.5%",
            whiteSpace: "nowrap",
            contain: "paint",  
            lineHeight: "1em",          
          }}
          component={motion.div}
          style={{ y: bigTextY, x: bigTextX}}
        >
          DEVELOPER
        </StyledTypography>
</Box>




        <Box
          position = "relative"
          zIndex={40}
          inset="0px"
          top= "-27vh"
          component={motion.div}
          style={{ y: contactMeY }}
        >
          <StyledTypography sx={{
            fontSize: "1.2rem",
            fontWeight: 100,
            fontFamily: "viaoda libre",
            letterSpacing: "1.02px",
            mb: 2,
          }}>for your digital needs in this ever changing world</StyledTypography>
          <ContactMe />
        </Box>

        <Box
          component={motion.div}
          sx={{
            backgroundImage: {
              xs: 'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/corrected_background.png")',
            },
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            inset: "0px",
            zIndex: 0,
          }}
          style={{ y: backgroundY }}
        />

        <Box
          component={motion.div}
          sx={{
            backgroundImage: {
              xs: 'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/corrected_midground.png")',
            },
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            inset: "0px",
            zIndex: 20,
          }}
          // style={{y: midgroundGroundY}}
        />

        <Box
          sx={{
            backgroundImage: {
              xs: 'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/corrected_foreground.png")',
            },
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            inset: "0px",
            zIndex: 30,
          }}
        />
      </Stack>
    </>
  );
};
