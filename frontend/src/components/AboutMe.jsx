import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AboutMe = () => {
  // scroll animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "15 1"],
  });

  const rotationProgressSmall = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotationProgressBig = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const aboutProgress = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const XSaboutProgress = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const meProgress = useTransform(scrollYProgress, [0, 1], [0, -500]);

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
    color: "#007c7d",
    zIndex: 2,
  });

  const AboutMeContent = `I'm a dedicated medical scientist, software developer, and machine
  learning engineer passionate about revolutionizing healthcare
  through technology. I have postgraduate degrees in Biomedical Sciences and in Computer Science. I bridge medicine and technology to create
  innovative, client-centered solutions. My mission is to make
  you industry more accessible and efficient through data-driven
  insights and cutting-edge tech. I'm an advocate for
  interdisciplinary collaboration and lifelong learning in
  innovation.`;

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        display={"flex"}
        overflow={"hidden"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
          justifyContent: { xs: "center", sm: "left" },
          alignContent: { xs: "center", sm: "left" },
          height: { xs: "100%" },
          backgroundColor: "#ffffff",
        }}
        width="100vw"
        m={0}
        >
        <Stack
          flex="0.7"
          display={{ xs: "block", sm: "flex" }}
          position="relative"
          p={3}
          spacing={3}
          component={motion.div}
          >
          <Box
          className="photo-by-mum"
            sx={{
              backgroundRepeat: "no-repeat",
              zIndex: 1,
              position: "relative",
              display: { xs: "none", sm: "grid" },
              left: { xs: "0", sm: "3vw" },
              height: "90%",
              backgroundSize: "contain",
              backgroundImage:
              'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/PHOTO+BY+MY+MUM.png")',
            }}
            />
        </Stack>

            
        <Stack flex="1" position="relative" mt={-6}>
          <Box ref={ref}>
            {/* <Box
              component={motion.div}
              
              style={{
                rotate: rotationProgressSmall,
                x: rotationProgressSmall,
              }}
              sx={{
                height: "2vw",
                backgroundImage:
                  'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/aus-star.svg")',
                backgroundSize: "cover",
                color: "black",
              }}
            /> */}
          <Box 
            display={{xs: "none", sm:"grid"}}
            width="45vw"
            mb={{md: 0, lg:0, xl:4}}
            component={motion.div}
            variants={container}
            zIndex={2}

          >
            <AboutMeTypo
              fontSize={{xs:"12vh", sm:"20vh"}}
              component={motion.div}
              // variants={item}
              variant="h1"
              style={{ x: aboutProgress }}
              ml={-8}
              mt={"4vw"}
            >
              ABOUT
            </AboutMeTypo>
            <AboutMeTypo
              fontSize="18vh"
              lineHeight={0.5}
              component={motion.div}
              // variants={item}
              variant="h1"
              style={{ x: meProgress }}
              ml={35}
            >
              ME
            </AboutMeTypo>
          </Box>
            </Box>

          <Box display={{xs:"flex", sm: "none"}} justifyContent={"center"} textAlign={"center"} whiteSpace={"wrap"}>
            <Typography fontSize={"60px"} mt={9} fontFamily={"viaoda libre"} color={"#007c7d"}>
              ABOUT ME
            </Typography>
          </Box>

          <Box width={{ xs: "100%", sm: "70%" }} m={{xs: 0, sm: 4}}>
            <Typography
              sx={{
                fontFamily: "Inter",
                textAlign: "justify",
                color: "#005254",
                fontSize: { xs: "14px", sm: "18px" },
                lineHeight: { xs: 1.7, sm: 2.2 },
              }}
              component={motion.div}
              variants={item}
              variant="body1"
              p={{xs:4, sm:0}}
            >
              {AboutMeContent}
            </Typography>
            <Box mt={4}>
              <a href="https://www.dropbox.com/scl/fi/nlencv1v2iu9yt9m4dd3v/Nikko_Dote-Resume-MS_SD_part_1.pdf?rlkey=asmrvxunea27uq2sf5ctm6r8t&dl=0&raw=1">

              <Button
                disableElevation
                component={motion.div}
                variants={item}
                variant={"contained"}
                sx={{
                  fontSize: { xs: "25px", sm: "25px" },
                  width: "100%",
                  fontFamily: "Inter",
                  letterSpacing: 5,
                  fontWeight: 600,
                  backgroundColor: "#ff7f50",
                  color: "#fff",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#333",
                    color: "#fff",
                  },
                }}
              >
                Resume
              </Button>
                  </a>
            </Box>
            <Box disableGutters m={-1} display={{xs:"flex",sm:"none"}}>
              <img src="https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/PHOTO+BY+MY+MUM.png" width="100%"/>
            </Box>
          </Box>
{/* 
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
              backgroundImage:
                'url("https://portfolio-v2-django-react-mui.s3.ap-southeast-2.amazonaws.com/images/aus-star.svg")',
              backgroundSize: "cover",
            }}
            mt={15}
            right={"10%"}
            bottom={"10%"}
            mb={4}
          /> */}
        </Stack>
      </Stack>
    </>
  );
};
