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
  width: "100%",
  margin: -1,
  height: "100vh",
});


const StyledTitle = styled(Typography)({
  fontWeight: 600,
  letterSpacing:9.0,
  textTransform:"uppercase",
  color: "#f9f9f9",
  lineHeight: 0.85,
  fontFamily: "dela gothic one",
});

const StyledMarquee = styled(Paper)({
  component: "div",
  whiteSpace: "nowrap",
  height:"5%",
  width:"100%",
  backgroundColor:"#444444",
  alignContent: "center",
  justifyContent: "center",
  overflow: "hidden",
  maxWidth:"550px"
  
})

const StyledMarqueeText = styled(Typography)({
  fontFamily: "dela gothic one",
  fontSize:"30px",
  color: "black",
  display: "inline-block",
  margin: "0 7px",

})

export const Project = (props) => {  

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"] 
    // "offset: ["0 1", "1.33 1"]" means that the animation will start
    //  when the element is 1/3 of the way down the screen and end when it is 1/3 of the way up the screen.
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [-1,2]);
  // console.log(scrollYProgress);
  // console.log(ref);
 

  return (
    <>
    <StyledBox >
    <StyledPaper 
    square
    sx={{
      backgroundSize: "cover",
      backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7)), url(${props.image})`,
      height:"100%",
    }}
    
    >
      <Stack direction="column" width="inherit" height="inherit" spacing={15} alignItems={'center'} justifyContent={"center"} mt={1} maxWidth={"80%"}
      component = {motion.div} ref={ref} style={{
        // y: scrollYProgress,
         scale: scaleProgress,
        opacity: opacityProgress,
       }} >
      <StyledTitle sx={{fontSize:{xs: 25, sm: 30, md: 80}}}>
        {props.title}
      </StyledTitle>
      <Box height="2px" width="120%" bgcolor="#ffffff"/>
      <Typography sx={{ color: "#ffffff", fontWeight:"200", fontSize:"30px"}} noWrap>{props.description}</Typography>
      </Stack>
    </StyledPaper>
    </StyledBox>
        </>
  );
};
