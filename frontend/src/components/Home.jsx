import { Header } from "./Header";
import { ProjectList } from "./ProjectList";
import { Box, Container, Stack, styled } from "@mui/material";
import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import Skills from "./Skills";


export const Home = () => {
 
  const backgroundBox = styled(Box)({
    height:"100vh",
    alignItems:"center",
      backgroundImage:{
        xs: 'linear-gradient(45deg, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80")',
        sm: 'none'
      },
      backgroundSize:"cover",
      animation: 'bg-animation 100s infinite alternate',
     
  })

  return (

    <Container disableGutters sx={{
p:0,
      m:0, 
      b:0,
      
    }}>
      <Stack width="100vw" overflow="hidden">
        <NavBar />
              <Header />
            <Stack direction="column" mt={0}>
              <AboutMe />
              <Skills/>
              <ProjectList />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
