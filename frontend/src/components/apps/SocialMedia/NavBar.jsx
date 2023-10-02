import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MailIcon from "@mui/icons-material/Mail";
import Notification from "@mui/icons-material/Notifications";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  styled,
} from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          NIKKO DOTE
        </Typography>
        <CardGiftcardIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notification />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://static.ffx.io/images/$width_368%2C$height_552/t_crop_fill/q_86%2Cf_auto/c723d2d7734c42b070f6d5f218af3ee8d78935d1"
            alt="fave"
            onClick={() => setOpen(true)}
          />
        </Icons>

        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://static.ffx.io/images/$width_368%2C$height_552/t_crop_fill/q_86%2Cf_auto/c723d2d7734c42b070f6d5f218af3ee8d78935d1"
            alt="fave"
            onClick={() => setOpen(true)}
          />
          <Typography>Nikko</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {e=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
