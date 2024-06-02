import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import "../styles/Form.css";
import Navbar from "./Navbar";

const Form = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    // if (savedData) {
    //   setFormData(savedData);
    // }

    const handleBeforeUnload = (e) => {
      if (!isSaved) {
        const confirmationMessage =
          "You have unsaved changes. Do you really want to leave?";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSaved]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id) {
      formData.id = uuidv4();
    }
    localStorage.setItem("userData", JSON.stringify(formData));
    setFormData({ id: "", name: "", address: "", email: "", phone: "" });
    setIsSaved(true);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" className="form">
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            User Data Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Form;
