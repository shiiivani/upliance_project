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
          onClick={() => navigate("/")}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Counter
        </Typography>
        <Button to="/form" color="inherit" onClick={() => navigate("/form")}>
          Form
        </Button>
        <Button
          to="/textEditor"
          color="inherit"
          onClick={() => navigate("/textEditor")}
        >
          Rich Text Editor
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
