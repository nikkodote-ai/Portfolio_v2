import { Button, Stack, Typography } from "@mui/material";
import { ContactMe } from "./ContactMe";

export const Header = () => {
  return (
    <>
    <Stack
      textAlign={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      sx={{backgroundImage:
        {sm: 'linear-gradient(45deg, rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80")',
      },
        backgroundSize:"cover",
      height: {xs: "100vh", sm:"70vh",}}}
      >
      <Typography variant="h1" textTransform={"lowercase"} pt={17}>Hey, I'm Nikko</Typography>
      <Typography variant="h1">Scientist. Developer.</Typography>
      <ContactMe/>
    </Stack>

    
      </>
  );
};
