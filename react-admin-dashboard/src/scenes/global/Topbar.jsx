import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon  />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
          <Button
          style={{
            borderColor: theme.palette.mode === "dark" ? "white" : "black",
            color: theme.palette.mode === "dark" ? "white" : "black",
            fontSize: "14px",
            margin: "6px",
            borderWidth:"1.5px"
          }}
          variant="outlined"
          size="large"
          onClick={() => {
            setAuth(false);
            handleLogout();
            navigate("/");
          }}
        >
          Log Out
        </Button>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <Link to="/contacts" style={{ color: theme.palette.mode === "dark" ? "white" : "black", marginTop: "3px" }}>
            <NotificationsOutlinedIcon style={{ color: theme.palette.mode === "dark" ? "white" : "black"}} />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/team" style={{ color: theme.palette.mode === "dark" ? "white" : "black", marginTop: "3px" }}>
            <SettingsOutlinedIcon style={{ color: theme.palette.mode === "dark" ? "white" : "black"}} />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/form" style={{ color: theme.palette.mode === "dark" ? "white" : "black", marginTop: "3px" }}>
            <PersonOutlinedIcon style={{ color: theme.palette.mode === "dark" ? "white" : "black"}} />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
