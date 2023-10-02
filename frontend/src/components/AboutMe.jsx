import { Button, Stack, Typography } from "@mui/material";
import {motion} from "framer-motion"; 
export const AboutMe = () => {

  const container = {
    hidden: {  opacity: 0},
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.25,
      }
    }
  }

  const item = {
    hidden: { y: "-100%" },
    show: { y: 0 }
  }

  return (
    <Stack
      className="about-me"
      
      p={4}
      sx={{
        maxWidth: "70%",
        height: {xs: "80vh", md: "70vh", lg: "60vh", xl: "47vh"},
        mt: {xs: "0vh", md:"15vh", xl:"20vh"},
        textAlign: { xs: "center", sm: "left" },
        justifyContent: { xs: "center", sm: "left" },
        alignContent: { xs: "center", sm: "left" },

        // display:{xs:"flex", sm: "none"}
      }}
    >
      <Stack spacing={3} component={motion.div} animate="show" initial="hidden" variants={container}>
        <Typography component= {motion.div} variants={item} variant="h1">ABOUT ME</Typography>
        <Typography component= {motion.div} variants={item} variant="body1">
          Cras eleifend auctor ante non aliquam. In tempus mauris id mauris
          porttitor, vitae luctus turpis viverra. Mauris ac diam ac sapien
          luctus fringilla a ut massa. Vivamus eu blandit lacus, at ultricies
          nunc. Suspendisse mi nibh, malesuada quis porttitor sed, placerat a
          lorem. Vestibulum sed rhoncus mi. Nunc sit amet dolor ac elit posuere
          egestas. Donec id dolor quis ante fringilla fermentum nec quis urna.
          Praesent quis ante dolor. Donec eget dolor eget odio cursus
          condimentum in quis nisi. Cras tortor dolor, faucibus ut interdum
          quis, rhoncus vulputate erat. Curabitur justo nisi, congue ut orci a,
          condimentum efficitur ligula. Sed semper tempus facilisis.
        </Typography>
        <Button
        component={motion.div}
        variants= {item}
          variant={"contained"}
          sx={{ backgroundColor: "white", color: "#222222", borderRadius: 0 }}
        >
          Resume
        </Button>
      </Stack>
    </Stack>
  );
};
