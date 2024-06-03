import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ zIndex: "999" }}>
      <Toolbar>
        <Typography
          variant="h6"
          onClick={() => navigate("/upliance_project/")}
          to="/upliance_project/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Counter
        </Typography>
        <Button
          to="/upliance_project/form"
          color="inherit"
          onClick={() => navigate("/upliance_project/form")}
        >
          Form
        </Button>
        <Button
          to="/upliance_project/textEditor"
          color="inherit"
          onClick={() => navigate("/upliance_project/textEditor")}
        >
          Rich Text Editor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
