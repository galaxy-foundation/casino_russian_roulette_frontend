import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import { withStyles } from "@material-ui/core/styles";

import "./login.css";

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

class Formlogin extends Component {
  constructor() {
    super();
    this.state = {
      isEye: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      document.getElementById("SignDialogClosebtn").click();
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string()
            .max(255)
            .min(8, "Password is too short - should be 8 chars minimum")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "That password is too weak. Please use a mix of letters, numbers and symbols"
            )
            .required("Password is required"),
        })}
        onSubmit={(e) => {
          this.setState({
            isWriteErr: false,
          });
          const userData = {
            email: e.email,
            password: e.password,
          };
          this.props.loginUser(userData);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange = () => {
            alert("ddd");
          },
          handleSubmit,
          isSubmitting,
          touched,
          values,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <CssTextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <CssTextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={this.state.isEye ? "password" : "text"}
              value={values.password}
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

            <Box sx={{ py: 2 }}>
              <Button
                className={!isValid ? "logindisablebtn" : "loginenablebtn"}
                color="primary"
                // disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Play now
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    );
  }
}

Formlogin.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Formlogin));
