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
import {Link}  from "react-router-dom";

const StyledTypography = styled(Typography)({
  fontFamily: "Inter",
  fontSize: 14,
  fontWeight: 100,
  letterSpacing: 6,
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
        <Stack direction="column" alignItems="center" alignContent={"center"}>
          <Stack
            direction="row"
            spacing={15}
            alignItems="center"
            alignContent={"center"}
            pt={1}
            height={50}
            color={"white"}
          >
            <Link to="/">
              <StyledTypography>HOME</StyledTypography>
            </Link>
            <Link to="/works">
              <StyledTypography>WORKS</StyledTypography>
            </Link>

            <Link to="/interests">
              <StyledTypography>INTERESTS</StyledTypography>
            </Link>
            <Link to="/thoughts">
              <StyledTypography>THOUGHTS</StyledTypography>
            </Link>
            <Link to="/contact">
              <StyledTypography>CONTACT</StyledTypography>
            </Link>
          </Stack>

          <Stack alignItems="center" alignContent={"center"} mt={1}>
            <Box
              sx={{ backgroundColor: "#fff", width: "60vw", height: "1px" }}
            ></Box>
          </Stack>
        </Stack>
      </Box>

      <Box
        justifyContent={"right"}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 90,
          right: 40,
          zIndex: 50,
        }}
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
            boxShadow: 3,
            borderRadius: 100,
            height: "65px",
            width: "65px",
            color: "#fff",
            "&:hover": { color: "#fff" },
          }}
        >
          <MenuIcon sx={{ fontSize: "2rem" }} />
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
          <Link to="/" className="menu" >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>

          <Link to="/works" className="menu">
          <MenuItem  onClick={handleClose}>Works</MenuItem>
          </Link>

          <Link to="/interests" className="menu">
          <MenuItem  onClick={handleClose}>Interests</MenuItem>
          </Link>

          <Link to="/thoughts" className="menu">
          <MenuItem  onClick={handleClose}>Thoughts</MenuItem>
          </Link>

          <Link to="/contact" className="menu">
          <MenuItem className="menu" onClick={handleClose}>Contact</MenuItem>
          </Link>
        </Menu>
      </Box>
    </>
  );
};
