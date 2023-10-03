import { Button, Stack, Typography, styled } from "@mui/material";
import { ContactMe } from "./ContactMe";

const StyledTypography = styled(Typography)({
  fontFamily: "Viaoda Libre",
  color: "white",
});
export const Header = () => {
  return (
    <>
      <Stack
      
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        sx={{
          top:"-10vh",
          backgroundImage: {
            sm: 'linear-gradient(45deg, rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1695642579133-d41f36bcca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80")',
          },
          backgroundSize: "cover",
          height: { xs: "110vh", sm: "110vh" },
          position: "relative",

        }}
        width="100vw"
      >
       
        <StyledTypography variant="h1" pt={"3vh"} lineHeight={0}>
          NIKKO DOTE
        </StyledTypography>
        <StyledTypography
          sx={{ fontSize: "9.6vw", position: "relative", left: "-0.5%" }}
        >
          SCIENTIST.DEVELOPER
        </StyledTypography>
        <ContactMe />
      </Stack>
    </>
  );
};
