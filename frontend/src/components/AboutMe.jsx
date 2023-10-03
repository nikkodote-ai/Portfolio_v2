import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
export const AboutMe = () => {
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
  });

  return (
    <>
      <Stack
        direction="row"
        p={4}
        sx={{
          mt: { xs: "0vh", md: "15vh", xl: "20vh" },
          textAlign: { xs: "center", sm: "left" },
          justifyContent: { xs: "center", sm: "left" },
          alignContent: { xs: "center", sm: "left" },
          height: "100vh",
        }}
        width="90vw"
      >
        <Stack
          flex="1"
          p={3}
          spacing={3}
          component={motion.div}
          animate="show"
          initial="hidden"
          variants={container}
        >
          <Box position="relative" top="5vh" left="-4vw" width="45vw" component={motion.div} variants={container}>
            <AboutMeTypo
              fontSize="20vh"
              component={motion.div}
              variants={item}
              variant="h1"
            >
              ABOUT
            </AboutMeTypo>
            <AboutMeTypo
              fontSize="25vh"
              lineHeight={0.5}
              component={motion.div}
              variants={item}
              variant="h1"
            >
              ME
            </AboutMeTypo>
          </Box>
        </Stack>

        <Stack flex="1">
          <Box  sx={{
  height: '5vw',
  width: "5vw",
  backgroundColor: "#fff",
  color:"white",
  borderRadius: "50%",
}}
mt={15}
></Box>
          <Box width="80%">
          <Typography sx={{fontFamily : "Inter", color: 'white', fontSize: "21px"}} component={motion.div} variants={item} variant="body1">
            I'm a dedicated medical scientist, software developer, and machine
            learning engineer passionate about revolutionizing healthcare
            through technology. I bridge medicine and technology to create
            innovative, patient-centered solutions. My mission is to make
            healthcare more accessible and efficient through data-driven
            insights and cutting-edge tech. I'm an advocate for
            interdisciplinary collaboration and lifelong learning in healthcare
            innovation.
          </Typography>
          <Box  mt={3}>

          <Button
            component={motion.div}
            variants={item}
            variant={"contained"}
            sx={{width:"100%", backgroundColor: "white", color: "#222222", borderRadius: 0 }}
            >
            Resume
          </Button>
            </Box>
            </Box>
        </Stack>
      </Stack>
    </>
  );
};
