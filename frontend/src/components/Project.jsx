import {
  styled,
  Typography,
  Paper,
  Stack,
  Box,
  Grow,
} from "@mui/material";
import { motion, useScroll, useTransform} from "framer-motion";
import { useEffect, useRef} from "react";


const StyledPaper = styled(Paper)({
  elevation: 24,
  boxShadow: "none",
  height: "inherit",
  width: "100%",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  textAlign:"center",
  display: "flex",
});

const StyledBox = styled(Box)({
  width: "80%",
  margin: 20,
  height: "45vh",
});


const StyledTitle = styled(Typography)({
  fontWeight: 600,
  letterSpacing:9.0,
  textTransform:"uppercase",
  color: "#f9f9f9",
  lineHeight: 0.85,
});

export const Project = (props) => {  

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"] 
    // "offset: ["0 1", "1.33 1"]" means that the animation will start
    //  when the element is 1/3 of the way down the screen and end when it is 1/3 of the way up the screen.
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [-0.8, 1]);
  // console.log(scrollYProgress);
  // console.log(ref);
 

  return (
    // <>
    <StyledBox component = {motion.div} ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress,
     }} >
    <StyledPaper 
    square
    sx={{
      backgroundSize: "cover",
      backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7)), url(${props.image})`,
    }}
    
    >
      <Stack direction="column" spacing={3} justifyContent={"center"} mt={1} maxWidth={"80%"}>
      <StyledTitle sx={{fontSize:{xs: 25, sm: 30, md: 40}}}>
        {props.title}
      </StyledTitle>
      <Typography sx={{ color: "#ffffff", fontWeight:"100"}} noWrap>{props.description}</Typography>
      </Stack>
    </StyledPaper>
    </StyledBox>
        // </>
  );
};
