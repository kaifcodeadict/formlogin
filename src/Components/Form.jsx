import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, Container, Box } from "@mui/material";
import "./Form.css";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { singin, singup } from "../State/actions/auth";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
 
};

function Form() {
  const buttonStyle = {
    backgroundColor: "var(--second-buttonColor)",
    borderRadius: "50px",
    padding: "1rem 2rem",
    maxWidth: "15rem",
  };
  const [showPassword, setShowPassword] = useState(true);
  const [isSingup, setIsSingup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();





  const handleSubmit = (e) => {
    e && e.preventDefault();
    if (isSingup) {
      dispatch(singup(formData));
    } else {
      dispatch(singin(formData));
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassoword) => !prevShowPassoword);
  };

  const switchMode = () => {
    setIsSingup((prevIsSingup) => !prevIsSingup);
    setShowPassword(false);
  };

  return (
    <>
  
      <Container component="main" maxWidth="xs" className="formContainer">
        <Grid container spacing={2}>
          {isSingup ? (
            <>
              <div className="authHeader">
                <h1 className="authTitle">create an account</h1>
             
              </div>
            </>
          ) : (
            <>
              <div className="authHeader">
                <h1 className="authTitle">log into my account</h1>
                <p className="authSubtitle"></p>
              </div>
            </>
          )}
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSingup && (
              <>
                <Input
                  name="first_name"
                  label="First Name"
                  placeHolder="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="last_name"
                  placeHolder="Last Name"
                  label="Last Number"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              lable="Email Address"
              placeHolder="Email  Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              lable="password"
              placeHolder="Password"
              handleChange={handleChange}
              type={showPassword ? "password" : "text"}
              handleShowPassword={handleShowPassword}
            />
        
          </Grid>
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ ...buttonStyle, backgroundColor: "#000" }}
          >
            {isSingup ? "Sign Up " : "Sign In"}
          </Button>
    
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSingup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Form;
