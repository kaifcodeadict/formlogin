import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";

import {Visibility} from "@mui/icons-material";
import {VisibilityOff} from "@mui/icons-material";

function Input({
  name,
  half,
  handleChange,
  lable,
  autoFocus,
  type,
  handleShowPassword,
  placeHolder,
}) {
  return (
    <>
      <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
          name={name}
          onChange={handleChange}
          placeholder={placeHolder}
          autoComplete={"on"}
          variant="outlined"
          required
          fullWidth
          lale={lable}
          autoFocus={autoFocus}
          type={type}
          InputProps={
            name === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {type === "password" ? (
                          <VisibilityOff />
                          ) : (
                            <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      </Grid>
    </>
  );
}

export default Input;
