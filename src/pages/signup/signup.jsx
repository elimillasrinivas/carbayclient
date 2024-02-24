import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Headersub from "../Header/header2";
import Footer from "../Footer/footer";
import { SnackbarProvider, useSnackbar } from 'notistack';


const Signup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isEmailValid = emailRegex.test(email);

    const isMobileNumberValid = /^\d{10}$/.test(mobileNumber);

    setEmailError(isEmailValid ? "" : "Enter a valid email address");
    setMobileError(
      isMobileNumberValid ? "" : "Enter a valid 10-digit mobile number"
    );

    if (isEmailValid && isMobileNumberValid) {
      try {
        await axios.post("https://carbay.onrender.com/api/auth/signup", {
          email,
          mobileNumber,
          userName,
          password,
        });
        enqueueSnackbar('Signin successful!', { variant: 'success' });

        navigate("/login");
      } catch (error) {
        console.log(error);
        enqueueSnackbar(error?.response?.data.message, { variant: 'error' });

      }
    } else {
      setAlert({
        open: true,
        type: "error",
        message: "Please fill all the details correctly.",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <>
      <Headersub />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "2rem" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <div className="login-con">
            <Typography variant="h4">Sign up</Typography>
            <TextField
              label="Email"
              placeholder="Enter Email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
              margin="normal"
            />
            <TextField
              label="User Name"
              placeholder="Enter Name"
              fullWidth
              value={userName}
              onChange={handleUserNameChange}
              margin="normal"
            />
            <TextField
              label="Phone number"
              placeholder="Phone number"
              fullWidth
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              error={!!mobileError}
              helperText={mobileError}
              margin="normal"
            />
            <TextField
              label="Password"
              placeholder="Enter your Password"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSignUp}
              sx={{ marginTop: "1rem" }}
            >
              Sign up
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "1rem",
              }}
            >
              <Typography>Already have an account?</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in
              </Button>
            </div>

            {alert.open ? (
              <Alert
                open={alert.open}
                onClose={handleCloseAlert}
                severity={alert.type}
                sx={{ marginTop: 2 }}
              >
                {alert.message}
              </Alert>
            ) : (
              ""
            )}
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Signup;
