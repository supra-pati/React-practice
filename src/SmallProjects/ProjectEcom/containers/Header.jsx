import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { lightBlue } from "@mui/material/colors";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Dashboard", "Logout"];
const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      {/* <h1>Header</h1> */}
      {/* <Box sx={{ flexGrow: 1 }}> */}

      <AppBar position="absolute">
        {/*  position="static" */}
        <Toolbar>
          <IconButton
            //   aria-label="menu"
            sx={{
              color: "white",
              mr: 1,
              letterSpacing: ".1rem",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            //   component="div"
            sx={{ flexGrow: 1, fontFamily: "cursive" }}
          >
            EasyBuy
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    bgcolor: lightBlue[50],
                    color: "#387ADF",
                    fontFamily: "sans-serif",
                  }}
                >
                  SP
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
