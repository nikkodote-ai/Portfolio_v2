import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {degreesToRadians} from "popmotion";
export const AboutMe = () => {

  // scroll animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "15 1"] 
  });

  
  const rotationProgressSmall = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotationProgressBig = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const aboutProgress = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const meProgress = useTransform(scrollYProgress, [0, 1], [0, -120]);


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: "-100%" },
    show: { x: 0 },
  };

  const AboutMeTypo = styled(Typography)({
    fontFamily: "viaoda libre",
    color: "white",
    zIndex: 2,
  });

  

  return (
    <>
      <Stack
        direction={{xs:"column", sm: "row"}}
        display={"flex"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
          justifyContent: { xs: "center", sm: "left" },
          alignContent: { xs: "center", sm: "left" },
          height: {sm: "100vh",}
        }}
        overflow={"hidden"}
        width="100vw"
      >
        <Stack
          flex="1"
          display="flex"
          position="relative"
          p={3}
          spacing={3}
          component={motion.div}
          animate="show"
          initial="hidden"
          variants={container}
        >
          <Box
            sx={{
              backgroundRepeat: "no-repeat",
              zIndex: 1,
              position: "relative",
              display: {xs:"flex", sm:"grid"},
              left: {xs: "0", sm:"3vw"},
              height: "90%",
              backgroundSize: "contain",
              backgroundImage:
                'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/PHOTO+BY+MY+MUM.png")',
            }}
          />
          <Box
            position= "absolute"
            display="grid"
            top="50vh"
            left="-0.9vw"
            width="45vw"
            component={motion.div}
            variants={container}
            zIndex={2}
          >
            <AboutMeTypo
              fontSize="20vh"
              component={motion.div}
              // variants={item}
              variant="h1"
              style={{x: aboutProgress}}
            >
              ABOUT
            </AboutMeTypo>
            <AboutMeTypo
              fontSize="18vh"
              lineHeight={0.5}
              component={motion.div}
              // variants={item}
              variant="h1"
              style={{x: meProgress}}
ml={9}            >
              ME
            </AboutMeTypo>
          </Box>
        </Stack>

        <Stack flex="1" display="flex" position="relative">
          <Box ref={ref}>

          <Box
            component={motion.div}
            style={{
              rotate: rotationProgressSmall,
              x: rotationProgressSmall,
            }}
            sx={{
              height: "5vw",
              width: "5vw",
              backgroundImage: 'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/aus-star.svg")',
              backgroundSize: "cover",
            }}
            mt={15}
            mb={4}
            />
            </Box>
          <Box width="70%" >
            <Typography
              sx={{ fontFamily: "Inter", color: "white", fontSize: "18px", lineHeight: 2.5 }}
              component={motion.div}
              variants={item}
              variant="body1"
            >
              I'm a dedicated medical scientist, software developer, and machine
              learning engineer passionate about revolutionizing healthcare
              through technology. I bridge medicine and technology to create
              innovative, patient-centered solutions. My mission is to make
              healthcare more accessible and efficient through data-driven
              insights and cutting-edge tech. I'm an advocate for
              interdisciplinary collaboration and lifelong learning in
              healthcare innovation.
            </Typography>
            <Box mt={3}>
              <Button
                component={motion.div}
                variants={item}
                variant={"contained"}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  color: "#222222",
                  borderRadius: 0,
                }}
              >
                Resume
              </Button>
            </Box>
          </Box>

          <Box
            component={motion.div}
            position="absolute"
            style={{
              rotate: rotationProgressBig,
              scale: 0.5,
              x: rotationProgressBig,
            }}
            sx={{
              height: "5vw",
width: "5vw",
              backgroundImage: 'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/aus-star.svg")',
              backgroundSize: "cover",
            }}
            mt={15}
            right={"10%"}
            bottom={"10%"}
            mb={4}
            />
        </Stack>
      </Stack>
    </>
  );
};
