import { Header } from "./Header";
import { ProjectList } from "./ProjectList";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import {Skills} from "./Skills";
import {useState, useEffect} from "react";
import {PuffLoader} from "react-spinners";

export const Home = () => {
 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  } 
  , []);

  // const backgroundBox = styled(Box)({
  //   height:"100vh",
  //   alignItems:"center",
  //     backgroundImage:{
  //       xs: 'linear-gradient(45deg, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80")',
  //       sm: 'none'
  //     },
  //     backgroundSize:"cover",
  //     animation: 'bg-animation 100s infinite alternate',
     
  // })

  return (

    <Container disableGutters sx={{
p:0,
      m:0, 
      b:0,
      
    }}>
      {loading ?
      
      (

      <Box sx={{
        textAlign:"center",
        backgroundColor: "#fff1c8",
        height:"100vh",
        width:"100vw",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
      }}>
        <Stack direction="column" spacing={4}>
          <Box width="70vw" zIndex={1} container spacing={3}>
          
        <Typography mb={2.5} lineHeight={0.9} sx={{color:"#ff8652", fontFamily:"inter", fontSize:"4.5rem", fontWeight:"bold"}}>
          Hey! I'm Nikko!</Typography>


          <Typography mb={2.5} lineHeight={0.9} sx={{color:"#62d0ff", fontFamily:"inter", fontSize:"3rem", fontWeight:"bold"}}>
          welcome to my playground.</Typography>

          {/* <Typography lineHeight={0.9} fontStyle="italic" sx={{color:"#ff8652", fontFamily:"viaoda libre", fontSize:"2rem", fontWeight:"bold"}}>
          have a look and enjoy!
          </Typography> */}

          <Box m={3} display="flex" textAlign={"center"} justifyItems={"center"} alignContent={'center'} justifyContent={"center"}>



          <PuffLoader
  color="#ff8652"
  loading={loading}
  size={100}
  aria-label="Loading Spinner"
  data-testid="loader"
  />
  </Box>
        </Box>
        </ Stack>

        <Typography className="marquee" sx={{
  color:"white",
  fontFamily:"viaoda libre",
  fontSize:"65rem",
  position:"fixed",
  left:0,
  bottom:"-45vh",
  zIndex:0,
}}>
  Welcome
</Typography>
        </Box>
      )
      
    :

    (<Stack width="100vw" overflow="hidden">
        <NavBar />
              <Header />
            <Stack direction="column" mt={0}>
              <AboutMe />
              <Skills/>
              {/* <ProjectList /> */}
        </Stack>
      </Stack>)
    
    }
      
    </Container>
  );
};

export default Home;
