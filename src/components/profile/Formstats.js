import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "var(--mainclr)",
      fontSize: "12px !important",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--mainclr)",
      fontSize: "12px !important",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      fontSize: "12px !important",
    },
    "& .MuiFormHelperText-root": {
      fontSize: "10px !important",
    },
    "& legend": {
      width: "fit-content !important",
    },
    "& legend > span": {
      fontSize: "8px !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(163,160,155)",
        fontSize: "12px !important",
      },
      "&:hover fieldset": {
        borderColor: "var(--mainshwclr)",
        fontSize: "12px !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--mainclr)",
        fontSize: "12px !important",
      },
    },
    "& .MuiInputLabel-outlined": {
      color: "rgb(163,160,155)",
      fontSize: "12px !important",
    },
  },
})(TextField);

class Formstats extends Component {
  constructor() {
    super();
    this.state = {
      isEye: true,
    };
  }
  render() {
    return (
      <Formik
        initialValues={{
          cur_password: "",
          qr_code: "",
        }}
        validationSchema={Yup.object().shape({
          cur_password: Yup.string()
            .max(255)
            .min(8, "Password is too short - should be 8 chars minimum")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "That password is too weak. Please use a mix of letters, numbers and symbols"
            )
            .required("Password is required"),
          qr_code: Yup.string().max(255).required("Code is required"),
        })}
        onSubmit={(e) => {
          this.setState({
            isWriteErr: false,
          });
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <CssTextField
              error={Boolean(touched.cur_password && errors.cur_password)}
              fullWidth
              helperText={touched.cur_password && errors.cur_password}
              label="Enter Current Password"
              margin="normal"
              name="cur_password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={this.state.isEye ? "password" : "text"}
              value={values.cur_password}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <i
                    className={
                      this.state.isEye
                        ? "fa fa-eye eyeicons"
                        : "fa fa-eye-slash eyeicons"
                    }
                    onClick={() => {
                      this.setState({
                        isEye: !this.state.isEye,
                      });
                    }}
                  ></i>
                ),
              }}
            />

            <CssTextField
              error={Boolean(touched.qr_code && errors.qr_code)}
              fullWidth
              helperText={touched.qr_code && errors.qr_code}
              label="Enter 2FA Code"
              margin="normal"
              name="qr_code"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.qr_code}
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                className={
                  !isValid ? "statscodedisablebtn" : "statscodeenablebtn"
                }
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={() => {
                  console.log(isValid);
                }}
              >
                Enable 2fa
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    );
  }
}

export default Formstats;
