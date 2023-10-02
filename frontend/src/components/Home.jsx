import { Header } from "./Header";
import { ProjectList } from "./ProjectList";
import { Box, Container, Stack } from "@mui/material";
import { NavBar } from "./NavBar";


export const Home = () => {
 
  return (
    
    <Container spacing={3} sx={{
      pl:0,
      pr:0,
    }}>

      <Stack
        color="white"
        direction={{ xs: "column", sm: "row" }}
        height="100%"
      >
        <NavBar />
        <Box
          height="100vh"
          alignItems={"center"}
          sx={{
            backgroundImage:{
              xs: 'linear-gradient(45deg, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80")',
              sm: 'none'
            },
            backgroundSize:"cover",
            animation: 'bg-animation 100s infinite alternate',
            flex: {xs: "0", sm: "1"},
           
            
          }}
          display="flex"
          justifyContent={"center"}
        >
          <Box
          maxWidth="430px"
            width={{ xs: "100%", sm:"40%",  md: "35%", lg:"30%" }}
            justifyContent={"center"}
            position={{ xs: "flex", sm: "fixed" }}
            
          >
            <Stack direction="column" spacing={3} mt={1}>
              <Header />
            </Stack>
          </Box>
        </Box>
        <Box flex="1.2">
          <ProjectList />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
