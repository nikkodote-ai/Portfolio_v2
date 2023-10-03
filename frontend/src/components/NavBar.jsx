import {
  Box,
  Button,
  Fade,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";


const StyledTypography = styled(Typography)({
fontFamily: "Inter",
fontSize: 17,

});

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          // position: "fixed",
          display: { xs: "none", md: "fixed" },
          justifyContent: "center",
          // backgroundColor: "#252525",
          width: "100vw",
          left: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        <Stack direction="column" alignItems="center"
          alignContent={"center"}>
           
        <Stack
          direction="row"
          spacing={15}
          alignItems="center"
          alignContent={"center"}
          pt={1}
          height={50}
          color={"white"}
          >
          <StyledTypography>WORKS</StyledTypography>
          <StyledTypography>INTERESTS</StyledTypography>
          <StyledTypography>THOUGHTS</StyledTypography>
          <StyledTypography>CONTACT</StyledTypography>
        </Stack>

        <Stack alignItems="center"
          alignContent={"center"} mt={1}>
          <Box sx={{backgroundColor: "#fff", width: "80vw", height: "1.4px"}}>
             
            </Box>
          </Stack>
          </Stack>
      </Box>

      <Box
        justifyContent={"right"}
        sx={{ display: { xs: "flex", md: "none" },
        position: "fixed",
      top: 12,
    right: 12, }}
      >
        <Button
          id="fade-button"
          disableElevation
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"
          sx={{
            color: "#222222",
            "&:hover": {color: "#fff" },
          }}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{
            fill: "#000000",
          }}
        >
          <MenuItem onClick={handleClose}>Work</MenuItem>
          <MenuItem onClick={handleClose}>Interest</MenuItem>
          <MenuItem onClick={handleClose}>Thoughts</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </Box>
    </>
  );
};
